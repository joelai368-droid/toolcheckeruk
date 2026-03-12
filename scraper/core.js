/**
 * Scraper core — rate-limited HTTP client with user-agent rotation
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
];

// Per-retailer rate limiter: enforces min 3s between requests to same host
const lastRequestTime = {};

function randomUserAgent() {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function rateLimit(hostname, minGapMs = 3000) {
  const now = Date.now();
  const last = lastRequestTime[hostname] || 0;
  const gap = now - last;
  if (gap < minGapMs) {
    await sleep(minGapMs - gap + Math.random() * 500); // add small jitter
  }
  lastRequestTime[hostname] = Date.now();
}

/**
 * Fetch a URL with rate limiting and realistic headers.
 * Returns { html, status, url } or throws on network error.
 */
async function fetchPage(url, options = {}) {
  const parsed = new URL(url);
  await rateLimit(parsed.hostname, options.minGapMs || 3000);

  return new Promise((resolve, reject) => {
    const proto = parsed.protocol === 'https:' ? https : http;
    const reqOptions = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: 'GET',
      headers: {
        'User-Agent': options.userAgent || randomUserAgent(),
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-GB,en;q=0.9',
        'Accept-Encoding': 'identity',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        ...options.headers,
      },
      timeout: options.timeout || 15000,
    };

    const req = proto.request(reqOptions, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = new URL(res.headers.location, url).href;
        resolve(fetchPage(redirectUrl, options));
        return;
      }

      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({ html: data, status: res.statusCode, url });
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });

    req.end();
  });
}

/**
 * Check robots.txt for a retailer. Caches result per hostname.
 * Returns true if scraping is allowed for the path.
 */
const robotsCache = {};

async function checkRobots(url) {
  const parsed = new URL(url);
  const hostname = parsed.hostname;

  if (robotsCache[hostname] === undefined) {
    try {
      const robotsUrl = `${parsed.protocol}//${hostname}/robots.txt`;
      const result = await fetchPage(robotsUrl, { minGapMs: 0 });
      robotsCache[hostname] = result.html;
    } catch {
      robotsCache[hostname] = ''; // treat as no restrictions if unreachable
    }
  }

  const robotsTxt = robotsCache[hostname];
  if (!robotsTxt) return true;

  // Basic check: look for Disallow rules for common scrapers
  // This is a simplified check - only blocks explicit paths
  const lines = robotsTxt.split('\n');
  let inRelevantBlock = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.toLowerCase().startsWith('user-agent:')) {
      const agent = trimmed.split(':')[1].trim();
      inRelevantBlock = agent === '*' || agent.toLowerCase().includes('bot');
    }
    if (inRelevantBlock && trimmed.toLowerCase().startsWith('disallow:')) {
      const disallowedPath = trimmed.split(':')[1].trim();
      if (disallowedPath && parsed.pathname.startsWith(disallowedPath)) {
        return false;
      }
    }
  }
  return true;
}

let _browser = null;

async function getBrowser() {
  if (!_browser) {
    const puppeteer = require('puppeteer');
    // Stub libasound.so.2 if not installed (needed by Chrome on minimal systems)
    if (!process.env.LD_PRELOAD && require('fs').existsSync('/tmp/libasound.so.2')) {
      process.env.LD_PRELOAD = '/tmp/libasound.so.2';
    }
    _browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-audio-output',
        '--alsa-output-device=null',
        '--use-fake-device-for-media-stream',
        '--use-fake-ui-for-media-stream',
      ],
    });
  }
  return _browser;
}

async function closeBrowser() {
  if (_browser) {
    await _browser.close();
    _browser = null;
  }
}

/**
 * Fetch a URL using a headless browser (for JS-rendered pages).
 * Returns { html, status, url }
 */
async function fetchPageWithBrowser(url, options = {}) {
  const parsed = new URL(url);
  await rateLimit(parsed.hostname, options.minGapMs || 3000);

  const browser = await getBrowser();
  const page = await browser.newPage();
  try {
    await page.setUserAgent(options.userAgent || randomUserAgent());
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-GB,en;q=0.9' });

    const response = await page.goto(url, {
      waitUntil: options.waitUntil || 'networkidle2',
      timeout: options.timeout || 20000,
    });

    if (options.waitForSelector) {
      await page.waitForSelector(options.waitForSelector, { timeout: 10000 }).catch(() => {});
    }

    const html = await page.content();
    const status = response ? response.status() : 200;
    const finalUrl = page.url();
    return { html, status, url: finalUrl };
  } finally {
    await page.close();
  }
}

module.exports = { fetchPage, fetchPageWithBrowser, closeBrowser, checkRobots, sleep, randomUserAgent };
