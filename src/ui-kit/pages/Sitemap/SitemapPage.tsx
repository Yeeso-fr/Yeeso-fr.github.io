import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./SitemapPage.css";

type SitemapLink = {
  href: string;
  label: string;
};

const SITEMAP_LINKS: SitemapLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/programmes", label: "Programmes" },
  { href: "/reseau", label: "Réseau" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/education", label: "Éducation" },
  { href: "/conferences", label: "Conférences" },
  { href: "/articles", label: "Articles" },
  { href: "/authors", label: "Auteur·ices" },
  { href: "/nous-rejoindre", label: "Nous rejoindre" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

export const SitemapPage = () => {
  return (
    <>
      <PageHeader title="Plan du site" />
      <main id="maincontent" tabIndex={-1} className="sitemap-page">
        <nav aria-label="Plan du site" className="sitemap-page__container">
          <ul className="sitemap-page__list">
            {SITEMAP_LINKS.map(({ href, label }) => (
              <li key={href}>
                <StyledLink href={href} prefetch={false}>
                  {label}
                </StyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
};
