/**
 * Toolstation parser
 */

const cheerio = require('cheerio');

const RETAILER_NAME = 'Toolstation';

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
 * Extract spec tokens from tool name and model number for keyword-fallback matching.
 * Returns array of { type, value } objects used for scoring candidates.
 */
function extractSpecTokens(toolName, modelNumber) {
  const tokens = [];
  const nameLower = (toolName || '').toLowerCase();

  // Platform: M18, M12, M12-18
  const platformMatch = modelNumber.match(/^(M\d+(?:-\d+)?)/i);
  if (platformMatch) {
    tokens.push({ type: 'platform', value: platformMatch[1].toLowerCase() });
  }

  // Ah capacity (e.g. "5.0Ah")
  const ahMatch = toolName.match(/(\d+(?:\.\d+)?)\s*Ah/i);
  if (ahMatch) {
    tokens.push({ type: 'ah', value: ahMatch[1] });
  }

  // mm spec (e.g. "305mm")
  const mmMatch = toolName.match(/(\d+)\s*mm\b/i);
  if (mmMatch) {
    tokens.push({ type: 'mm', value: mmMatch[1] });
  }

  // Tool type
  if (/batter/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'battery' });
  else if (/charger/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'charger' });
  else if (/mitre\s*saw/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'mitre saw' });
  else if (/circular\s*saw/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'circular saw' });
  else if (/belt\s*sander/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'belt sander' });
  else if (/vacuum|wet\s*dry\s*vac/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'vacuum' });
  else if (/trimmer/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'trimmer' });
  else if (/radio|dab/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'radio' });
  else if (/speaker|bluetooth/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'speaker' });
  else if (/area\s*light|work\s*light|lamp|light/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'light' });
  else if (/caulk|sealant/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'caulking gun' });
  else if (/pump/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'pump' });
  else if (/threaded\s*rod|rod\s*cutter/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'rod cutter' });
  else if (/sds\s*max/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'sds max' });
  else if (/sds\s*plus|sds\b/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'sds plus' });
  else if (/impact\s*wrench/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'impact wrench' });
  else if (/planer/i.test(nameLower)) tokens.push({ type: 'tooltype', value: 'planer' });

  // Qualifiers (important for distinguishing charger variants and battery types)
  const qualifiers = ['high output', 'fast', 'dual', 'super', 'compact', 'sequential'];
  for (const q of qualifiers) {
    if (nameLower.includes(q)) tokens.push({ type: 'qualifier', value: q });
  }

  return tokens;
}

/**
 * Determine if this tool qualifies for keyword-fallback search.
 * Only batteries, chargers, or tools with strong spec tokens (Ah, mm) qualify,
 * AND the model code must be short/weak (unlikely to appear in Toolstation listings).
 */
function shouldTryKeywordFallback(modelNumber, entry) {
  const name = (entry.name || '').toLowerCase();
  const slug = (entry.slug || '').toLowerCase();

  // Must be a battery, charger, or have strong spec tokens in the name
  const isBatteryOrCharger = /batter|charger/.test(name) || /batter|charger/.test(slug);
  const hasStrongSpecs = /\d+(\.\d+)?\s*ah\b/i.test(entry.name || '') || /\d+\s*mm\b/i.test(entry.name || '');
  if (!isBatteryOrCharger && !hasStrongSpecs) return false;

  // Model must be "weak" — strip platform prefix and battery/kit suffix, check remaining length
  const corePart = modelNumber.replace(/^M\d+(-\d+)?\s*/i, '').replace(/-\d+[A-Z]*$/i, '').trim();
  // Short core like "B2", "HB8", "FC", "DFC", "C", "SC", "STARTER", "FMS254", "FMS305", "SMS216"
  return corePart.length <= 7;
}

/**
 * Build a keyword search query from tool name/specs.
 * E.g. "M18 5.0Ah Battery" → "Milwaukee M18 5.0Ah battery"
 *      "M18 FUEL 305mm Mitre Saw" → "Milwaukee M18 305mm mitre saw"
 */
function buildKeywordQuery(modelNumber, entry) {
  const tokens = extractSpecTokens(entry.name || '', modelNumber);

  const parts = [entry.brand || 'Milwaukee'];

  const platform = tokens.find(t => t.type === 'platform');
  if (platform) parts.push(platform.value.toUpperCase());

  const ah = tokens.find(t => t.type === 'ah');
  if (ah) parts.push(ah.value + 'Ah');

  const mm = tokens.find(t => t.type === 'mm');
  if (mm) parts.push(mm.value + 'mm');

  if (tokens.some(t => t.type === 'qualifier' && t.value === 'high output')) parts.push('HIGH OUTPUT');

  const tooltype = tokens.find(t => t.type === 'tooltype');
  if (tooltype) parts.push(tooltype.value);

  return parts.join(' ');
}

