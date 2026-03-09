"use client";
import { useState, useEffect, useRef } from "react";
import { searchTools, getAllTools, type Tool, type Retailer } from "@/lib/tools-db";

const POPULAR_SEARCHES = [
  "Milwaukee M12 impact",
  "DeWalt 18V combi drill",
  "Makita circular saw",
  "Bosch SDS drill",
];

const RETAILER_COLORS: Record<string, string> = {
  "Screwfix": "#ff6900",
  "Toolstation": "#0054a6",
  "Amazon UK": "#ff9900",
  "FFX Tools": "#e31e24",
  "ITS": "#00a651",
  "Powertool World": "#1a1a2e",
  "Machine Mart": "#cc0000",
};

function SearchIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ResultCard({ result, index, bestPrice }: { result: Retailer; index: number; bestPrice: number | null }) {
  const isBest = result.price === bestPrice;
  const saving = result.originalPrice ? (result.originalPrice - result.price).toFixed(2) : null;
  const accentColor = RETAILER_COLORS[result.name] || "#666";

  return (
    <div
      className="bg-white rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      style={{
        border: isBest ? "2px solid #D4F43E" : "1px solid #e8e8e8",
        opacity: 0,
        animation: `cardSlideIn 0.4s ease forwards ${index * 0.08}s`,
      }}
    >
      {isBest && (
        <div
          className="text-[11px] font-bold uppercase tracking-wider px-4 py-1"
          style={{ background: "#D4F43E", color: "#1a1a1a", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}
        >
          Best Price
        </div>
      )}

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2 text-base font-bold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: accentColor }} />
            {result.name}
          </div>
          <div className="text-right">
            <div className="text-[28px] font-extrabold text-gray-900 leading-none" style={{ fontFamily: "'DM Mono', monospace" }}>
              £{result.price.toFixed(2)}
            </div>
            {result.originalPrice && (
              <div className="text-[13px] text-gray-400 line-through" style={{ fontFamily: "'DM Mono', monospace" }}>
                £{result.originalPrice.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {saving && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-md" style={{ fontFamily: "'DM Mono', monospace" }}>
              <TagIcon /> Save £{saving}
            </span>
          )}
          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md ${result.inStock ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
            {result.inStock ? <CheckIcon /> : <XIcon />}
            {result.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
            <TruckIcon /> {result.delivery}
          </span>
          {result.clickCollect && (
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
              <StoreIcon /> Click & Collect
            </span>
          )}
        </div>

        <a
          href={result.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full py-3 bg-gray-900 text-white rounded-lg text-sm font-semibold cursor-pointer transition-colors hover:bg-gray-700 text-center no-underline"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.02em" }}
        >
          View Deal →
        </a>
      </div>
    </div>
  );
}

function ToolResultCard({ tool, onClick }: { tool: Tool; onClick: () => void }) {
  const sortedRetailers = [...tool.retailers].sort((a, b) => a.price - b.price);
  const bestPrice = sortedRetailers[0]?.price;
  const worstPrice = sortedRetailers[sortedRetailers.length - 1]?.price;

  return (
    <div
      className="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      onClick={onClick}
      style={{ opacity: 0, animation: `cardSlideIn 0.4s ease forwards` }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-xs text-gray-400 font-medium mb-1">{tool.brand} · {tool.modelNumber}</div>
          <div className="text-base font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            {tool.name}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-extrabold text-gray-900" style={{ fontFamily: "'DM Mono', monospace" }}>
            £{bestPrice?.toFixed(2)}
          </div>
          <div className="text-[11px] text-gray-400">best of {sortedRetailers.length}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-400">
          Price range: £{bestPrice?.toFixed(2)} — £{worstPrice?.toFixed(2)}
        </div>
        {bestPrice && worstPrice && worstPrice > bestPrice && (
          <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded" style={{ fontFamily: "'DM Mono', monospace" }}>
            Save up to £{(worstPrice - bestPrice).toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [matchedTools, setMatchedTools] = useState<Tool[]>([]);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [searching, setSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (searchQuery?: string) => {
    const q = (searchQuery || query).trim();
    if (!q) return;

    setSearching(true);
    setSelectedTool(null);
    setHasSearched(true);

    setTimeout(() => {
      const results = searchTools(q);
      setMatchedTools(results);

      // If only one result, show it directly
      if (results.length === 1) {
        setSelectedTool(results[0]);
      }

      setSearching(false);
    }, 600);
  };

  const handleSelectTool = (tool: Tool) => {
    setSelectedTool(tool);
  };

  const handleBack = () => {
    setSelectedTool(null);
  };

  const handleReset = () => {
    setMatchedTools([]);
    setSelectedTool(null);
    setQuery("");
    setHasSearched(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sortedRetailers = selectedTool
    ? [...selectedTool.retailers].filter((r) => r.url !== "#").sort((a, b) => a.price - b.price)
    : [];
  const bestPrice = sortedRetailers.length ? sortedRetailers[0].price : null;
  const showingResults = hasSearched && !searching;

  return (
    <div className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>

      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleReset}>
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
        </div>
        <div className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full" style={{ fontFamily: "'DM Mono', monospace" }}>
          UK prices · VAT incl.
        </div>
      </header>

      {/* Hero / Search */}
      {!showingResults && !searching ? (
        <div className="flex flex-col items-center justify-center px-6 pt-28 pb-20" style={{ animation: "heroIn 0.6s ease forwards" }}>
          <div className="text-[13px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            Compare prices across UK tool retailers
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center leading-tight mb-3 max-w-xl" style={{ letterSpacing: "-0.03em" }}>
            Find the best deal<br />
            <span className="text-gray-400">on any power tool</span>
          </h1>

          <p className="text-base text-gray-400 text-center mb-10 max-w-md leading-relaxed">
            Search by name, model number, or just describe what you&apos;re after. We&apos;ll check Screwfix, Toolstation, Amazon, and more.
          </p>

          <div className="w-full max-w-xl relative mb-8">
            <div className="flex bg-white rounded-[14px] border-2 border-gray-200 overflow-hidden focus-within:border-[#D4F43E] focus-within:shadow-[0_0_0_4px_rgba(212,244,62,0.15)] transition-all">
              <div className="pl-4 flex items-center text-gray-300">
                <SearchIcon size={22} />
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder='Try "Milwaukee M12 impact" or "Makita circular saw"'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 border-none py-4 px-3 text-base text-gray-900 bg-transparent outline-none placeholder:text-gray-400"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              />
              <button
                onClick={() => handleSearch()}
                className="m-2 px-6 py-2.5 bg-gray-900 text-white rounded-[10px] text-[15px] font-semibold cursor-pointer transition-colors hover:bg-gray-700 whitespace-nowrap"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-[13px] text-gray-400 py-1.5">Popular:</span>
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => { setQuery(term); handleSearch(term); }}
                className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-[13px] text-gray-500 cursor-pointer transition-all hover:border-[#D4F43E] hover:bg-[#fbffe6]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {term}
              </button>
            ))}
          </div>

          {/* Trust signals */}
          <div className="mt-16 flex gap-8 flex-wrap justify-center">
            {[
              { num: "10+", label: "UK Retailers" },
              { num: String(getAllTools().length) + "+", label: "Tools Compared" },
              { num: "£0", label: "Always Free" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {num}
                </div>
                <div className="text-[13px] text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Results / Loading view */
        <div className="max-w-2xl mx-auto px-6 pt-8 pb-20">
          {/* Inline search bar */}
          <div className="flex bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
            <div className="pl-4 flex items-center text-gray-300">
              <SearchIcon size={18} />
            </div>
            <input
              type="text"
              placeholder="Search for another tool..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 border-none py-3.5 px-3 text-[15px] text-gray-900 bg-transparent outline-none placeholder:text-gray-400"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            />
            <button
              onClick={() => handleSearch()}
              className="m-1.5 px-5 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold cursor-pointer"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Search
            </button>
          </div>

          {searching ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="flex gap-1.5 mb-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: "#D4F43E",
                      animation: `dotBounce 1.4s infinite ease-in-out both`,
                      animationDelay: `${i * 0.16}s`,
                    }}
                  />
                ))}
              </div>
              <div className="text-[15px] text-gray-400">
                Checking prices across UK retailers...
              </div>
            </div>
          ) : selectedTool ? (
            /* Single tool detail view */
            <>
              {matchedTools.length > 1 && (
                <button
                  onClick={handleBack}
                  className="text-sm text-gray-400 hover:text-gray-600 mb-4 cursor-pointer"
                >
                  ← Back to results
                </button>
              )}

              <div className="mb-6">
                <div className="text-[13px] text-gray-400 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {selectedTool.brand} · {selectedTool.modelNumber} · {sortedRetailers.length} retailers found
                </div>
                <h2 className="text-xl font-bold text-gray-900 leading-snug" style={{ letterSpacing: "-0.02em" }}>
                  {selectedTool.brand} {selectedTool.name}
                </h2>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {selectedTool.description}
                </p>
              </div>

              {/* Price range bar */}
              <div className="bg-white rounded-xl border border-gray-200 px-5 py-4 mb-5 flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Price range</div>
                  <div className="text-lg font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>
                    £{Math.min(...sortedRetailers.map(r => r.price)).toFixed(2)} — £{Math.max(...sortedRetailers.map(r => r.price)).toFixed(2)}
                  </div>
                </div>
                <div className="bg-green-50 text-green-600 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Save up to £{(Math.max(...sortedRetailers.map(r => r.price)) - Math.min(...sortedRetailers.map(r => r.price))).toFixed(2)}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {sortedRetailers.map((retailer, i) => (
                  <ResultCard key={retailer.name} result={retailer} index={i} bestPrice={bestPrice} />
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border border-dashed border-gray-300 text-center text-[13px] text-gray-400">
                Prices updated regularly · VAT included · We may earn a commission from purchases
              </div>
            </>
          ) : matchedTools.length > 0 ? (
            /* Multiple tools found */
            <>
              <div className="mb-6">
                <div className="text-[13px] text-gray-400 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {matchedTools.length} tools found
                </div>
                <h2 className="text-xl font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
                  Select a tool to compare prices
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {matchedTools.map((tool) => (
                  <ToolResultCard key={tool.slug} tool={tool} onClick={() => handleSelectTool(tool)} />
                ))}
              </div>
            </>
          ) : (
            /* No results */
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-sm text-gray-400 mb-6">
                Try searching by brand and model, e.g. &quot;Milwaukee M12 impact driver&quot;
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => { setQuery(term); handleSearch(term); }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[13px] text-gray-500 cursor-pointer"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-300" style={{ fontFamily: "'DM Mono', monospace" }}>
        toolcheckeruk.co.uk — compare power tool prices across UK retailers
      </footer>
    </div>
  );
}
