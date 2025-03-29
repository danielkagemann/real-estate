import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const stmt = db.prepare(
    "SELECT * FROM properties order by created DESC limit 3"
  );
  const properties = stmt.all();

  return NextResponse.json(properties);
}
