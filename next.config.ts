import type { NextConfig } from "next";

// NOTE: We read scraped price JSONs from the repo at runtime using fs.
// On Vercel/Next.js, those files must be included in the serverless output tracing,
// otherwise production builds can end up with only the static (Amazon) retailer list.
const nextConfig: NextConfig = {
  // Ensure all scraped price JSONs are bundled into the server output.
  // This is critical for getScrapedPrices() in lib/prices.ts.
  outputFileTracingIncludes: {
    // App Router dynamic route
    "/tool/[slug]": ["./data/prices/**/*.json"],
    // Also include for metadata generation / any other route that reads prices.
    "/": ["./data/prices/**/*.json"],
  },
};

export default nextConfig;
