"use client";
import { useState, useEffect, useRef } from "react";

const SAMPLE_RESULTS: Record<string, Result[]> = {
  "milwaukee m12 fuel impact driver": [
    { retailer: "Screwfix", price: 129.99, originalPrice: 159.99, inStock: true, delivery: "Free over £50", clickCollect: true, url: "#" },
    { retailer: "Toolstation", price: 134.99, originalPrice: null, inStock: true, delivery: "£5.00", clickCollect: true, url: "#" },
    { retailer: "Amazon UK", price: 127.49, originalPrice: 149.99, inStock: true, delivery: "Free (Prime)", clickCollect: false, url: "#" },
    { retailer: "FFX Tools", price: 131.99, originalPrice: 155.00, inStock: true, delivery: "Free over £99", clickCollect: false, url: "#" },
    { retailer: "ITS", price: 126.99, originalPrice: null, inStock: false, delivery: "£4.99", clickCollect: false, url: "#" },
  ],
  "dewalt 18v combi drill": [
    { retailer: "Screwfix", price: 149.99, originalPrice: 179.99, inStock: true, delivery: "Free over £50", clickCollect: true, url: "#" },
    { retailer: "Toolstation", price: 154.99, originalPrice: null, inStock: true, delivery: "£5.00", clickCollect: true, url: "#" },
    { retailer: "Amazon UK", price: 142.00, originalPrice: 169.99, inStock: true, delivery: "Free (Prime)", clickCollect: false, url: "#" },
    { retailer: "FFX Tools", price: 147.50, originalPrice: null, inStock: true, delivery: "Free over £99", clickCollect: false, url: "#" },
  ],
  "makita dhs680z circular saw": [
    { retailer: "Amazon UK", price: 174.99, originalPrice: 209.99, inStock: true, delivery: "Free (Prime)", clickCollect: false, url: "#" },
    { retailer: "Screwfix", price: 189.99, originalPrice: null, inStock: true, delivery: "Free over £50", clickCollect: true, url: "#" },
    { retailer: "ITS", price: 169.99, originalPrice: 199.99, inStock: true, delivery: "£4.99", clickCollect: false, url: "#" },
    { retailer: "Powertool World", price: 172.50, originalPrice: null, inStock: true, delivery: "Free over £100", clickCollect: false, url: "#" },
  ],
};

const POPULAR_SEARCHES = [
  "Milwaukee M12 Fuel Impact Driver",
  "DeWalt 18V Combi Drill",
  "Makita DHS680Z Circular Saw",
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

interface Result {
  retailer: string;
  price: number;
  originalPrice: number | null;
  inStock: boolean;
  delivery: string;
  clickCollect: boolean;
  url: string;
}

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

function ResultCard({ result, index, bestPrice }: { result: Result; index: number; bestPrice: number | null }) {
  const isBest = result.price === bestPrice;
  const saving = result.originalPrice ? (result.originalPrice - result.price).toFixed(2) : null;
  const accentColor = RETAILER_COLORS[result.retailer] || "#666";

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
            {result.retailer}
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

        <button className="w-full py-3 bg-gray-900 text-white rounded-lg text-sm font-semibold cursor-pointer transition-colors hover:bg-gray-700" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.02em" }}>
          View Deal →
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[] | null>(null);
  const [searching, setSearching] = useState(false);
  const [resolvedName, setResolvedName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (searchQuery?: string) => {
    const q = (searchQuery || query).trim().toLowerCase();
    if (!q) return;

    setSearching(true);
    setResults(null);

    setTimeout(() => {
      const key = Object.keys(SAMPLE_RESULTS).find((k) => {
        const words = q.split(" ");
        return words.some((w) => k.includes(w)) || k.includes(q);
      });

      if (key) {
        const sorted = [...SAMPLE_RESULTS[key]].sort((a, b) => a.price - b.price);
        setResults(sorted);
        setResolvedName(
          key === "milwaukee m12 fuel impact driver"
            ? 'Milwaukee M12 FIWF12-0 — M12 FUEL 1/2" Stubby Impact Wrench (Body Only)'
            : key === "dewalt 18v combi drill"
            ? "DeWalt DCD796N — 18V XR Brushless Combi Drill (Body Only)"
            : "Makita DHS680Z — 18V LXT Brushless 165mm Circular Saw (Body Only)"
        );
      } else {
        setResults([]);
        setResolvedName("");
      }
      setSearching(false);
    }, 1200);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const bestPrice = results?.length ? Math.min(...results.map((r) => r.price)) : null;

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
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => { setResults(null); setQuery(""); setResolvedName(""); }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-lg text-gray-900"
            style={{ background: "#D4F43E", fontFamily: "'DM Mono', monospace" }}
          >
            T
          </div>
          <span className="text-lg font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            tool<span className="text-gray-400">checker</span>
          </span>
        </div>
        <div className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full" style={{ fontFamily: "'DM Mono', monospace" }}>
          UK prices · VAT incl.
        </div>
      </header>

      {/* Hero / Search */}
      {!results && !searching ? (
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
              { num: "1000s", label: "Tools Compared" },
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
          ) : results && results.length > 0 ? (
            <>
              <div className="mb-6">
                <div className="text-[13px] text-gray-400 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {results.length} retailers found
                </div>
                <h2 className="text-xl font-bold text-gray-900 leading-snug" style={{ letterSpacing: "-0.02em" }}>
                  {resolvedName}
                </h2>
              </div>

              {/* Price range bar */}
              <div className="bg-white rounded-xl border border-gray-200 px-5 py-4 mb-5 flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Price range</div>
                  <div className="text-lg font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>
                    £{Math.min(...results.map(r => r.price)).toFixed(2)} — £{Math.max(...results.map(r => r.price)).toFixed(2)}
                  </div>
                </div>
                <div className="bg-green-50 text-green-600 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Save up to £{(Math.max(...results.map(r => r.price)) - Math.min(...results.map(r => r.price))).toFixed(2)}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {results.map((result, i) => (
                  <ResultCard key={result.retailer} result={result} index={i} bestPrice={bestPrice} />
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border border-dashed border-gray-300 text-center text-[13px] text-gray-400">
                Prices updated moments ago · VAT included · We may earn a commission from purchases
              </div>
            </>
          ) : results && results.length === 0 ? (
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
          ) : null}
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-300" style={{ fontFamily: "'DM Mono', monospace" }}>
        toolcheckeruk.co.uk — compare power tool prices across UK retailers
      </footer>
    </div>
  );
}
