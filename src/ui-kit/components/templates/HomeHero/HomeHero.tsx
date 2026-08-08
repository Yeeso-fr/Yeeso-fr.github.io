import { Badge } from "@/ui-kit/components/molecules/Badge/Badge";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { Ticker } from "@/ui-kit/components/molecules/Ticker/Ticker";
import "./HomeHero.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const TICKER_ITEMS = [
  "Rôles modèles",
  "IT Women Network",
  "Confiance",
  "Éducation",
  "Mixité",
  "Mentorat",
  "Élargir le champ des possibles",
];

export const HomeHero = () => {
  return (
    <div className="home-hero-block">
      <section className="home-hero" aria-labelledby="yeeso-title">
        <div className="home-hero__wrapper">
          <div className="home-hero__main">
            <Badge filled color="var(--color-lightgreen)">
              Association loi 1901
            </Badge>
            <h1 id="yeeso-title" className="home-hero__title">
              L'avenir&nbsp;de&nbsp;l'IT{" "}
              <span className="home-hero__title-highlight">
                avec&nbsp;les&nbsp;femmes
              </span>
            </h1>
            <p className="home-hero__lead">
              Rendre le monde de l'IT plus juste, quel que soit le genre, en
              apprenant à toutes et à tous à croire en soi et en les autres, dès
              la scolarisation et dans la vie des organisations.
            </p>
            <div className="home-hero__cta">
              <StyledLink href="/programmes" filled={true}>
                Découvrir nos programmes
              </StyledLink>
              <StyledLink href="/contact" bordered={true}>
                Devenir partenaire
              </StyledLink>
            </div>
          </div>
          <div className="home-hero__aside">
            <figure className="home-hero__photo">
              <img
                src={`${basePath}/img/photos/houleymatou-hero.webp`}
                alt="Houleymatou Baldé, fondatrice de Yeeso"
                width={840}
                height={1120}
                className="home-hero__image"
              />
              <figcaption className="home-hero__caption">
                Houleymatou Baldé — fondatrice
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <Ticker items={TICKER_ITEMS} />
      <div className="home-hero-block__spacer" aria-hidden="true" />
    </div>
  );
};
