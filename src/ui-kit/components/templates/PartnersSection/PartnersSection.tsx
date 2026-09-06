import {
  CMQ_IED_URL,
  FEMMES_NUMERIQUE_URL,
  RONALPIA_URL,
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
  {
    name: "Tech Show Paris",
    logo: "associations/tech-show-paris-black.webp",
    width: 1600,
    height: 456,
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
    <a href={partner.href} tabIndex={-1}>
      {image}
    </a>
  ) : (
    image
  );
};

export const PartnersSection = () => {
  return (
    <section className="partners-section" id="partenaires">
      <div className="container">
        <span className="section-eyebrow">Nos partenaires</span>
        <h2 className="partners-section__title">Ils soutiennent Yeeso</h2>
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
          <li key={partner.name}>
            {partner.href ? (
              <a href={partner.href}>{partner.name}</a>
            ) : (
              partner.name
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
