import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import SectionBlock from "@/components/SectionBlock";
import ClusterBadge from "@/components/ClusterBadge";
import SaveButton from "@/components/SaveButton";
import GoDeeperSection from "@/components/GoDeeperSection";
import SmoothScroll from "@/components/SmoothScroll";
import { majors } from "@/data/majors";

/* ── Static params for pre-rendering ───────────────────────────── */

export function generateStaticParams() {
  return majors.map((m) => ({ slug: m.slug }));
}

/* ── Metadata ───────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const major = majors.find((m) => m.slug === slug);
  if (!major) return { title: "Major not found — Spark" };
  return {
    title: `${major.name} — Spark`,
    description: major.tagline,
  };
}

/* ── Page ───────────────────────────────────────────────────────── */

export default async function MajorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const major = majors.find((m) => m.slug === slug);

  if (!major) notFound();

  const relatedMajorData = major.relatedMajors
    .map((s) => majors.find((m) => m.slug === s))
    .filter(Boolean);

  const hasAiKey = Boolean(process.env.ANTHROPIC_API_KEY);

  return (
    <PageShell>
      <SmoothScroll />
      <article className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pb-32">

        {/* ── Back ─────────────────────────────────────────────── */}
        <div className="pt-8 md:pt-12 mb-12">
          <Link
            href="/"
            className="
              inline-flex items-center gap-2
              text-sm text-cream-muted/60
              hover:text-cream-muted
              transition-colors duration-200
              group
            "
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All majors
          </Link>
        </div>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <header className="mb-16 md:mb-20">
          <h1 className="font-serif text-cream leading-none tracking-tight mb-5 text-4xl md:text-5xl">
            {major.name}
          </h1>
          <p className="font-serif text-xl md:text-2xl text-cream-muted leading-snug mb-8 max-w-xl">
            {major.tagline}
          </p>
          <ClusterBadge cluster={major.cluster} />
        </header>

        {/* divider */}
        <hr className="border-t border-amber/30 my-8 md:my-10" />

        {/* ── Big Question ─────────────────────────────────────── */}
        <SectionBlock label="the big question this field is trying to answer">
          <blockquote className="font-serif text-2xl md:text-3xl text-cream leading-relaxed py-6 border-l-2 border-amber pl-6">
            {major.bigQuestion}
          </blockquote>
        </SectionBlock>

        <div className="h-px bg-cream/8" />

        {/* ── Day in Life ──────────────────────────────────────── */}
        <SectionBlock label="a real day in this major">
          <p className="text-cream/90 leading-loose text-base md:text-lg">
            {major.dayInLife}
          </p>
        </SectionBlock>

        <div className="h-px bg-cream/8" />

        {/* ── Concepts ─────────────────────────────────────────── */}
        <SectionBlock label="concepts from this field">
          <div className="grid gap-5 sm:grid-cols-2">
            {major.concepts.map((concept) => (
              <div
                key={concept.title}
                className="
                  rounded-xl border border-cream/10
                  bg-navy-light/40 p-6
                  hover:border-cream/20 hover:bg-navy-light/70
                  transition-all duration-200
                "
              >
                <h3 className="font-serif text-base md:text-lg text-cream mb-3 leading-snug">
                  {concept.title}
                </h3>
                <p className="text-sm text-cream-muted leading-relaxed">
                  {concept.explanation}
                </p>
              </div>
            ))}
          </div>
        </SectionBlock>

        <div className="h-px bg-cream/8" />

        {/* ── Go Deeper ────────────────────────────────────────── */}
        <GoDeeperSection slug={major.slug} majorName={major.name} hasAiKey={hasAiKey} />

        <div className="h-px bg-cream/8" />

        {/* ── 2am Test ─────────────────────────────────────────── */}
        <SectionBlock label="what obsession looks like in this field">
          <div
            className="
              relative rounded-2xl
              border border-amber/25
              bg-navy-mid/60
              p-7 md:p-10
              overflow-hidden
            "
          >
            {/* Amber left accent bar */}
            <span
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-amber"
              aria-hidden="true"
            />

            <h3 className="font-serif text-lg md:text-xl text-cream mb-6 leading-snug max-w-lg">
              Could you see yourself reading this at 2am and not wanting to stop?
            </h3>

            <p className="text-base text-cream/85 leading-loose">
              {major.twoAmTest}
            </p>
          </div>
        </SectionBlock>

        <div className="h-px bg-cream/8" />

        {/* ── Career Paths ─────────────────────────────────────── */}
        <SectionBlock label="paths people take">
          <p className="text-sm text-cream-muted mb-6">
            People who studied {major.name} ended up doing things like:
          </p>
          <ul className="space-y-4" role="list">
            {major.careerPaths.map((path, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-cream/85 leading-relaxed"
              >
                <span
                  className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber"
                  aria-hidden="true"
                />
                <span className="text-base">{path}</span>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <div className="h-px bg-cream/8" />

        {/* ── Related Majors ───────────────────────────────────── */}
        {relatedMajorData.length > 0 && (
          <SectionBlock label="if you like this, also look at">
            <div className="flex flex-wrap gap-3">
              {relatedMajorData.map((related) => (
                <Link
                  key={related!.slug}
                  href={`/major/${related!.slug}`}
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2.5
                    rounded-full border border-cream/15
                    text-sm text-cream-muted
                    hover:text-cream hover:border-cream/30 hover:bg-cream/5
                    transition-all duration-200
                    group
                  "
                >
                  <span>{related!.name}</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </SectionBlock>
        )}

        {/* ── Save CTA ─────────────────────────────────────────── */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-cream/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-cream">Keep track of this one?</p>
            <p className="text-sm text-cream-muted mt-1">
              Save {major.name} to your list and come back later.
            </p>
          </div>
          <SaveButton slug={major.slug} majorName={major.name} />
        </div>

      </article>
    </PageShell>
  );
}
