"use client";
import { useState, useEffect, useRef } from "react";
import { searchTools, getAllTools, type Tool, type Retailer } from "@/lib/tools-db";

const BRANDS = [
  { name: "Milwaukee", color: "#DB0032", slug: "milwaukee" },
  { name: "DeWalt", color: "#FEBD17", slug: "dewalt" },
  { name: "Makita", color: "#00A8A6", slug: "makita" },
  { name: "Bosch", color: "#005DAA", slug: "bosch" },
  { name: "HiKOKI", color: "#3DAE2B", slug: "hikoki" },
];

const CATEGORIES = [
  { name: "Drills", slug: "drills" },
  { name: "Impact Drivers", slug: "impact-drivers" },
  { name: "Saws", slug: "saws" },
  { name: "Grinders", slug: "grinders" },
  { name: "SDS Drills", slug: "sds-drills" },
  { name: "Multi-Tools", slug: "multi-tools" },
  { name: "Sanders", slug: "sanders" },
  { name: "Nail Guns", slug: "nail-guns" },
  { name: "Routers", slug: "routers" },
  { name: "Planers", slug: "planers" },
];

const RETAILER_COLORS: Record<string, string> = {
  "Screwfix": "#ff6900",
  "Toolstation": "#4488cc",
  "Amazon UK": "#ff9900",
  "FFX Tools": "#e31e24",
  "ITS": "#00a651",
  "Powertool World": "#8888aa",
  "Machine Mart": "#cc0000",
};

function SearchIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function RetailerResultCard({ retailer, isBest }: { retailer: Retailer; isBest: boolean }) {
  const saving = retailer.originalPrice && retailer.price ? (retailer.originalPrice - retailer.price).toFixed(2) : null;

  return (
    <div style={{
      background: "#111114",
      border: isBest ? "1px solid #CFFF04" : "1px solid #222228",
      borderRadius: "10px",
      overflow: "hidden",
      opacity: 0,
      animation: "cardSlideIn 0.4s ease forwards",
    }}>
      {isBest && (
        <div style={{
          background: "#CFFF04", color: "#0A0A0C",
          padding: "4px 16px", fontSize: "11px", fontWeight: 700,
          letterSpacing: "0.08em", fontFamily: "'JetBrains Mono', monospace",
        }}>BEST PRICE</div>
      )}
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 600, color: "#E4E4E7" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: RETAILER_COLORS[retailer.name] || "#555", flexShrink: 0 }} />
            {retailer.name}
          </div>
          <div style={{ textAlign: "right" }}>
            {retailer.checkPrice ? (
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#ff9900", fontFamily: "'Outfit', sans-serif" }}>
                Check price on Amazon
              </div>
            ) : (
              <>
                <div style={{ fontSize: "26px", fontWeight: 700, color: "#E4E4E7", fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
                  £{retailer.price!.toFixed(2)}
                </div>
                {retailer.originalPrice && (
                  <div style={{ fontSize: "13px", color: "#4E4E56", textDecoration: "line-through", fontFamily: "'JetBrains Mono', monospace" }}>
                    £{retailer.originalPrice.toFixed(2)}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
          {saving && (
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#CFFF04", background: "rgba(207, 255, 4, 0.08)", padding: "4px 10px", borderRadius: "5px", fontFamily: "'JetBrains Mono', monospace" }}>
              Save £{saving}
            </span>
          )}
          <span style={{
            fontSize: "12px",
            color: retailer.inStock ? "#4ADE80" : "#F87171",
            background: retailer.inStock ? "rgba(74, 222, 128, 0.08)" : "rgba(248, 113, 113, 0.08)",
            padding: "4px 10px", borderRadius: "5px",
          }}>
            {retailer.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <span style={{ fontSize: "12px", color: "#8E8E96", background: "#19191D", padding: "4px 10px", borderRadius: "5px" }}>
            {retailer.delivery}
          </span>
          {retailer.clickCollect && (
            <span style={{ fontSize: "12px", color: "#8E8E96", background: "#19191D", padding: "4px 10px", borderRadius: "5px" }}>
              Click &amp; Collect
            </span>
          )}
        </div>
        <a
          href={retailer.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{
            display: "block", width: "100%", padding: "12px",
            background: "#CFFF04", color: "#0A0A0C",
            borderRadius: "7px", fontSize: "14px", fontWeight: 700,
            textAlign: "center", textDecoration: "none",
            boxSizing: "border-box", fontFamily: "'Outfit', sans-serif",
          }}
        >
          View Deal →
        </a>
      </div>
    </div>
  );
}

function ToolResultCard({ tool, onClick, delay }: { tool: Tool; onClick: () => void; delay: number }) {
  const retailers = [...tool.retailers].filter((r) => r.url !== "#" && !r.checkPrice).sort((a, b) => a.price! - b.price!);
  const bestPrice = retailers[0]?.price;
  const worstPrice = retailers[retailers.length - 1]?.price;

  return (
    <div
      onClick={onClick}
      style={{
        background: "#111114",
        border: "1px solid #222228",
        borderRadius: "10px",
        padding: "20px",
        cursor: "pointer",
        opacity: 0,
        animation: `cardSlideIn 0.4s ease forwards ${delay}s`,
      }}
      className="tool-card-link"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
        <div>
          <div style={{ fontSize: "12px", color: "#4E4E56", marginBottom: "4px", fontFamily: "'JetBrains Mono', monospace" }}>
            {tool.brand} · {tool.modelNumber}
          </div>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#E4E4E7" }}>{tool.name}</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#E4E4E7", fontFamily: "'JetBrains Mono', monospace" }}>
            £{bestPrice?.toFixed(2)}
          </div>
          <div style={{ fontSize: "11px", color: "#4E4E56", fontFamily: "'JetBrains Mono', monospace" }}>
            best of {retailers.length}
          </div>
          {bestPrice && worstPrice && worstPrice > bestPrice && (
            <div style={{ fontSize: "11px", color: "#CFFF04", background: "rgba(207,255,4,0.08)", padding: "2px 8px", borderRadius: "4px", marginTop: "4px", fontFamily: "'JetBrains Mono', monospace" }}>
              save £{(worstPrice - bestPrice).toFixed(2)}
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: "12px", color: "#4E4E56", fontFamily: "'JetBrains Mono', monospace" }}>
        £{bestPrice?.toFixed(2)} — £{worstPrice?.toFixed(2)}
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
    const q = (searchQuery ?? query).trim();
    if (!q) return;
    setSearching(true);
    setSelectedTool(null);
    setHasSearched(true);
    setTimeout(() => {
      const results = searchTools(q);
      setMatchedTools(results);
      if (results.length === 1) setSelectedTool(results[0]);
      setSearching(false);
    }, 600);
  };

  const handleBrandClick = (brandSlug: string) => {
    setQuery(brandSlug);
    handleSearch(brandSlug);
  };

  const handleSelectTool = (tool: Tool) => setSelectedTool(tool);
  const handleBack = () => setSelectedTool(null);
  const handleReset = () => {
    setMatchedTools([]);
    setSelectedTool(null);
    setQuery("");
    setHasSearched(false);
  };

  useEffect(() => { inputRef.current?.focus(); }, []);

  const pricedRetailers = selectedTool
    ? [...selectedTool.retailers].filter((r) => r.url !== "#" && !r.checkPrice).sort((a, b) => a.price! - b.price!)
    : [];
  const sortedRetailers = selectedTool
    ? [...pricedRetailers, ...selectedTool.retailers.filter((r) => r.url !== "#" && r.checkPrice)]
    : [];
  const bestPrice = pricedRetailers[0]?.price ?? null;
  const worstPrice = pricedRetailers[pricedRetailers.length - 1]?.price ?? null;
  const showingResults = hasSearched && !searching;
  const toolCount = getAllTools().length;

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0C", color: "#E4E4E7", fontFamily: "'Outfit', sans-serif", display: "flex", flexDirection: "column", position: "relative", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .tc-search-box {
          background: #111114;
          border: 1px solid #222228;
          border-radius: 10px;
          padding: 6px;
          display: flex;
          align-items: center;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .tc-search-box:focus-within {
          border-color: #CFFF04;
          box-shadow: 0 0 0 1px #CFFF04, 0 4px 24px rgba(207, 255, 4, 0.06);
        }
        .tc-input {
          flex: 1;
          background: none;
          border: none;
          padding: 12px 14px;
          font-size: 15px;
          color: #E4E4E7;
          font-family: 'Outfit', sans-serif;
          outline: none;
        }
        .tc-input::placeholder { color: #4E4E56; }
        .tc-btn {
          padding: 12px 24px;
          background: #CFFF04;
          color: #0A0A0C;
          border: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: background 0.15s, transform 0.15s;
          white-space: nowrap;
        }
        .tc-btn:hover { background: #DFFF44; transform: translateY(-1px); }
        .tc-btn-sm {
          padding: 10px 20px;
          background: #CFFF04;
          color: #0A0A0C;
          border: none;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          white-space: nowrap;
        }
        .tc-btn-sm:hover { background: #DFFF44; }

        .brand-pill {
          position: relative;
          overflow: hidden;
          padding: 9px 18px 9px 21px;
          background: #111114;
          border: 1px solid #222228;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #8E8E96;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.2s;
        }
        .brand-pill:hover { color: #E4E4E7; border-color: #333339; background: #19191D; }

        .cat-tile {
          background: #111114;
          border: 1px solid #222228;
          border-radius: 8px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .cat-tile:hover { background: #19191D; border-color: #333339; }
        .cat-arr { color: #4E4E56; transition: color 0.2s, transform 0.2s; }
        .cat-tile:hover .cat-arr { color: #CFFF04; transform: translateX(2px); }

        .tc-sep {
          height: 1px;
          background: linear-gradient(to right, transparent, #222228, transparent);
          margin: 52px 0;
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)",
        width: "900px", height: "500px",
        background: "radial-gradient(ellipse, rgba(207, 255, 4, 0.035) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Header */}
        <header style={{
          padding: "18px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #222228",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={handleReset}>
            <div style={{
              width: "34px", height: "34px", background: "#CFFF04", borderRadius: "6px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: "19px", color: "#0A0A0C",
              fontFamily: "'JetBrains Mono', monospace",
            }}>T</div>
            <span style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-0.03em" }}>
              tool<span style={{ color: "#4E4E56" }}>checker</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#555", marginLeft: "5px", verticalAlign: "super" }}>UK</span>
            </span>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#555", letterSpacing: "0.06em" }}>
            UK PRICES · VAT INCL.
          </span>
        </header>

        {!showingResults && !searching ? (
          /* ── HOMEPAGE ── */
          <main style={{ maxWidth: "700px", margin: "0 auto", padding: "72px 24px 56px", width: "100%" }}>

            <h1 style={{
              fontSize: "clamp(34px, 6.5vw, 58px)",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              marginBottom: "16px",
            }}>
              Compare prices on{" "}
              <span style={{ color: "#CFFF04" }}>every power tool</span>
            </h1>

            <p style={{
              textAlign: "center", color: "#8E8E96", fontSize: "16px",
              lineHeight: 1.6, maxWidth: "460px", margin: "0 auto 44px",
            }}>
              We compare prices across UK tool retailers so you don&apos;t have to.
            </p>

            {/* Search */}
            <div className="tc-search-box">
              <div style={{ padding: "0 8px 0 14px", color: "#555", display: "flex", alignItems: "center" }}>
                <SearchIcon size={20} />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="tc-input"
                placeholder='Try "M18 impact driver" or "DCD796"'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button className="tc-btn" onClick={() => handleSearch()}>Search</button>
            </div>

            {/* Brand pills */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "28px", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#555", letterSpacing: "0.08em" }}>BRANDS</span>
              {BRANDS.map((b) => (
                <button key={b.slug} className="brand-pill" onClick={() => handleBrandClick(b.slug)}>
                  <span style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "3px", background: b.color, opacity: 0.7 }} />
                  {b.name}
                </button>
              ))}
            </div>

            <div className="tc-sep" />

            {/* Categories */}
            <div style={{ marginBottom: "52px" }}>
              <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 600, color: "#555", letterSpacing: "0.14em", marginBottom: "16px" }}>
                CATEGORIES
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px" }}>
                {CATEGORIES.map((cat) => (
                  <a key={cat.slug} href={`/category/${cat.slug}`} className="cat-tile">
                    <span style={{ flex: 1, fontSize: "13px", fontWeight: 500, color: "#CCC" }}>{cat.name}</span>
                    <span className="cat-arr"><ChevronRight /></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="tc-sep" />

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", gap: "56px", flexWrap: "wrap" }}>
              {[
                { val: `${toolCount}+`, label: "TOOLS" },
                { val: "£0", label: "ALWAYS FREE" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "28px", fontWeight: 700, color: "#CFFF04", marginBottom: "6px" }}>
                    {s.val}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#555", letterSpacing: "0.15em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </main>

        ) : (
          /* ── RESULTS VIEW ── */
          <div style={{ maxWidth: "680px", margin: "0 auto", padding: "32px 24px 80px", width: "100%" }}>

            {/* Compact search bar */}
            <div className="tc-search-box" style={{ marginBottom: "32px" }}>
              <div style={{ padding: "0 8px 0 14px", color: "#555", display: "flex", alignItems: "center" }}>
                <SearchIcon size={18} />
              </div>
              <input
                type="text"
                className="tc-input"
                style={{ padding: "10px 14px" }}
                placeholder="Search for another tool..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button className="tc-btn-sm" onClick={() => handleSearch()}>Search</button>
            </div>

            {searching ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 0" }}>
                <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{
                      width: "10px", height: "10px", borderRadius: "50%", background: "#CFFF04",
                      animation: "dotBounce 1.4s infinite ease-in-out both",
                      animationDelay: `${i * 0.16}s`,
                    }} />
                  ))}
                </div>
                <div style={{ color: "#8E8E96", fontSize: "15px" }}>Checking prices across UK retailers...</div>
              </div>

            ) : selectedTool ? (
              <>
                {matchedTools.length > 1 && (
                  <button onClick={handleBack} style={{ background: "none", border: "none", color: "#8E8E96", cursor: "pointer", marginBottom: "16px", fontSize: "14px", padding: 0, fontFamily: "'Outfit', sans-serif" }}>
                    ← Back to results
                  </button>
                )}

                <div style={{ marginBottom: "24px" }}>
                  <div style={{ fontSize: "12px", color: "#4E4E56", marginBottom: "6px", fontFamily: "'JetBrains Mono', monospace" }}>
                    {selectedTool.brand} · {selectedTool.modelNumber} · {sortedRetailers.length} retailers
                  </div>
                  <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#E4E4E7", letterSpacing: "-0.02em", marginBottom: "8px" }}>
                    {selectedTool.brand} {selectedTool.name}
                  </h2>
                  <p style={{ fontSize: "14px", color: "#8E8E96", lineHeight: 1.6 }}>
                    {selectedTool.description}
                  </p>
                </div>

                {bestPrice !== null && worstPrice !== null && (
                  <div style={{
                    background: "#111114", border: "1px solid #222228", borderRadius: "10px",
                    padding: "16px 20px", marginBottom: "16px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontSize: "12px", color: "#4E4E56", marginBottom: "4px" }}>Price range</div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "#E4E4E7", fontFamily: "'JetBrains Mono', monospace" }}>
                        £{bestPrice.toFixed(2)} — £{worstPrice.toFixed(2)}
                      </div>
                    </div>
                    {worstPrice > bestPrice && (
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#CFFF04", background: "rgba(207, 255, 4, 0.08)", padding: "8px 14px", borderRadius: "7px", fontFamily: "'JetBrains Mono', monospace" }}>
                        Save up to £{(worstPrice - bestPrice).toFixed(2)}
                      </div>
                    )}
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {sortedRetailers.map((retailer) => (
                    <RetailerResultCard key={retailer.name} retailer={retailer} isBest={!retailer.checkPrice && retailer.price === bestPrice} />
                  ))}
                </div>

                <div style={{ marginTop: "32px", padding: "16px", border: "1px dashed #222228", borderRadius: "10px", textAlign: "center", fontSize: "13px", color: "#4E4E56", fontFamily: "'JetBrains Mono', monospace" }}>
                  Prices updated regularly · VAT included · We may earn a commission from purchases
                </div>
              </>

            ) : matchedTools.length > 0 ? (
              <>
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ fontSize: "12px", color: "#4E4E56", marginBottom: "4px", fontFamily: "'JetBrains Mono', monospace" }}>
                    {matchedTools.length} tools found
                  </div>
                  <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#E4E4E7", letterSpacing: "-0.02em" }}>
                    Select a tool to compare prices
                  </h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {matchedTools.map((tool, i) => (
                    <ToolResultCard key={tool.slug} tool={tool} onClick={() => handleSelectTool(tool)} delay={i * 0.06} />
                  ))}
                </div>
              </>

            ) : (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔧</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#E4E4E7", marginBottom: "8px" }}>No results found</h3>
                <p style={{ fontSize: "14px", color: "#8E8E96", marginBottom: "24px" }}>
                  Try searching by brand and model, e.g. &quot;Milwaukee M12 impact driver&quot;
                </p>
                <button onClick={handleReset} style={{ background: "none", border: "1px solid #222228", borderRadius: "7px", color: "#8E8E96", cursor: "pointer", padding: "10px 20px", fontSize: "14px", fontFamily: "'Outfit', sans-serif" }}>
                  ← Back to home
                </button>
              </div>
            )}
          </div>
        )}

        <footer style={{
          borderTop: "1px solid #1A1A1F",
          padding: "24px",
          textAlign: "center",
          fontSize: "11px",
          color: "#333",
          marginTop: "auto",
          letterSpacing: "0.04em",
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          toolcheckeruk.co.uk — compare power tool prices across UK retailers
        </footer>
      </div>
    </div>
  );
}
