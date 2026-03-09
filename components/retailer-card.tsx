import { type Retailer } from "@/lib/tools-db";

const RETAILER_COLORS: Record<string, string> = {
  "Screwfix": "#ff6900",
  "Toolstation": "#4488cc",
  "Amazon UK": "#ff9900",
  "FFX Tools": "#e31e24",
  "ITS": "#00a651",
  "Powertool World": "#8888aa",
  "Machine Mart": "#cc0000",
};

export function RetailerCard({ result, isBest }: { result: Retailer; isBest: boolean }) {
  const saving = result.originalPrice ? (result.originalPrice - result.price).toFixed(2) : null;
  const accentColor = RETAILER_COLORS[result.name] || "#666";

  return (
    <div style={{
      background: "#111114",
      border: isBest ? "1px solid #CFFF04" : "1px solid #222228",
      borderRadius: "10px",
      overflow: "hidden",
    }}>
      {isBest && (
        <div style={{
          background: "#CFFF04",
          color: "#0A0A0C",
          padding: "4px 16px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          BEST PRICE
        </div>
      )}
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 600, color: "#E4E4E7", fontFamily: "'Outfit', sans-serif" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: accentColor, flexShrink: 0 }} />
            {result.name}
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "26px", fontWeight: 700, color: "#E4E4E7", fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
              &pound;{result.price.toFixed(2)}
            </div>
            {result.originalPrice && (
              <div style={{ fontSize: "13px", color: "#4E4E56", textDecoration: "line-through", fontFamily: "'JetBrains Mono', monospace" }}>
                &pound;{result.originalPrice.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
          {saving && (
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#CFFF04", background: "rgba(207, 255, 4, 0.08)", padding: "4px 10px", borderRadius: "5px", fontFamily: "'JetBrains Mono', monospace" }}>
              Save &pound;{saving}
            </span>
          )}
          <span style={{
            fontSize: "12px",
            color: result.inStock ? "#4ADE80" : "#F87171",
            background: result.inStock ? "rgba(74, 222, 128, 0.08)" : "rgba(248, 113, 113, 0.08)",
            padding: "4px 10px",
            borderRadius: "5px",
          }}>
            {result.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <span style={{ fontSize: "12px", color: "#8E8E96", background: "#19191D", padding: "4px 10px", borderRadius: "5px" }}>
            {result.delivery}
          </span>
          {result.clickCollect && (
            <span style={{ fontSize: "12px", color: "#8E8E96", background: "#19191D", padding: "4px 10px", borderRadius: "5px" }}>
              Click &amp; Collect
            </span>
          )}
        </div>

        <a
          href={result.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            background: "#CFFF04",
            color: "#0A0A0C",
            borderRadius: "7px",
            fontSize: "14px",
            fontWeight: 700,
            textAlign: "center",
            textDecoration: "none",
            boxSizing: "border-box",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          View Deal &rarr;
        </a>
      </div>
    </div>
  );
}
