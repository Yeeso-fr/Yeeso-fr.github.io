import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ConferenceBenefitsSection.css";

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
      <div className="container">
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
    </section>
  );
};
