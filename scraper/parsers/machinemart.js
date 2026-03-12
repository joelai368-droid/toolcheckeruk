/**
 * Machine Mart parser
 */

const cheerio = require('cheerio');

const RETAILER_NAME = 'Machine Mart';

async function findUrl(modelNumber, fetchPage) {
  const query = encodeURIComponent(modelNumber);
  const searchUrl = `https://www.machinemart.co.uk/search/?q=${query}`;

  try {
    const { html, status } = await fetchPage(searchUrl);
    if (status !== 200) return null;

    const $ = cheerio.load(html);

    let found = null;
    $('a[href*="/shop/product/"]').each((_, el) => {
      if (found) return;
      const href = $(el).attr('href');
      if (href) found = href.startsWith('http') ? href : `https://www.machinemart.co.uk${href}`;
    });

    if (!found) {
      $('a[href]').each((_, el) => {
        if (found) return;
        const href = $(el).attr('href') || '';
        if (href.includes('/shop/') && href.includes('milwaukee')) {
          found = href.startsWith('http') ? href : `https://www.machinemart.co.uk${href}`;
        }
      });
    }

    return found;
  } catch (err) {
    console.error(`[MachineMart] Search failed for "${modelNumber}":`, err.message);
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
        '.price-box .price',
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
    const stockText = $('.stock, .availability, .in-stock').first().text().toLowerCase();

    if (stockAttr.includes('InStock') || stockText.includes('in stock')) {
      inStock = true;
    } else if (stockAttr.includes('OutOfStock')) {
      inStock = false;
    } else {
      inStock = price !== null;
    }

    const name = $('h1').first().text().trim() || '';

    if (price === null) return null;
    if (price <= 0 || price > 99999) return null;

    return { price, inStock, name, retailer: RETAILER_NAME, url };
  } catch (err) {
    console.error(`[MachineMart] Parse error for ${url}:`, err.message);
    return null;
  }
}

module.exports = { parse, findUrl, retailerName: RETAILER_NAME };
