/**
 * ITS (Industrial & Trade Supplies) parser
 *
 * URL discovery uses the SearchSpring JSON API (no Puppeteer needed).
 * ITS uses the SearchSpring site (xjcgg3) on its.co.uk.
 */

const cheerio = require('cheerio');

const RETAILER_NAME = 'ITS';
const SEARCHSPRING_SITE_ID = 'xjcgg3';

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
 * Checks for negative keywords and foreign Milwaukee model codes.
 */
function isAccessoryOrBundle(candidateName, candidateUrl, normalizedTarget) {
  const text = (candidateName + ' ' + candidateUrl).toLowerCase().replace(/[-_]/g, ' ');

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
 * Search for a Milwaukee model via the SearchSpring API.
 * Validates that the top result actually matches the model number.
 * Returns an its.co.uk product URL or null.
 */
async function findUrl(modelNumber, fetchPage) {
  const normalizedModel = normalizeModel(modelNumber);
  const query = encodeURIComponent(modelNumber);
  const apiUrl = `https://${SEARCHSPRING_SITE_ID}.a.searchspring.io/api/search/search.json`
    + `?siteId=${SEARCHSPRING_SITE_ID}&q=${query}&resultsFormat=native&resultsPerPage=5`;

  try {
    const { html, status } = await fetchPage(apiUrl, {
      headers: { 'Accept': 'application/json' },
    });
    if (status !== 200) return null;

    const data = JSON.parse(html);
    const results = data.results;
    if (!results || results.length === 0) return null;

    // If the search returned the full catalog (no real match), reject
    const total = data.pagination && data.pagination.totalResults;
    if (total > 50) {
      console.log(`[ITS] "${modelNumber}": ${total} results (too broad), skipping`);
      return null;
    }

    // Validate each result against the model number
    for (const r of results) {
      const name = r.name || '';
      const url = r.url || '';
      const sku = r.sku || '';

      if (
        modelMatchesText(normalizedModel, name) ||
        modelMatchesText(normalizedModel, url) ||
        modelMatchesText(normalizedModel, sku)
      ) {
        // Reject accessories and bundles
        if (isAccessoryOrBundle(name, url, normalizedModel)) {
          console.log(`[ITS] "${modelNumber}": skipping accessory/bundle "${name}"`);
          continue;
        }
        const fullUrl = url.startsWith('http') ? url : `https://its.co.uk${url}`;
        console.log(`[ITS] "${modelNumber}" → validated: ${fullUrl}`);
        return fullUrl;
      }
    }

    if (results.length > 0) {
      console.log(`[ITS] "${modelNumber}": ${results.length} results, none matched model`);
    }
    return null;
  } catch (err) {
    console.error(`[ITS] Search failed for "${modelNumber}":`, err.message);
    return null;
  }
}

function parse(html, url) {
  try {
    const $ = cheerio.load(html);

    let price = null;

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
        '.price',
        '.product-price',
        '#product-price',
      ];
      for (const sel of priceSelectors) {
        const el = $(sel).first();
        if (el.length) {
          const content = el.attr('content');
          if (content) {
            const num = parseFloat(content);
            if (!isNaN(num) && num > 0) { price = num; break; }
          }
          const text = el.text().replace(/[£,\s]/g, '').trim();
          const num = parseFloat(text);
          if (!isNaN(num) && num > 0 && num < 10000) { price = num; break; }
        }
      }
    }

    let inStock = false;
    const stockAttr = $('[itemprop="availability"]').first().attr('content') || '';
    const stockText = $('.stock, .availability').first().text().toLowerCase();

    if (stockAttr.includes('InStock') || stockText.includes('in stock')) {
      inStock = true;
    } else {
      inStock = price !== null;
    }

    const name = $('h1').first().text().trim() || '';

    if (price === null) return null;
    if (price <= 0 || price > 99999) return null;

    return { price, inStock, name, retailer: RETAILER_NAME, url };
  } catch (err) {
    console.error(`[ITS] Parse error for ${url}:`, err.message);
    return null;
  }
}

module.exports = { parse, findUrl, retailerName: RETAILER_NAME, _test: { normalizeModel, modelMatchesText, isAccessoryOrBundle } };
