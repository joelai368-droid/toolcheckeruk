import fs from 'fs';
import path from 'path';

export interface ScrapedRetailerData {
  price?: number;
  inStock?: boolean;
  name?: string;
  url: string;
  lastScraped?: string;
  lastAttempted?: string;
  scrapeError?: string;
  error?: string;
}

export interface ScrapedPrices {
  slug: string;
  model: string;
  lastScraped: string;
  retailers: Record<string, ScrapedRetailerData>;
}

const PRICES_DIR = path.join(process.cwd(), 'data/prices');
const MAX_PRICE_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours — hide stale data

export function getScrapedPrices(slug: string): ScrapedPrices | null {
  const file = path.join(PRICES_DIR, `${slug}.json`);
  try {
    if (!fs.existsSync(file)) return null;
    const data: ScrapedPrices = JSON.parse(fs.readFileSync(file, 'utf8'));
    return data;
  } catch {
    return null;
  }
}

export interface MergedRetailer {
  name: string;
  price?: number;
  originalPrice?: number;
  checkPrice?: boolean;
  inStock: boolean;
  delivery: string;
  clickCollect: boolean;
  url: string;
  lastScraped?: string;
  isScraped?: boolean;
  dataAge?: string; // e.g. "2 hours ago"
}

/**
 * Format a timestamp as a relative "X ago" string.
 */
export function formatAge(isoString: string): string {
  const ms = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(ms / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

/**
 * Delivery text per retailer (static — these don't change often).
 */
const RETAILER_DELIVERY: Record<string, { delivery: string; clickCollect: boolean }> = {
  'Screwfix': { delivery: 'Free over £50', clickCollect: true },
  'Toolstation': { delivery: 'Free over £25', clickCollect: true },
  'FFX Tools': { delivery: 'Free over £99', clickCollect: false },
  'ITS': { delivery: '£4.99', clickCollect: false },
  'Powertool Mate': { delivery: 'Free over £100', clickCollect: false },
  'Machine Mart': { delivery: 'Free over £30', clickCollect: true },
};

/**
 * Merge scraped prices with the static retailer list from tools-db.
 * Scraped data takes priority for price/stock. Static data provides delivery info.
 * Returns retailers with scraped data first, then static-only, then Amazon.
 */
export function mergeRetailers(
  staticRetailers: Array<{
    name: string;
    price?: number;
    originalPrice?: number;
    checkPrice?: boolean;
    inStock: boolean;
    delivery: string;
    clickCollect: boolean;
    url: string;
  }>,
  scraped: ScrapedPrices | null
): MergedRetailer[] {
  const result: MergedRetailer[] = [];
  const scrapedNames = new Set<string>();

  // Add scraped retailers
  if (scraped?.retailers) {
    for (const [name, data] of Object.entries(scraped.retailers)) {
      if (data.error && !data.price) continue; // skip if never had a price and currently erroring

      const isStale = data.lastScraped
        ? Date.now() - new Date(data.lastScraped).getTime() > MAX_PRICE_AGE_MS
        : true;

      if (isStale && !data.price) continue; // skip stale with no price

      const delivery = RETAILER_DELIVERY[name] || { delivery: 'Check site', clickCollect: false };
      scrapedNames.add(name);

      result.push({
        name,
        price: isStale ? undefined : data.price,
        inStock: data.inStock ?? false,
        delivery: delivery.delivery,
        clickCollect: delivery.clickCollect,
        url: data.url,
        lastScraped: data.lastScraped,
        isScraped: true,
        dataAge: data.lastScraped ? formatAge(data.lastScraped) : undefined,
        checkPrice: isStale ? true : undefined,
      });
    }
  }

  // Add static retailers that weren't in scraped data (including Amazon)
  for (const r of staticRetailers) {
    if (scrapedNames.has(r.name)) continue; // already have scraped version
    if (r.url === '#') continue; // skip unmapped placeholders
    result.push({ ...r });
  }

  return result;
}
