/**
 * Screwfix parser
 * Extracts price, stock, and product name from a Screwfix product page.
 */

const cheerio = require('cheerio');

const RETAILER_NAME = 'Screwfix';

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
 * Search Screwfix for a model number and return the product page URL.
 * Validates that the result actually contains the model number to prevent wrong matches.
 */
async function findUrl(modelNumber, fetchPage) {
  const query = encodeURIComponent(modelNumber);
  const searchUrl = `https://www.screwfix.com/search?search=${query}`;
  const normalizedModel = normalizeModel(modelNumber);

  try {
    const { html, status } = await fetchPage(searchUrl);
    if (status !== 200) return null;

    const $ = cheerio.load(html);

    // Collect candidate product links from search results
    const selectors = [
      'ul.products-wrapper li a[href*="/p/"]',
      '.product-list-item a[href*="/p/"]',
      'a[data-product-code]',
      '.product-listing a[href*="/p/"]',
    ];

    const candidates = [];
    const seen = new Set();

    for (const selector of selectors) {
      $(selector).each((_, el) => {
        const href = $(el).attr('href');
        if (href && !seen.has(href)) {
          seen.add(href);
          candidates.push({ href, text: $(el).text().trim() });
        }
      });
    }

    // Fallback: any /p/ link
    if (candidates.length === 0) {
      $('a[href*="/p/"]').each((_, el) => {
        const href = $(el).attr('href');
        if (href && href.includes('/p/') && !seen.has(href)) {
          seen.add(href);
          candidates.push({ href, text: $(el).text().trim() });
        }
      });
    }

    // Validate each candidate against the model number
    for (const { href, text } of candidates) {
      if (modelMatchesText(normalizedModel, href) || modelMatchesText(normalizedModel, text)) {
        const fullUrl = href.startsWith('http') ? href : `https://www.screwfix.com${href}`;
        console.log(`[Screwfix] "${modelNumber}" → validated: ${fullUrl}`);
        return fullUrl;
      }
    }

    if (candidates.length > 0) {
      console.log(`[Screwfix] "${modelNumber}": ${candidates.length} results, none matched model`);
    }
    return null;
  } catch (err) {
    console.error(`[Screwfix] Search failed for "${modelNumber}":`, err.message);
    return null;
  }
}

/**
 * Parse a Screwfix product page.
 * Returns { price, inStock, name } or null if parsing fails.
 */
function parse(html, url) {
  try {
    const $ = cheerio.load(html);

    // Price: Screwfix shows price in span with class like "price" or data attributes
    let price = null;

    // Try JSON-LD structured data first (most reliable)
    $('script[type="application/ld+json"]').each((_, el) => {
      if (price !== null) return;
      try {
        const data = JSON.parse($(el).html());
        // Handle @graph arrays
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

    // Fallback: try common price selectors
    if (price === null) {
      const priceSelectors = [
        '[data-testid="price"]',
        '.price',
        '.product-price',
        'span.price',
        '[itemprop="price"]',
        '.pdp-price',
        '.buy-box__price',
      ];
      for (const sel of priceSelectors) {
        const el = $(sel).first();
        if (el.length) {
          const text = el.text().replace(/[£,\s]/g, '').trim();
          const num = parseFloat(text);
          if (!isNaN(num) && num > 0 && num < 10000) {
            price = num;
            break;
          }
        }
      }
    }

    // Stock status
    let inStock = false;
    const stockText = $('[data-testid="stock-status"], .stock-status, .availability, [itemprop="availability"]')
      .first().text().toLowerCase();

    if (stockText.includes('in stock') || stockText.includes('available')) {
      inStock = true;
    } else if (stockText.includes('out of stock') || stockText.includes('unavailable')) {
      inStock = false;
    } else {
      // If we got a price, assume in stock
      inStock = price !== null;
    }

    // Product name
    const name = $('h1').first().text().trim() ||
      $('[itemprop="name"]').first().text().trim() || '';

    if (price === null) return null;

    // Sanity check price
    if (price <= 0 || price > 99999) return null;

    return { price, inStock, name, retailer: RETAILER_NAME, url };
  } catch (err) {
    console.error(`[Screwfix] Parse error for ${url}:`, err.message);
    return null;
  }
}

module.exports = { parse, findUrl, retailerName: RETAILER_NAME, _test: { normalizeModel, modelMatchesText } };
