import { readdir, readFile } from "fs/promises";
import path from "path";

export interface MappingEntry {
  model: string;
  name: string;
  retailers: Record<string, string>;
}

type MappingIndex = Record<string, MappingEntry>;

let cachedIndex: MappingIndex | null = null;

async function loadAllMappings(): Promise<MappingIndex> {
  if (cachedIndex) return cachedIndex;

  const dir = path.join(process.cwd(), "scraper", "mappings");
  const files = (await readdir(dir)).filter((f) => f.endsWith(".json"));

  const index: MappingIndex = {};

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const raw = await readFile(fullPath, "utf8");
    const json = JSON.parse(raw) as Record<string, MappingEntry>;

    for (const [slug, entry] of Object.entries(json)) {
      // Later files shouldn't override earlier ones — but in practice slugs should be unique.
      if (!index[slug]) index[slug] = entry;
    }
  }

  cachedIndex = index;
  return index;
}

/**
 * Return mapping retailers for a tool slug (if any).
 * These URLs are the source of truth for scraping.
 */
export async function getMappedRetailers(slug: string): Promise<Record<string, string>> {
  const index = await loadAllMappings();
  return index[slug]?.retailers ?? {};
}
