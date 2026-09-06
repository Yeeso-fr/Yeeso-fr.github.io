import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinFinalBanner.css";

export const JoinFinalBanner = () => {
  return (
    <section className="join-final-banner">
      <div className="container">
        <h2 className="join-final-banner__title">Rejoignez l'aventure Yeeso</h2>
        <p className="join-final-banner__tagline">
          Adhérer • Donner • Participer • Transmettre
        </p>
        <p className="join-final-banner__lead">
          Il n'existe pas une seule façon de faire avancer la mixité dans la
          Tech.
          <br />
          Trouvez la vôtre.
        </p>
        <div className="join-final-banner__cta">
          <StyledLink href={MEMBERSHIP_URL} filled brandColor="mint">
            J'adhère à Yeeso
          </StyledLink>
          {/* TODO: pas de lien HelloAsso "don" dédié pour l'instant —
              remplacer par le lien du formulaire de don une fois créé.
              Not `reversed`: relative to the page's theme, but this
              banner's background is fixed navy regardless of theme — see
              the CSS override below. */}
          <StyledLink href={HELLOASSO_URL} bordered>
            Je fais un don
          </StyledLink>
        </div>
      </div>
    </section>
  );
};
