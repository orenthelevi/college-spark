import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function MajorNotFound() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream-muted/50 mb-6">
          404
        </p>
        <h1 className="font-serif text-cream mb-4">
          Major not found.
        </h1>
        <p className="text-cream-muted text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          That slug doesn't match anything in our list. It may have moved or
          never existed.
        </p>
        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            bg-amber text-navy
            font-medium text-sm rounded-xl
            hover:bg-amber-dim
            transition-colors duration-200
          "
        >
          ← Browse all majors
        </Link>
      </div>
    </PageShell>
  );
}
