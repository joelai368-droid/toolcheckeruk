import { type Retailer } from "@/lib/tools-db";
import { CheckIcon, XIcon, TagIcon, TruckIcon, StoreIcon } from "./icons";

const RETAILER_COLORS: Record<string, string> = {
  "Screwfix": "#ff6900",
  "Toolstation": "#0054a6",
  "Amazon UK": "#ff9900",
  "FFX Tools": "#e31e24",
  "ITS": "#00a651",
  "Powertool World": "#1a1a2e",
  "Machine Mart": "#cc0000",
};

export function RetailerCard({ result, isBest }: { result: Retailer; isBest: boolean }) {
  const saving = result.originalPrice ? (result.originalPrice - result.price).toFixed(2) : null;
  const accentColor = RETAILER_COLORS[result.name] || "#666";

  return (
    <div
      className="bg-white rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      style={{
        border: isBest ? "2px solid #D4F43E" : "1px solid #e8e8e8",
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
              &pound;{result.price.toFixed(2)}
            </div>
            {result.originalPrice && (
              <div className="text-[13px] text-gray-400 line-through" style={{ fontFamily: "'DM Mono', monospace" }}>
                &pound;{result.originalPrice.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {saving && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-md" style={{ fontFamily: "'DM Mono', monospace" }}>
              <TagIcon /> Save &pound;{saving}
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
              <StoreIcon /> Click &amp; Collect
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
          View Deal &rarr;
        </a>
      </div>
    </div>
  );
}
