import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NetworkSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const NETWORK_POINTS = [
  "Des mentors pour accompagner les femmes et minorités de genre dans l'IT",
  "Des rôles modèles pour déconstruire les préjugés et inspirer",
  "Des conférences et événements qui honorent l'expertise des femmes et minorités de genre",
  "Un canal mixte pour œuvrer ensemble à la mixité des métiers",
  "Un canal non-mixte pour libérer la parole et performer ensemble",
];

export const NetworkSection = () => {
  return (
    <section className="network-section" id="reseau">
      <div className="container network-section__container">
        <div className="network-section__content">
          <span className="section-eyebrow section-eyebrow--on-dark">
            Un réseau de confiance
          </span>
          <h2 className="network-section__title">IT Women Network</h2>
          <p className="network-section__lead">
            Réseau d'entraide et de confiance, pour progresser ensemble dans
            l'IT.
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

        <figure className="network-section__photo">
          <img
            src={`${basePath}/img/photos/yeeso-table-ronde.webp`}
            alt="Table ronde animée par Yeeso avec des membres de l'IT Women Network"
            width={1181}
            height={787}
          />
        </figure>
      </div>
    </section>
  );
};