/**
 * Score a candidate product title against extracted spec tokens.
 * Returns { score } where score >= 2 means a potential match.
 * Returns score -1 for hard rejections (wrong platform, wrong Ah, etc.).
 */
function scoreCandidate(title, url, tokens) {
  const titleLower = title.toLowerCase();

  // Must contain Milwaukee
  if (!titleLower.includes('milwaukee')) return { score: -1, reason: 'no milwaukee' };

  let matched = 0;

  for (const token of tokens) {
    switch (token.type) {
      case 'platform':
        if (titleLower.includes(token.value)) {
          matched++;
        } else {
          return { score: -1, reason: 'platform mismatch' };
        }
        break;

      case 'ah': {
        // Must match exact Ah value — wrong Ah is a hard reject
        const titleAhMatch = title.match(/(\d+(?:\.\d+)?)\s*Ah/i);
        if (titleAhMatch && titleAhMatch[1] === token.value) {
          matched++;
        } else {
          return { score: -1, reason: 'ah mismatch' };
        }
        break;
      }

      case 'mm': {
        const mmRegex = new RegExp('\\b' + token.value + '\\s*mm\\b', 'i');
        if (mmRegex.test(title)) matched++;
        // mm is a soft token — missing doesn't reject, just lowers score
        break;
      }

      case 'tooltype': {
        const typeMatches =
          (token.value === 'battery' && /batter/i.test(titleLower)) ||
          (token.value === 'charger' && /charger/i.test(titleLower)) ||
          (token.value === 'mitre saw' && /mitre/i.test(titleLower)) ||
          (token.value === 'circular saw' && /circular\s*saw/i.test(titleLower)) ||
          (token.value === 'belt sander' && /belt\s*sander/i.test(titleLower)) ||
          (token.value === 'vacuum' && /(vacuum|vac|wet\s*dry)/i.test(titleLower)) ||
          (token.value === 'trimmer' && /trimmer/i.test(titleLower)) ||
          (token.value === 'radio' && /(radio|dab)/i.test(titleLower)) ||
          (token.value === 'speaker' && /(speaker|bluetooth)/i.test(titleLower)) ||
          (token.value === 'light' && /(light|lamp)/i.test(titleLower)) ||
          (token.value === 'caulking gun' && /(caulk|sealant)/i.test(titleLower)) ||
          (token.value === 'pump' && /pump/i.test(titleLower)) ||
          (token.value === 'rod cutter' && /(threaded\s*rod|rod\s*cutter)/i.test(titleLower)) ||
          (token.value === 'sds max' && /sds\s*max/i.test(titleLower)) ||
          (token.value === 'sds plus' && /sds\s*plus|\bsds\b/i.test(titleLower)) ||
          (token.value === 'impact wrench' && /impact\s*wrench/i.test(titleLower)) ||
          (token.value === 'planer' && /planer/i.test(titleLower));
        if (typeMatches) {
          matched++;
        } else {
          return { score: -1, reason: 'tooltype mismatch' };
        }
        break;
      }

      case 'qualifier': {
        if (titleLower.includes(token.value)) matched++;
        // For chargers: our qualifier missing from title is a hard reject
        const isCharger = tokens.some(t => t.type === 'tooltype' && t.value === 'charger');
        if (isCharger && !titleLower.includes(token.value)) {
          return { score: -1, reason: `charger qualifier "${token.value}" missing` };
        }
        break;
      }
    }
  }

  // For chargers: reject if title has qualifiers we DON'T expect
  const isCharger = tokens.some(t => t.type === 'tooltype' && t.value === 'charger');
  if (isCharger) {
    const ourQualifiers = tokens.filter(t => t.type === 'qualifier').map(t => t.value);
    const chargerQualifiers = ['dual', 'fast', 'super', 'compact', 'sequential'];
    for (const q of chargerQualifiers) {
      if (titleLower.includes(q) && !ourQualifiers.includes(q)) {
        return { score: -1, reason: `unexpected charger qualifier: ${q}` };
      }
    }
  }

  // For batteries: reject kits/combos
  const isBattery = tokens.some(t => t.type === 'tooltype' && t.value === 'battery');
  if (isBattery && /kit|combo|twin|pack.*tool|set.*tool/i.test(title)) {
    return { score: -1, reason: 'kit/combo rejected for battery' };
  }

  return { score: matched };
}

