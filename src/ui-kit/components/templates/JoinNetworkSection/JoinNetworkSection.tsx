import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinNetworkSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const POINTS = [
  "Intégrer IT Women Network, notre réseau de femmes de la Tech et d'allié·es.",
  "Participer aux cafés Yeeso, rencontres networking et événements.",
  "Rencontrer des professionnel·les aux métiers, parcours et niveaux d'expérience variés.",
  "Échanger et créer des liens dans un cadre bienveillant.",
  "Développer votre réseau professionnel, localement et partout en France.",
];

export const JoinNetworkSection = () => {
  return (
    <section className="join-network-section" id="developper-reseau">
      <div className="container join-network-section__container">
        <figure className="join-network-section__photo">
          <img
            src={`${basePath}/img/photos/yeeso-evenement-networking.webp`}
            alt="Membres de la communauté Yeeso échangeant lors d'un événement de networking"
            width={1400}
            height={1050}
          />
        </figure>

        <div className="join-network-section__content">
          <span className="join-network-section__number" aria-hidden="true">
            01
          </span>
          <span className="section-eyebrow">Développez votre réseau</span>
          <h2 className="join-network-section__title">
            Faites partie d'un réseau de femmes de la Tech et d'allié·es, créez
            des liens et multipliez les rencontres.
          </h2>
          <ul className="join-network-section__list">
            {POINTS.map((point) => (
              <li key={point}>
                <FontAwesomeIcon icon={faCheck} aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <p className="join-network-section__tagline">
            Rencontrer • Échanger • Créer des liens
          </p>
          <div className="join-network-section__cta">
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
