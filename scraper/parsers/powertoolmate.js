/**
 * Powertool Mate parser
 *
 * Search uses /search.php?q=... which returns server-rendered product cards.
 * Product URLs follow: /power-tools/milwaukee/.../*.htm
 */

const cheerio = require('cheerio');

const RETAILER_NAME = 'Powertool Mate';
const BASE_URL = 'https://www.powertoolmate.co.uk';

/**
 * Normalize a model string for comparison.
 * Strips battery/kit suffixes (-0, -0X, -502X, etc.), removes non-alphanumeric, lowercases.
 */
function normalizeModel(model) {
  let s = model.replace(/-\d+[A-Z]*$/i, ''); // strip battery/kit suffix
  return s.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

/**
 * Check if a normalized model appears in text with boundary semantics.
 * Prevents prefix matches (e.g. FHIR14 matching FHIR14LR).
 */
function modelMatchesText(normalizedModel, text) {
  const normalizedText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const escaped = normalizedModel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(escaped + '(?![a-z])');
  return re.test(normalizedText);
}

/**
 * Keywords in title/URL that indicate an accessory or bundle rather than the tool itself.
 */
const ACCESSORY_KEYWORDS = [
  'blade', 'disc', 'wheel', 'rail', 'guide', 'joining',
  'rack', 'mount', 'bundle',
  'pack of', 'twin pack', 'triple pack', 'double pack',
];

/** Word-boundary keywords — must appear as whole words (checked via regex). */
const ACCESSORY_KW_WORD = [
  /\bkit\b/i,
  /\bcase\b/i,
  /\bwith\b/i,
];

/**
 * Common words after M12/M18 that are NOT model codes.
 */
const NON_MODEL_WORDS = [
  'fuel', 'brushless', 'cordless', 'battery', 'batteries',
  'volt', 'lithium', 'ion', 'redlithium', 'series',
  'drill', 'driver', 'impact', 'combi', 'plunge', 'vacuum', 'saw',
  'grinder', 'sander', 'planer', 'router', 'nailer', 'stapler',
  'light', 'radio', 'charger', 'body', 'bare', 'only', 'tool', 'tools',
];

/**
 * Check if a candidate result looks like an accessory or bundle rather than the tool itself.
 * Uses only the product slug (last URL segment) to avoid false matches on category paths
 * (e.g. "cordless-grinders-disc-cutters" in the path should not trigger "disc").
 */
function isAccessoryOrBundle(candidateName, candidateUrl, normalizedTarget) {
  // Extract product slug (last path segment) — avoids category-path false positives
  const slug = candidateUrl.split('/').filter(Boolean).pop() || candidateUrl;
  const text = (candidateName + ' ' + slug).toLowerCase().replace(/[-_]/g, ' ');

  // Check for accessory/bundle keywords (substring match)
  for (const kw of ACCESSORY_KEYWORDS) {
    if (text.includes(kw)) return true;
  }
  // Check word-boundary keywords
  for (const re of ACCESSORY_KW_WORD) {
    if (re.test(text)) return true;
  }

  // Check for a foreign Milwaukee model code (indicates a multi-tool bundle)
  const re = /\bm(12|18)\s*([a-z][a-z0-9]{1,15})\b/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    if (NON_MODEL_WORDS.includes(match[2])) continue;
    const foundModel = 'm' + match[1] + match[2];
    if (foundModel === normalizedTarget) continue;
    if (foundModel.startsWith(normalizedTarget) || normalizedTarget.startsWith(foundModel)) continue;
    return true;
  }

  return false;
}

/**
 * Search Powertool Mate for a Milwaukee model.
 * Validates that the result actually matches the model number.
 * Returns a product URL or null.
 */
async function findUrl(modelNumber, fetchPage, fetchPageWithBrowser) {
  const normalizedModel = normalizeModel(modelNumber);
  const query = encodeURIComponent(modelNumber);
  const searchUrl = `${BASE_URL}/search.php?q=${query}`;

  try {
    const { html, status } = await fetchPage(searchUrl);
    if (status !== 200) return null;

    const $ = cheerio.load(html);

    // Product cards use .product-image__link with .htm URLs
    // Also grab the product name from the img alt text
    const candidates = [];
    $('a.product-image__link[href$=".htm"]').each((_, el) => {
      const href = $(el).attr('href');
      if (!href) return;
      const img = $(el).find('img');
      const name = (img.attr('alt') || img.attr('title') || '').trim();
      candidates.push({ href, name });
    });

    if (candidates.length === 0) return null;

    // Validate each candidate against the model number
    for (const { href, name } of candidates) {
      if (
        modelMatchesText(normalizedModel, name) ||
        modelMatchesText(normalizedModel, href)
      ) {
        // Reject accessories and bundles
        if (isAccessoryOrBundle(name, href, normalizedModel)) {
          console.log(`[PowertoolMate] "${modelNumber}": skipping accessory/bundle "${name}"`);
          continue;
        }
        const fullUrl = href.startsWith('http') ? href : `${BASE_URL}${href}`;
        console.log(`[PowertoolMate] "${modelNumber}" → validated: ${fullUrl}`);
        return fullUrl;
      }
    }

    if (candidates.length > 0) {
      console.log(`[PowertoolMate] "${modelNumber}": ${candidates.length} results, none matched model`);
    }
    return null;
  } catch (err) {
    console.error(`[PowertoolMate] Search failed for "${modelNumber}":`, err.message);
    return null;
  }
}

function parse(html, url) {
  try {
    const $ = cheerio.load(html);

    let price = null;

    // Try JSON-LD structured data first
    $('script[type="application/ld+json"]').each((_, el) => {
      if (price !== null) return;
      try {
        const data = JSON.parse($(el).html());
        const items = Array.isArray(data['@graph']) ? data['@graph'] : [data];
        for (const item of items) {
          if (item['@type'] === 'Product' && item.offers) {
            const offers = Array.isArray(item.offers) ? item.offers : [item.offers];
            for (const offer of offers) {
              if (offer.price) { price = parseFloat(offer.price); break; }
            }
          }
        }
      } catch {}
    });

    if (price === null) {
      const priceSelectors = [
        '[itemprop="price"]',
        '[data-product-price]',
        '.price__current',
        '.product__price',
        '.price',
      ];
      for (const sel of priceSelectors) {
        const el = $(sel).first();
        if (el.length) {
          const content = el.attr('content') || el.attr('data-product-price');
          if (content) {
            let num = parseFloat(content.replace(/[£,]/g, ''));
            if (!isNaN(num)) {
              if (num > 10000) num = num / 100;
              if (num > 0 && num < 10000) { price = num; break; }
            }
          }
          const text = el.text().replace(/[£,\s]/g, '').trim();
          const num = parseFloat(text);
          if (!isNaN(num) && num > 0 && num < 10000) { price = num; break; }
        }
      }
    }

    let inStock = true;
    const soldOut = html.includes('sold-out') || html.includes('Sold Out') || html.includes('Out of Stock');
    if (soldOut) inStock = false;

    const name = $('h1').first().text().trim() || '';

    if (price === null) return null;
    if (price <= 0 || price > 99999) return null;

    return { price, inStock, name, retailer: RETAILER_NAME, url };
  } catch (err) {
    console.error(`[PowertoolMate] Parse error for ${url}:`, err.message);
    return null;
  }
}

module.exports = { parse, findUrl, retailerName: RETAILER_NAME, _test: { normalizeModel, modelMatchesText, isAccessoryOrBundle } };
