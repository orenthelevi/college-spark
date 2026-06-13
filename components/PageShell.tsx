import Link from "next/link";
import NavProfile from "./NavProfile";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Navigation ──────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-cream/8 bg-navy/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl text-amber tracking-tight hover:text-amber-dim transition-colors duration-200"
          >
            Spark
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-cream-muted hover:text-cream transition-colors duration-200"
            >
              Browse
            </Link>
            {/* NavProfile is a client component — reads localStorage for the count badge */}
            <NavProfile />
          </div>
        </div>
      </nav>

      {/* ── Main Content ────────────────────────────────────────── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-cream/8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-lg text-amber">Spark</p>
              <p className="text-sm text-cream-muted mt-1">
                Find the major that makes you forget what time it is.
              </p>
            </div>
            <p className="text-xs text-cream-muted/50">Built for the curious.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
