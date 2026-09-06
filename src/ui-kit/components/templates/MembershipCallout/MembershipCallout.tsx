import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./MembershipCallout.css";

export const MembershipCallout = () => {
  return (
    <div className="membership-callout">
      <p className="membership-callout__text">
        Envie de nous soutenir ? Devenez adhérent·e à partir d'1 € : ça prend
        deux minutes, ça ne vous engage à rien, et c'est un vrai coup de pouce
        pour la légitimité et le développement de Yeeso.
      </p>
      <StyledLink href="/reseau#adhesion" filled brandColor="mint">
        Adhérer à Yeeso
      </StyledLink>
    </div>
  );
};
