"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "spark-saved-majors";

interface UseSavedMajors {
  savedSlugs: string[];
  toggleSave: (slug: string) => void;
  isSaved: (slug: string) => boolean;
  /** False during SSR and before the first client-side hydration read. */
  hydrated: boolean;
}

export function useSavedMajors(): UseSavedMajors {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Read from localStorage once on mount (client-only — safe from SSR)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSavedSlugs(JSON.parse(raw) as string[]);
    } catch {
      // localStorage unavailable (private browsing, storage quota, etc.)
    }
    setHydrated(true);
  }, []);

  // Write back on every change — but only after hydration so we don't
  // overwrite localStorage with the empty initial state on first render.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedSlugs));
    } catch {
      // ignore write failures silently
    }
  }, [savedSlugs, hydrated]);

  const toggleSave = useCallback((slug: string) => {
    setSavedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }, []);

  const isSaved = useCallback(
    (slug: string) => savedSlugs.includes(slug),
    [savedSlugs]
  );

  return { savedSlugs, toggleSave, isSaved, hydrated };
}