/**
 * Second-pass keyword search via Toolstation API.
 * Scores all results, requires score >= 2, rejects ties at the top.
 */
async function findUrlViaKeyword(keywordQuery, modelNumber, entry, fetchPage) {
  const query = encodeURIComponent(keywordQuery);
  const apiUrl = `https://www.toolstation.com/api/search/crs?domain_key=toolstation&view_id=gb&request_type=search&q=${query}&rows=10&start=0&search_type=keyword&groupby=variant_group&request_id=${Date.now()}&url=https://www.toolstation.com`;

  try {
    const { html, status } = await fetchPage(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Referer': `https://www.toolstation.com/search?q=${query}`,
      },
    });
    if (status !== 200) return null;

    const data = JSON.parse(html);
    const docs = data.response && data.response.docs;
    if (!docs || docs.length === 0) return null;

    const tokens = extractSpecTokens(entry.name || '', modelNumber);
    const scored = [];

    for (const doc of docs) {
      const title = doc.title || '';
      const productUrl = doc.url || '';
      const result = scoreCandidate(title, productUrl, tokens);
      if (result.score >= 2) {
        const fullUrl = productUrl.startsWith('http')
          ? productUrl
          : `https://www.toolstation.com${productUrl.startsWith('/') ? productUrl : '/' + productUrl}`;
        scored.push({ url: fullUrl, title, score: result.score });
      }
    }

    if (scored.length === 0) {
      console.log(`[Toolstation] Keyword fallback: "${keywordQuery}": ${docs.length} results, none scored >= 2`);
      return null;
    }

    // Sort by score descending
    scored.sort((a, b) => b.score - a.score);

    // Reject if top 2 candidates tie — ambiguous
    if (scored.length > 1 && scored[0].score === scored[1].score) {
      console.log(`[Toolstation] Keyword fallback: "${keywordQuery}": top ${scored.length} tied at score ${scored[0].score}, rejecting (ambiguous)`);
      return null;
    }

    console.log(`[Toolstation] Keyword fallback: "${keywordQuery}" → validated: ${scored[0].url} (score: ${scored[0].score}, title: "${scored[0].title}")`);
    return scored[0].url;
  } catch (err) {
    console.error(`[Toolstation] Keyword fallback search failed for "${keywordQuery}":`, err.message);
    return null;
  }
}

/**
 * Search Toolstation for a model number and return the product page URL.
 * Uses their search API, validates results against the model number.
 * Falls back to HTML search if the API fails.
 *
 * Optional 3rd/4th args: fetchPageWithBrowser (unused), entry ({ name, slug })
 * for keyword-fallback on batteries/chargers with weak model codes.
 */
async function findUrl(modelNumber, fetchPage, fetchPageWithBrowser, entry) {
  const normalizedModel = normalizeModel(modelNumber);
  const query = encodeURIComponent(modelNumber);

  // Determine brand from entry (default Milwaukee)
  const brand = entry?.brand || (entry?.slug?.startsWith('dewalt-') ? 'DeWalt' : 'Milwaukee');
  if (entry) entry.brand = brand;

  // Primary path: model-code validation
  const url = await findUrlViaApi(normalizedModel, query, fetchPage);
  if (url) return url;

  // Fallback 1: HTML search with model-code validation
  const htmlUrl = await findUrlViaHtml(normalizedModel, query, fetchPage);
  if (htmlUrl) return htmlUrl;

  // Fallback 2: keyword search for batteries/chargers with weak model codes
  if (entry && shouldTryKeywordFallback(modelNumber, entry)) {
    const keywordQuery = buildKeywordQuery(modelNumber, entry);
    console.log(`[Toolstation] Model-code search failed, trying keyword fallback: "${keywordQuery}"`);
    return findUrlViaKeyword(keywordQuery, modelNumber, entry, fetchPage);
  }

  return null;
}

/**
 * Search via Toolstation's JSON search API.
 */
