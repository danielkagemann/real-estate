import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const body = await req.json();

  const { id, area, price } = body;

  const stmt = db.prepare(
    "SELECT * FROM properties WHERE id <> ? AND price BETWEEN (? * 0.8) AND (? * 1.2) AND area  BETWEEN (? * 0.8) AND (? * 1.2) limit 2"
  );
  const properties = stmt.all(id, price, price, area, area);

  return NextResponse.json(properties);
}
