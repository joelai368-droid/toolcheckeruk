import { getToolBySlug } from "@/lib/tools-db";
import { getScrapedPrices, mergeRetailers, type MergedRetailer } from "@/lib/prices";
import { getMappedRetailers } from "@/lib/mappings";

/**
 * Merge retailers for a tool slug using:
 * 1) static retailers (tools-db)
 * 2) mapping URLs (scraper/mappings/*.json)
 * 3) scraped prices (data/prices/*.json)
 */
export async function getMergedRetailersForTool(slug: string): Promise<MergedRetailer[]> {
  const tool = getToolBySlug(slug);
  if (!tool) return [];

  const mapped = await getMappedRetailers(slug);
  const scraped = await getScrapedPrices(slug);

  // Resolve static retailer placeholders (#) using mappings.
  // Also add any mapping retailers that aren't present in static retailers.
  const staticByName = new Map(tool.retailers.map((r) => [r.name, { ...r }]));

  for (const [name, url] of Object.entries(mapped)) {
    const existing = staticByName.get(name);
    if (existing) {
      if (existing.url === "#") existing.url = url;
    } else {
      staticByName.set(name, {
        name,
        inStock: true,
        delivery: "Check site",
        clickCollect: false,
        url,
      });
    }
  }

  const resolvedStatic = [...staticByName.values()];
  return mergeRetailers(resolvedStatic, scraped);
}
