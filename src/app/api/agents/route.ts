import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const stmt = db.prepare("SELECT * FROM agents");
  const agents = stmt.all();
  return NextResponse.json(agents);
}
