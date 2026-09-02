"use client";

import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./ToggleAnimation.css";

export const ToggleAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("animations");
    if (stored === "paused") {
      setIsPlaying(false);
    } else if (stored !== "playing") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      setIsPlaying(!prefersReducedMotion);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isPlaying) {
      document.documentElement.removeAttribute("data-animations");
      localStorage.setItem("animations", "playing");
    } else {
      document.documentElement.setAttribute("data-animations", "paused");
      localStorage.setItem("animations", "paused");
    }
  }, [isPlaying, mounted]);

  return (
    <button
      type="button"
      className="animation-toggle icon-toggle-button"
      onClick={() => setIsPlaying((prev) => !prev)}
    >
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} aria-hidden />
      <span className="sr-only" aria-live="polite">
        {isPlaying ? "Mettre les animations en pause" : "Lire les animations"}
      </span>
    </button>
  );
};
