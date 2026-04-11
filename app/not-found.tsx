import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 select-none">
        <span className="text-8xl font-black text-foreground/10 tracking-tighter">404</span>
      </div>

      <div className="mb-10 space-y-3">
        <h1 className="text-2xl font-semibold text-foreground">Page not found</h1>
        <p className="text-muted-foreground max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
      >
        ← Back to App Store
      </Link>
    </div>
  )
}