async function findUrlViaApi(normalizedModel, query, fetchPage) {
  const apiUrl = `https://www.toolstation.com/api/search/crs?domain_key=toolstation&view_id=gb&request_type=search&q=${query}&rows=10&start=0&search_type=keyword&groupby=variant_group&request_id=${Date.now()}&url=https://www.toolstation.com`;

  try {
    const { html, status } = await fetchPage(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Referer': `https://www.toolstation.com/search?q=${query}`,
      },
    });
    if (status !== 200) return null;

    const data = JSON.parse(html);
    const docs = data.response && data.response.docs;
    if (!docs || docs.length === 0) return null;

    // Validate each result against the model number
    for (const doc of docs) {
      const title = doc.title || '';
      const productUrl = doc.url || '';
      const slug = doc.slug || '';

      if (
        modelMatchesText(normalizedModel, title) ||
        modelMatchesText(normalizedModel, productUrl) ||
        modelMatchesText(normalizedModel, slug)
      ) {
        const fullUrl = productUrl.startsWith('http')
          ? productUrl
          : `https://www.toolstation.com${productUrl.startsWith('/') ? productUrl : '/' + productUrl}`;
        console.log(`[Toolstation] API: "${decodeURIComponent(query)}" → validated: ${fullUrl}`);
        return fullUrl;
      }
    }

    console.log(`[Toolstation] API: "${decodeURIComponent(query)}": ${docs.length} results, none matched model`);
    return null;
  } catch (err) {
    console.error(`[Toolstation] API search failed for "${decodeURIComponent(query)}":`, err.message);
    return null;
  }
}

/**
 * Fallback: search via Toolstation HTML search page.
 */
async function findUrlViaHtml(normalizedModel, query, fetchPage) {
  const searchUrl = `https://www.toolstation.com/search?q=${query}`;

  try {
    const { html, status } = await fetchPage(searchUrl);
    if (status !== 200) return null;

    const $ = cheerio.load(html);

    const candidates = [];
    const seen = new Set();

    // Product links on Toolstation use /p{id} pattern in slug URLs
    $('a[href*="/p"]').each((_, el) => {
      const href = $(el).attr('href');
      if (href && /\/p\w+/.test(href) && !seen.has(href)) {
        seen.add(href);
        candidates.push({ href, text: $(el).text().trim() });
      }
    });

    for (const { href, text } of candidates) {
      if (modelMatchesText(normalizedModel, href) || modelMatchesText(normalizedModel, text)) {
        const fullUrl = href.startsWith('http') ? href : `https://www.toolstation.com${href}`;
        console.log(`[Toolstation] HTML: "${decodeURIComponent(query)}" → validated: ${fullUrl}`);
        return fullUrl;
      }
    }

    if (candidates.length > 0) {
      console.log(`[Toolstation] HTML: "${decodeURIComponent(query)}": ${candidates.length} links, none matched model`);
    }
    return null;
  } catch (err) {
    console.error(`[Toolstation] HTML search failed for "${decodeURIComponent(query)}":`, err.message);
    return null;
  }
}

function parse(html, url) {
  try {
    const $ = cheerio.load(html);

    let price = null;

    // Try JSON-LD first
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
        '[data-price]',
        '[itemprop="price"]',
        '.buy-box .price',
        '#product-price',
      ];
      for (const sel of priceSelectors) {
        const el = $(sel).first();
        if (el.length) {
          // Check data-price attr first
          const dataPrice = el.attr('data-price') || el.attr('content');
          if (dataPrice) {
            const num = parseFloat(dataPrice.replace(/[£,]/g, ''));
            if (!isNaN(num) && num > 0 && num < 10000) {
              price = num;
              break;
            }
          }
          const text = el.text().replace(/[£,\s]/g, '').trim();
          const num = parseFloat(text);
          if (!isNaN(num) && num > 0 && num < 10000) {
            price = num;
            break;
          }
        }
      }
    }

    let inStock = false;
    const stockEl = $('.stock-status, .availability, [itemprop="availability"], .in-stock, .out-of-stock').first();
    const stockText = stockEl.text().toLowerCase();
    const stockClass = stockEl.attr('class') || '';

    if (stockText.includes('in stock') || stockClass.includes('in-stock')) {
      inStock = true;
    } else if (stockText.includes('out of stock') || stockClass.includes('out-of-stock')) {
      inStock = false;
    } else {
      inStock = price !== null;
    }

    const name = $('h1').first().text().trim() || '';

    if (price === null) return null;
    if (price <= 0 || price > 99999) return null;

    return { price, inStock, name, retailer: RETAILER_NAME, url };
  } catch (err) {
    console.error(`[Toolstation] Parse error for ${url}:`, err.message);
    return null;
  }
}

module.exports = { parse, findUrl, retailerName: RETAILER_NAME, _test: { normalizeModel, modelMatchesText, extractSpecTokens, shouldTryKeywordFallback, buildKeywordQuery, scoreCandidate } };
