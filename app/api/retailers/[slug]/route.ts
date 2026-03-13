import { NextResponse } from "next/server";
import { getMergedRetailersForTool } from "@/lib/server-retailers";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const retailers = await getMergedRetailersForTool(slug);

  return NextResponse.json(retailers, {
    headers: {
      // Allow short caching; prices update daily.
      "cache-control": "public, max-age=60",
    },
  });
}
