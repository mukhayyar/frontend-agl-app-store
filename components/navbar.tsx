import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 hover:opacity-80 transition-opacity">
          <Image
            src="/icon.svg"
            alt="PensHub"
            width={22}
            height={22}
            className="block dark:hidden"
          />
          <span className="font-semibold text-base text-foreground tracking-tight">
            PensHub App Store
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/"
            className="px-3 py-1.5 rounded-md hover:bg-accent hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/categories"
            className="px-3 py-1.5 rounded-md hover:bg-accent hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link href="/collections"
            className="px-3 py-1.5 rounded-md hover:bg-accent hover:text-foreground transition-colors">
            Collections
          </Link>
          <Link href="/install"
            className="px-3 py-1.5 rounded-md hover:bg-accent hover:text-foreground transition-colors">
            User Installation
          </Link>
        </nav>

        {/* Right side */}
        <Link
          href="https://admin.agl-store.cyou/developer/portal"
          className="shrink-0 text-xs font-medium px-3.5 py-1.5 rounded-full border border-border hover:bg-accent hover:text-foreground text-muted-foreground transition-colors"
        >
          Developer Portal
        </Link>

      </div>
    </header>
  )
}
