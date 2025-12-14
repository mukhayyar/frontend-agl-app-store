import { NextResponse } from "next/server"
import { brands } from "@/lib/data/brands"

export async function GET() {
  return NextResponse.json({ brands })
}
