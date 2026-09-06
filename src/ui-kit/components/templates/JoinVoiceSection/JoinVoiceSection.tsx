import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinVoiceSection.css";

const POINTS = [
  "Partager votre parcours, votre métier et votre expertise.",
  "Participer à nos campagnes de rôles modèles et portraits.",
  "Contribuer à nos articles, interviews et contenus vidéo.",
  "Prendre part, selon les opportunités, au livre Yeeso, à notre chaîne YouTube et à nos projets éditoriaux.",
  "Intervenir lors de conférences, IT Women Talks ou autres prises de parole, selon les profils recherchés.",
  "Devenir à votre tour un rôle modèle capable d'inspirer.",
];

export const JoinVoiceSection = () => {
  return (
    <section className="join-voice-section" id="faire-entendre-voix">
      <div className="container join-voice-section__container">
        <div className="join-voice-section__content">
          <span className="join-voice-section__number" aria-hidden="true">
            03
          </span>
          <span className="section-eyebrow">Faites entendre votre voix</span>
          <h2 className="join-voice-section__title">
            Partagez votre parcours, valorisez votre expertise et contribuez à
            rendre visibles davantage de rôles modèles dans la Tech.
          </h2>
          <ul className="join-voice-section__list">
            {POINTS.map((point) => (
              <li key={point}>
                <FontAwesomeIcon icon={faCheck} aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <p className="join-voice-section__formats" aria-hidden="true">
            Portraits & campagnes • Livre Yeeso • YouTube • Articles & contenus
            • Conférences & IT Women Talks
          </p>
          <p className="join-voice-section__tagline">
            Partager • Être visible • Inspirer
          </p>
          <div className="join-voice-section__cta">
            <StyledLink href={MEMBERSHIP_URL} filled brandColor="mint">
              J'adhère à Yeeso
            </StyledLink>
            <StyledLink href={HELLOASSO_URL} bordered>
              Je fais un don
            </StyledLink>
          </div>
        </div>

        {/* TODO: photo — une femme de la communauté Yeeso (autre que
            Houleymatou) en situation de prise de parole ou de mise en
            lumière (voir brief). */}
        <div
          className="join-photo-placeholder"
          role="img"
          aria-label="Photo à venir : une membre de la communauté Yeeso en situation de prise de parole"
        >
          <span aria-hidden="true">Photo à venir</span>
        </div>
      </div>
    </section>
  );
};
