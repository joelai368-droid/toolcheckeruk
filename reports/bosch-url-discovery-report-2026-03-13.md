# Bosch URL discovery (ITS → Powertool Mate → Screwfix)

Generated: 2026-03-13

## What happened
- `scraper/mappings/bosch.json` did not exist, so it was created from `lib/tools-db.ts` (36 Bosch Professional tools).
- Ran URL discovery in order:
  1) ITS
  2) Powertool Mate
  3) Screwfix

## Coverage result (Bosch Professional)
- Total tools: **36**
- Tools with ≥1 retailer URL: **26**
- Tools with 0 retailer URLs: **10**

### By retailer (Bosch)
- ITS: **8**
- Powertool Mate: **5**
- Screwfix: **26**

## Important quality notes (review before push)
### 1) Screwfix matches may be kits vs body-only
Screwfix frequently returns kit pages (e.g. 2x batteries) even when our DB item is body-only.
Before pushing, we should run a quick “kit audit” on the newly added Screwfix URLs by checking the scraped Screwfix product title for kit signals.

### 2) Known wrong/ambiguous ITS matches were removed immediately
During ITS discovery, a few results were clearly not the intended tool (accessory/bundle). These were removed from the mapping:
- `bosch-18v-sds-hammer-drill` (GBH 18V-26) — matched a dust extractor attachment, removed
- `bosch-18v-multi-tool-34` (GOP 18V-34) — matched a multi-tool bundle page, removed
- `bosch-18v-mitre-saw-216` (GCM 18V-216) — matched a mitre-saw + bench bundle page, removed

## Next actions suggested
1) Run Bosch price scrape (no commit) using the new mapping:
   - `node scraper/index.js --mapping scraper/mappings/bosch.json --no-commit`
2) Run variant mismatch audit on Bosch prices:
   - `node scripts/audit-variant-mismatch.mjs --brand bosch --limit 50`
3) Based on audit output: drop kit/wrong retailer URLs (prefer drop over guessing).
4) Then commit+push `scraper/mappings/bosch.json` + any resulting `data/prices/bosch-*.json`.
