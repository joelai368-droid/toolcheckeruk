#!/usr/bin/env node
/**
 * Audit for kit/body-only mismatches using scraped retailer titles.
 *
 * Scans data/prices/*.json and flags cases where tool name includes "Body Only"
 * but scraped retailer product title looks like a kit/bundle.
 *
 * Usage:
 *   node scripts/audit-variant-mismatch.mjs --brand dewalt
 */

import fs from 'fs/promises';
import path from 'path';

function parseArgs(argv) {
  const args = { brand: null, limit: 200 };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--brand') args.brand = (argv[++i] || '').toLowerCase();
    if (a === '--limit') args.limit = Number(argv[++i]);
  }
  return args;
}

function isBodyOnly(toolName) {
  return /\(Body Only\)/i.test(toolName || '') || /\bBody Only\b/i.test(toolName || '');
}

function looksLikeKit(title) {
  const t = (title || '').toLowerCase();
  // Heuristics: batteries, chargers, kits, twin packs etc.
  // Keep conservative to avoid false positives.
  const signals = [
    /\bkit\b/,
    /\bbundle\b/,
    /\bwith\b.*\bbattery\b/,
    /\bwith\b.*\bcharger\b/,
    /\bbatter(y|ies)\b/,
    /\bcharger\b/,
    /\b2\s*x\b/,
    /\b5\.?0\s*ah\b/,
    /\b4\.?0\s*ah\b/,
    /\b6\.?0\s*ah\b/,
    /\bpowerstack\b/,
    /\btstak\b/,
    /\bcase\b/,
    /\bpack\b/, // catches "starter pack" etc.
  ];

  let hit = [];
  for (const re of signals) {
    if (re.test(t)) hit.push(re.toString());
  }

  // Require at least 2 signals OR explicit kit/bundle words to reduce noise.
  const explicit = /\bkit\b|\bbundle\b|\bstarter pack\b/.test(t);
  if (explicit) return { isKit: true, signals: hit };
  if (hit.length >= 2) return { isKit: true, signals: hit };
  return { isKit: false, signals: [] };
}

async function loadToolsDb() {
  const db = await import(path.join(process.cwd(), 'lib', 'tools-db.ts'));
  const all = db.getAllTools();
  return new Map(all.map(t => [t.slug, t]));
}

async function main() {
  const args = parseArgs(process.argv);
  const toolsBySlug = await loadToolsDb();

  const pricesDir = path.join(process.cwd(), 'data', 'prices');
  const files = (await fs.readdir(pricesDir)).filter(f => f.endsWith('.json'));

  const rows = [];

  for (const f of files) {
    const slug = f.replace(/\.json$/, '');
    const tool = toolsBySlug.get(slug);
    if (!tool) continue;

    if (args.brand && (tool.brand || '').toLowerCase() !== args.brand) continue;

    const raw = await fs.readFile(path.join(pricesDir, f), 'utf8');
    const j = JSON.parse(raw);
    const retailers = j.retailers || {};

    const bodyOnly = isBodyOnly(tool.name);
    if (!bodyOnly) continue;

    for (const [retailerName, data] of Object.entries(retailers)) {
      if (!data || typeof data !== 'object') continue;
      if (!data.name) continue;
      if (typeof data.price !== 'number') continue;

      const k = looksLikeKit(data.name);
      if (!k.isKit) continue;

      rows.push({
        slug,
        modelNumber: tool.modelNumber,
        toolName: tool.name,
        retailerName,
        price: data.price,
        title: data.name,
        url: data.url,
        signals: k.signals,
      });
    }
  }

  // Sort by price ascending (worst skew for "best price")
  rows.sort((a, b) => a.price - b.price);

  const reportDir = path.join(process.cwd(), 'reports');
  await fs.mkdir(reportDir, { recursive: true });
  const outPath = path.join(reportDir, `variant-audit-${args.brand || 'all'}-${new Date().toISOString().slice(0, 10)}.md`);

  const byRetailer = new Map();
  for (const r of rows) byRetailer.set(r.retailerName, (byRetailer.get(r.retailerName) || 0) + 1);

  let out = '';
  out += `# Variant mismatch audit (${args.brand || 'all'})\n\n`;
  out += `Generated: ${new Date().toISOString()}\n\n`;
  out += `Heuristic: tool name contains "Body Only" but scraped retailer title looks like kit/bundle (battery/charger/etc).\n\n`;
  out += `## Summary\n\n`;
  out += `- Flagged rows: **${rows.length}**\n`;
  out += `\n### By retailer\n\n`;
  out += `| Retailer | Flagged |\n|---|---:|\n`;
  for (const [name, count] of [...byRetailer.entries()].sort((a, b) => b[1] - a[1])) {
    out += `| ${name} | ${count} |\n`;
  }

  out += `\n## Flagged items (first ${Math.min(args.limit, rows.length)})\n\n`;
  out += `| Slug | Model | Retailer | Price | Notes |\n|---|---|---|---:|---|\n`;
  for (const r of rows.slice(0, args.limit)) {
    const notes = r.signals.length ? r.signals.slice(0, 3).join(', ') : 'kit-ish title';
    out += `| ${r.slug} | ${r.modelNumber} | ${r.retailerName} | £${r.price.toFixed(2)} | ${notes} |\n`;
    out += `\n> ${r.title}\n\n- URL: ${r.url}\n\n`;
  }

  await fs.writeFile(outPath, out, 'utf8');
  console.log(outPath);
  console.log(`Flagged: ${rows.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
