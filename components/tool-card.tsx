import Link from "next/link";
import { type Tool } from "@/lib/tools-db";

export function ToolCard({ tool }: { tool: Tool }) {
  const sortedRetailers = [...tool.retailers].sort((a, b) => a.price - b.price);
  const bestPrice = sortedRetailers[0]?.price;
  const worstPrice = sortedRetailers[sortedRetailers.length - 1]?.price;

  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="block bg-white rounded-xl border border-gray-200 p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 no-underline"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-xs text-gray-400 font-medium mb-1">{tool.brand} &middot; {tool.modelNumber}</div>
          <div className="text-base font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            {tool.name}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-extrabold text-gray-900" style={{ fontFamily: "'DM Mono', monospace" }}>
            &pound;{bestPrice?.toFixed(2)}
          </div>
          <div className="text-[11px] text-gray-400">best of {sortedRetailers.length}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-400">
          Price range: &pound;{bestPrice?.toFixed(2)} &mdash; &pound;{worstPrice?.toFixed(2)}
        </div>
        {bestPrice && worstPrice && worstPrice > bestPrice && (
          <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded" style={{ fontFamily: "'DM Mono', monospace" }}>
            Save up to &pound;{(worstPrice - bestPrice).toFixed(2)}
          </div>
        )}
      </div>
    </Link>
  );
}
