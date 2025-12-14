import { type NextRequest, NextResponse } from "next/server"
import { apps } from "@/lib/data/apps"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get("search") || "").toLowerCase()
  const category = searchParams.get("category") || ""
  const brand = (() => {
    const b = searchParams.get("brand") || ""
    return b === "all" ? "" : b
  })()

  const filtered = apps.filter((a) => {
    const matchesCategory = category ? a.category === category : true
    const matchesBrand = brand ? (a.brands || []).includes(brand) : true
    const matchesSearch = q
      ? [a.name, a.summary, a.description, a.developer, ...(a.tags || [])]
          .filter(Boolean)
          .some((v) => v!.toLowerCase().includes(q))
      : true
    return matchesCategory && matchesBrand && matchesSearch
  })

  return NextResponse.json({ apps: filtered })
}
