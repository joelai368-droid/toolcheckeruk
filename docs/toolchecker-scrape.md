---
name: toolchecker-scrape
description: Automate ToolCheckerUK retailer URL discovery, Amazon ASIN capture, and price scraping across brands (Milwaukee, DeWalt, Makita, etc.) using the local toolcheckeruk repo. Use when Joel asks to bulk-seed retailer URLs, run scrapes, commit/push price JSON updates, or repeat the mapping→find-urls→scrape→git workflow.
---

# ToolCheckerUK Bulk Scrape & Tool Mapping

Use this skill to repeat the exact workflow for adding tools, mapping retailer URLs, and scraping prices.

---

## 0. Pre-flight: Model Number Verification (MANDATORY)

Before mapping **any** tool, verify the model number is real and currently sold in the UK.

### Why this matters
We’ve hit multiple bad/typo Milwaukee model numbers (e.g. `M18 FVCL-0` doesn’t exist — actual model is `M18 FPOVCL-0`). Mapping a fake model wastes time and creates 404s / wrong-product matches.

### Verification steps
1. Search `uk.milwaukeetool.eu` or `makitauk.com` (manufacturer UK site) for the exact model number
2. If no result, search Big Red Power Tools (`bigredpowertools.co.uk`) — they often use exact Milwaukee/Makita model codes
3. If still no result, the model number is likely wrong — flag it and find the correct model before proceeding
4. Confirm the tool is **not discontinued** (persistent out-of-stock across multiple retailers can be a hint)

### Common model number mistakes to watch for
- Typos in model suffix (e.g. `ONEFHIW**P**12` vs `ONEFHIW**F**12`)
- Missing letters (e.g. `M18 FBS75` vs `M18 F**BTS**75`)
- Made-up generic names instead of real model codes
- US-only models that don’t exist in the UK range

---

## 1. ASIN Capture (Amazon UK)

### Rules
- **Only Amazon UK** (`amazon.co.uk`) — never `.com` or other regions
- **Affiliate tag:** `toolcheckeruk-21` — append `?tag=toolcheckeruk-21` to Amazon URLs
- Prefer **body-only listings** — don’t map to kits/bundles unless the DB tool is a kit
- **Confirm the ASIN matches the model**: search Amazon for the model, open listing, confirm title/specs match
- **Never guess an ASIN** — if you can’t find an exact-enough match, leave it unmapped

### Real-world note: Amazon variant collapsing
Amazon sometimes collapses multiple variants (e.g. body-only vs case/kit) onto a single product page/ASIN.
- If the page clearly covers the intended model/variant, it’s acceptable to use the shared ASIN.
- If it clearly only represents a kit when we need body-only (or vice versa), don’t map it.

### How to find the ASIN
1. Search `amazon.co.uk` for the exact model number (e.g. `Milwaukee M18FSZ-0`)
2. The ASIN is in the URL: `amazon.co.uk/dp/B08XD9MSKL` → ASIN is `B08XD9MSKL`
3. Verify listing is correct (brand, model, variant)

### Price display rule
- **Never store static Amazon prices** — they change constantly
- Always show “Check price on Amazon” with affiliate link

---

## 2. Retailer URL Discovery

### Retailer priority order (default)
1. **ITS** (`its.co.uk`) — most stable URLs, best coverage
2. **Screwfix** (`screwfix.com`) — great for popular tools, limited niche range
3. **Toolstation** (`toolstation.com`) — decent range but URLs restructure
4. **Powertool Mate** (`powertoolmate.co.uk`) — good stock, but URLs can 404 after restructures
5. **Machine Mart** (`machinemart.co.uk`) — limited cordless range

If `--retailers` is provided, follow that explicit list.

### ITS URL pattern (reliable)
ITS URLs follow a predictable pattern and rarely change:
```
https://its.co.uk/pd/<MODEL>-<Description>-_<BRAND><MODEL>.htm
```
Example: `https://its.co.uk/pd/M18FSZ-0X-Milwaukee-M18-FSZ-0X-..._MILM18FSZ0X.htm`

### URL validation (MANDATORY)
- Always fetch/test the URL before adding it
- If a URL returns **404**, do not add it
- If URL points to a **kit** page but the DB tool is **body-only**, do not add it
- If URL is a **different model**, do not add it

### Toolstation & Powertool Mate warning
Google often returns stale URLs. Prefer searching the retailer site directly.
- If you cannot verify the URL loads, skip that retailer
- Better 1 verified URL than 3 broken ones

---

## 3. Mapping File Format (CURRENT)

Mappings live in:
- `scraper/mappings/<brand>.json`

