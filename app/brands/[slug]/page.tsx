import { notFound } from "next/navigation"

export default async function BrandDetailsPage({ params: _params }: { params: Promise<{ slug: string }> }) {
  return notFound()
}
