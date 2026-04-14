import Link from "next/link"

const REPO_URL = "https://repo.agl-store.cyou"
const GPG_FINGERPRINT = "308C9B02C9079D45BFE90350E9ADCFFF97CE5264"
const REMOTE_NAME = "pens-agl"

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-muted rounded-lg px-4 py-3 text-sm font-mono overflow-x-auto whitespace-pre-wrap break-all border border-border">
      {code}
    </pre>
  )
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
        {n}
      </div>
      <div className="flex-1 pb-8">
        <h3 className="font-semibold text-base mb-3">{title}</h3>
        <div className="space-y-3 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

export default function InstallPage() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight mb-2">User Installation</h1>
        <p className="text-muted-foreground text-sm">
          Add the AGL PENS Store repository to your Flatpak setup and install apps on any Linux distro that supports Flatpak.
        </p>
      </div>

      {/* Requirements */}
      <div className="mb-10 p-4 rounded-lg border border-border bg-muted/40">
        <p className="text-sm font-medium mb-1">Requirements</p>
        <p className="text-sm text-muted-foreground">
          Flatpak must be installed on your system.{" "}
          <a
            href="https://flatpak.org/setup/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            Install Flatpak →
          </a>
        </p>
      </div>

      {/* Setup steps */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-6">One-time setup</h2>
        <div className="relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-border">

          <Step n={1} title="Add the AGL PENS Store remote">
            <p>Register the repository with Flatpak using this command:</p>
            <CodeBlock code={`flatpak remote-add --if-not-exists ${REMOTE_NAME} ${REPO_URL}`} />
            <p>
              The <code className="bg-muted px-1 rounded text-xs font-mono">--if-not-exists</code> flag makes it safe to run multiple times.
              You can use any remote name you like — <code className="bg-muted px-1 rounded text-xs font-mono">{REMOTE_NAME}</code> is recommended.
            </p>
          </Step>

          <Step n={2} title="Trust the repository GPG key">
            <p>The store signs all published apps with its GPG key. Import and trust it so Flatpak can verify signatures:</p>
            <CodeBlock code={`flatpak remote-modify --gpg-import=<(gpg --export ${GPG_FINGERPRINT}) ${REMOTE_NAME}`} />
            <p>Or using <code className="bg-muted px-1 rounded text-xs font-mono">curl</code> directly:</p>
            <CodeBlock code={`curl -s ${REPO_URL}/gpg-key | flatpak remote-modify --gpg-import=- ${REMOTE_NAME}`} />
            <p className="text-xs text-muted-foreground/70">
              GPG fingerprint: <span className="font-mono">{GPG_FINGERPRINT}</span>
            </p>
          </Step>

          <Step n={3} title="Verify the remote was added">
            <CodeBlock code={`flatpak remotes`} />
            <p>
              You should see <code className="bg-muted px-1 rounded text-xs font-mono">{REMOTE_NAME}</code> listed with the URL{" "}
              <code className="bg-muted px-1 rounded text-xs font-mono">{REPO_URL}</code>.
            </p>
          </Step>

        </div>
      </section>

      {/* Installing apps */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Installing apps</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Browse the{" "}
          <Link href="/" className="underline hover:text-foreground transition-colors">
            store homepage
          </Link>{" "}
          to find app IDs, then install with:
        </p>
        <CodeBlock code={`flatpak install ${REMOTE_NAME} <app-id>`} />
        <p className="text-sm text-muted-foreground mt-3">For example:</p>
        <CodeBlock code={`flatpak install ${REMOTE_NAME} org.gnome.Calculator`} />
        <p className="text-sm text-muted-foreground mt-3">
          To install multiple apps at once, separate their IDs with spaces:
        </p>
        <CodeBlock code={`flatpak install ${REMOTE_NAME} org.gnome.Calculator org.gnome.TextEditor`} />
      </section>

      {/* Running apps */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Running apps</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Installed apps appear in your application launcher automatically. You can also launch from the terminal:
        </p>
        <CodeBlock code={`flatpak run <app-id>`} />
      </section>

      {/* Updating */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Updating apps</h2>
        <p className="text-sm text-muted-foreground mb-3">Update all installed apps (including from other remotes):</p>
        <CodeBlock code={`flatpak update`} />
        <p className="text-sm text-muted-foreground mt-3">Update only apps from this store:</p>
        <CodeBlock code={`flatpak update --app --installation=user --remote=${REMOTE_NAME}`} />
      </section>

      {/* Removing */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Removing apps or the remote</h2>
        <p className="text-sm text-muted-foreground mb-3">Uninstall a specific app:</p>
        <CodeBlock code={`flatpak uninstall <app-id>`} />
        <p className="text-sm text-muted-foreground mt-4 mb-3">Remove the AGL PENS Store remote entirely:</p>
        <CodeBlock code={`flatpak remote-delete ${REMOTE_NAME}`} />
      </section>

      {/* Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Troubleshooting</h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground mb-1">Remote not found after adding</p>
            <p>Run <code className="bg-muted px-1 rounded text-xs font-mono">flatpak update</code> to refresh remote metadata after adding a new remote.</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">GPG verification failed</p>
            <p>
              Re-run the GPG import step from Step 2 above.
              The key fingerprint must match <span className="font-mono text-xs">{GPG_FINGERPRINT}</span>.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">App not found in remote</p>
            <p>
              Run <code className="bg-muted px-1 rounded text-xs font-mono">flatpak remote-ls {REMOTE_NAME}</code> to see all available apps.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">Permission errors</p>
            <p>
              Add <code className="bg-muted px-1 rounded text-xs font-mono">--user</code> to install for your user only (no root needed),
              or <code className="bg-muted px-1 rounded text-xs font-mono">--system</code> with <code className="bg-muted px-1 rounded text-xs font-mono">sudo</code> for system-wide installation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="rounded-lg border border-border p-5 bg-muted/30 text-sm flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div>
          <p className="font-medium mb-0.5">Are you a developer?</p>
          <p className="text-muted-foreground text-xs">Publish your own Flatpak app to the AGL PENS Store.</p>
        </div>
        <a
          href="https://admin.agl-store.cyou/developer/portal"
          className="shrink-0 text-xs font-medium px-4 py-2 rounded-full border border-border hover:bg-accent hover:text-foreground text-muted-foreground transition-colors text-center"
        >
          Developer Portal →
        </a>
      </div>
    </main>
  )
}
