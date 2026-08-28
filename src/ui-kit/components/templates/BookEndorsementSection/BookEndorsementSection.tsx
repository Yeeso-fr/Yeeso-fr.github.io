import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BOOK_HELLOASSO_URL, BOOK_URL } from "@/config/social-links";
import { Badge } from "@/ui-kit/components/molecules/Badge/Badge";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./BookEndorsementSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const ELISABETH_MORENO_LINKEDIN_URL =
  "https://www.linkedin.com/in/elisabeth-s-moreno/";

const CREDENTIALS = [
  "Ministre de l'égalité femmes-hommes 2020-2022",
  "Présidente de la Fondation Femmes@Numérique",
  "Présidente du CA de Ring Capital et Ring Africa",
  "Présidente de La Puissance du Lien",
] as const;

export const BookEndorsementSection = () => {
  return (
    <section className="book-endorsement-section" id="livre">
      <div className="container">
        <span className="section-eyebrow">Le livre</span>
        <h2 className="book-endorsement-section__title">
          #techForAll : elles soutiennent le livre Yeeso
        </h2>
        <p className="book-endorsement-section__lead">
          Des personnalités engagées pour la mixité dans la tech ont accepté
          d'être signataires du livre Yeeso. Parmi elles, Élisabeth Moreno.
        </p>

        <div className="book-endorsement-card">
          <div className="book-endorsement-card__content">
            <Badge filled color="var(--color-lightpurple)">
              Signataire du livre #techForAll
            </Badge>
            <blockquote className="book-endorsement-card__quote">
              <p>
                « Un monde digital sans les femmes, c'est comme une IA sans
                données : inefficace et incomplète. Il est urgent de
                reprogrammer le système. »
              </p>
              <footer>
                Élisabeth Moreno
                <StyledLink
                  href={ELISABETH_MORENO_LINKEDIN_URL}
                  iconOnly
                  ariaLabel="Voir le profil LinkedIn d'Élisabeth Moreno"
                  className="book-endorsement-card__linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} aria-hidden />
                </StyledLink>
              </footer>
            </blockquote>
            <div className="book-endorsement-card__credentials">
              <h3 className="book-endorsement-card__credentials-title">
                Ses engagements
              </h3>
              <ul>
                {CREDENTIALS.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </div>
          </div>
          <figure className="book-endorsement-card__photo">
            <img
              src={`${basePath}/img/photos/elisabeth-moreno.webp`}
              alt=""
              width={890}
              height={1350}
            />
          </figure>
        </div>

        <div className="book-endorsement-section__cta">
          <StyledLink href={BOOK_HELLOASSO_URL} filled="green">
            Commander sur HelloAsso
          </StyledLink>
          <StyledLink href={BOOK_URL} bordered={true}>
            Acheter sur Amazon
          </StyledLink>
        </div>
      </div>
    </section>
  );
};
