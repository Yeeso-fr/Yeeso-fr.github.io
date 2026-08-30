import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PARTNERSHIP_EMAIL } from "@/config/social-links";
import { OfferBlock } from "@/ui-kit/components/molecules/OfferBlock/OfferBlock";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { Tabs } from "@/ui-kit/components/molecules/Tabs/Tabs";
import "./CompanyConferencesSection.css";

export const CompanyConferencesSection = () => {
  return (
    <section className="company-conferences-section" id="conferences">
      <div className="container">
        <span className="section-eyebrow">Conférences</span>
        <h2 className="company-conferences-section__title">Inspirer</h2>
        <p className="company-conferences-section__lead">
          <FontAwesomeIcon icon={faMicrophoneLines} aria-hidden /> Des prises de
          parole engagées pour faire bouger les lignes dans votre entreprise.
        </p>

        <Tabs
          ariaLabel="Offres de conférences"
          items={[
            {
              id: "keynote",
              label: "Keynote",
              content: (
                <OfferBlock
                  modifier="offer-block--purple"
                  kicker="Conférence • Keynote"
                  title="Une histoire qui inspire et fédère. Un message qui reste."
                  description="Des keynotes inspirantes, engagées et interactives, nourries du parcours d'une femme partie de zéro, aujourd'hui leader reconnue de la Tech. Une approche authentique et fédératrice, avec humour et sans culpabiliser, pour embarquer tous les publics et faire bouger les lignes."
                  bulletsIntro="Vous bénéficiez de :"
                  bullets={[
                    "une keynote sur mesure, adaptée à vos enjeux et votre public",
                    "une prise de parole fédératrice qui embarque tous les publics",
                    "un temps d'échange interactif",
                  ]}
                  idealFor="conventions, séminaires et temps forts autour de la mixité, diversité & inclusion, leadership, sexisme & stéréotypes, IA, cybersécurité et métiers de la Tech."
                  valorisation="possibilité de valoriser la collaboration en amont et à l'issue de l'événement sur les canaux de Yeeso."
                  ctaLabel="Demander un devis ou plus d'infos"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
            {
              id: "table-ronde",
              label: "Table ronde",
              content: (
                <OfferBlock
                  modifier="offer-block--coral"
                  kicker="Conférence • Table ronde"
                  title="Une expertise qui nourrit le débat. Une voix qui fait avancer la discussion."
                  description="Un regard à la croisée de la Tech, de la mixité et du leadership, nourri d'une expérience d'ingénieure, de dirigeante de Yeeso et du terrain. Une prise de parole accessible et fédératrice pour partager du vécu, challenger les idées reçues et enrichir les échanges sans culpabiliser."
                  idealFor="tables rondes, panels et débats en entreprise autour de la mixité, du leadership et de la Tech."
                  valorisation="possibilité de valoriser la collaboration en amont et à l'issue de l'événement sur les canaux de Yeeso."
                  ctaLabel="Demander un devis ou plus d'infos"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
            {
              id: "conception-conference",
              label: "Conception de conférence",
              content: (
                <OfferBlock
                  modifier="offer-block--noir"
                  kicker="Conférence • Conception"
                  title="De l'idée au jour J, construisons une conférence qui marque."
                  description="Yeeso vous accompagne de A à Z dans la conception éditoriale de votre conférence : fil rouge, format, programmation, intervenantes, préparation des prises de parole et animation."
                  bulletsIntro="Vous bénéficiez de :"
                  bullets={[
                    "un accompagnement sur mesure, adapté à vos objectifs et votre public",
                    "une programmation cohérente et engageante",
                    "un accompagnement jusqu'au jour J pour donner vie à votre conférence",
                  ]}
                  idealFor="conférences internes, temps forts Tech, mixité, diversité & inclusion, semaines thématiques et événements collaborateurs."
                  valorisation="possibilité de valoriser la collaboration en amont et à l'issue de l'événement sur les canaux de Yeeso."
                  ctaLabel="Demander un devis ou plus d'infos"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
          ]}
        />

        <div className="company-conferences-section__downloads">
          <StyledLink
            href="/docs/plaquette-conferences-houleymatou-balde.pdf"
            bordered={true}
            download
          >
            Téléchargez notre offre de conférences & création d'événements (PDF)
          </StyledLink>
        </div>
      </div>
    </section>
  );
};
