"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";

const PLACEHOLDERS = [
  "Comment centrer une div ?",
  "CSS Grid ou Flexbox ?",
  "Animations avec @keyframes",
  "Variables CSS : var(--color)",
  "Media queries responsive",
];

export const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [query, setQuery] = useState("");
  const state = useRef({ phraseIndex: 0, charIndex: 0, isDeleting: false });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const { phraseIndex, charIndex, isDeleting } = state.current;
      const phrase = PLACEHOLDERS[phraseIndex];

      if (!isDeleting) {
        const next = charIndex + 1;
        setPlaceholder(phrase.slice(0, next));
        state.current.charIndex = next;
        timeoutId = setTimeout(tick, next === phrase.length ? 1500 : 80);
        if (next === phrase.length) {
          state.current.isDeleting = true;
        }
      } else {
        const next = charIndex - 1;
        setPlaceholder(phrase.slice(0, next));
        state.current.charIndex = next;
        if (next === 0) {
          state.current.isDeleting = false;
          state.current.phraseIndex = (phraseIndex + 1) % PLACEHOLDERS.length;
          timeoutId = setTimeout(tick, 400);
        } else {
          timeoutId = setTimeout(tick, 50);
        }
      }
    };

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <search className="search-bar">
      <form action="/recherche">
        <label htmlFor="search-input" className="sr-only">
          Rechercher
        </label>
        <span id="search-placeholder-hint" className="sr-only">
          Le texte d'exemple change automatiquement pour suggérer des
          recherches.
        </span>
        <div className="search-bar__field">
          <input
            id="search-input"
            className="search-bar__input"
            type="search"
            name="q"
            placeholder={placeholder}
            autoComplete="off"
            aria-describedby="search-placeholder-hint"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="search-bar__button"
            disabled={query.trim() === ""}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden />
            <span className="sr-only">Lancer la recherche</span>
          </button>
        </div>
      </form>
    </search>
  );
};
