#!/usr/bin/env bash
set -euo pipefail

cd /home/clacky445/toolcheckeruk

# Scrape current prices (no URL discovery)
node scraper/index.js

# If nothing changed, exit quietly
if git diff --quiet; then
  exit 0
fi

# Variant mismatch audit (guardrail)
# If this flags anything, we stop BEFORE committing/pushing so we don't ship kit/wrong-variant links.
AUDIT_OUT=$(node scripts/audit-variant-mismatch.mjs || true)
echo "$AUDIT_OUT"
FLAGGED=$(echo "$AUDIT_OUT" | sed -n 's/^Flagged: \([0-9][0-9]*\)$/\1/p' | tail -n 1)
FLAGGED=${FLAGGED:-0}

if [ "$FLAGGED" -gt 0 ]; then
  echo "Variant audit flagged $FLAGGED item(s). Not committing/pushing. Review the report in /reports/."
  exit 1
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
