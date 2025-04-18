import { db } from "@/lib/db";
import { log } from "console";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const body = await req.json();

  const { ids } = body;

  const placeholders = ids.map(() => "?").join(", ");
  const sql = `SELECT 
        p.id, p.title, p.description, p.location, p.type, p.price, 
        p.newbuild, p.year, p.area, p.plot, p.bedrooms, p.bathrooms, 
        p.parking, p.features, p.status, p.images, p.agent_id, p.created, 
        a.name AS agent_name, a.email AS agent_email, a.phone AS agent_phone, a.image AS agent_image
      FROM properties p, agents a
      WHERE a.id = p.agent_id AND p.id IN(${placeholders})`;

  const stmt = db.prepare(sql);
  const properties = stmt.all(...ids);

  return NextResponse.json(properties);
}
