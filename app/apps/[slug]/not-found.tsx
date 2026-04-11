import Link from "next/link"

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold text-foreground">App not found</h1>
      <p className="text-muted-foreground mt-2">The app you are looking for does not exist.</p>
      <div className="mt-6">
        <Link href="/" className="text-primary underline underline-offset-4">
          {"← Back to catalog"}
        </Link>
      </div>
    </main>
  )
}
