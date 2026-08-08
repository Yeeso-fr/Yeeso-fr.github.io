import { CONTACT_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./MentionsLegalesPage.css";

export const MentionsLegalesPage = () => {
  return (
    <>
      <PageHeader title="Mentions Légales" />
      <main id="maincontent" tabIndex={-1} className="legal-page">
        <div className="legal-page__container">
          <section className="legal-page__section">
            <h2>1. Édition du site</h2>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
              la confiance dans l'économie numérique, il est précisé aux
              utilisateur·ices du site internet <strong>yeeso.fr</strong>{" "}
              l'identité des différent·es intervenant·es dans le cadre de sa
              réalisation et de son suivi :
            </p>
            <p>
              <strong>Propriétaire du site :</strong> Association Yeeso (Loi
              1901, association à impact et d'intérêt général) — Contact :{" "}
              <StyledLink href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </StyledLink>
            </p>
            <p>
              <strong>Adresse :</strong> 244 avenue Paul Santy, 69008 Lyon
              <br />
              <strong>SIREN :</strong> 923 865 752
              <br />
              <strong>SIRET (siège) :</strong> 923 865 752 00011
              <br />
              <strong>N° RNA :</strong> W193004610
              <br />
              <strong>N° TVA intracommunautaire :</strong> FR69923865752
              <br />
              <strong>Catégorie juridique :</strong> Association déclarée
            </p>
            <p>
              <strong>Directeur·rice de la publication :</strong> L'équipe Yeeso
            </p>
          </section>

          <section className="legal-page__section">
            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par GitHub, Inc., dont le siège social est
              situé 88 Colin P Kelly Jr Street, San Francisco, CA 94107,
              États-Unis.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>3. Propriété intellectuelle et contrefaçons</h2>
            <p>
              Yeeso est propriétaire des droits de propriété intellectuelle ou
              détient les droits d'usage sur les éléments techniques et
              graphiques du site internet : logos, graphismes, architecture,
              icônes et sons. Les contenus rédactionnels (articles, images et
              vidéos qui les accompagnent) restent la propriété de leurs
              auteur·ices respectif·ves, qui en conservent la paternité — voir
              la section 4.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de Yeeso ou, pour les contenus rédactionnels, de
              leur auteur·ice.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>4. Droit d'auteur des contributions</h2>
            <p>
              Les articles et contenus publiés sur Yeeso sont rédigés par des
              personnes qui en conservent la paternité. Lorsque du contenu a été
              initialement publié sur un blog ou une source externe, un lien
              vers la publication originale est systématiquement indiqué, dès
              lors que cela est précisé, par respect du droit d'auteur.
            </p>
            <p>
              Toute personne ayant contribué à Yeeso peut demander le retrait de
              son contenu à tout moment, par simple envoi d'un e-mail à{" "}
              <StyledLink href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </StyledLink>
              . La demande sera traitée dans les meilleurs délais.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>5. Limitations de responsabilité</h2>
            <p>
              Yeeso ne pourra être tenu pour responsable des dommages directs et
              indirects causés au matériel de l'utilisateur·ice lors de l'accès
              au site yeeso.fr.
            </p>
            <p>
              Yeeso décline toute responsabilité quant à l'utilisation qui
              pourrait être faite des informations et contenus présents sur
              yeeso.fr.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>6. Crédits</h2>
            <p>
              <strong>Logo &amp; charte graphique :</strong> Violaine Dilas —
              Out Of Frame (stratégie de marque &amp; conduite du changement),
              novembre 2023.
            </p>
            <p>
              <strong>Police Arimo :</strong> Google, sous licence Apache
              License 2.0, métrique-compatible avec Helvetica/Arial —{" "}
              <StyledLink href="https://fonts.google.com/specimen/Arimo">
                fonts.google.com/specimen/Arimo
              </StyledLink>
            </p>
            <p>
              <strong>Police Kobbi 1.1 :</strong> © Jérémy Schneider (VJ Type),
              2021, licence d'usage acquise par Yeeso —{" "}
              <StyledLink href="https://vj-type.com">vj-type.com</StyledLink>
            </p>
            <p>
              <strong>Police Fira Code :</strong> Nikita Prokopov, basée sur
              Fira Mono (Mozilla, Erik Spiekermann & Carrois Type Design), sous
              licence SIL Open Font License 1.1 —{" "}
              <StyledLink href="https://fonts.google.com/specimen/Fira+Code">
                fonts.google.com/specimen/Fira+Code
              </StyledLink>
            </p>
            <p>
              <strong>Police OpenDyslexic :</strong> Abbie Gonzalez, sous
              licence SIL Open Font License 1.1 —{" "}
              <StyledLink href="https://opendyslexic.org">
                opendyslexic.org
              </StyledLink>
            </p>
            <p>
              <strong>Police Luciole :</strong> Laurent Bourcellier & Jonathan
              Perez, sous licence Creative Commons Attribution 4.0 —{" "}
              <StyledLink href="https://luciole-vision.com">
                luciole-vision.com
              </StyledLink>
            </p>
          </section>
        </div>
      </main>
    </>
  );
};
