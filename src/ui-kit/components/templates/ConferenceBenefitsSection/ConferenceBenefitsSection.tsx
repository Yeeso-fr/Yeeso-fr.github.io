import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ConferenceBenefitsSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const NEEDS = [
  "Accueillir un public plus diversifié",
  "Rassurer vos participant·es",
  "Plus de mixité dans votre line-up",
  "Structurer votre démarche d'inclusion",
  "Prévenir les situations problématiques",
  "Passer à l'action sans repartir de zéro",
] as const;

export const ConferenceBenefitsSection = () => {
  return (
    <section className="conference-benefits-section" id="pourquoi">
      <div className="container conference-benefits-section__container">
        <div className="conference-benefits-section__content">
          <span className="section-eyebrow">Pourquoi nous ?</span>
          <h2 className="conference-benefits-section__title">
            Pourquoi travailler avec nous ?
          </h2>
          <p className="conference-benefits-section__lead">Vous voulez...</p>

          <ul className="conference-benefits-section__list">
            {NEEDS.map((need) => (
              <li key={need}>
                <FontAwesomeIcon icon={faCheck} aria-hidden />
                {need}
              </li>
            ))}
          </ul>
        </div>

        <figure className="conference-benefits-section__photo">
          <img
            src={`${basePath}/img/photos/houleymatou-balde-conference.webp`}
            alt="Houleymatou Balde, fondatrice de Yeeso, prenant la parole lors d'une conférence"
            width={1400}
            height={1050}
          />
        </figure>
      </div>
    </section>
  );
};
