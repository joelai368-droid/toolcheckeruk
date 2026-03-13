#!/usr/bin/env node
/**
 * Toolstation verifier/proposer.
 *
 * Why:
 * Toolstation URLs use their own Product Code (e.g. p51979). We verify matches by extracting
 * the on-page technical spec field `Manufacturer ID` and ensuring it equals the expected model number.
 *
 * Usage:
 *  node scripts/toolstation-verify-and-propose.mjs --model DBO180Z --slug makita-18v-orbital-sander --url "https://www.toolstation.com/makita-18v-cordless-random-orbital-sander/p51979"
 *
 * Bulk:
 *  node scripts/toolstation-verify-and-propose.mjs --input reports/toolstation-candidates.json --out reports/toolstation-proposals.json
 *  where input is an array of { slug, modelNumber, url }
 */

import fs from "fs/promises";

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : null;
}

function extractToolstationProductCode(url) {
  const m = url.match(/\/p(\d{3,})/);
  return m ? m[1] : null;
}

function extractManufacturerIdFromHtml(html) {
  // Common pattern in their tech spec accordion.
  // We look for the label "Manufacturer ID" and grab the nearby value.
  const idx = html.toLowerCase().indexOf("manufacturer id");
  if (idx === -1) return null;

  const window = html.slice(idx, idx + 2000);

  // Try a few patterns (HTML table cell, spans, etc.)
  const patterns = [
    /Manufacturer ID<\/?[^>]*>\s*<\/?[^>]*>\s*([^<\s][^<]{0,40})</i,
    /Manufacturer ID[\s\S]{0,300}?<span[^>]*>([^<\s][^<]{0,40})<\/span>/i,
    /Manufacturer ID[\s\S]{0,300}?value\":\"([^\"]{1,40})\"/i,
  ];

  for (const re of patterns) {
    const m = window.match(re);
    if (m?.[1]) return decodeHtmlEntities(m[1]).trim();
  }

  // Fallback: look for an uppercase-ish token nearby
  const m2 = window.match(/Manufacturer ID[\s\S]{0,400}?([A-Z0-9-]{4,20})/);
  return m2?.[1]?.trim() ?? null;
}

function decodeHtmlEntities(str) {
  return str
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/\\u002F/g, "/");
}

async function verifyOne({ slug, modelNumber, url }) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; toolcheckeruk/1.0; +https://toolcheckeruk.com)",
      accept: "text/html,application/xhtml+xml",
    },
  });

  const ok = res.ok;
  const html = await res.text();

  const productCode = extractToolstationProductCode(url);
  const manufacturerId = extractManufacturerIdFromHtml(html);

  const match =
    !!manufacturerId &&
    manufacturerId.toUpperCase() === String(modelNumber).toUpperCase();

  return {
    slug,
    modelNumber,
    url,
    retailer: "Toolstation",
    productCode,
    manufacturerId,
    httpOk: ok,
    match,
  };
}

async function main() {
  const model = arg("model");
  const slug = arg("slug");
  const url = arg("url");
  const input = arg("input");
  const out = arg("out");

  if (input) {
    const raw = await fs.readFile(input, "utf8");
    const candidates = JSON.parse(raw);
    if (!Array.isArray(candidates)) throw new Error("--input must be a JSON array");

    const results = [];
    for (const c of candidates) {
      if (!c?.url || !c?.modelNumber || !c?.slug) continue;
      results.push(await verifyOne(c));
    }

    if (out) {
      await fs.writeFile(out, JSON.stringify(results, null, 2) + "\n", "utf8");
      console.log(out);
    } else {
      console.log(JSON.stringify(results, null, 2));
    }
    return;
  }

  if (!model || !slug || !url) {
    console.error(
      "Missing args. Provide either --input <file> (bulk) OR --model --slug --url (single)."
    );
    process.exit(2);
  }

  const result = await verifyOne({ slug, modelNumber: model, url });
  console.log(JSON.stringify(result, null, 2));

  if (result.match && result.productCode) {
    console.log("\nProposed mapping (paste into scraper/mappings/<brand>.json retailers):");
    console.log(`  \"Toolstation\": \"${url}\"`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
