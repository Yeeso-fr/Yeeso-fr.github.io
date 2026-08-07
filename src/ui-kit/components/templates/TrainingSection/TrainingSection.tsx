import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PARTNERSHIP_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./TrainingSection.css";

const TRAININGS = [
  {
    title: "Le futur de la tech est inclusif",
    details: "Cadrage 3h · Design 3h · Animation 1h · Reporting & feedback 3h",
    trainer: "Formatrice : la Directrice Générale de Yeeso",
    modifier: "training-card--green",
  },
  {
    title: "Leadership inclusif",
    details: "Cadrage 5h · Design 5h · Animation 3h · Reporting & feedback 3h",
    trainer: "Formatrice : la Directrice Générale de Yeeso",
    modifier: "training-card--purple",
  },
  {
    title: "Recrutement inclusif",
    details: "En partenariat avec l'association « À Compétence Égale »",
    trainer: "",
    modifier: "training-card--coral",
  },
] as const;

export const TrainingSection = () => {
  return (
    <section className="training-section" id="formation">
      <div className="container">
        <span className="section-eyebrow">Formation</span>
        <h2 className="training-section__title">Booster d'engagement</h2>
        <p className="training-section__lead">
          <FontAwesomeIcon icon={faGraduationCap} aria-hidden /> Des formats
          courts pour sensibiliser et outiller vos équipes, animés par Yeeso.
        </p>

        <div className="training-section__cards">
          {TRAININGS.map((training) => (
            <div
              className={`training-card ${training.modifier}`}
              key={training.title}
            >
              <h3 className="training-card__title">{training.title}</h3>
              <p className="training-card__details">{training.details}</p>
              {training.trainer && (
                <p className="training-card__trainer">{training.trainer}</p>
              )}
            </div>
          ))}
        </div>

        <p className="training-section__note">Tarifs communiqués sur devis.</p>
        <StyledLink href={`mailto:${PARTNERSHIP_EMAIL}`} bordered={true}>
          Organiser une formation
        </StyledLink>
      </div>
    </section>
  );
};
