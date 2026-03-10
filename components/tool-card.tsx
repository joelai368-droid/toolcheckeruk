import Link from "next/link";
import { type Tool } from "@/lib/tools-db";

export function ToolCard({ tool }: { tool: Tool }) {
  const sortedRetailers = [...tool.retailers].filter((r) => r.url !== "#" && !r.checkPrice).sort((a, b) => a.price! - b.price!);
  const bestPrice = sortedRetailers[0]?.price;
  const worstPrice = sortedRetailers[sortedRetailers.length - 1]?.price;

  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="tool-card-link"
      style={{
        display: "block",
        background: "#111114",
        border: "1px solid #222228",
        borderRadius: "10px",
        padding: "20px",
        textDecoration: "none",
        transition: "border-color 0.2s, background 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
        <div>
          <div style={{ fontSize: "12px", color: "#4E4E56", marginBottom: "4px", fontFamily: "'JetBrains Mono', monospace" }}>
            {tool.brand} &middot; {tool.modelNumber}
          </div>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#E4E4E7", letterSpacing: "-0.01em", fontFamily: "'Outfit', sans-serif" }}>
            {tool.name}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#E4E4E7", fontFamily: "'JetBrains Mono', monospace" }}>
            &pound;{bestPrice?.toFixed(2)}
          </div>
          <div style={{ fontSize: "11px", color: "#4E4E56", fontFamily: "'JetBrains Mono', monospace" }}>
            best of {sortedRetailers.length}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: "12px", color: "#4E4E56", fontFamily: "'JetBrains Mono', monospace" }}>
          &pound;{bestPrice?.toFixed(2)} &mdash; &pound;{worstPrice?.toFixed(2)}
        </div>
        {bestPrice && worstPrice && worstPrice > bestPrice && (
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#CFFF04", background: "rgba(207, 255, 4, 0.08)", padding: "3px 10px", borderRadius: "5px", fontFamily: "'JetBrains Mono', monospace" }}>
            Save up to &pound;{(worstPrice - bestPrice).toFixed(2)}
          </div>
        )}
      </div>
    </Link>
  );
}
