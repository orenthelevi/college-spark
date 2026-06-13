"use client";

import Link from "next/link";
import type { Major } from "@/data/majors";
import ClusterBadge from "./ClusterBadge";

interface MajorCardProps {
  major: Major;
  isSaved?: boolean;
  onToggleSave?: (slug: string) => void;
}

export default function MajorCard({
  major,
  isSaved = false,
  onToggleSave,
}: MajorCardProps) {
  return (
    <Link
      href={`/major/${major.slug}`}
      className="
        group block relative
        rounded-2xl border border-cream/8
        bg-navy-light/40
        p-6 md:p-8
        transition-all duration-300 ease-out
        hover:bg-navy-light/80 active:bg-navy-light/80
        hover:shadow-xl active:shadow-xl hover:shadow-black/30 active:shadow-black/30
        hover:-translate-y-0.5 active:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy
        overflow-hidden
      "
    >
      {/* Amber left border — scales in on hover */}
      <span
        className="
          absolute left-0 top-4 bottom-4
          w-0.5 rounded-full bg-amber
          scale-y-0 origin-center
          transition-transform duration-300 ease-out
          group-hover:scale-y-100
        "
        aria-hidden="true"
      />

      {/* Bookmark toggle — top right */}
      {onToggleSave && (
        <button
          type="button"
          aria-label={
            isSaved
              ? `Remove ${major.name} from saved`
              : `Save ${major.name}`
          }
          aria-pressed={isSaved}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleSave(major.slug);
          }}
          className="
            absolute top-4 right-4
            p-1.5 rounded-lg
            text-cream-muted/40
            hover:text-amber hover:bg-amber/10
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber
            z-10
          "
        >
          {isSaved ? (
            <svg
              className="w-4 h-4 text-amber"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 2a2 2 0 0 0-2 2v18l8-4 8 4V4a2 2 0 0 0-2-2H6z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 2a2 2 0 0 0-2 2v18l8-4 8 4V4a2 2 0 0 0-2-2H6z"
              />
            </svg>
          )}
        </button>
      )}

      <div className="mb-4">
        <ClusterBadge cluster={major.cluster} />
      </div>

      <h3 className="font-serif text-xl md:text-2xl text-cream mb-3 group-hover:text-amber transition-colors duration-300 leading-snug">
        {major.name}
      </h3>

      <p className="text-sm md:text-base text-cream-muted leading-relaxed line-clamp-2">
        {major.tagline}
      </p>

      <div className="mt-6 flex items-center gap-1.5 text-xs text-cream-muted/50 group-hover:text-amber/80 transition-colors duration-300">
        <span className="tracking-wide">Explore</span>
        <svg
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
