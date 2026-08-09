import {
  CMQ_IED_URL,
  FEMMES_NUMERIQUE_URL,
  RONALPIA_URL,
} from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./PartnersSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href?: string;
};

const FINANCIAL_PARTNERS: Partner[] = [
  {
    name: "Fondation de France",
    logo: "associations/fondation-de-france.webp",
    width: 1280,
    height: 1280,
  },
  {
    name: "Éducation nationale",
    logo: "ecoles/cmq-ied.webp",
    width: 1360,
    height: 183,
    href: CMQ_IED_URL,
  },
  { name: "Cegid", logo: "entreprises/cegid.webp", width: 609, height: 249 },
  {
    name: "Shodo Lyon",
    logo: "entreprises/shodo-lyon.webp",
    width: 400,
    height: 400,
  },
  { name: "Adod", logo: "entreprises/adod.svg", width: 132, height: 61 },
  {
    name: "Inoven",
    logo: "entreprises/inoven.webp",
    width: 600,
    height: 600,
  },
  {
    name: "Novodev",
    logo: "entreprises/novodev.webp",
    width: 983,
    height: 226,
  },
  { name: "Epsi", logo: "ecoles/epsi.webp", width: 411, height: 216 },
];

const ECOSYSTEM_PARTNERS: Partner[] = [
  {
    name: "Femmes@Numérique",
    logo: "associations/femmes-at-numerique.webp",
    width: 236,
    height: 56,
    href: FEMMES_NUMERIQUE_URL,
  },
  {
    name: "BECOMTECH",
    logo: "associations/becometech.webp",
    width: 400,
    height: 87,
  },
  {
    name: "Rev'elles",
    logo: "associations/rev-elles.webp",
    width: 750,
    height: 562,
  },
  {
    name: "Ronalpia",
    logo: "associations/ronalpia.webp",
    width: 3528,
    height: 1668,
    href: RONALPIA_URL,
  },
  {
    name: "Fondation émergence",
    logo: "associations/fondation-emergences.webp",
    width: 1501,
    height: 410,
  },
];

const PartnerLogo = ({ partner }: { partner: Partner }) => {
  const image = (
    <img
      src={`${basePath}/img/logos/${partner.logo}`}
      alt={partner.name}
      width={partner.width}
      height={partner.height}
    />
  );

  return (
    <li className="partners-list__item">
      {partner.href ? (
        <StyledLink href={partner.href}>{image}</StyledLink>
      ) : (
        image
      )}
    </li>
  );
};

const PartnerList = ({ partners }: { partners: Partner[] }) => (
  <ul className="partners-list">
    {partners.map((partner) => (
      <PartnerLogo partner={partner} key={partner.name} />
    ))}
  </ul>
);

export const PartnersSection = () => {
  return (
    <section className="partners-section" id="partenaires">
      <div className="container">
        <span className="section-eyebrow">Nos partenaires</span>
        <h2 className="partners-section__title">Ils soutiennent Yeeso</h2>

        <div className="partners-section__groups">
          <div className="partners-section__group">
            <h3 className="partners-section__group-title">
              Partenaires financiers
            </h3>
            <PartnerList partners={FINANCIAL_PARTNERS} />
          </div>
          <div className="partners-section__group">
            <h3 className="partners-section__group-title">
              Partenaires écosystèmes
            </h3>
            <PartnerList partners={ECOSYSTEM_PARTNERS} />
          </div>
        </div>
      </div>
    </section>
  );
};
