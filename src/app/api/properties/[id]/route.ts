import { db } from "@/lib/db";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = (await params).id;

  const list: any[] = [];
  const sql = `SELECT 
        p.id, p.title, p.description, p.location, p.type, p.price, 
        p.newbuild, p.year, p.area, p.plot, p.bedrooms, p.bathrooms, 
        p.parking, p.features, p.status, p.images, p.agent_id, p.created, 
        a.name AS agent_name, a.email AS agent_email, a.phone AS agent_phone, a.image AS agent_image
      FROM properties p, agents a
      WHERE p.id = ? and a.id = p.agent_id`;

  list.push(id);
  const stmt = db.prepare(sql);
  const properties = stmt.all(...list);
  return NextResponse.json(properties[0]);
}
