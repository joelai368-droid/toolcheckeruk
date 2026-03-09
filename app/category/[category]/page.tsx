import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getToolsByCategory, getAllCategories, getCategoryDisplayName } from "@/lib/tools-db";
import { ToolCard } from "@/components/tool-card";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const displayName = getCategoryDisplayName(category);
  const tools = getToolsByCategory(category);
  if (tools.length === 0) return { title: "Category Not Found | ToolCheckerUK" };

  const prices = tools.flatMap((t) => t.retailers.filter((r) => r.url !== "#").map((r) => r.price));
  const bestPrice = prices.length ? Math.min(...prices) : 0;

  return {
    title: `Best ${displayName} Deals UK — Compare Prices | ToolCheckerUK`,
    description: `Compare prices on ${tools.length} ${displayName.toLowerCase()} from top UK retailers. Prices from £${bestPrice.toFixed(2)}. Milwaukee, DeWalt, Makita, Bosch and more.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const tools = getToolsByCategory(category);
  if (tools.length === 0) notFound();

  const displayName = getCategoryDisplayName(category);
  const allCategories = getAllCategories();

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

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "13px", color: "#4E4E56", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#4E4E56", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#8E8E96" }}>{displayName}</span>
        </nav>

        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "12px", color: "#4E4E56", marginBottom: "6px", fontFamily: "'JetBrains Mono', monospace" }}>
            {tools.length} tools found
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#E4E4E7", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            {displayName}
          </h1>
          <p style={{ fontSize: "14px", color: "#8E8E96", lineHeight: 1.6 }}>
            Compare prices across UK retailers for the best {displayName.toLowerCase()} deals.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          {allCategories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "13px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.15s",
                background: cat === category ? "#CFFF04" : "#111114",
                color: cat === category ? "#0A0A0C" : "#8E8E96",
                border: cat === category ? "1px solid #CFFF04" : "1px solid #222228",
              }}
            >
              {getCategoryDisplayName(cat)}
            </Link>
          ))}
        </div>

        {/* Tool cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
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
