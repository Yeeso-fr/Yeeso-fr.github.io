import { MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./MembershipSection.css";

export const MembershipSection = () => {
  return (
    <section className="membership-section" id="adhesion">
      <div className="container">
        <span className="section-eyebrow">Adhésion</span>
        <h2 className="membership-section__title">
          Pourquoi adhérer à Yeeso ?
        </h2>

        <p className="membership-section__lead">
          Chaque nouvelle adhésion est un signal fort : vous montrez que vous
          croyez en ce que nous faisons, et que vous voulez que ça continue.
          L'adhésion est libre, elle prend deux minutes, et elle change vraiment
          les choses pour nous.
        </p>

        <p className="membership-section__body">
          Yeeso est une jeune association : elle doit encore gagner en taille et
          en légitimité, et cela ne se fera pas seulement avec des cœurs et de
          bonnes intentions. Pour prétendre aux subventions et aux financements
          essentiels à notre développement, nous devons d'abord être capables de
          mesurer notre impact et notre légitimité auprès d'un public réel et
          identifiable, et le nombre d'adhérent·es est justement l'un des
          indicateurs les plus concrets de la vitalité, de la représentativité
          et de la fiabilité d'une association.
        </p>

        <p className="membership-section__highlight">
          À partir d'1 €, votre adhésion vous donne accès à notre Slack privé
          ainsi qu'à nos lunch talks et cafés en visio en non-mixité choisie, et
          ne vous engage à rien de plus.
        </p>

        <StyledLink href={MEMBERSHIP_URL} filled="green">
          Adhérer à Yeeso
        </StyledLink>
      </div>
    </section>
  );
};
