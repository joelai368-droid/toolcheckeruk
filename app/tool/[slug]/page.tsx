import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getToolBySlug, getAllTools, getCategoryDisplayName } from "@/lib/tools-db";
import { RetailerCard } from "@/components/retailer-card";
import { getScrapedPrices, mergeRetailers } from "@/lib/prices";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found | ToolCheckerUK" };

  const scraped = await getScrapedPrices(slug);
  const merged = mergeRetailers(tool.retailers, scraped);
  const pricedRetailers = merged.filter((r) => r.price != null && !r.checkPrice).sort((a, b) => a.price! - b.price!);
  const bestPrice = pricedRetailers[0]?.price;

  return {
    title: `${tool.brand} ${tool.name} — Best Price UK | ToolCheckerUK`,
    description: `Compare prices for the ${tool.brand} ${tool.name} (${tool.modelNumber}) across ${merged.length} UK retailers.${bestPrice ? ` Best price: £${bestPrice.toFixed(2)}.` : ""} Free delivery available.`,
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const scraped = await getScrapedPrices(slug);
  const allRetailers = mergeRetailers(tool.retailers, scraped);

  // Sort: in-stock with price first (cheapest), then out-of-stock, then check-price
  const pricedInStock = allRetailers.filter((r) => r.price != null && !r.checkPrice && r.inStock).sort((a, b) => a.price! - b.price!);
  const pricedOutOfStock = allRetailers.filter((r) => r.price != null && !r.checkPrice && !r.inStock).sort((a, b) => a.price! - b.price!);
  const checkPrice = allRetailers.filter((r) => r.checkPrice);
  const sortedRetailers = [...pricedInStock, ...pricedOutOfStock, ...checkPrice];

  const bestPrice = pricedInStock[0]?.price ?? 0;
  const worstPrice = pricedInStock[pricedInStock.length - 1]?.price ?? 0;

  // Last updated: most recent scrape timestamp across all retailers
  const scrapedTimestamps = sortedRetailers.filter((r) => r.lastScraped).map((r) => new Date(r.lastScraped!).getTime());
  const lastUpdated = scrapedTimestamps.length > 0 ? Math.max(...scrapedTimestamps) : null;

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0C", color: "#E4E4E7", fontFamily: "'Outfit', sans-serif" }}>
      {/* Header */}
      <header style={{
        padding: "18px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #222228",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{
            width: "34px", height: "34px",
            background: "#CFFF04",
            borderRadius: "6px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "19px", color: "#0A0A0C",
            fontFamily: "'JetBrains Mono', monospace",
          }}>T</div>
          <span style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-0.03em", color: "#E4E4E7" }}>
            tool<span style={{ color: "#4E4E56" }}>checker</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#555", marginLeft: "5px", verticalAlign: "super" }}>UK</span>
          </span>
        </Link>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#555", letterSpacing: "0.06em" }}>
          UK PRICES · VAT INCL.
        </span>
      </header>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "13px", color: "#4E4E56", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#4E4E56", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <Link href={`/category/${tool.category}`} style={{ color: "#4E4E56", textDecoration: "none" }}>
            {getCategoryDisplayName(tool.category)}
          </Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#8E8E96" }}>{tool.brand} {tool.modelNumber}</span>
        </nav>

        {/* Tool info */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "12px", color: "#4E4E56", marginBottom: "6px", fontFamily: "'JetBrains Mono', monospace" }}>
            {tool.brand} &middot; {tool.modelNumber} &middot; {sortedRetailers.length} retailers found
            {lastUpdated && (
              <span style={{ marginLeft: "8px", color: "#3A3A42" }}>
                &middot; updated {new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
                  -Math.round((Date.now() - lastUpdated) / 3600000), 'hour'
                )}
              </span>
            )}
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#E4E4E7", letterSpacing: "-0.02em", marginBottom: "10px" }}>
            {tool.brand} {tool.name}
          </h1>
          <p style={{ fontSize: "14px", color: "#8E8E96", lineHeight: 1.6 }}>
            {tool.description}
          </p>
        </div>

        {/* Price range */}
        <div style={{
          background: "#111114",
          border: "1px solid #222228",
          borderRadius: "10px",
          padding: "16px 20px",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: "12px", color: "#4E4E56", marginBottom: "4px" }}>Price range</div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#E4E4E7", fontFamily: "'JetBrains Mono', monospace" }}>
              &pound;{bestPrice.toFixed(2)} &mdash; &pound;{worstPrice.toFixed(2)}
            </div>
          </div>
          {worstPrice > bestPrice && (
            <div style={{
              fontSize: "13px", fontWeight: 600, color: "#CFFF04",
              background: "rgba(207, 255, 4, 0.08)",
              padding: "8px 14px", borderRadius: "7px",
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              Save up to &pound;{(worstPrice - bestPrice).toFixed(2)}
            </div>
          )}
        </div>

        {/* Retailer cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {sortedRetailers.map((retailer) => (
            <RetailerCard key={retailer.name} result={retailer} isBest={!retailer.checkPrice && retailer.price === bestPrice} />
          ))}
        </div>

        <div style={{
          marginTop: "32px",
          padding: "16px",
          border: "1px dashed #222228",
          borderRadius: "10px",
          textAlign: "center",
          fontSize: "13px",
          color: "#4E4E56",
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          {lastUpdated
            ? `Prices last checked ${new Date(lastUpdated).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} · `
            : "Prices updated regularly · "}
          VAT included &middot; We may earn a commission from purchases
        </div>
      </div>

      <footer style={{
        borderTop: "1px solid #1A1A1F",
        padding: "24px",
        textAlign: "center",
        fontSize: "11px",
        color: "#333",
        letterSpacing: "0.04em",
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        toolcheckeruk.co.uk &mdash; compare power tool prices across UK retailers
      </footer>
    </div>
  );
}
