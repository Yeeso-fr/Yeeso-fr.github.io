import {
  faBluesky,
  faCodepen,
  faDev,
  faGithub,
  faLinkedin,
  faMastodon,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Avatar } from "@/ui-kit/components/atoms/Avatar/Avatar";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./AuthorCard.css";
import type React from "react";

export interface AuthorCardData {
  name: string;
  slug: string;
  avatar: string;
  pronouns?: string;
  website?: string;
  bluesky?: string;
  mastodon?: string;
  github?: string;
  linkedin?: string;
  medium?: string;
  devto?: string;
  codepen?: string;
  bio?: React.ReactNode;
}

interface AuthorCardProps {
  author: AuthorCardData;
  variant?: "default" | "mini";
  /** Heading level for the author's name — "h1" when this card is the page's main heading. */
  headingLevel?: "h1" | "h2" | "h3";
}

export const AuthorCard = ({
  author,
  variant = "default",
  headingLevel = "h3",
}: AuthorCardProps) => {
  const Heading = headingLevel;

  if (variant === "mini") {
    return (
      <article
        className="author-card author-card--mini"
        aria-label={author.name}
      >
        <Link href={`/authors/${author.slug}`} className="author-card__link">
          <Avatar
            src={author.avatar}
            alt=""
            size={120}
            className="author-card__avatar"
            border
          />
          <span className="author-card__name">{author.name}</span>
        </Link>
      </article>
    );
  }

  return (
    <article className="author-card framed-four-corners">
      <div className="author-card__header">
        <Avatar
          src={author.avatar}
          alt=""
          size={80}
          className="author-card__avatar"
          border
        />

        <div className="author-card__info">
          <div className="author-card__name-row">
            <Heading className="author-card__name">{author.name}</Heading>

            {author.pronouns && (
              <span className="author-card__pronouns">({author.pronouns})</span>
            )}
          </div>

          <ul className="author-card__socials">
            {author.website && (
              <li>
                <StyledLink
                  href={author.website}
                  iconOnly
                  icon={<FontAwesomeIcon icon={faGlobe} aria-hidden />}
                  ariaLabel={`Voir le site web de ${author.name}`}
                  target="_blank"
                />
              </li>
            )}

            {author.bluesky && (
              <li>
                <StyledLink
                  href={author.bluesky}
                  iconOnly
                  icon={<FontAwesomeIcon icon={faBluesky} aria-hidden />}
                  ariaLabel={`Voir le profil Bluesky de ${author.name}`}
                  target="_blank"
                />
              </li>
            )}

            {author.mastodon && (
              <li>
                <StyledLink
                  href={author.mastodon}
                  iconOnly
                  icon={<FontAwesomeIcon icon={faMastodon} aria-hidden />}
                  ariaLabel={`Voir le profil Mastodon de ${author.name}`}
                  target="_blank"
                />
              </li>
            )}

            {author.github && (
              <li>
                <StyledLink
                  href={author.github}
                  iconOnly
                  icon={<FontAwesomeIcon icon={faGithub} aria-hidden />}
                  ariaLabel={`Voir le profil GitHub de ${author.name}`}
                  target="_blank"
                />
              </li>
            )}

            {author.linkedin && (
              <li>
                <StyledLink
                  href={author.linkedin}
                  iconOnly
                  icon={<FontAwesomeIcon icon={faLinkedin} aria-hidden />}
                  ariaLabel={`Voir le profil LinkedIn de ${author.name}`}
                  target="_blank"
                />
              </li>
            )}

            {author.medium && (
              <li>
                <StyledLink
                  href={author.medium}
                  iconOnly
                  icon={<FontAwesomeIcon icon={faMedium} aria-hidden />}
                  ariaLabel={`Voir le profil Medium de ${author.name}`}
                  target="_blank"
                />
              </li>
            )}

            {author.devto && (
              <li>
                <StyledLink
                  href={author.devto}
                  iconOnly
                  icon={<FontAwesomeIcon icon={faDev} aria-hidden />}
                  ariaLabel={`Voir le profil dev.to de ${author.name}`}
                  target="_blank"
                />
              </li>
            )}

            {author.codepen && (
              <li>
                <StyledLink
                  href={author.codepen}
                  iconOnly
                  icon={<FontAwesomeIcon icon={faCodepen} aria-hidden />}
                  ariaLabel={`Voir le profil CodePen de ${author.name}`}
                  target="_blank"
                />
              </li>
            )}
          </ul>
        </div>
      </div>

      {author.bio && <div className="author-card__bio">{author.bio}</div>}

      <div className="author-card__footer">
        <StyledLink href={`/authors/${author.slug}`} bordered>
          Voir ses publications <FontAwesomeIcon icon={faArrowRightLong} />
        </StyledLink>
      </div>
    </article>
  );
};
