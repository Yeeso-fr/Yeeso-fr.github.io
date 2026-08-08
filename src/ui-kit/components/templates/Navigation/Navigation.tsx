"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { MEMBERSHIP_URL } from "@/config/social-links";
import { Logo } from "@/ui-kit/components/atoms/Images/Logo";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { ToggleFont } from "@/ui-kit/components/molecules/ToggleFont/ToggleFont";
import { ToggleTheme } from "@/ui-kit/components/molecules/ToggleTheme/ToggleTheme";
import "./Navigation.css";

interface NavigationProps {
  hasArticles: boolean;
}

export const Navigation = ({ hasArticles }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <button
          type="button"
          className="burger-button"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
        <nav
          aria-label="Navigation principale"
          className={`nav ${isMenuOpen ? "open" : ""}`}
        >
          <ul>
            <li>
              <StyledLink
                href="/#mission"
                onClick={() => setIsMenuOpen(false)}
                prefetch={false}
              >
                Notre mission
              </StyledLink>
            </li>
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
                href={MEMBERSHIP_URL}
                filled="green"
                onClick={() => setIsMenuOpen(false)}
              >
                Nous rejoindre
              </StyledLink>
            </li>
          </ul>
          <ToggleFont />
          <ToggleTheme />
        </nav>
      </div>
    </header>
  );
};
