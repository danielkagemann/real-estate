import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const typesStmt = db.prepare("SELECT DISTINCT type FROM properties");
  const types = typesStmt.all().map((row: any) => row.type);
  types.sort();

  const locationsStmt = db.prepare("SELECT DISTINCT location FROM properties");
  const locations = locationsStmt.all().map((row: any) => row.location);
  locations.sort();

  return NextResponse.json({ types, locations });
}
