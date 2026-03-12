#!/bin/bash
# Force-run the scraper immediately (same as cron would run it)
cd /home/clacky445/toolcheckeruk
node scraper/index.js "$@" 2>&1 | tee -a /home/clacky445/scraper.log
