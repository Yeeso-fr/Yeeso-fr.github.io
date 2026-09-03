import { clsx } from "clsx";
import type { ReactNode } from "react";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./OfferBlock.css";

export type OfferBlockProps = {
  kicker: string;
  title: string;
  description: ReactNode;
  bulletsIntro?: string;
  bullets?: ReactNode[];
  idealFor?: ReactNode;
  valorisation?: ReactNode;
  trainer?: ReactNode;
  extra?: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  modifier?: string;
};

export const OfferBlock = ({
  kicker,
  title,
  description,
  bulletsIntro,
  bullets,
  idealFor,
  valorisation,
  trainer,
  extra,
  ctaLabel,
  ctaHref,
  modifier,
}: OfferBlockProps) => {
  // The green CTA reads fine on every card color except the block's own
  // green variant, where a light-green button on a light-green background
  // has no visible contour — switch to the navy fill there instead.
  const ctaFilled = modifier === "offer-block--green" ? true : "green";

  return (
    <article className={clsx("offer-block", modifier)}>
      <p className="offer-block__kicker">{kicker}</p>
      <h3 className="offer-block__title">{title}</h3>
      <p className="offer-block__description">{description}</p>

      {bullets && bullets.length > 0 && (
        <>
          {bulletsIntro && (
            <p className="offer-block__bullets-intro">{bulletsIntro}</p>
          )}
          <ul className="offer-block__bullets">
            {bullets.map((bullet, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: bullets are static, order-stable content
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </>
      )}

      {idealFor && (
        <p className="offer-block__meta">
          <strong>Idéal pour :</strong> {idealFor}
        </p>
      )}

      {valorisation && (
        <p className="offer-block__meta">
          <strong>Valorisation :</strong> {valorisation}
        </p>
      )}

      {trainer && <p className="offer-block__trainer">{trainer}</p>}

      {extra}

      <StyledLink
        href={ctaHref}
        filled={ctaFilled}
        className="offer-block__cta"
      >
        {ctaLabel}
      </StyledLink>
    </article>
  );
};
