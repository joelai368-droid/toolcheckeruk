#!/usr/bin/env node
/**
 * ToolCheckerUK Price Scraper — main runner
 *
 * Reads retailer URLs from mappings/milwaukee.json, fetches and parses each page,
 * saves results to data/prices/[slug].json, then optionally git commits.
 *
 * Usage:
 *   node scraper/index.js                           # scrape all (default mapping: milwaukee)
 *   node scraper/index.js --mapping scraper/mappings/dewalt.json # scrape all DeWalt tools
 *   node scraper/index.js --slug milwaukee-m18-fuel-combi-drill  # one tool
 *   node scraper/index.js --dry-run                 # scrape but don't save/commit
 *   node scraper/index.js --no-commit               # save JSON but skip git commit
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { fetchPage } = require('./core');

const parsers = {
  'Screwfix': require('./parsers/screwfix'),
  'Toolstation': require('./parsers/toolstation'),
  'ITS': require('./parsers/its'),
  'Powertool Mate': require('./parsers/powertoolmate'),
  'Machine Mart': require('./parsers/machinemart'),
  'Big Red Power Tools': require('./parsers/bigredpowertools'),
  'Toolden': require('./parsers/toolden'),
};

const DEFAULT_MAPPING_FILE = path.join(__dirname, 'mappings/milwaukee.json');

function getMappingFileFromArgs(args) {
  const i = args.indexOf('--mapping');
  if (i !== -1 && args[i + 1]) return args[i + 1];
  return DEFAULT_MAPPING_FILE;
}
const PRICES_DIR = path.join(__dirname, '../data/prices');
const CACHE_MAX_AGE_MS = 4 * 60 * 60 * 1000; // 4 hours

function loadMapping(mappingFile) {
  return JSON.parse(fs.readFileSync(mappingFile, 'utf8'));
}

function loadExistingPrices(slug) {
  const file = path.join(PRICES_DIR, `${slug}.json`);
  if (fs.existsSync(file)) {
    try {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch {
      return null;
    }
  }
  return null;
}

function savePrices(slug, data) {
  if (!fs.existsSync(PRICES_DIR)) {
    fs.mkdirSync(PRICES_DIR, { recursive: true });
  }
  const file = path.join(PRICES_DIR, `${slug}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function isCacheValid(existing, retailerName) {
  if (!existing?.retailers?.[retailerName]?.lastScraped) return false;
  const age = Date.now() - new Date(existing.retailers[retailerName].lastScraped).getTime();
  return age < CACHE_MAX_AGE_MS;
}

function validatePrice(price) {
  if (typeof price !== 'number') return false;
  if (price <= 0) return false;
  if (price > 9999) return false;
  return true;
}

async function scrapeRetailer(retailerName, url, parser) {
  try {
    console.log(`    Fetching ${retailerName}...`);
    const { html, status } = await fetchPage(url);

    if (status === 404) {
      console.log(`    [${retailerName}] 404 — flag for review`);
      return { error: '404', url };
    }

    if (status !== 200) {
      console.log(`    [${retailerName}] HTTP ${status}`);
      return { error: `HTTP ${status}`, url };
    }

    const result = parser.parse(html, url);

    if (!result) {
      console.log(`    [${retailerName}] Parse failed — no price found`);
      return { error: 'parse_failed', url };
    }

    if (!validatePrice(result.price)) {
      console.log(`    [${retailerName}] Invalid price: ${result.price}`);
      return { error: 'invalid_price', url };
    }

    console.log(`    [${retailerName}] £${result.price.toFixed(2)} — ${result.inStock ? 'In Stock' : 'Out of Stock'}`);
    const scraped = {
      price: result.price,
      inStock: result.inStock,
      name: result.name,
      url,
      lastScraped: new Date().toISOString(),
    };

    if (typeof result.priceIncVat === 'number') scraped.priceIncVat = result.priceIncVat;
    if (typeof result.priceExVat === 'number') scraped.priceExVat = result.priceExVat;
    if (typeof result.stockText === 'string' && result.stockText.trim()) scraped.stockText = result.stockText.trim();
    if (typeof result.canonicalUrl === 'string' && result.canonicalUrl.trim()) scraped.canonicalUrl = result.canonicalUrl.trim();

    return scraped;
  } catch (err) {
    console.log(`    [${retailerName}] Error: ${err.message}`);
    return { error: err.message, url };
  }
}

async function scrapeProduct(slug, entry, existing, dryRun) {
  const retailerUrls = entry.retailers;
  const retailerNames = Object.keys(retailerUrls);

  if (retailerNames.length === 0) {
    console.log(`  [${slug}] No retailer URLs mapped — skipping`);
    return null;
  }

  const priceData = {
    slug,
    model: entry.model,
    lastScraped: new Date().toISOString(),
    retailers: {},
  };

  // Carry over existing data as starting point
  if (existing?.retailers) {
    priceData.retailers = { ...existing.retailers };
  }

  for (const [retailerName, url] of Object.entries(retailerUrls)) {
    // Skip if cache is still valid
    if (isCacheValid(existing, retailerName)) {
      const cached = existing.retailers[retailerName];
      const age = Math.round((Date.now() - new Date(cached.lastScraped).getTime()) / 60000);
      console.log(`    [${retailerName}] Cached (${age}m old) — £${cached.price?.toFixed(2)}`);
      continue;
    }

    const parser = parsers[retailerName];
    if (!parser) {
      console.log(`    [${retailerName}] No parser found`);
      continue;
    }

    const result = await scrapeRetailer(retailerName, url, parser);

    if (result.error) {
      // Keep previous price if we have one, but flag the error
      if (priceData.retailers[retailerName]?.price) {
        priceData.retailers[retailerName] = {
          ...priceData.retailers[retailerName],
          scrapeError: result.error,
          lastAttempted: new Date().toISOString(),
        };
      } else {
        priceData.retailers[retailerName] = { error: result.error, url };
      }
    } else {
      priceData.retailers[retailerName] = result;
    }
  }

  return priceData;
}

function gitCommit(updatedSlugs) {
  try {
    const repoRoot = path.join(__dirname, '..');
    const files = updatedSlugs.map(s => `data/prices/${s}.json`).join(' ');
    execSync(`git -C "${repoRoot}" add ${files}`, { stdio: 'inherit' });
    const date = new Date().toISOString().replace('T', ' ').slice(0, 16);
    execSync(`git -C "${repoRoot}" commit -m "Price update ${date} UTC (${updatedSlugs.length} tools)"`, {
      stdio: 'inherit',
    });
    execSync(`git -C "${repoRoot}" push origin main`, { stdio: 'inherit' });
    console.log('\nPushed price update to GitHub — Vercel will redeploy.');
  } catch (err) {
    console.error('Git commit/push failed:', err.message);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const slugFilter = args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null;
  const dryRun = args.includes('--dry-run');
  const noCommit = args.includes('--no-commit');

  // Optional: restrict scraping to a single retailer key (exact match in mappings)
  const retailerFilter = args.includes('--retailer') ? args[args.indexOf('--retailer') + 1] : null;

  const mappingFile = getMappingFileFromArgs(process.argv.slice(2));
  const mapping = loadMapping(mappingFile);
  const slugs = slugFilter ? [slugFilter] : Object.keys(mapping);

  // Filter to only tools that have at least one retailer URL
  const scrapeList = slugs.filter(s => {
    const entry = mapping[s];
    return entry && Object.keys(entry.retailers).length > 0;
  });

  if (scrapeList.length === 0) {
    console.log('No tools with retailer URLs found. Run find-urls.js first.');
    process.exit(0);
  }

  console.log(`ToolCheckerUK Price Scraper`);
  console.log(`${new Date().toISOString()}`);
  console.log(`Scraping ${scrapeList.length} tools...${dryRun ? ' [DRY RUN]' : ''}\n`);

  const updatedSlugs = [];
  let successCount = 0;
  let errorCount = 0;

  for (const slug of scrapeList) {
    const entry = mapping[slug];
    const existing = loadExistingPrices(slug);

    console.log(`\n[${slug}]`);

    // If --retailer is set, temporarily restrict retailers for this run
    const effectiveEntry = retailerFilter
      ? { ...entry, retailers: entry.retailers?.[retailerFilter] ? { [retailerFilter]: entry.retailers[retailerFilter] } : {} }
      : entry;

    const priceData = await scrapeProduct(slug, effectiveEntry, existing, dryRun);

    if (!priceData) continue;

    const retailerCount = Object.values(priceData.retailers).filter(r => r.price).length;
    console.log(`  → ${retailerCount} prices found`);

    if (retailerCount > 0) successCount++;
    else errorCount++;

    if (!dryRun) {
      savePrices(slug, priceData);
      updatedSlugs.push(slug);
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`Done. ${successCount} tools with prices, ${errorCount} with no prices.`);
  console.log(`${updatedSlugs.length} files saved.`);

  if (!dryRun && !noCommit && updatedSlugs.length > 0) {
    console.log('\nCommitting price data...');
    gitCommit(updatedSlugs);
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
