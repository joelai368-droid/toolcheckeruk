#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const mappingsDir = path.join(process.cwd(), 'scraper', 'mappings');
const toolsDbPath = path.join(process.cwd(), 'lib', 'tools-db.ts');

function pct(n, d) {
  return d === 0 ? '0%' : `${Math.round((n / d) * 100)}%`;
}

async function loadTools() {
  // tools-db.ts exports getAllTools()
  const db = await import(path.join(process.cwd(), 'lib', 'tools-db.ts'));
  return db.getAllTools();
}

async function loadMappings() {
  const files = (await fs.readdir(mappingsDir)).filter(f => f.endsWith('.json'));
  const bySlug = new Map();
  for (const f of files) {
    const full = path.join(mappingsDir, f);
    const raw = await fs.readFile(full, 'utf8');
    const json = JSON.parse(raw);
    for (const [slug, entry] of Object.entries(json)) {
      if (!bySlug.has(slug)) bySlug.set(slug, entry);
    }
  }
  return { files, bySlug };
}

async function main() {
  const tools = await loadTools();
  const { files, bySlug } = await loadMappings();

  const retailerCounts = new Map();
  let toolsWithAnyUrl = 0;
  let toolsWithAnyMapped = 0;

  const rows = [];

  for (const t of tools) {
    const mapping = bySlug.get(t.slug);
    const mappedRetailers = mapping?.retailers ?? {};
    const mappedNames = Object.keys(mappedRetailers);

    const hasAnyMapped = mappedNames.length > 0;
    if (hasAnyMapped) toolsWithAnyMapped++;

    for (const name of mappedNames) {
      retailerCounts.set(name, (retailerCounts.get(name) ?? 0) + 1);
    }

    rows.push({
      slug: t.slug,
      brand: t.brand,
      model: t.modelNumber,
      mappedCount: mappedNames.length,
      mappedNames,
    });
  }

  const totalTools = tools.length;

  const byBrand = new Map();
  for (const r of rows) {
    const b = byBrand.get(r.brand) ?? { total: 0, mapped: 0 };
    b.total++;
    if (r.mappedCount > 0) b.mapped++;
    byBrand.set(r.brand, b);
  }

  const retailerSorted = [...retailerCounts.entries()].sort((a,b)=>b[1]-a[1]);

  let out = '';
  out += `# URL Coverage Report\n\n`;
  out += `Generated: ${new Date().toISOString()}\n\n`;
  out += `## Summary\n\n`;
  out += `- Tools in DB: **${totalTools}**\n`;
  out += `- Tools with ≥1 mapped retailer URL: **${toolsWithAnyMapped}** (${pct(toolsWithAnyMapped, totalTools)})\n\n`;

  out += `## By brand\n\n`;
  out += `| Brand | Tools | With mapped URL | Coverage |\n|---|---:|---:|---:|\n`;
  for (const [brand, s] of [...byBrand.entries()].sort((a,b)=>a[0].localeCompare(b[0]))) {
    out += `| ${brand} | ${s.total} | ${s.mapped} | ${pct(s.mapped, s.total)} |\n`;
  }
  out += `\n`;

  out += `## Retailer usage (from mappings)\n\n`;
  out += `| Retailer | Tools mapped |\n|---|---:|\n`;
  for (const [name, count] of retailerSorted) {
    out += `| ${name} | ${count} |\n`;
  }
  out += `\n`;

  out += `## Tools missing mappings (top 50)\n\n`;
  out += `| Brand | Model | Slug |\n|---|---|---|\n`;
  for (const r of rows.filter(x=>x.mappedCount===0).slice(0,50)) {
    out += `| ${r.brand} | ${r.model} | ${r.slug} |\n`;
  }
  out += `\n\n`;
  out += `Mappings files scanned: ${files.join(', ')}\n`;

  const reportDir = path.join(process.cwd(), 'reports');
  await fs.mkdir(reportDir, { recursive: true });
  const filePath = path.join(reportDir, `url-coverage-${new Date().toISOString().slice(0,10)}.md`);
  await fs.writeFile(filePath, out, 'utf8');

  console.log(filePath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
