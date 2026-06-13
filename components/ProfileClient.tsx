"use client";

import Link from "next/link";
import { useSavedMajors } from "@/lib/useSavedMajors";
import type { Major, Cluster } from "@/data/majors";
import MajorCard from "./MajorCard";

export default function ProfileClient({ majors }: { majors: Major[] }) {
  const { isSaved, toggleSave, hydrated } = useSavedMajors();
  
  if (!hydrated) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-pulse opacity-50">
        <p className="text-cream">Loading your profile...</p>
      </div>
    );
  }

  const savedMajors = majors.filter(m => isSaved(m.slug));

  if (savedMajors.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center animate-fade-in">
        <h1 className="font-serif text-3xl md:text-4xl text-cream mb-6">
          Your saved majors
        </h1>
        <p className="text-cream-muted text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          You haven't saved any majors yet. Start browsing.
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
          Browse all majors
        </Link>
      </div>
    );
  }

  // Count clusters
  const clusterCounts = savedMajors.reduce((acc, m) => {
    acc[m.cluster] = (acc[m.cluster] || 0) + 1;
    return acc;
  }, {} as Record<Cluster, number>);

  const clusterEntries = Object.entries(clusterCounts).sort((a, b) => b[1] - a[1]);
  const dominantCluster = clusterEntries.length > 0 && clusterEntries[0][1] > 1 && (clusterEntries.length === 1 || clusterEntries[0][1] > clusterEntries[1][1]) ? clusterEntries[0][0] : null;

  const clusterSummaryText = clusterEntries.map(([cluster, count], index) => {
    const text = `${count} ${cluster} major${count === 1 ? "" : "s"}`;
    if (index === clusterEntries.length - 1 && clusterEntries.length > 1) {
      return `and ${text}`;
    }
    return text;
  }).join(clusterEntries.length > 2 ? ", " : " ");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="font-serif text-3xl md:text-4xl text-cream mb-12">
        Your saved majors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 animate-fade-in mb-16">
        {savedMajors.map((major) => (
          <MajorCard
            key={major.id}
            major={major}
            isSaved={true}
            onToggleSave={toggleSave}
          />
        ))}
      </div>

      <div className="pt-10 border-t border-cream/8">
        <h2 className="font-serif text-2xl text-cream mb-4">
          Clusters you keep coming back to
        </h2>
        <p className="text-cream/90 text-lg leading-relaxed max-w-2xl">
          You've saved {clusterSummaryText}.
          {dominantCluster && (
            <span className="block mt-2 text-amber">
              Looks like you're drawn to {dominantCluster}.
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
