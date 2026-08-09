import { faCheck, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PARTNERSHIP_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./PartnershipSection.css";

const BENEFITS = [
  {
    label:
      "Invitation à l'adhésion Yeeso annuelle pour vos collaborateur·rices",
    bronze: true,
    argent: true,
    or: true,
  },
  {
    label: "Kit de communication Yeeso",
    bronze: true,
    argent: true,
    or: true,
  },
  {
    label: "Organisation d'un IT Women Talk sur votre site",
    bronze: true,
    argent: true,
    or: true,
  },
  {
    label: "Affichage de votre logo sur nos supports",
    bronze: false,
    argent: true,
    or: true,
  },
  {
    label: "Publication d'un post LinkedIn annonçant le partenariat",
    bronze: false,
    argent: true,
    or: true,
  },
  {
    label: "Diffusion de vos offres d'emploi sur notre Job Board interne",
    bronze: false,
    argent: true,
    or: true,
  },
  {
    label: "Adhésion à notre programme Écoles",
    bronze: false,
    argent: false,
    or: true,
  },
  {
    label: "Adhésion à notre programme Mentorat",
    bronze: false,
    argent: false,
    or: true,
  },
] as const;

const Cell = ({ included }: { included: boolean }) =>
  included ? (
    <>
      <FontAwesomeIcon icon={faCheck} aria-hidden />
      <span className="sr-only">Inclus</span>
    </>
  ) : (
    <span className="sr-only">Non inclus</span>
  );

export const PartnershipSection = () => {
  return (
    <section className="partnership-section" id="partenariat">
      <div className="container">
        <span className="section-eyebrow">Partenariat</span>
        <h2 className="partnership-section__title">
          Et si vous rejoigniez l'aventure ?
        </h2>
        <p className="partnership-section__lead">
          <FontAwesomeIcon icon={faHandshake} aria-hidden /> Trois niveaux de
          partenariat pour engager votre entreprise aux côtés de Yeeso, à
          sceller par la signature d'une convention.
        </p>

        <div className="partnership-table-wrapper">
          <table className="partnership-table">
            <caption className="sr-only">
              Avantages inclus selon le niveau de partenariat
            </caption>
            <thead>
              <tr>
                <th scope="col">Avantage</th>
                <th scope="col">Bronze</th>
                <th scope="col">Argent</th>
                <th scope="col">Or</th>
              </tr>
            </thead>
            <tbody>
              {BENEFITS.map((benefit) => (
                <tr key={benefit.label}>
                  <th scope="row">{benefit.label}</th>
                  <td>
                    <Cell included={benefit.bronze} />
                  </td>
                  <td>
                    <Cell included={benefit.argent} />
                  </td>
                  <td>
                    <Cell included={benefit.or} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <StyledLink href={`mailto:${PARTNERSHIP_EMAIL}`} filled="green">
          Devenir partenaire
        </StyledLink>

        <p className="partnership-section__note">
          Envie d'accélérer la mixité dans votre entreprise ? Yeeso vous
          accompagne de trois façons : devenez partenaire, faites appel à notre
          expertise conseil, ou formez vos équipes. Pour toute question,
          écrivez-nous à{" "}
          <StyledLink href={`mailto:${PARTNERSHIP_EMAIL}`}>
            {PARTNERSHIP_EMAIL}
          </StyledLink>
          .
        </p>
        <StyledLink
          href="/docs/plaquette-offre-entreprises.pdf"
          bordered={true}
          download
        >
          Télécharger notre offre de services (PDF)
        </StyledLink>
      </div>
    </section>
  );
};
