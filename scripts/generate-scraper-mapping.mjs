import { getAllTools } from '../lib/tools-db.ts';
import fs from 'fs';
import path from 'path';

const brand = (process.argv[2] || '').toLowerCase();
if (!brand) {
  console.error('Usage: node scripts/generate-scraper-mapping.mjs <brandSlug>');
  process.exit(1);
}

// Map tools-db brand names -> mapping file keys
const brandName = {
  dewalt: 'DeWalt',
  milwaukee: 'Milwaukee',
  makita: 'Makita',
  bosch: 'Bosch',
}[brand] || brand;

const tools = getAllTools();
const selected = tools.filter(t => (t.brand || '').toLowerCase() === brandName.toLowerCase());

const out = {};
for (const t of selected) {
  out[t.slug] = {
    model: t.modelNumber || t.model || '',
    name: t.name || '',
    retailers: {},
  };
}

const outPath = path.join(process.cwd(), 'scraper/mappings', `${brand}.json`);
fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${selected.length} tools to ${outPath}`);
