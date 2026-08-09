import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTACT_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
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

          <p className="conference-benefits-section__note">
            Organisez un événement plus inclusif avec Yeeso : mixité, inclusion,
            prévention, sécurité. Nous accompagnons les équipes organisatrices
            de conférences, meetups et événements tech, avant, pendant et après
            l'événement. Une question, un projet ? Écrivez-nous à{" "}
            <StyledLink href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </StyledLink>
            .
          </p>
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
