import {
  ADOD_URL,
  BECOMTECH_URL,
  CEGID_URL,
  CMQ_IED_URL,
  EPSI_URL,
  FEMMES_NUMERIQUE_URL,
  FONDATION_DE_FRANCE_URL,
  FONDATION_EMERGENCE_URL,
  INOVEN_URL,
  NOVODEV_URL,
  REVELLES_URL,
  RONALPIA_URL,
  SHODO_URL,
  TECH_SHOW_PARIS_URL,
} from "@/config/social-links";
import { Ticker } from "@/ui-kit/components/molecules/Ticker/Ticker";
import "./PartnersSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href?: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Fondation de France",
    logo: "associations/fondation-de-france.webp",
    width: 1280,
    height: 1280,
    href: FONDATION_DE_FRANCE_URL,
  },
  {
    name: "Éducation nationale",
    logo: "ecoles/CMQ-IED.webp",
    width: 1360,
    height: 183,
    href: CMQ_IED_URL,
  },
  {
    name: "Cegid",
    logo: "entreprises/cegid.webp",
    width: 609,
    height: 249,
    href: CEGID_URL,
  },
  {
    name: "Shodo Lyon",
    logo: "entreprises/shodo-lyon.webp",
    width: 400,
    height: 400,
    href: SHODO_URL,
  },
  {
    name: "Adod",
    logo: "entreprises/Adod.svg",
    width: 132,
    height: 61,
    href: ADOD_URL,
  },
  {
    name: "Inoven",
    logo: "entreprises/inoven.webp",
    width: 600,
    height: 600,
    href: INOVEN_URL,
  },
  {
    name: "Novodev",
    logo: "entreprises/novodev.webp",
    width: 983,
    height: 226,
    href: NOVODEV_URL,
  },
  {
    name: "Epsi",
    logo: "ecoles/epsi.webp",
    width: 411,
    height: 216,
    href: EPSI_URL,
  },
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
    href: BECOMTECH_URL,
  },
  {
    name: "Rev'elles",
    logo: "associations/rev-elles.webp",
    width: 750,
    height: 562,
    href: REVELLES_URL,
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
    href: FONDATION_EMERGENCE_URL,
  },
  {
    name: "Tech Show Paris",
    logo: "associations/tech-show-paris-black.webp",
    width: 1600,
    height: 456,
    href: TECH_SHOW_PARIS_URL,
  },
];

const PartnerLogo = ({ partner }: { partner: Partner }) => {
  const image = (
    <span className="partners-list__item">
      <img
        src={`${basePath}/img/logos/${partner.logo}`}
        alt={partner.name}
        width={partner.width}
        height={partner.height}
      />
    </span>
  );

  // Ticker items are decorative (see the sr-only list below for the
  // accessible version), so any link here must stay out of tab order —
  // aria-hidden on the ticker hides it from assistive tech but doesn't
  // by itself stop keyboard focus from landing on it.
  return partner.href ? (
    <a
      href={partner.href}
      tabIndex={-1}
      target="_blank"
      rel="noopener noreferrer"
    >
      {image}
    </a>
  ) : (
    image
  );
};

export const PartnersSection = () => {
  return (
    <section className="partners-section" id="partenaires" tabIndex={-1}>
      <div className="container">
        <span className="section-eyebrow">Nos partenaires</span>
        <h2 className="partners-section__title">Ils collaborent avec Yeeso</h2>
      </div>

      {/* main > section has its own horizontal padding, so break out of it
          to let the ticker band span the full page width. */}
      <div className="partners-section__ticker">
        <Ticker
          items={PARTNERS.map((partner) => (
            <PartnerLogo partner={partner} key={partner.name} />
          ))}
        />
      </div>

      <ul className="sr-only">
        {PARTNERS.map((partner) => (
          <li key={partner.name}>{partner.name}</li>
        ))}
      </ul>
    </section>
  );
};
