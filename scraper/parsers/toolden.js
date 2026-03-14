/**
 * Toolden parser (BigCommerce)
 *
 * Extracts:
 * - product title
 * - price inc VAT (preferred)
 * - price ex VAT (if available)
 * - stock/availability text
 * - canonical product URL
 */

const cheerio = require('cheerio');

const RETAILER_NAME = 'Toolden';

function toNumber(value) {
  if (value === null || value === undefined) return null;
  const num = parseFloat(String(value).replace(/[£,\s]/g, ''));
  return Number.isFinite(num) && num > 0 && num < 100000 ? num : null;
}

function parseBCData($) {
  const scripts = $('script').toArray();

  for (const script of scripts) {
    const raw = $(script).html() || '';
    if (!raw.includes('var BCData') || !raw.includes('product_attributes')) continue;

    const match = raw.match(/var\s+BCData\s*=\s*(\{[\s\S]*?\});/);
    if (!match) continue;

    try {
      return JSON.parse(match[1]);
    } catch {
      // keep looking
    }
  }

  return null;
}

function parseMetaPrices($) {
  const values = [];
  $('meta[property="product:price:amount"]').each((_, el) => {
    const v = toNumber($(el).attr('content'));
    if (v !== null) values.push(v);
  });

  // Observed Toolden order is [inc, ex], but keep this defensive:
  // if two prices exist, treat the larger as inc VAT and smaller as ex VAT.
  if (values.length >= 2) {
    const max = Math.max(...values);
    const min = Math.min(...values);
    return { incVat: max, exVat: min };
  }

  if (values.length === 1) {
    return { incVat: values[0], exVat: null };
  }

  return { incVat: null, exVat: null };
}

function parse(html, url) {
  try {
    const $ = cheerio.load(html);

    const title = $('h1').first().text().trim() || $('meta[property="og:title"]').attr('content') || '';
    const canonicalUrl = $('link[rel="canonical"]').attr('href') || $('meta[property="og:url"]').attr('content') || url;

    let priceIncVat = null;
    let priceExVat = null;
    let stockText = '';

    const bcData = parseBCData($);
    const priceObj = bcData?.product_attributes?.price;

    if (priceObj) {
      priceIncVat = toNumber(priceObj.with_tax?.value) ?? toNumber(priceObj.with_tax?.formatted);
      priceExVat = toNumber(priceObj.without_tax?.value) ?? toNumber(priceObj.without_tax?.formatted);
    }

    stockText =
      (bcData?.product_attributes?.stock_message || '').trim() ||
      $('.stock').first().text().trim() ||
      $('[itemprop="availability"]').first().text().trim() ||
      '';

    // Fallback to OpenGraph product price tags
    if (priceIncVat === null && priceExVat === null) {
      const metaPrices = parseMetaPrices($);
      priceIncVat = metaPrices.incVat;
      priceExVat = metaPrices.exVat;
    }

    // Final fallback if only one generic visible price exists
    if (priceIncVat === null && priceExVat === null) {
      const visible = toNumber($('.price, .productView-price, [data-product-price-with-tax]').first().text());
      if (visible !== null) priceIncVat = visible;
    }

    const chosenPrice = priceIncVat ?? priceExVat;
    if (chosenPrice === null) return null;

    const availabilityText = stockText.toLowerCase();
    let inStock = false;
    if (availabilityText.includes('in stock') || availabilityText.includes('available')) {
      inStock = true;
    } else if (availabilityText.includes('out of stock') || availabilityText.includes('unavailable')) {
      inStock = false;
    } else {
      inStock = chosenPrice !== null;
    }

    return {
      price: chosenPrice,
      priceIncVat,
      priceExVat,
      inStock,
      stockText,
      name: title,
      canonicalUrl,
      retailer: RETAILER_NAME,
      url,
    };
  } catch (err) {
    console.error(`[${RETAILER_NAME}] Parse error for ${url}:`, err.message);
    return null;
  }
}

async function findUrl() {
  // URL discovery for Toolden isn't required right now because mappings already include Toolden URLs.
  // Return null to gracefully skip discovery when requested.
  return null;
}

module.exports = { parse, findUrl, retailerName: RETAILER_NAME, _test: { parseBCData, parseMetaPrices, toNumber } };
