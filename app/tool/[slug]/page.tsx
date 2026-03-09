import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getToolBySlug, getAllTools, getCategoryDisplayName } from "@/lib/tools-db";
import { RetailerCard } from "@/components/retailer-card";

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

  const sortedRetailers = [...tool.retailers].filter((r) => r.url !== "#").sort((a, b) => a.price - b.price);
  const bestPrice = sortedRetailers[0]?.price;

  return {
    title: `${tool.brand} ${tool.name} — Best Price UK | ToolCheckerUK`,
    description: `Compare prices for the ${tool.brand} ${tool.name} (${tool.modelNumber}) across ${sortedRetailers.length} UK retailers. Best price: £${bestPrice?.toFixed(2)}. Free delivery available.`,
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const sortedRetailers = [...tool.retailers].filter((r) => r.url !== "#").sort((a, b) => a.price - b.price);
  const bestPrice = sortedRetailers[0]?.price ?? 0;
  const worstPrice = sortedRetailers[sortedRetailers.length - 1]?.price ?? 0;

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
          <Link href={`/category/${tool.category}`} className="hover:text-gray-600 no-underline text-gray-400">
            {getCategoryDisplayName(tool.category)}
          </Link>
          <span>&rsaquo;</span>
          <span className="text-gray-600">{tool.brand} {tool.modelNumber}</span>
        </nav>

        {/* Tool info */}
        <div className="mb-6">
          <div className="text-[13px] text-gray-400 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
            {tool.brand} &middot; {tool.modelNumber} &middot; {sortedRetailers.length} retailers found
          </div>
          <h1 className="text-xl font-bold text-gray-900 leading-snug" style={{ letterSpacing: "-0.02em" }}>
            {tool.brand} {tool.name}
          </h1>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Price range bar */}
        <div className="bg-white rounded-xl border border-gray-200 px-5 py-4 mb-5 flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-400 mb-0.5">Price range</div>
            <div className="text-lg font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>
              &pound;{bestPrice.toFixed(2)} &mdash; &pound;{worstPrice.toFixed(2)}
            </div>
          </div>
          {worstPrice > bestPrice && (
            <div className="bg-green-50 text-green-600 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>
              Save up to &pound;{(worstPrice - bestPrice).toFixed(2)}
            </div>
          )}
        </div>

        {/* Retailer cards */}
        <div className="flex flex-col gap-3">
          {sortedRetailers.map((retailer) => (
            <RetailerCard key={retailer.name} result={retailer} isBest={retailer.price === bestPrice} />
          ))}
        </div>

        <div className="mt-8 p-4 bg-white rounded-xl border border-dashed border-gray-300 text-center text-[13px] text-gray-400">
          Prices updated regularly &middot; VAT included &middot; We may earn a commission from purchases
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-300" style={{ fontFamily: "'DM Mono', monospace" }}>
        toolcheckeruk.co.uk &mdash; compare power tool prices across UK retailers
      </footer>
    </div>
  );
}
