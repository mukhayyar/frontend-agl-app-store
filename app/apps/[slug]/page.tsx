import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { normalizeApp } from "@/lib/data/apps"
import type { AppItem } from "@/lib/types"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

async function getApp(id: string): Promise<AppItem | null> {
  try {
    const res = await fetch(`${BACKEND}/apps/${encodeURIComponent(id)}`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) return null
    const raw = await res.json()
    return normalizeApp(raw)
  } catch {
    return null
  }
}

function getExpiryInfo(expiresAt?: string): { label: string; color: string } | null {
  if (!expiresAt) return null
  const now = Date.now()
  const exp = new Date(expiresAt).getTime()
  const days = Math.ceil((exp - now) / (1000 * 60 * 60 * 24))
  if (exp <= now) return { label: "Expired", color: "text-red-600 bg-red-50 border-red-200" }
  if (days <= 1)  return { label: "Expires today", color: "text-red-600 bg-red-50 border-red-200" }
  if (days <= 7)  return { label: `${days} days left`, color: "text-orange-600 bg-orange-50 border-orange-200" }
  if (days <= 30) return { label: `${days} days left`, color: "text-yellow-600 bg-yellow-50 border-yellow-200" }
  return { label: `Expires ${new Date(expiresAt).toLocaleDateString()}`, color: "text-muted-foreground bg-muted border-border" }
}

export default async function AppDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const app = await getApp(decodeURIComponent(slug))
  if (!app) return notFound()

  const screenshots = app.screenshots || []

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-6">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to catalog
        </Link>
      </nav>

      <header className="flex items-start gap-5 mb-8">
        <div className="h-20 w-20 rounded-2xl overflow-hidden bg-muted flex-shrink-0 flex items-center justify-center border">
          {app.iconUrl ? (
            <Image src={app.iconUrl} alt={`${app.name} icon`} width={80} height={80} className="object-cover" unoptimized />
          ) : (
            <span className="text-2xl font-bold text-muted-foreground">{app.name[0]}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-semibold text-foreground">{app.name}</h1>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {app.categories?.map((cat) => (
              <Badge key={cat} variant="outline">{cat}</Badge>
            ))}
            {app.license && <Badge variant="secondary">{app.license}</Badge>}
            {app.developer && <span className="text-sm text-muted-foreground">by {app.developer}</span>}
            {app.is_verified && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 border border-green-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                </svg>
                Verified by PensHub
              </span>
            )}
            {(() => { const e = getExpiryInfo(app.expires_at); return e ? (
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border ${e.color}`}>
                ⏱ {e.label}
              </span>
            ) : null })()}
          </div>
          {app.summary && <p className="text-muted-foreground mt-3 text-base">{app.summary}</p>}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {screenshots.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-4 text-foreground">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {screenshots.slice(0, 4).map((src, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border bg-muted aspect-video">
                    <Image src={src} width={1280} height={720} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" unoptimized />
                  </div>
                ))}
              </div>
            </section>
          )}
          {app.description && (
            <section>
              <h2 className="text-lg font-semibold mb-3 text-foreground">About</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{app.description}</p>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          <Card>
            <CardContent className="p-5 space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-2 text-foreground">Install via Flatpak</h3>
                <pre className="rounded-lg bg-muted p-3 text-xs overflow-x-auto">
                  <code>flatpak install {app.id}</code>
                </pre>
              </div>
              <div className="flex flex-wrap gap-2">
                {app.homepageUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={app.homepageUrl} target="_blank" rel="noreferrer">Homepage</a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold mb-3 text-foreground">Details</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">App ID</dt>
                  <dd className="font-mono text-xs truncate max-w-[160px]">{app.id}</dd>
                </div>
                {app.developer && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Developer</dt>
                    <dd>{app.developer}</dd>
                  </div>
                )}
                {app.license && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">License</dt>
                    <dd>{app.license}</dd>
                  </div>
                )}
                {app.updated_at && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Updated</dt>
                    <dd>{new Date(app.updated_at).toLocaleDateString()}</dd>
                  </div>
                )}
                {app.expires_at && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Certificate expires</dt>
                    <dd className={Math.ceil((new Date(app.expires_at).getTime() - Date.now()) / 86400000) <= 7 ? "text-orange-600 font-medium" : ""}>
                      {new Date(app.expires_at).toLocaleDateString()}
                    </dd>
                  </div>
                )}
              </dl>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  )
}
