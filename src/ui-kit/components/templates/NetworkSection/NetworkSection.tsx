import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NetworkSection.css";

const NETWORK_POINTS = [
  "Des mentors pour accompagner les femmes de l'IT",
  "Des rôles modèles pour déconstruire les préjugés et inspirer",
  "Des conférences et événements qui honorent l'expertise des femmes",
  "Un canal mixte pour œuvrer ensemble à la mixité des métiers",
  "Un canal non-mixte pour libérer la parole et performer ensemble",
];

export const NetworkSection = () => {
  return (
    <section className="network-section" id="reseau">
      <div className="container">
        <span className="section-eyebrow section-eyebrow--on-dark">
          Un réseau de confiance
        </span>
        <h2 className="network-section__title">IT Women Network</h2>
        <p className="network-section__lead">
          Réseau d'influence féminine de confiance et d'entraide.
        </p>

        <ul className="network-section__list">
          {NETWORK_POINTS.map((point) => (
            <li className="network-section__item" key={point}>
              <FontAwesomeIcon icon={faAngleRight} aria-hidden />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
