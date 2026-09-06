"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import "./Ticker.css";

export type TickerProps = {
  items: ReactNode[];
};

// The -50% keyframe in Ticker.css only loops seamlessly if a single lap is
// at least as wide as the viewport — otherwise the reset reveals a blank
// gap just before it jumps back to 0. Repeating the (short) items list a
// few times keeps a lap comfortably wider than any realistic screen.
const LAP_REPEATS = 5;

// px/s the original word ticker scrolled at (12315px track ÷ 2 ÷ 125s) —
// kept as the reference speed so a track's *duration* scales with its
// content width instead of being a fixed number of seconds. Without this,
// a wider set of items (e.g. logo chips vs. short words) covers more
// ground in the same fixed duration and visibly speeds up.
const REFERENCE_PX_PER_SECOND = 12315 / 2 / 125;

export const Ticker = ({ items }: TickerProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const lap = Array.from({ length: LAP_REPEATS }, () => items).flat();
  const loopedItems = [...lap, ...lap];

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const durationSeconds = track.scrollWidth / 2 / REFERENCE_PX_PER_SECOND;
    track.style.setProperty("--ticker-duration", `${durationSeconds}s`);
  }, []);

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track" ref={trackRef}>
        {loopedItems.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static, never-reordered decorative loop
          <span className="ticker__item" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
