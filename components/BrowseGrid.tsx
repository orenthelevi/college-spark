"use client";

import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Cluster, Major } from "@/data/majors";
import MajorCard from "./MajorCard";
import { useSavedMajors } from "@/lib/useSavedMajors";

const ALL_CLUSTERS: Cluster[] = [
  "Sciences",
  "Social Sciences",
  "Humanities",
  "Applied",
  "Interdisciplinary",
];

interface BrowseGridProps {
  majors: Major[];
}

export default function BrowseGrid({ majors }: BrowseGridProps) {
  const router = useRouter();
  const { isSaved, toggleSave } = useSavedMajors();
  const [query, setQuery] = useState("");
  const [activeCluster, setActiveCluster] = useState<Cluster | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return majors.filter((m) => {
      const matchesCluster = activeCluster ? m.cluster === activeCluster : true;
      const matchesSearch =
        q === "" ||
        m.name.toLowerCase().includes(q) ||
        m.tagline.toLowerCase().includes(q);
      return matchesCluster && matchesSearch;
    });
  }, [majors, query, activeCluster]);

  const handleSurpriseMe = useCallback(() => {
    const pick = majors[Math.floor(Math.random() * majors.length)];
    router.push(`/major/${pick.slug}`);
  }, [majors, router]);

  return (
    <div className="relative pb-24">
      {/* ── Search ───────────────────────────────────────────────── */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-muted/50 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search majors…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full pl-11 pr-4 py-3
              bg-navy-light/60 border border-cream/10
              rounded-xl text-sm text-cream
              placeholder:text-cream-muted/40
              focus:outline-none focus:border-amber/50 focus:bg-navy-light
              transition-all duration-200
            "
          />
        </div>
      </div>

      {/* ── Cluster Filter Row ────────────────────────────────────── */}
      <div className="flex flex-nowrap whitespace-nowrap overflow-x-auto gap-2 mb-10 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <FilterButton
          label="All"
          active={activeCluster === null}
          onClick={() => setActiveCluster(null)}
        />
        {ALL_CLUSTERS.map((cluster) => (
          <FilterButton
            key={cluster}
            label={cluster}
            active={activeCluster === cluster}
            onClick={() =>
              setActiveCluster((prev) => (prev === cluster ? null : cluster))
            }
          />
        ))}
      </div>

      {/* ── Grid ─────────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 animate-fade-in"
          aria-live="polite"
          aria-label="Majors grid"
        >
          {filtered.map((major) => (
            <MajorCard
              key={major.id}
              major={major}
              isSaved={isSaved(major.slug)}
              onToggleSave={toggleSave}
            />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center" aria-live="polite">
          <p className="text-cream-muted/60 text-base">
            No majors match that search. Try a different word or browse all.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActiveCluster(null);
            }}
            className="mt-4 text-sm text-amber hover:text-amber-dim underline underline-offset-2 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* ── Surprise Me ──────────────────────────────────────────── */}
      <button
        onClick={handleSurpriseMe}
        aria-label="Navigate to a random major"
        className="
          fixed bottom-8 right-6 md:right-10
          flex items-center gap-2
          px-5 py-3
          bg-amber text-navy
          rounded-full font-medium text-sm
          shadow-lg shadow-amber/20
          hover:bg-amber-dim
          hover:shadow-xl hover:shadow-amber/30
          hover:-translate-y-0.5
          active:translate-y-0
          transition-all duration-200
          z-40
        "
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          {/* Dice icon */}
          <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
          <circle cx="8" cy="8" r="1.2" fill="currentColor" />
          <circle cx="16" cy="8" r="1.2" fill="currentColor" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          <circle cx="8" cy="16" r="1.2" fill="currentColor" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" />
        </svg>
        Surprise me
      </button>
    </div>
  );
}

/* ── Filter Button ─────────────────────────────────────────────── */

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`
        relative px-4 py-2 rounded-lg text-sm font-medium
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-1 focus-visible:ring-offset-navy
        ${
          active
            ? "font-bold text-amber bg-amber/10 border border-amber/30"
            : "text-cream-muted border border-cream/8 hover:text-cream hover:border-cream/20 hover:bg-cream/5"
        }
      `}
    >
      {label}
      {active && (
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px w-3/5 h-0.5 bg-amber rounded-full"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
