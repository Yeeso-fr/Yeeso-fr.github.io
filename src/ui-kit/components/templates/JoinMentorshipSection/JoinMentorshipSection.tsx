import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinMentorshipSection.css";

const POINTS = [
  "Bénéficier du mentorat Yeeso.",
  "Participer à des masterclass, conférences et temps de partage d'expertise.",
  "Échanger autour de problématiques professionnelles, techniques, de carrière ou de leadership.",
  "Bénéficier de l'expérience et des conseils d'autres membres.",
  "Partager à votre tour vos connaissances et votre expertise.",
];

export const JoinMentorshipSection = () => {
  return (
    <section className="join-mentorship-section" id="progresser-partager">
      <div className="container join-mentorship-section__container">
        <div className="join-mentorship-section__content">
          <span className="join-mentorship-section__number" aria-hidden="true">
            02
          </span>
          <span className="section-eyebrow">Progressez et partagez</span>
          <h2 className="join-mentorship-section__title">
            Apprenez des autres, partagez vos expériences et avancez dans votre
            parcours professionnel.
          </h2>
          <ul className="join-mentorship-section__list">
            {POINTS.map((point) => (
              <li key={point}>
                <FontAwesomeIcon icon={faCheck} aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <p className="join-mentorship-section__formats" aria-hidden="true">
            Mentorat • Masterclass • Partage d'expertise
          </p>
          <p className="join-mentorship-section__tagline">
            Apprendre • Partager • Progresser
          </p>
          <div className="join-mentorship-section__cta">
            <StyledLink href={MEMBERSHIP_URL} filled brandColor="mint">
              J'adhère à Yeeso
            </StyledLink>
            <StyledLink href={HELLOASSO_URL} bordered>
              Je fais un don
            </StyledLink>
          </div>
        </div>

        {/* TODO: photo — vraie photo mentor / mentorée (voir brief). */}
        <div
          className="join-photo-placeholder"
          role="img"
          aria-label="Photo à venir : un binôme mentor et mentorée de Yeeso"
        >
          <span aria-hidden="true">Photo à venir</span>
        </div>
      </div>
    </section>
  );
};
