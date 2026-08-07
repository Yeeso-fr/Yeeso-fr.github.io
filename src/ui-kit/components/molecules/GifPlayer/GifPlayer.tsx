"use client";

import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import "./GifPlayer.css";

type GifPlayerProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
};

/**
 * Renders an animated GIF with a play/pause control, in the spirit of gifa11y.
 *
 * The first frame is captured to a canvas to build a static poster, so the
 * animation can be paused on demand. Visitors who set `prefers-reduced-motion`
 * get the GIF paused by default; everyone can toggle it either way.
 */
export const GifPlayer = ({ src, alt = "", ...props }: GifPlayerProps) => {
  const [poster, setPoster] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const hasDecidedInitialState = useRef(false);

  // Capture the GIF's first frame as a static poster image.
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      context.drawImage(image, 0, 0);
      try {
        setPoster(canvas.toDataURL());
      } catch {
        // Cross-origin GIF: the canvas is tainted and cannot be exported.
        // We keep playing the GIF and simply offer no pause control.
      }
    };
  }, [src]);

  // Respect prefers-reduced-motion for the initial state, once on mount.
  useEffect(() => {
    if (hasDecidedInitialState.current) {
      return;
    }
    hasDecidedInitialState.current = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsPlaying(false);
    }
  }, []);

  const canPause = poster !== null;
  const showsGif = isPlaying || !canPause;

  return (
    <span className="gif-player">
      <img
        src={showsGif ? src : (poster as string)}
        alt={alt}
        loading="lazy"
        {...props}
      />
      {canPause && (
        <button
          type="button"
          className="gif-player__toggle"
          onClick={() => setIsPlaying((playing) => !playing)}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} aria-hidden />
          <span className="sr-only">
            {isPlaying ? "Mettre le GIF animé en pause" : "Lire le GIF animé"}
          </span>
        </button>
      )}
    </span>
  );
};
