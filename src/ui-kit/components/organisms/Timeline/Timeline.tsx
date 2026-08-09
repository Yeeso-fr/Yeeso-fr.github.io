"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import "./Timeline.css";

export type TimelineTone = "green" | "purple" | "blue" | "coral";

export type TimelineStep = {
  title: string;
  content: React.ReactNode;
  tone: TimelineTone;
};

export type TimelineProps = {
  steps: TimelineStep[];
  /** Steps per row before wrapping into a new connected row. Defaults to 4;
   * pass the exact step count to keep everything on a single row. */
  columns?: number;
  /** "flat" (default): white card, only the node carries the tone color.
   * "tinted": the card background matches the step's tone too. */
  cardStyle?: "flat" | "tinted";
  /** Small label rendered above each step's title, e.g. "Étape {index} sur
   * {total}" — {index} (1-based) and {total} are substituted per step.
   * Omitted entirely when not provided. Plain string (not a function) so
   * server-component callers don't need "use client" just to pass it. */
  stepLabel?: string;
  /** Viewport width above which the horizontal layout takes over: "wide"
   * (1200px, default) for timelines with 4+ columns, "compact" (768px) for
   * short ones (e.g. 3 columns) that stay legible at a narrower width. */
  breakpoint?: "compact" | "wide";
};

type ConnectorLine = { x1: number; y1: number; x2: number; y2: number };

export const Timeline = ({
  steps,
  columns = 4,
  cardStyle = "flat",
  stepLabel,
  breakpoint = "wide",
}: TimelineProps) => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [lines, setLines] = useState<ConnectorLine[]>([]);

  useEffect(() => {
    const container = desktopRef.current;
    if (!container) return;

    const measure = () => {
      // When the desktop layout is display:none (narrow viewports), every
      // node rect collapses to (0, 0) — skip drawing rather than emit
      // degenerate, colliding line keys.
      if (container.offsetWidth === 0) {
        setLines([]);
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const centers = nodeRefs.current
        .filter((node): node is HTMLSpanElement => node !== null)
        .map((node) => {
          const rect = node.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          };
        });
      setLines(
        centers.slice(0, -1).map((center, i) => ({
          x1: center.x,
          y1: center.y,
          x2: centers[i + 1].x,
          y2: centers[i + 1].y,
        })),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const rows = steps.reduce<TimelineStep[][]>((acc, step, i) => {
    const rowIndex = Math.floor(i / columns);
    acc[rowIndex] ??= [];
    acc[rowIndex].push(step);
    return acc;
  }, []);

  const cardClassName = (tone: TimelineTone) =>
    cardStyle === "tinted"
      ? `timeline-item__card timeline-item__card--${tone}`
      : "timeline-item__card";

  const formatStepLabel = (index: number) =>
    stepLabel
      ?.replace("{index}", String(index + 1))
      .replace("{total}", String(steps.length));

  return (
    <div className={`timeline timeline--${breakpoint}`}>
      <div className="timeline-desktop" ref={desktopRef}>
        <svg className="timeline-desktop__connectors" aria-hidden="true">
          {lines.map((line, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: connectors are a fixed, never-reordered chunking of steps (index i connects node i to node i+1)
            <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
          ))}
        </svg>
        {rows.map((row, rowIndex) => (
          <div
            className="timeline-row"
            data-reverse={rowIndex % 2 === 1}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
            key={row[0].title}
          >
            {row.map((step, colIndex) => {
              const index = rowIndex * columns + colIndex;
              return (
                <div className="timeline-item" key={step.title}>
                  <span
                    className={`timeline-item__node timeline-item__node--${step.tone}`}
                    ref={(el) => {
                      nodeRefs.current[index] = el;
                    }}
                  >
                    {index + 1}
                  </span>
                  {stepLabel && (
                    <p className="timeline-item__phase">
                      {formatStepLabel(index)}
                    </p>
                  )}
                  <div className={cardClassName(step.tone)}>
                    <h3 className="timeline-item__title">{step.title}</h3>
                    {step.content}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <ol className="timeline-mobile">
        {steps.map((step, index) => (
          <li className="timeline-mobile-item" key={step.title}>
            <span
              className={`timeline-mobile-item__node timeline-mobile-item__node--${step.tone}`}
            >
              {index + 1}
            </span>
            <div>
              {stepLabel && (
                <p className="timeline-mobile-item__phase">
                  {formatStepLabel(index)}
                </p>
              )}
              {cardStyle === "tinted" ? (
                <div className={cardClassName(step.tone)}>
                  <h3 className="timeline-mobile-item__title">{step.title}</h3>
                  {step.content}
                </div>
              ) : (
                <>
                  <h3 className="timeline-mobile-item__title">{step.title}</h3>
                  {step.content}
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
