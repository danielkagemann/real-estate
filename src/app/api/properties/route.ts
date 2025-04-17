import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const body = await req.json();

  const { locations, types, maxPrice, page = 1, limit = 10 } = body;

  const offset = (page - 1) * limit;

  const conditions: string[] = [];
  const values: any[] = [];

  if (locations.length > 0) {
    conditions.push(`location IN (${locations.map(() => "?").join(", ")})`);
    values.push(...locations);
  }

  if (types.length > 0) {
    conditions.push(`type IN (${types.map(() => "?").join(", ")})`);
    values.push(...types);
  }

  if (maxPrice) {
    conditions.push(`price <= ?`);
    values.push(Number(maxPrice));
  }

  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  // Total Count (für Pagination)
  const totalStmt = db.prepare(
    `SELECT COUNT(*) as total FROM properties ${whereClause}`
  );

  const result = totalStmt.get(...values);
  const { total } = result;

  // Paged Query
  const dataStmt = db.prepare(`
    SELECT
      properties.*,
      agents.name AS agent_name,
      agents.email AS agent_email,
      agents.phone AS agent_phone,
      agents.image AS agent_image
    FROM properties
    JOIN agents ON properties.agent_id = agents.id
    ${whereClause}
    ORDER BY properties.created DESC
    LIMIT ? OFFSET ?
  `);

  const pagedValues = [...values, limit, offset];
  const properties = dataStmt.all(...pagedValues);

  return NextResponse.json({
    properties,
    total,
    totalPages: Math.ceil(total / limit),
    page,
    limit,
  });
}
