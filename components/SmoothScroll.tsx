"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Wait a brief moment for the page to render, then smooth scroll to top
    // This provides the explicit "smooth scroll to top" the user requested
    // when navigating to a new major detail page.
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
  }, []);

  return null;
}
