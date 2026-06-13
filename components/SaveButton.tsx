"use client";

import { useSavedMajors } from "@/lib/useSavedMajors";

interface SaveButtonProps {
  slug: string;
  majorName: string;
}

export default function SaveButton({ slug, majorName }: SaveButtonProps) {
  const { isSaved, toggleSave, hydrated } = useSavedMajors();
  const saved = hydrated && isSaved(slug);

  return (
    <button
      type="button"
      onClick={() => toggleSave(slug)}
      aria-label={saved ? `Remove ${majorName} from saved` : `Save ${majorName}`}
      aria-pressed={saved}
      className={`
        flex-shrink-0
        inline-flex items-center gap-2.5
        px-7 py-3.5
        font-medium text-sm tracking-wide rounded-xl
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy
        ${
          saved
            ? "bg-amber/12 text-amber border border-amber/35 hover:bg-amber/20"
            : "bg-amber text-navy shadow-md shadow-amber/20 hover:bg-amber-dim hover:shadow-lg hover:shadow-amber/30 hover:-translate-y-px active:translate-y-0"
        }
      `}
    >
      {saved ? (
        <>
          {/* Filled bookmark */}
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 2a2 2 0 0 0-2 2v18l8-4 8 4V4a2 2 0 0 0-2-2H6z" />
          </svg>
          Saved
        </>
      ) : (
        <>
          {/* Outline bookmark */}
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
          Save this major
        </>
      )}
    </button>
  );
}
