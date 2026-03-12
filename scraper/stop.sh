#!/bin/bash
# Stop any running scraper process
PIDS=$(pgrep -f "node scraper/index.js")
if [ -z "$PIDS" ]; then
  echo "No scraper running."
else
  echo "Stopping scraper (PIDs: $PIDS)..."
  kill $PIDS
  echo "Done."
fi
