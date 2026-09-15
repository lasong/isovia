"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which anchored section of the home page the reader is looking at, so
 * the header can mark the matching nav item while scrolling.
 *
 * The winner is whichever section fills most of the viewport below the sticky
 * header, and only if it also beats the room taken by everything that is not a
 * section — the hero, the emergency band, the closing CTA. Measuring area is
 * what keeps the mark on the section actually on screen: these sections each
 * run taller than a viewport, so the moment a section's top edge crosses the
 * header says very little about what is being read.
 */
export function useActiveSection(ids: readonly string[], enabled = true) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (!enabled) return;

    const sectionIds = key.split(",");
    let frame = 0;

    const measure = () => {
      frame = 0;

      // The header is sticky, so it covers the top of the viewport and the
      // reading area is whatever sits below it. Measuring beats hard-coding:
      // the utility bar makes the header taller on desktop than on mobile.
      const top =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const bottom = window.innerHeight;
      const reading = bottom - top;
      if (reading <= 0) return;

      let winner: string | null = null;
      let winnerArea = 0;
      let covered = 0;

      for (const id of sectionIds) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (!rect) continue;

        const visible = Math.max(
          0,
          Math.min(rect.bottom, bottom) - Math.max(rect.top, top),
        );
        covered += visible;

        if (visible > winnerArea) {
          winnerArea = visible;
          winner = id;
        }
      }

      setActive(winnerArea > reading - covered ? winner : null);
    };

    // Scheduled rather than called outright, both to coalesce bursts of scroll
    // events into one measurement per frame and to keep the effect body itself
    // free of synchronous state updates.
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [enabled, key]);

  return enabled ? active : null;
}
