import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BrowseGrid from "@/components/BrowseGrid";
import { majors } from "@/data/majors";

export const metadata: Metadata = {
  title: "Spark — Find What You'd Stay Up Until 2am Reading About",
  description:
    "Browse every college major and get a real look at what studying it actually feels like. Not career outcomes. The actual intellectual experience.",
};

export default function HomePage() {
  return (
    <PageShell>
      {/* ── Hero Header ─────────────────────────────────────────── */}
      <div className="border-b border-cream/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-serif text-cream leading-none tracking-tight mb-4">
            Find what you'd stay up{" "}
            <br className="hidden sm:block" />
            until 2am reading about.
          </h1>
          <p className="font-serif text-cream-muted text-lg md:text-xl max-w-xl leading-relaxed">
            Every major here comes with a real preview — what the questions
            feel like, what a week looks like, what kind of person tends to
            love it.
          </p>
          <p className="mt-3 text-cream-muted/50 text-sm">
            {majors.length} majors to explore
          </p>
        </div>
      </div>

      {/* ── Browse Grid ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <BrowseGrid majors={majors} />
      </div>
    </PageShell>
  );
}
