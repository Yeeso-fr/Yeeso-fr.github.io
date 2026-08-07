"use client";

import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./ToggleFont.css";

type FontChoice = "default" | "opendyslexic" | "luciole";

const FONT_OPTIONS: { value: FontChoice; label: string }[] = [
  { value: "default", label: "Par défaut" },
  { value: "opendyslexic", label: "OpenDyslexic" },
  { value: "luciole", label: "Luciole" },
];

const isFontChoice = (value: string | null): value is FontChoice =>
  value === "opendyslexic" || value === "luciole";

export const ToggleFont = () => {
  const [font, setFont] = useState<FontChoice>("default");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-font");
    setFont(isFontChoice(current) ? current : "default");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (font === "default") {
      document.documentElement.removeAttribute("data-font");
    } else {
      document.documentElement.setAttribute("data-font", font);
    }
    localStorage.setItem("font", font);
  }, [font, mounted]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (value: FontChoice) => {
    setFont(value);
  };

  return (
    <div className="font-toggle" ref={containerRef}>
      <button
        type="button"
        ref={buttonRef}
        className="font-toggle__button icon-toggle-button"
        aria-expanded={isOpen}
        aria-controls="font-toggle-panel"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faFont} aria-hidden />
        <span className="sr-only">Choisir une police de lecture</span>
      </button>
      <fieldset
        id="font-toggle-panel"
        className="font-toggle__panel"
        hidden={!isOpen}
      >
        <legend className="sr-only">Police de lecture</legend>
        {FONT_OPTIONS.map((option) => (
          <label
            key={option.value}
            className="font-toggle__option"
            htmlFor={`reading-font-${option.value}`}
          >
            <input
              id={`reading-font-${option.value}`}
              type="radio"
              name="reading-font"
              value={option.value}
              checked={font === option.value}
              onChange={() => handleSelect(option.value)}
            />
            {option.label}
          </label>
        ))}
      </fieldset>
    </div>
  );
};
