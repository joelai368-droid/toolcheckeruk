/**
 * FFX Tools parser
 *
 * FFX has merged into ITS (its.co.uk). All ffx.co.uk URLs redirect there.
 * We use the SearchSpring API (shared with ITS) to find products, but keep
 * this as a separate retailer entry so FFX prices show independently.
 *
 * Product pages are on its.co.uk — the parse() function handles that domain.
 */

const cheerio = require('cheerio');

const RETAILER_NAME = 'FFX Tools';
const SEARCHSPRING_SITE_ID = 'xjcgg3';

/**
 * Normalize a model string for comparison.
 * Strips battery/kit suffixes (-0, -0X, -502X, etc.), removes non-alphanumeric, lowercases.
 * E.g. "M18 FPD3-0" → "m18fpd3", "M18 ONEFSZ-0X" → "m18onefsz"
 */
function normalizeModel(model) {
  let s = model.replace(/-\d+[A-Z]*$/i, ''); // strip battery/kit suffix
  return s.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

/**
 * Check if a normalized model appears in text with boundary semantics.
 * Prevents prefix matches (e.g. FHIR14 matching FHIR14LR) by requiring
 * the model NOT be followed by a letter.
 */
function modelMatchesText(normalizedModel, text) {
  const normalizedText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const escaped = normalizedModel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(escaped + '(?![a-z])');
  return re.test(normalizedText);
}

/**
 * Search for a Milwaukee model via the SearchSpring API (used by ITS/FFX).
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
      console.log(`[FFX] "${modelNumber}": ${total} results (too broad), skipping`);
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
        const fullUrl = url.startsWith('http') ? url : `https://its.co.uk${url}`;
        console.log(`[FFX] "${modelNumber}" → validated: ${fullUrl}`);
        return fullUrl;
      }
    }

    if (results.length > 0) {
      console.log(`[FFX] "${modelNumber}": ${results.length} results, none matched model`);
    }
    return null;
  } catch (err) {
    console.error(`[FFX] Search failed for "${modelNumber}":`, err.message);
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
              if (offer.price) {
                price = parseFloat(offer.price);
                break;
              }
            }
          }
        }
      } catch {}
    });

    if (price === null) {
      const priceSelectors = [
        '.price',
        '.product-price',
        '[itemprop="price"]',
        '.special-price .price',
        '#product-price-amount',
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
    const stockText = $('[itemprop="availability"], .stock, .availability').first().text().toLowerCase();
    const stockAttr = $('[itemprop="availability"]').first().attr('content') || '';

    if (stockAttr.includes('InStock') || stockText.includes('in stock')) {
      inStock = true;
    } else if (stockAttr.includes('OutOfStock') || stockText.includes('out of stock')) {
      inStock = false;
    } else {
      inStock = price !== null;
    }

    const name = $('h1').first().text().trim() || '';

    if (price === null) return null;
    if (price <= 0 || price > 99999) return null;

    return { price, inStock, name, retailer: RETAILER_NAME, url };
  } catch (err) {
    console.error(`[FFX] Parse error for ${url}:`, err.message);
    return null;
  }
}

module.exports = { parse, findUrl, retailerName: RETAILER_NAME, _test: { normalizeModel, modelMatchesText } };
