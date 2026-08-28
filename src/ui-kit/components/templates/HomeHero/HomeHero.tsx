"use client";

import { useEffect, useState } from "react";
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

const LEADERS = [
  {
    name: "Albane",
    role: "Leader d'antenne — Lyon",
    photo: "albane.webp",
    width: 920,
    height: 900,
  },
  {
    name: "Angélique",
    role: "Leader de squad — Animation",
    photo: "angelique.webp",
    width: 1200,
    height: 1200,
  },
  {
    name: "Angi",
    role: "Leader d'antenne — Nantes",
    photo: "angi.webp",
    width: 1200,
    height: 1200,
  },
  {
    name: "Emmanuelle",
    role: "Leader d'antenne — Paris",
    photo: "emmanuelle.webp",
    width: 1024,
    height: 1024,
  },
  {
    name: "Jacqueline",
    role: "Leader d'antenne — Lille",
    photo: "jacqueline.webp",
    width: 800,
    height: 800,
  },
  {
    name: "Jeanne",
    role: "Leader de squad — Stratégie",
    photo: "jeanne.webp",
    width: 974,
    height: 900,
  },
  {
    name: "Marie-Laure",
    role: "Leader de squad — Mentorat",
    photo: "marie-laure.webp",
    width: 800,
    height: 1200,
  },
  {
    name: "Marie",
    role: "Leader d'antenne — Toulouse",
    photo: "marie.webp",
    width: 1200,
    height: 1200,
  },
] as const;

const ROTATE_INTERVAL_MS = 10_000;

/**
 * Excludes the currently-shown pair so every rotation swaps both photos —
 * otherwise a plain random draw can re-pick one of the current two by
 * chance, making it look like only one side changed.
 */
function pickTwoDistinctIndexes(
  length: number,
  exclude: readonly number[] = [],
): [number, number] {
  const pool = Array.from({ length }, (_, i) => i).filter(
    (i) => !exclude.includes(i),
  );
  const firstPoolIndex = Math.floor(Math.random() * pool.length);
  const [first] = pool.splice(firstPoolIndex, 1);
  const second = pool[Math.floor(Math.random() * pool.length)];
  return [first, second];
}

export const HomeHero = () => {
  // Fixed on the server/first paint so hydration matches, then randomized
  // client-side once mounted (see effect below) — avoids a hydration
  // mismatch from Math.random() differing between server and client.
  const [[leftIndex, rightIndex], setPair] = useState<[number, number]>([0, 1]);

  useEffect(() => {
    setPair((current) => pickTwoDistinctIndexes(LEADERS.length, current));
    const id = setInterval(() => {
      setPair((current) => pickTwoDistinctIndexes(LEADERS.length, current));
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const left = LEADERS[leftIndex];
  const right = LEADERS[rightIndex];

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
            <div className="home-hero__photo-group">
              <figure
                className="home-hero__photo home-hero__photo--side home-hero__photo--left"
                key={`left-${left.photo}`}
              >
                <img
                  src={`${basePath}/img/photos/team/${left.photo}`}
                  alt={`${left.name}, ${left.role}`}
                  width={left.width}
                  height={left.height}
                  className="home-hero__image"
                />
              </figure>

              <figure className="home-hero__photo home-hero__photo--main">
                <img
                  src={`${basePath}/img/photos/team/houleymatou-hero.webp`}
                  alt="Houleymatou Baldé, fondatrice de Yeeso"
                  width={840}
                  height={1120}
                  className="home-hero__image"
                />
              </figure>

              <figure
                className="home-hero__photo home-hero__photo--side home-hero__photo--right"
                key={`right-${right.photo}`}
              >
                <img
                  src={`${basePath}/img/photos/team/${right.photo}`}
                  alt={`${right.name}, ${right.role}`}
                  width={right.width}
                  height={right.height}
                  className="home-hero__image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Ticker items={TICKER_ITEMS} />
      <div className="home-hero-block__spacer" aria-hidden="true" />
    </div>
  );
};
