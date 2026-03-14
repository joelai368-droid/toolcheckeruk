/**
 * Big Red Power Tools parser (Magento / Porto theme)
 *
 * Notes:
 * - Pages typically contain BOTH inc/ex VAT prices, but the Magento product price markup
 *   exposes a single numeric price at [itemprop="price"] (inc VAT on observed pages).
 * - Stock status is available via schema.org availability and visible "In Stock" text.
 */

const cheerio = require('cheerio');

const RETAILER_NAME = 'Big Red Power Tools';

function parsePrice($) {
  // Primary: schema.org price
  const el = $('[itemprop="price"]').first();
  if (el.length) {
    const content = el.attr('content');
    if (content) {
      const num = parseFloat(String(content).replace(/,/g, ''));
      if (!isNaN(num) && num > 0 && num < 100000) return num;
    }
    const txt = el.text().replace(/[£,\s]/g, '').trim();
    const num = parseFloat(txt);
    if (!isNaN(num) && num > 0 && num < 100000) return num;
  }

  // Fallback: first "£xx.xx" on page (can be noisy; keep conservative)
  const htmlText = $.root().text();
  const m = htmlText.match(/£\s*([0-9]+\.[0-9]{2})/);
  if (m) {
    const num = parseFloat(m[1]);
    if (!isNaN(num) && num > 0 && num < 100000) return num;
  }

  return null;
}

function parseStock($, price) {
  const availHref = $('[itemprop="availability"]').first().attr('href') || '';
  const availContent = $('[itemprop="availability"]').first().attr('content') || '';
  const stockText = $('.stock').first().text().toLowerCase();

  if (
    availHref.includes('InStock') ||
    availContent.includes('InStock') ||
    stockText.includes('in stock')
  ) {
    return true;
  }

  if (
    availHref.includes('OutOfStock') ||
    availContent.includes('OutOfStock') ||
    stockText.includes('out of stock')
  ) {
    return false;
  }

  // Default behaviour consistent with other parsers: if we have a price but no stock signal,
  // assume in-stock.
  return price !== null;
}

function parse(html, url) {
  try {
    const $ = cheerio.load(html);

    const name = $('h1').first().text().trim() || '';
    const price = parsePrice($);
    if (price === null) return null;

    const inStock = parseStock($, price);

    if (price <= 0 || price > 99999) return null;

    return { price, inStock, name, retailer: RETAILER_NAME, url };
  } catch (err) {
    console.error(`[${RETAILER_NAME}] Parse error for ${url}:`, err.message);
    return null;
  }
}

module.exports = { parse, retailerName: RETAILER_NAME };
