"use client";

import Link from "next/link";
import { useSavedMajors } from "@/lib/useSavedMajors";

export default function NavProfile() {
  const { savedSlugs, hydrated } = useSavedMajors();
  const count = hydrated ? savedSlugs.length : 0;

  return (
    <Link
      href="/profile"
      className="
        relative inline-flex items-center gap-1.5
        text-sm text-cream-muted hover:text-cream
        transition-colors duration-200
      "
    >
      Profile
      {count > 0 && (
        <span
          aria-label={`${count} saved major${count === 1 ? "" : "s"}`}
          className="
            inline-flex items-center justify-center
            min-w-[1.25rem] h-5 px-1.5
            text-[10px] font-semibold leading-none
            bg-amber text-navy rounded-full
          "
        >
          {count}
        </span>
      )}
    </Link>
  );
}
