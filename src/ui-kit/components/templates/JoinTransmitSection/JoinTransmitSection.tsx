import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinTransmitSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

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
        <figure className="join-transmit-section__photo">
          <img
            src={`${basePath}/img/photos/houleymatou-balde-conference.webp`}
            srcSet={`${basePath}/img/photos/houleymatou-balde-conference-sm.webp 744w, ${basePath}/img/photos/houleymatou-balde-conference.webp 1142w`}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt="Houleymatou Balde lors d'une conférence"
            width={1142}
            height={856}
          />
        </figure>

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
