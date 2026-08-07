import {
  faInstagram,
  faLinkedin,
  faMeetup,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MEETUP_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "@/config/social-links";
import type { QaScores } from "@/entities/qa-scores/qa-scores";
import { Badge } from "@/ui-kit/components/molecules/Badge/Badge";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";

type FooterProps = {
  qaScores?: QaScores | null;
};

export const Footer = ({ qaScores }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const lighthouseAverage = qaScores
    ? Math.round(
        (qaScores.lighthouse.performance +
          qaScores.lighthouse.accessibility +
          qaScores.lighthouse.bestPractices +
          qaScores.lighthouse.seo) /
          4,
      )
    : null;

  return (
    <footer className={"footer"}>
      <div className={"footer__content"}>
        <div className={"footer__section"}>
          <div className={"footer__brand-row"}>
            <span className={"footer__brand"}>Yeeso</span>
            <small className={"footer__pronunciation"}>/yéːso/</small>
          </div>
          <p className={"footer__description"}>
            L'avenir de l'IT avec les femmes !
          </p>
        </div>

        <div className={"footer__section"}>
          <h2 className={"footer__title"}>Réseaux Sociaux</h2>
          <div className={"footer__links"}>
            <StyledLink
              href={LINKEDIN_URL}
              iconOnly={true}
              ariaLabel="Voir la page LinkedIn de Yeeso"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden />
            </StyledLink>
            <StyledLink
              href={INSTAGRAM_URL}
              iconOnly={true}
              ariaLabel="Voir la page Instagram de Yeeso"
            >
              <FontAwesomeIcon icon={faInstagram} aria-hidden />
            </StyledLink>
            <StyledLink
              href={YOUTUBE_URL}
              iconOnly={true}
              ariaLabel="Voir la chaîne YouTube de Yeeso"
            >
              <FontAwesomeIcon icon={faYoutube} aria-hidden />
            </StyledLink>
            <StyledLink
              href={TIKTOK_URL}
              iconOnly={true}
              ariaLabel="Voir la page TikTok de Yeeso"
            >
              <FontAwesomeIcon icon={faTiktok} aria-hidden />
            </StyledLink>
            <StyledLink
              href={MEETUP_URL}
              iconOnly={true}
              ariaLabel="Voir la page Meetup de Yeeso"
            >
              <FontAwesomeIcon icon={faMeetup} aria-hidden />
            </StyledLink>
          </div>
        </div>

        <div className={"footer__section"}>
          <h2 className={"footer__title"}>Légal</h2>
          <StyledLink
            href="/a-propos"
            className="footer__legal-link"
            prefetch={false}
          >
            À Propos
          </StyledLink>
          <StyledLink
            href="/mentions-legales"
            className="footer__legal-link"
            prefetch={false}
          >
            Mentions Légales
          </StyledLink>
        </div>

        {qaScores && (
          <div className={"footer__section"}>
            <h2 className={"footer__title"}>Qualité</h2>
            <div className={"footer__links"}>
              <Badge>
                <StyledLink
                  href="/a-propos#qualite"
                  ariaLabel={`Lighthouse ${lighthouseAverage} : voir le détail du score sur la page À propos`}
                  prefetch={false}
                >
                  Lighthouse {lighthouseAverage}
                </StyledLink>
              </Badge>
              <Badge>
                <StyledLink
                  href="/a-propos#qualite"
                  ariaLabel={`Axe ${qaScores.axe.score}% : voir le détail du score d'accessibilité sur la page À propos`}
                  prefetch={false}
                >
                  Axe {qaScores.axe.score}%
                </StyledLink>
              </Badge>
              <Badge>
                <StyledLink
                  href="/a-propos#qualite"
                  ariaLabel={`EcoIndex ${qaScores.ecoindex.grade} : voir le détail du score sur la page À propos`}
                  prefetch={false}
                >
                  EcoIndex {qaScores.ecoindex.grade}
                </StyledLink>
              </Badge>
            </div>
          </div>
        )}
      </div>

      <div className={"footer__bottom"}>
        <p>© {currentYear} Yeeso. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