**Current structure (what the repo expects today):** the JSON is keyed by tool slug.

```json
{
  "milwaukee-m18-fuel-sawzall-reciprocating-saw": {
    "model": "M18 FSZ-0",
    "name": "M18 FUEL SAWZALL Reciprocating Saw (Body Only)",
    "retailers": {
      "ITS": "https://...",
      "Toolstation": "https://..."
    }
  }
}
```

### Placeholder rules (important)
- **In mappings (`scraper/mappings/*.json`)**: do **not** add placeholder URLs. Only include retailers you have a working URL for; omit the rest.
- **In tools DB (`lib/tools-db.ts`)**: we currently tolerate `"#"` as “TODO / not yet mapped” for some retailer URLs.

> Note: `verified/asin/null` fields are a *nice vNext schema idea*, but are **not** the current mapping format unless we also update the scraper to support them.

---

## 4. Scraping Workflow

Primary entrypoint:
```bash
scripts/run_toolchecker_scrape.sh
```

### Examples

Run Makita end-to-end:
```bash
scripts/run_toolchecker_scrape.sh --brand makita
```

Run Makita end-to-end with EOL audit report:
```bash
scripts/run_toolchecker_scrape.sh --brand makita --eol-audit
```

Run DeWalt but only for Screwfix + ITS:
```bash
scripts/run_toolchecker_scrape.sh --brand dewalt --retailers "Screwfix,ITS"
```

Scrape-only (no URL discovery, no git):
```bash
scripts/run_toolchecker_scrape.sh --brand milwaukee --no-find-urls --no-git
```

### Workflow steps
1. Generate/update brand mapping file from `lib/tools-db.ts`
2. Run URL discovery per retailer (`scraper/find-urls.js`)
3. Scrape prices (`scraper/index.js`)
4. Commit + push mapping + `data/prices/*.json`

---

## 5. Guardrails (Accuracy-First)

### URL matching
- Prefer rejecting ambiguous retailer matches over guessing
- If a retailer URL points to a kit/bundle page for a body-only tool, remove that mapping
- If the retailer page shows a **different** model number than expected, reject the match

### Price validation
- If a scrape produces an obviously wrong price (e.g. £2.16 for a radio), treat as a bad mapping and clear that retailer URL
- If a price is more than ~3× the typical range for that category, flag for manual review

### Duplicate modelNumber sanity check
Before committing tool DB changes, check for **duplicate (brand + modelNumber)** entries.
Duplicates cause search collisions and “wrong tool” pages.

### Model number gotchas (learned the hard way)
- Milwaukee caulking gun: ITS lists as **C18PCG/310C** not M18PCG — same product, different code
- Milwaukee belt sander: actual model is **M18FBTS75** not M18FBS75
- Milwaukee rod cutter: actual model is **M18BLTRC** not M18FTHRC
- Milwaukee transfer pump: actual model is **M18BTP** not M18TP
- Makita DDF487Z (drill driver) is different from DHP487Z (combi drill) — don’t confuse them
- Some twin 18V Makita tools (DHR283Z, DGA700Z) are not stocked on ITS — need alternative retailers

### Business/affiliate notes (non-blocking)
- Don’t add retailer links you can’t verify or aren’t approved to use.
- The site may display retailer names already; the key requirement is that links are correct and compliant.

---

## 6. EOL / Discontinued Audit

When running with `--eol-audit`, generate a report listing:
- Tools with 0 mapped retailer URLs
- Tools where all retailer URLs return 404
- Tools where the model number doesn’t match any results on the manufacturer UK site
- Tools flagged as discontinued by retailers

Output: `reports/eol-audit-<brand>-<date>.md`

---

## 7. Repo Assumptions

- Repo path: `/home/clacky445/toolcheckeruk`
- Mappings live in: `scraper/mappings/<brand>.json`
- Prices live in: `data/prices/<slug>.json`
- Tools DB: `lib/tools-db.ts`
- Affiliate tag: `toolcheckeruk-21`
- Git remote: `github.com/joelai368-droid/toolcheckeruk`

---

## 8. Quick Reference: Retailer Coverage by Brand

**Milwaukee:**
- ITS → excellent coverage, stable URLs
- Powertool Mate → good coverage but URLs break often
- Toolstation → limited range, mostly popular tools
- Screwfix → limited Milwaukee range

**Makita:**
- ITS → excellent coverage, stable URLs
- Toolstation → good range
- Screwfix → good range for popular models
- Powertool Mate → decent coverage

**DeWalt:**
- Screwfix → strong DeWalt range
- Toolstation → good range
- ITS → good coverage
