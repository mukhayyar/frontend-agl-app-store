export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About PensHub */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">PensHub</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An open application store for Automotive Grade Linux (AGL),
              providing a curated marketplace of Flatpak apps for
              In-Vehicle Infotainment systems.
            </p>
          </div>

          {/* Research Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Research Project</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Developed by the{" "}
              <span className="font-medium text-foreground">Pervasive Computing Research Group</span>
              {" "}at{" "}
              <span className="font-medium text-foreground">
                Politeknik Elektronika Negeri Surabaya (PENS)
              </span>
              {" "}as part of an ongoing study on automotive application distribution.
            </p>
          </div>

          {/* Deployment */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Deployment</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Deployed to the In-Vehicle Infotainment (IVI) system developed by the{" "}
              <span className="font-medium text-foreground">PENS Electric Vehicle Research</span>{" "}
              team, running on Automotive Grade Linux.
            </p>
          </div>

        </div>

        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PensHub — Pervasive Computing Research Group, PENS. Research use only.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Politeknik Elektronika Negeri Surabaya</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
            <span>AGL App Store Research</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
