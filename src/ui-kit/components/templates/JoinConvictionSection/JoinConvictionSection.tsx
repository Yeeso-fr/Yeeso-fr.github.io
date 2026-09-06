import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinConvictionSection.css";

const POINTS = [
  "Faire découvrir les métiers du numérique aux nouvelles générations.",
  "Déconstruire les stéréotypes dès le plus jeune âge.",
  "Accompagner davantage de femmes dans leur parcours professionnel.",
  "Favoriser leur accès aux postes de leadership et de décision.",
  "Rendre visibles davantage de femmes et de rôles modèles.",
  "Développer nos actions sur davantage de territoires.",
  "Mobiliser femmes et hommes autour d'une Tech plus mixte.",
];

export const JoinConvictionSection = () => {
  return (
    <section className="join-conviction-section" id="faire-avancer-mixite">
      <div className="container">
        <span className="join-conviction-section__number" aria-hidden="true">
          06
        </span>
        <span className="section-eyebrow">
          Faites avancer la mixité dans la Tech
        </span>
        <h2 className="join-conviction-section__title">
          Votre adhésion compte, même si vous n'avez pas le temps de vous
          engager.
        </h2>
        <ul className="join-conviction-section__list">
          {POINTS.map((point) => (
            <li key={point}>
              <FontAwesomeIcon icon={faCheck} aria-hidden />
              {point}
            </li>
          ))}
        </ul>

        <p className="join-conviction-section__highlight">
          Pas besoin d'être bénévole pour agir.
          <span>
            Votre adhésion est déjà une manière de soutenir notre mission. Vous
            restez libre de participer aux actions qui vous intéressent, quand
            vous le souhaitez et selon vos disponibilités.
          </span>
        </p>

        <p className="join-conviction-section__tagline">
          Soutenir • Agir • Faire avancer
        </p>
        <div className="join-conviction-section__cta">
          <StyledLink href={MEMBERSHIP_URL} filled brandColor="mint">
            J'adhère à Yeeso
          </StyledLink>
          {/* Not `reversed`: that variant's colors are relative to the
              page's own theme, but this section's background is fixed
              dark regardless of theme — see the CSS override below. */}
          <StyledLink href={HELLOASSO_URL} bordered>
            Je fais un don
          </StyledLink>
        </div>
      </div>
    </section>
  );
};
