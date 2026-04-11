import { useParams, Link } from "react-router-dom"
import { getAppBySlug } from "@/lib/data/apps"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FavoriteToggle } from "@/components/favorite-toggle"

export default function AppDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const app = getAppBySlug(slug!)
  if (!app) return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold text-foreground">App not found</h1>
      <p className="text-muted-foreground mt-2">The app you are looking for does not exist.</p>
      <div className="mt-6">
        <Link to="/" className="text-primary underline underline-offset-4">{"← Back to catalog"}</Link>
      </div>
    </main>
  )

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-4">
        <Link to="/" className="text-primary underline underline-offset-4">
          {"← Back to catalog"}
        </Link>
      </nav>

      <header className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
          {app.iconUrl ? (
            <img src={app.iconUrl} alt={`${app.name} icon`} width={64} height={64} />
          ) : (
            <span className="text-base text-muted-foreground">{app.name[0]}</span>
          )}
        </div>
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold text-foreground text-pretty">{app.name}</h1>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <Badge variant="outline">{app.category}</Badge>
            {app.license ? <Badge variant="secondary">{app.license}</Badge> : null}
            {app.developer ? <Badge variant="secondary">By {app.developer}</Badge> : null}
          </div>
          <p className="text-muted-foreground mt-3">{app.summary}</p>
        </div>
      </header>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {app.screenshots?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {app.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  width={1280}
                  height={720}
                  alt={`${app.name} screenshot ${i + 1}`}
                  className="rounded-md border"
                />
              ))}
            </div>
          ) : null}

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">About</h2>
            <p className="text-muted-foreground whitespace-pre-wrap">{app.description}</p>
          </div>
        </div>

        <aside className="lg:col-span-1 space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium mb-2 text-foreground">Install with Flatpak</h3>
              <pre aria-label="Flatpak install command" className="rounded-md bg-muted p-3 text-xs overflow-auto">
                <code>{`flatpak install flathub ${app.flathubId || app.id}`}</code>
              </pre>
              <div className="flex flex-wrap gap-2 mt-3">
                <FavoriteToggle appSlug={app.slug} />
                {app.homepageUrl ? (
                  <Button asChild variant="outline">
                    <a href={app.homepageUrl} target="_blank" rel="noreferrer">
                      Homepage
                    </a>
                  </Button>
                ) : null}
                {app.repoUrl ? (
                  <Button asChild variant="outline">
                    <a href={app.repoUrl} target="_blank" rel="noreferrer">
                      Repository
                    </a>
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </Card>

          {app.tags?.length ? (
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium mb-2 text-foreground">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : null}
        </aside>
      </section>
    </main>
  )
}
