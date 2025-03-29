import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { locations, types, maxPrice } = body;

  const where: string[] = [];
  const params: any[] = [];

  if (locations.length > 0) {
    const placeholders = locations.map(() => "?").join(", ");
    where.push(`location IN (${placeholders})`);
    params.push(...locations);
  }
  if (types.length > 0) {
    const placeholders = types.map(() => "?").join(", ");
    where.push(`type IN (${placeholders})`);
    params.push(...types);
  }

  if (maxPrice > 0) {
    where.push(`price <= ?`);
    params.push(maxPrice);
  }

  const sql = `SELECT * FROM properties${
    where.length ? " WHERE " + where.join(" AND ") : ""
  }`;

  console.log(sql, params);

  const stmt = db.prepare(sql);
  const properties = stmt.all(...params);

  return NextResponse.json(properties);
}
