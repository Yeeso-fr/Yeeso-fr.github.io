import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinConversionSection.css";

export const JoinConversionSection = () => {
  return (
    <section className="join-conversion-section" id="soutenir-yeeso">
      <div className="container">
        <h2 className="join-conversion-section__title">
          Deux façons de soutenir Yeeso
        </h2>

        <div className="join-conversion-section__cards">
          <div className="join-conversion-card join-conversion-card--primary">
            <h3 className="join-conversion-card__title">J'adhère</h3>
            <p>Je rejoins la communauté et je soutiens la mission de Yeeso.</p>
            <p>
              J'accède aux rencontres, programmes et opportunités proposés aux
              membres et je participe, si je le souhaite, aux actions de
              l'association.
            </p>
            <p className="join-conversion-card__note">
              Sans obligation de bénévolat.
            </p>
            {/* Plain filled (navy), not brandColor="mint" — this card's
                own background is already mint green, so a mint button
                would blend in and disappear. */}
            <StyledLink href={MEMBERSHIP_URL} filled>
              J'adhère à Yeeso
            </StyledLink>
          </div>

          <div className="join-conversion-card">
            <h3 className="join-conversion-card__title">Je fais un don</h3>
            <p>Je donne à Yeeso les moyens d'aller plus loin.</p>
            <p>
              Mon don contribue directement au développement de nos actions de
              sensibilisation, d'accompagnement et de mise en lumière.
            </p>
            {/* TODO: pas de lien HelloAsso "don" dédié pour l'instant —
                remplacer par le lien du formulaire de don une fois créé. */}
            <StyledLink href={HELLOASSO_URL} bordered>
              Je fais un don
            </StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
};
