import { Badge } from "@/ui-kit/components/molecules/Badge/Badge";
import "./AboutHero.css";

export const AboutHero = () => {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="container">
        <Badge filled color="var(--color-lightgreen)">
          À propos
        </Badge>
        <h1 id="about-hero-title" className="about-hero__title">
          Une association née d'une conviction :{" "}
          <span className="about-hero__title-highlight">
            l'IT appartient aussi aux femmes
          </span>
        </h1>
        <p className="about-hero__lead">
          Yeeso est une association loi 1901. Nous agissons là où les inégalités
          se fabriquent, à l'école, dans les représentations, dans les équipes,
          pour accélérer la féminisation des métiers de l'informatique.
        </p>
      </div>
    </section>
  );
};
