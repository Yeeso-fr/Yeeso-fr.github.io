import { HELLOASSO_URL, MEMBERSHIP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./JoinHero.css";

export const JoinHero = () => {
  return (
    <section className="join-hero" aria-labelledby="join-hero-title">
      <div className="container">
        <h1 id="join-hero-title" className="join-hero__title">
          Rejoignez Yeeso,{" "}
          <span className="join-hero__title-highlight">à votre manière</span>
        </h1>
        <p className="join-hero__subtitle">
          Ensemble, faisons grandir la place des femmes dans la Tech.
        </p>
        <p className="join-hero__lead">
          Yeeso est une association mixte qui agit pour permettre à davantage de
          femmes de découvrir les métiers de la Tech, d'y trouver leur place, de
          s'y épanouir et d'accéder à des rôles de leadership et de décision.
        </p>

        <div className="join-hero__reassurance">
          <div className="join-hero__reassurance-card">
            <h2 className="join-hero__reassurance-title">
              Soutenir, sans obligation de s'engager
            </h2>
            <p>
              Adhérer, c'est déjà soutenir notre mission. Participer à nos
              actions reste un choix.
            </p>
          </div>
          <div className="join-hero__reassurance-card">
            <h2 className="join-hero__reassurance-title">
              Une association ouverte à toutes et tous
            </h2>
            <p>
              Femmes, hommes, professionnel·les de la Tech ou non : toutes
              celles et ceux qui partagent notre vision sont les bienvenu·es.
            </p>
          </div>
        </div>

        <div className="join-hero__cta">
          <StyledLink href={MEMBERSHIP_URL} filled brandColor="mint">
            J'adhère à Yeeso
          </StyledLink>
          {/* TODO: pas de lien HelloAsso "don" dédié pour l'instant — remplacer
              par le lien du formulaire de don une fois créé. */}
          <StyledLink href={HELLOASSO_URL} bordered>
            Je fais un don
          </StyledLink>
        </div>
      </div>
    </section>
  );
};
