#!/usr/bin/env node
/**
 * URL Finder — searches each retailer for tools in a mapping file and populates retailer URLs.
 * Run this once to seed the mapping, then the main scraper uses the saved URLs.
 *
 * Usage:
 *   node scraper/find-urls.js                                   # search all tools, all retailers (default mapping: milwaukee)
 *   node scraper/find-urls.js --mapping scraper/mappings/dewalt.json  # search all DeWalt tools
 *   node scraper/find-urls.js --slug milwaukee-m18-fuel-combi-drill    # one tool
 *   node scraper/find-urls.js --retailer Screwfix                    # one retailer only
 */

const fs = require('fs');
const path = require('path');
const { fetchPage, fetchPageWithBrowser, closeBrowser } = require('./core');

const parsers = {
  'Screwfix': require('./parsers/screwfix'),
  'Toolstation': require('./parsers/toolstation'),
  'ITS': require('./parsers/its'),
  'Powertool Mate': require('./parsers/powertoolmate'),
  'Machine Mart': require('./parsers/machinemart'),
};

const DEFAULT_MAPPING_FILE = path.join(__dirname, 'mappings/milwaukee.json');

function getMappingFileFromArgs(args) {
  const i = args.indexOf('--mapping');
  if (i !== -1 && args[i + 1]) return args[i + 1];
  return DEFAULT_MAPPING_FILE;
}

const MAPPING_FILE = getMappingFileFromArgs(process.argv.slice(2));

function loadMapping() {
  return JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
}

function saveMapping(mapping) {
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
}

async function findUrlsForTool(slug, entry, retailerFilter) {
  const mapping = loadMapping();
  console.log(`\n[${slug}] Model: ${entry.model}`);

  for (const [retailerName, parser] of Object.entries(parsers)) {
    if (retailerFilter && retailerName !== retailerFilter) continue;

    // Skip if already have a URL
    if (mapping[slug].retailers[retailerName]) {
      console.log(`  [${retailerName}] Already mapped: ${mapping[slug].retailers[retailerName]}`);
      continue;
    }

    try {
      console.log(`  [${retailerName}] Searching for "${entry.model}"...`);
      const url = await parser.findUrl(entry.model, fetchPage, fetchPageWithBrowser, { ...entry, slug });

      if (url) {
        console.log(`  [${retailerName}] Found: ${url}`);
        mapping[slug].retailers[retailerName] = url;
        saveMapping(mapping);
      } else {
        console.log(`  [${retailerName}] Not found`);
      }
    } catch (err) {
      console.error(`  [${retailerName}] Error: ${err.message}`);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const slugFilter = args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null;
  const retailerFilter = args.includes('--retailer') ? args[args.indexOf('--retailer') + 1] : null;

  const mapping = loadMapping();
  const slugs = slugFilter ? [slugFilter] : Object.keys(mapping);

  console.log(`Finding URLs for ${slugs.length} tools across ${retailerFilter ? '1 retailer' : Object.keys(parsers).length + ' retailers'}...`);
  console.log('Rate limit: 3s between requests per retailer\n');

  for (const slug of slugs) {
    const entry = mapping[slug];
    if (!entry) {
      console.error(`Unknown slug: ${slug}`);
      continue;
    }
    await findUrlsForTool(slug, entry, retailerFilter);
  }

  const final = loadMapping();
  const total = Object.keys(final).length;
  let mapped = 0;
  for (const entry of Object.values(final)) {
    if (Object.keys(entry.retailers).length > 0) mapped++;
  }

  console.log(`\nDone. ${mapped}/${total} tools have at least one retailer URL.`);
  await closeBrowser();
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
