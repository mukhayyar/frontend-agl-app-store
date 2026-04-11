import { NextResponse } from "next/server"

export async function GET(_: Request, { params: _params }: { params: Promise<{ slug: string }> }) {
  // Brands are not supported by the backend
  return NextResponse.json({ error: "Brand not found" }, { status: 404 })
}
