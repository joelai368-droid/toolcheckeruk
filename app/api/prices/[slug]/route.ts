import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const filePath = path.join(process.cwd(), "data", "prices", `${slug}.json`);
    const json = await readFile(filePath, "utf8");
    return new NextResponse(json, {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        // Keep it simple: allow caching but revalidate frequently.
        "cache-control": "public, max-age=60",
      },
    });
  } catch {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
}
