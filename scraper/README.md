# ToolCheckerUK Price Scraper

## First-time setup

```bash
# Install dependencies (if not already done)
npm install

# Step 1: Find retailer URLs for all Milwaukee tools
node scraper/find-urls.js

# Step 2: Run a test scrape (dry run — no files saved, no git commit)
node scraper/index.js --dry-run

# Step 3: Run for real
node scraper/index.js --no-commit
```

## Commands

```bash
# Find URLs for one tool only
node scraper/find-urls.js --slug milwaukee-m18-fuel-combi-drill

# Find URLs on one retailer only
node scraper/find-urls.js --retailer Screwfix

# Scrape one tool
node scraper/index.js --slug milwaukee-m18-fuel-combi-drill

# Scrape all, skip git commit
node scraper/index.js --no-commit

# Full run with git commit + push (production)
node scraper/index.js
```

## Cron setup (GCP instance)

```bash
crontab -e
```

Add this line (runs at midnight, 6am, noon, 6pm UK time):

```
0 0,6,12,18 * * * cd /home/clacky445/toolcheckeruk && node scraper/index.js >> /home/clacky445/scraper.log 2>&1
```

## File structure

```
scraper/
  index.js          — main runner
  find-urls.js      — searches retailers for product URLs, populates mappings
  core.js           — HTTP client (rate limiting, user agent rotation)
  parsers/
    screwfix.js
    toolstation.js
    ffx.js
    its.js
    powertoolmate.js
    machinemart.js
  mappings/
    milwaukee.json  — slug → model + retailer URLs

data/
  prices/
    [slug].json     — scraped price data per tool
```

## How it works

1. `find-urls.js` searches each retailer for each Milwaukee model number and saves URLs to `mappings/milwaukee.json`
2. `index.js` loads those URLs, fetches each page, extracts price/stock, saves to `data/prices/[slug].json`
3. After scraping, it git commits the price files and pushes — Vercel redeploys automatically
4. The Next.js frontend reads price files at build time via `lib/prices.ts`

## Adding a new retailer

1. Create `scraper/parsers/yourretailer.js` (copy an existing one as template)
2. Add it to the `parsers` object in both `index.js` and `find-urls.js`
3. Add delivery info to `RETAILER_DELIVERY` in `lib/prices.ts`
4. Run `node scraper/find-urls.js --retailer "Your Retailer"`

## Robots.txt policy

The scraper checks robots.txt before scraping each site. If a path is disallowed, it skips that page.
Rate limit: min 3 seconds between requests to the same site.
If a retailer asks us to stop scraping, remove it from the parsers list.
