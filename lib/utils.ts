// Utility functions for Spark
// This file will house shared helpers as the app grows.

import type { Major } from "@/data/majors";

/**
 * Look up a major by its URL slug.
 * Returns undefined if no match is found.
 */
export function getMajorBySlug(
  majors: Major[],
  slug: string
): Major | undefined {
  return majors.find((m) => m.slug === slug);
}
