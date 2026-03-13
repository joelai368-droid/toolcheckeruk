#!/usr/bin/env bash
set -euo pipefail

cd /home/clacky445/toolcheckeruk

# Scrape current prices (no URL discovery)
node scraper/index.js

# If nothing changed, exit quietly
if git diff --quiet; then
  exit 0
fi

# Commit + push price updates
# (Keep commit messages consistent so history is readable.)
TS=$(date -u +"%Y-%m-%d")
git add data/prices/*.json || true

# If add matched nothing, bail
if git diff --cached --quiet; then
  exit 0
fi

git commit -m "chore(prices): daily scrape ${TS}" || exit 0

git push
