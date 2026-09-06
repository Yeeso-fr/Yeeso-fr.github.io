import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinSkillsSection.css";

const POINTS = [
  "Rejoindre une équipe ou une Squad Yeeso.",
  "Contribuer à des projets porteurs de sens.",
  "Organiser ou coordonner des événements et des actions.",
  "Développer vos compétences en gestion de projet, communication, animation ou prise de parole.",
  "Expérimenter de nouvelles responsabilités et développer votre leadership.",
  "Mettre votre expertise au service d'une mission d'intérêt général.",
];

export const JoinSkillsSection = () => {
  return (
    <section className="join-skills-section" id="competences">
      <div className="container join-skills-section__container">
        <div className="join-skills-section__content">
          <span className="join-skills-section__number" aria-hidden="true">
            05
          </span>
          <span className="section-eyebrow">
            Développez vos compétences autrement
          </span>
          <h2 className="join-skills-section__title">
            Faites de votre engagement un terrain d'apprentissage,
            d'expérimentation et de leadership.
          </h2>
          <ul className="join-skills-section__list">
            {POINTS.map((point) => (
              <li key={point}>
                <FontAwesomeIcon icon={faCheck} aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <p className="join-skills-section__formats" aria-hidden="true">
            Contribuer à un projet • Développer ses compétences • Prendre des
            responsabilités
          </p>
          <p className="join-skills-section__tagline">
            Expérimenter • Contribuer • Grandir
          </p>
          <div className="join-skills-section__cta">
            <StyledLink href={MEMBERSHIP_URL} filled brandColor="mint">
              J'adhère à Yeeso
            </StyledLink>
            <StyledLink href={HELLOASSO_URL} bordered>
              Je fais un don
            </StyledLink>
          </div>
        </div>

        {/* TODO: photo — Jessica, Leadeuse de la Squad Tech'Sensibilisation,
            avec Houleymatou sur scène lors de la remise du trophée obtenu
            par sa Squad (voir brief). */}
        <div
          className="join-photo-placeholder"
          role="img"
          aria-label="Photo à venir : remise de trophée à la Squad Tech'Sensibilisation"
        >
          <span aria-hidden="true">Photo à venir</span>
        </div>
      </div>
    </section>
  );
};
