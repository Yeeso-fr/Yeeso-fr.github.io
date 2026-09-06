import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinTransmitSection.css";

const POINTS = [
  "Rencontrer les jeunes dans les écoles, collèges et lycées.",
  "Leur faire découvrir la diversité des métiers et parcours de la Tech.",
  "Partager votre expérience et votre métier.",
  "Contribuer à déconstruire les préjugés et les stéréotypes.",
  "Accompagner d'autres femmes, notamment à travers le mentorat.",
];

export const JoinTransmitSection = () => {
  return (
    <section className="join-transmit-section" id="transmettre-inspirer">
      <div className="container join-transmit-section__container">
        {/* TODO: photo — vraie photo Yeeso dans un établissement scolaire :
            intervention, échange ou atelier avec des jeunes (voir brief). */}
        <div
          className="join-photo-placeholder"
          role="img"
          aria-label="Photo à venir : une intervention Yeeso dans un établissement scolaire"
        >
          <span aria-hidden="true">Photo à venir</span>
        </div>

        <div className="join-transmit-section__content">
          <span className="join-transmit-section__number" aria-hidden="true">
            04
          </span>
          <span className="section-eyebrow">Transmettez et inspirez</span>
          <h2 className="join-transmit-section__title">
            Votre parcours peut ouvrir le champ des possibles à quelqu'un
            d'autre.
          </h2>
          <ul className="join-transmit-section__list">
            {POINTS.map((point) => (
              <li key={point}>
                <FontAwesomeIcon icon={faCheck} aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <p className="join-transmit-section__highlight">
            Transmettre fait aussi grandir : raconter son parcours, vulgariser
            son métier et prendre la parole développent aussi de nouvelles
            compétences.
          </p>
          <p className="join-transmit-section__tagline">
            Transmettre • Sensibiliser • Inspirer
          </p>
          <div className="join-transmit-section__cta">
            <StyledLink href={MEMBERSHIP_URL} filled brandColor="mint">
              J'adhère à Yeeso
            </StyledLink>
            <StyledLink href={HELLOASSO_URL} bordered>
              Je fais un don
            </StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
};
