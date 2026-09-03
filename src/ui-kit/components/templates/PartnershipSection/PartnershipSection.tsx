import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PARTNERSHIP_EMAIL } from "@/config/social-links";
import { OfferBlock } from "@/ui-kit/components/molecules/OfferBlock/OfferBlock";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { Tabs } from "@/ui-kit/components/molecules/Tabs/Tabs";
import "./PartnershipSection.css";

// La nouvelle plaquette est en cours de finalisation : on masque le
// téléchargement plutôt que de le supprimer, en attendant le PDF à jour.
const SHOW_OFFER_DOWNLOAD = false;

export const PartnershipSection = () => {
  return (
    <section className="partnership-section" id="partenariat">
      <div className="container">
        <span className="section-eyebrow">Partenariats</span>
        <h2 className="partnership-section__title">S'engager avec Yeeso</h2>
        <p className="partnership-section__lead">
          <FontAwesomeIcon icon={faHandshake} aria-hidden /> Trois façons
          d'engager votre entreprise aux côtés de Yeeso.
        </p>

        <Tabs
          ariaLabel="Offres de partenariat"
          items={[
            {
              id: "entreprise-hote",
              label: "Entreprise hôte",
              content: (
                <OfferBlock
                  modifier="offer-block--green"
                  kicker="Partenariat • Entreprise hôte"
                  title="Ouvrez vos portes à la communauté Tech de Yeeso."
                  description="Accueillez une première conférence meetup Yeeso dans vos locaux et créez un temps de rencontre avec vos collaborateurs et notre communauté."
                  bulletsIntro="Vous contribuez à :"
                  bullets={[
                    "mettre à disposition une salle et les équipements nécessaires",
                    "assurer l'accueil et le buffet",
                    "relayer la communication et mobiliser vos collaborateurs",
                  ]}
                  idealFor="découvrir Yeeso et accueillir une première action autour de la Tech et de la mixité."
                  valorisation="mise en lumière de l'entreprise en amont et pendant l'événement sur les canaux de Yeeso."
                  ctaLabel="Devenir entreprise hôte"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
            {
              id: "sponsoring",
              label: "Sponsoring",
              content: (
                <OfferBlock
                  modifier="offer-block--purple"
                  kicker="Partenariat • Sponsoring"
                  title="Associez votre marque à une action concrète de Yeeso."
                  description="Soutenez une action Yeeso en faveur de la mixité et de la visibilité des femmes dans la Tech, tout en renforçant votre visibilité et votre marque employeur."
                  bulletsIntro="Vous pouvez sponsoriser :"
                  bullets={[
                    "une conférence meetup ou un événement",
                    "un livre et sa diffusion",
                    "une campagne rôles modèles ou métiers de la Tech",
                  ]}
                  idealFor="associer votre marque à une action concrète et identifiable de Yeeso."
                  valorisation="visibilité en amont, pendant et à l'issue de l'action sur les canaux de Yeeso."
                  ctaLabel="Demander un devis ou plus d'infos"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
            {
              id: "mecenat",
              label: "Mécénat",
              content: (
                <OfferBlock
                  modifier="offer-block--coral"
                  kicker="Partenariat • Mécénat"
                  title="Soutenez durablement l'impact de Yeeso."
                  description="Devenez mécène Bronze, Argent ou Or et accompagnez Yeeso sur une année dans le développement de ses actions en faveur de la mixité dans la Tech."
                  bulletsIntro="Vous contribuez à :"
                  bullets={[
                    "développer des actions à impact",
                    "accompagner la structuration et le développement de Yeeso",
                    "faire grandir une Tech plus mixte",
                  ]}
                  idealFor="soutenir durablement l'impact, le développement ou le rayonnement de Yeeso."
                  valorisation="KPI et bilan annuel d'impact, contenus RSE et visibilité annuelle, dont votre logo sur le site de Yeeso, ainsi que d'autres contenus selon votre niveau d'engagement."
                  ctaLabel="Devenir mécène de Yeeso"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
          ]}
        />

        <p className="partnership-section__note">
          Pour toute question, écrivez-nous à{" "}
          <StyledLink href={`mailto:${PARTNERSHIP_EMAIL}`}>
            {PARTNERSHIP_EMAIL}
          </StyledLink>
          .
        </p>
        {SHOW_OFFER_DOWNLOAD && (
          <div className="partnership-section__downloads">
            <StyledLink
              href="/docs/plaquette-offre-entreprises.pdf"
              bordered={true}
              download
            >
              Télécharger notre offre de services (PDF)
            </StyledLink>
          </div>
        )}
      </div>
    </section>
  );
};
