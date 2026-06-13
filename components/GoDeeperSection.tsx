"use client";

import { useState } from "react";
import SectionBlock from "./SectionBlock";

interface GoDeeperSectionProps {
  slug: string;
  majorName: string;
  hasAiKey: boolean;
}

export default function GoDeeperSection({ slug, majorName, hasAiKey }: GoDeeperSectionProps) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  if (!hasAiKey) return null;

  const handleGenerate = async () => {
    setLoading(true);
    setError(false);
    setContent("");
    setHasGenerated(true);

    try {
      const res = await fetch("/api/generate-major", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, name: majorName }),
      });

      if (!res.ok) throw new Error("Failed to generate content");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("No reader available");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setContent((prev) => prev + decoder.decode(value, { stream: true }));
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionBlock label="go deeper">
      {!hasGenerated && !loading && !error && (
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="
            inline-flex items-center gap-2
            px-6 py-3
            rounded-xl border border-amber/30 text-amber
            bg-amber/5 hover:bg-amber/15
            transition-all duration-200
            font-medium text-sm
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          Generate a deeper look at {majorName}
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      )}

      {loading && !content && (
        <div className="flex items-center gap-3 text-cream-muted py-4">
          <div className="w-4 h-4 rounded-full border-2 border-amber/30 border-t-amber animate-spin" />
          <span className="text-sm">Generating perspective...</span>
        </div>
      )}

      {content && (
        <div className="space-y-4">
          <div className="prose prose-invert prose-cream max-w-none text-cream/90 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
            {content}
          </div>
          
          {loading && (
             <div className="w-2 h-2 rounded-full bg-amber animate-pulse mt-4" />
          )}

          {!loading && (
            <button
              onClick={handleGenerate}
              className="mt-6 text-xs text-cream-muted/60 hover:text-amber transition-colors underline underline-offset-4"
            >
              Regenerate
            </button>
          )}
        </div>
      )}

      {error && (
        <div className="py-4">
          <p className="text-cream text-sm mb-3">Couldn't generate content. Try again.</p>
          <button
            onClick={handleGenerate}
            className="text-sm text-amber underline underline-offset-4 hover:text-amber-dim transition-colors"
          >
            Retry
          </button>
        </div>
      )}
    </SectionBlock>
  );
}
