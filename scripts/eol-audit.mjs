#!/usr/bin/env node
/**
 * EOL (end-of-life) audit helper for ToolCheckerUK.
 *
 * Purpose: stop wasting time trying to map retailer URLs for SKUs that are discontinued/superseded.
 *
 * This is intentionally "accuracy-first": it does NOT auto-delete or auto-replace tools.
 * Instead it:
 *  - lists tools with 0 mapped retailer URLs
 *  - prints fast manufacturer-search links and a Google query link per model
 *  - optionally fetches DeWalt product pages when an explicit product URL is provided via --evidence
 *
 * Usage:
 *   node scripts/eol-audit.mjs --brand dewalt
 *   node scripts/eol-audit.mjs --all
 *   node scripts/eol-audit.mjs --brand dewalt --evidence scripts/eol-evidence.json
 *
 * Evidence file format (optional):
 * {
 *   "DCF899N": {
 *     "brand": "DeWalt",
 *     "productUrl": "https://www.dewalt.co.uk/product/dcf899n-xe/...",
 *     "discontinuedNeedle": "discontinued"
 *   }
 * }
 */

import fs from 'node:fs';
import path from 'node:path';

function parseArgs(argv) {
  const args = { brand: null, all: false, evidence: null, out: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--brand') args.brand = argv[++i];
    else if (a === '--all') args.all = true;
    else if (a === '--evidence') args.evidence = argv[++i];
    else if (a === '--out') args.out = argv[++i];
    else if (a === '-h' || a === '--help') {
      console.log(`\nEOL audit helper\n\n` +
        `node scripts/eol-audit.mjs --brand <dewalt|makita|milwaukee> [--evidence <file>] [--out <md>]\n` +
        `node scripts/eol-audit.mjs --all [--evidence <file>] [--out <md>]\n`);
      process.exit(0);
    } else {
      console.error('Unknown arg:', a);
      process.exit(1);
    }
  }
  if (!args.all && !args.brand) {
    console.error('Missing --brand or --all');
    process.exit(1);
  }
  return args;
}

function mappingPathFor(brand) {
  return path.join('scraper', 'mappings', `${brand}.json`);
}

function loadEvidence(evidencePath) {
  if (!evidencePath) return {};
  return JSON.parse(fs.readFileSync(evidencePath, 'utf8'));
}

function manufacturerLinks(brand, model) {
  const enc = encodeURIComponent(model);
  const links = [];

  if (brand.toLowerCase() === 'dewalt') {
    links.push({ label: 'DeWalt site search', url: `https://www.dewalt.co.uk/search?query=${enc}` });
  }

  // Google query helps across brands when manufacturers hide search behind JS.
  links.push({
    label: 'Google query',
    url: `https://www.google.com/search?q=${encodeURIComponent(`${brand} ${model} discontinued`)}`,
  });

  return links;
}

async function checkEvidence(evidenceEntry) {
  if (!evidenceEntry?.productUrl) return { status: 'NO_EVIDENCE' };

  try {
    const res = await fetch(evidenceEntry.productUrl, {
      headers: { 'user-agent': 'Mozilla/5.0 (ToolCheckerUK EOL audit)' },
    });
    const text = await res.text();
    const needle = (evidenceEntry.discontinuedNeedle || 'discontinued').toLowerCase();
    const hit = text.toLowerCase().includes(needle);
    return { status: 'FETCHED', httpStatus: res.status, discontinuedHit: hit };
  } catch (e) {
    return { status: 'ERROR', error: String(e) };
  }
}

async function runForBrand(brand, evidence) {
  const mapPath = mappingPathFor(brand);
  const mapping = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
  const unmapped = Object.entries(mapping)
    .filter(([, t]) => !t.retailers || Object.keys(t.retailers).length === 0)
    .map(([slug, t]) => ({ slug, model: t.model, name: t.name, brand: t.brand || brand }))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const lines = [];
  lines.push(`## ${brand} — unmapped (0 retailer URLs): ${unmapped.length}`);

  for (const item of unmapped) {
    lines.push(`- **${item.slug}** — ${item.model}`);

    // Links
    for (const l of manufacturerLinks(item.brand || brand, item.model)) {
      lines.push(`  - ${l.label}: ${l.url}`);
    }

    // Optional evidence fetch
    const ev = evidence[item.model];
    if (ev?.productUrl) {
      const r = await checkEvidence(ev);
      lines.push(`  - Evidence URL: ${ev.productUrl}`);
      if (r.status === 'FETCHED') {
        lines.push(`    - fetch: HTTP ${r.httpStatus} | discontinued_hit=${r.discontinuedHit}`);
      } else {
        lines.push(`    - fetch: ${r.status}${r.error ? ` (${r.error})` : ''}`);
      }
    }
  }

  return lines.join('\n');
}

async function main() {
  const args = parseArgs(process.argv);
  const evidence = loadEvidence(args.evidence);

  const brands = args.all ? ['dewalt', 'makita', 'milwaukee'] : [args.brand];

  const outSections = [];
  outSections.push(`# EOL audit report\nGenerated: ${new Date().toISOString()}\n`);

  for (const b of brands) {
    outSections.push(await runForBrand(b, evidence));
    outSections.push('');
  }

  const out = outSections.join('\n');

  if (args.out) {
    fs.writeFileSync(args.out, out);
    console.log(`Wrote report to ${args.out}`);
  } else {
    console.log(out);
  }
}

main();
