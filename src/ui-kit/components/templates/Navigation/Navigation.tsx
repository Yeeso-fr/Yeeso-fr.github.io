"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/ui-kit/components/atoms/Images/Logo";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { ToggleAnimation } from "@/ui-kit/components/molecules/ToggleAnimation/ToggleAnimation";
import { ToggleFont } from "@/ui-kit/components/molecules/ToggleFont/ToggleFont";
import { ToggleTheme } from "@/ui-kit/components/molecules/ToggleTheme/ToggleTheme";
import "./Navigation.css";

interface NavigationProps {
  hasArticles: boolean;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Navigation = ({ hasArticles }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const nav = navRef.current;
    const burger = burgerRef.current;
    if (!nav || !burger) return;

    // The burger button toggles into the close control, so it stays part of
    // the trapped loop (first) alongside the menu links (last = last link) —
    // otherwise Tab/Shift+Tab can never reach it back once inside the menu.
    const navLinks = Array.from(
      nav.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    const focusables = [burger, ...navLinks];
    navLinks[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        burger.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const currentPage = (prefix: string, exact = false): "page" | undefined => {
    if (!pathname) return undefined;
    const match = exact ? pathname === prefix : pathname.startsWith(prefix);
    return match ? "page" : undefined;
  };

  return (
    <header className="navigation">
      <a className="skip-link" href="#maincontent">
        Aller au contenu principal
      </a>
      <div className="container">
        <StyledLink
          href="/"
          aria-label="Voir la page d'accueil"
          className="navigation__logo-link"
          onClick={() => setIsMenuOpen(false)}
          prefetch={false}
        >
          <Logo />
        </StyledLink>
        <div className="navigation__end">
          <button
            ref={burgerRef}
            type="button"
            className="burger-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          </button>
          <nav
            ref={navRef}
            id="primary-navigation"
            aria-label="Navigation principale"
            className={`nav ${isMenuOpen ? "open" : ""}`}
          >
            <ul>
              <li>
                <StyledLink
                  href="/programmes"
                  aria-current={currentPage("/programmes")}
                  onClick={() => setIsMenuOpen(false)}
                  prefetch={false}
                >
                  Nos actions
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="/entreprises"
                  aria-current={currentPage("/entreprises")}
                  onClick={() => setIsMenuOpen(false)}
                  prefetch={false}
                >
                  Nos prestations
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="/a-propos"
                  aria-label="À propos de Yeeso"
                  aria-current={currentPage("/a-propos")}
                  onClick={() => setIsMenuOpen(false)}
                  prefetch={false}
                >
                  À propos
                </StyledLink>
              </li>
              {hasArticles && (
                <li>
                  <StyledLink
                    href="/articles"
                    aria-label="Voir le blog"
                    aria-current={currentPage("/articles")}
                    onClick={() => setIsMenuOpen(false)}
                    prefetch={false}
                  >
                    Blog
                  </StyledLink>
                </li>
              )}
              <li>
                <StyledLink
                  href="/contact"
                  aria-current={currentPage("/contact")}
                  onClick={() => setIsMenuOpen(false)}
                  prefetch={false}
                >
                  Contact
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="/reseau#adhesion"
                  filled="green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nous rejoindre
                </StyledLink>
              </li>
            </ul>
          </nav>
          <ToggleTheme />
        </div>
        <div className="navigation__mobile-toggles">
          <ToggleFont />
          <ToggleAnimation />
        </div>
      </div>
    </header>
  );
};
