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

  const prices = tools.flatMap((t) => t.retailers.map((r) => r.price));
  const bestPrice = Math.min(...prices);

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

  return (
    <div className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-gray-200 bg-white">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-lg text-gray-900"
            style={{ background: "#D4F43E", fontFamily: "'DM Mono', monospace" }}
          >
            T
          </div>
          <span className="text-lg font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            tool<span className="text-gray-400">checker</span>
            <span className="text-[10px] font-normal text-gray-300 ml-1">UK</span>
          </span>
        </Link>
        <div className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full" style={{ fontFamily: "'DM Mono', monospace" }}>
          UK prices &middot; VAT incl.
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 pt-8 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6 flex gap-1.5 items-center">
          <Link href="/" className="hover:text-gray-600 no-underline text-gray-400">Home</Link>
          <span>&rsaquo;</span>
          <span className="text-gray-600">{displayName}</span>
        </nav>

        <div className="mb-6">
          <div className="text-[13px] text-gray-400 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
            {tools.length} tools found
          </div>
          <h1 className="text-xl font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            {displayName}
          </h1>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Compare prices across UK retailers for the best {displayName.toLowerCase()} deals.
          </p>
        </div>

        {/* Category navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {getAllCategories().map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className={`px-3.5 py-1.5 rounded-full text-[13px] no-underline transition-all ${
                cat === category
                  ? "bg-gray-900 text-white font-semibold"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-[#D4F43E] hover:bg-[#fbffe6]"
              }`}
            >
              {getCategoryDisplayName(cat)}
            </Link>
          ))}
        </div>

        {/* Tool cards */}
        <div className="flex flex-col gap-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-300" style={{ fontFamily: "'DM Mono', monospace" }}>
        toolcheckeruk.co.uk &mdash; compare power tool prices across UK retailers
      </footer>
    </div>
  );
}
