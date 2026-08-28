import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BOOK_HELLOASSO_URL,
  BOOK_URL,
  CONTACT_EMAIL,
  HELLOASSO_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MEETUP_URL,
  MEMBERSHIP_URL,
  PARTNERSHIP_EMAIL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./FaqSection.css";

export const FaqSection = () => {
  return (
    <section className="faq-section" id="questions">
      <div className="container">
        <span className="section-eyebrow">Questions/réponses</span>
        <h2 className="faq-section__title">Vos questions, nos réponses</h2>
        <p className="faq-section__lead">
          Nos réponses rapides <strong>aux questions fréquemment posées</strong>{" "}
          au sujet de notre association, son fonctionnement et vos possibilités
          d'engagement.
        </p>

        <div className="faq-list">
          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>Comment adhérer et rejoindre le réseau ?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>
                Plusieurs formules d'adhésion vous sont proposées selon votre
                souhait d'engagement. Une fois votre adhésion effectuée, vous
                recevrez un message automatique pour vous inscrire dans le
                réseau IT Women Network, sur nos différents canaux d'échange, de
                networking et d'entraide, mixtes ou non mixtes.
              </p>
              <StyledLink href={MEMBERSHIP_URL} filled="green">
                Adhérer à Yeeso
              </StyledLink>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>Comment intervenir dans les écoles ?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>
                De la maternelle aux études supérieures, de nombreuses
                interventions sont possibles selon vos souhaits et sensibilités
                : éveil à l'équité femme-homme, déconstruction des préjugés de
                genre, atelier de cartographie des métiers de l'IT, échanges
                avec les jeunes, présentation de votre métier.
              </p>
              <div className="faq-item__actions">
                <StyledLink href="/education" bordered>
                  Découvrir nos actions à l'école
                </StyledLink>
                <StyledLink href={`mailto:${CONTACT_EMAIL}`} filled="green">
                  Écrire à l'équipe Éducation
                </StyledLink>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>Comment être mentor·e et/ou mentoré·e ?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>
                Étudiant·es, personnes en reconversion, professionnel·les : pour
                rejoindre notre cercle de mentorat, que vous soyez bénéficiaire
                ou mentor·e, notre équipe dédiée vous accueille et vous guide
                dans vos démarches.
              </p>
              <div className="faq-item__actions">
                <StyledLink href="/reseau" bordered>
                  Découvrir le réseau
                </StyledLink>
                <StyledLink href={`mailto:${CONTACT_EMAIL}`} filled="green">
                  Rejoindre le mentorat
                </StyledLink>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>Comment participer à nos conférences ?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>
                <strong>Pour être speakeuse :</strong> vous êtes une femme de la
                tech et souhaitez informer, instruire, témoigner,
                sensibiliser... Les IT Women Talks de Yeeso constituent un lieu
                privilégié pour la prise de parole, à Lyon, Nantes, Rennes,
                Lille, Paris, Toulouse et bientôt Poitiers et Strasbourg : nos
                responsables d'antennes vous réservent le meilleur accueil !
              </p>
              <p>
                <strong>Pour assister à nos conférences</strong> IT Women Talks,
                ouvertes à un public mixte, en tant que spectateur·ice :
                l'inscription s'effectue sur la plateforme Meetup.
              </p>
              <div className="faq-item__actions">
                <StyledLink href={`mailto:${CONTACT_EMAIL}`} bordered>
                  Candidater comme speakeuse
                </StyledLink>
                <StyledLink href={MEETUP_URL} filled="green">
                  Voir nos événements sur Meetup
                </StyledLink>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>Comment soutenir Yeeso ?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>
                Selon vos envies, vos moyens et votre désir d'engagement, le
                choix est diversifié : adhérer, faire un don, soutenir la
                diffusion de notre livre, ou devenir bénévole — vous êtes la/le
                bienvenu·e, quelle que soit votre envie d'aider.
              </p>
              <div className="faq-item__actions">
                <StyledLink href={MEMBERSHIP_URL} filled="green">
                  Adhérer à Yeeso
                </StyledLink>
                <StyledLink href={HELLOASSO_URL} bordered>
                  Faire un don
                </StyledLink>
                <StyledLink href={BOOK_HELLOASSO_URL} bordered>
                  Soutenir la diffusion du livre
                </StyledLink>
                <StyledLink href="/contact" bordered>
                  Devenir bénévole
                </StyledLink>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>Comment candidater pour être entreprise partenaire ?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>
                Votre entreprise a fait le choix de la mixité et vous souhaitez
                passer à l'action ou aller plus loin ? En tant que partenaire,
                vous occupez une position privilégiée lors des prises de parole
                de Yeeso au sein de la communauté tech, tout en soutenant nos
                événements (sponsoring, prêt de locaux, de matériel...) ou en
                les co-construisant à travers certaines de nos prestations :
                conférences et tables rondes, interventions au sein de vos
                équipes autour de la mixité, formation de vos encadrant·es aux
                enjeux de la mixité...
              </p>
              <div className="faq-item__actions">
                <StyledLink href="/entreprises" bordered>
                  Découvrir notre offre entreprises
                </StyledLink>
                <StyledLink href={`mailto:${PARTNERSHIP_EMAIL}`} filled="green">
                  Devenir partenaire
                </StyledLink>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>Comment être entreprise mécène de Yeeso ?</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>
                Vous soutenez les actions de Yeeso et souhaitez contribuer à son
                financement ? Contactez-nous pour que nous vous présentions nos
                offres de mécénat.
              </p>
              <StyledLink href={`mailto:${PARTNERSHIP_EMAIL}`} filled="green">
                Découvrir nos offres de mécénat
              </StyledLink>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>
                Comment se procurer le livre Yeeso et/ou l'offrir à un·e jeune ?
              </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>
                Notre livre est destiné aux jeunes, aux femmes en reconversion,
                aux expert·es de l'IT et à toutes celles et ceux qui se sentent
                concerné·es par les enjeux d'une tech plus équitable et plus
                inclusive.
              </p>
              <div className="faq-item__actions">
                <StyledLink href={BOOK_HELLOASSO_URL} filled="green">
                  Commander sur HelloAsso
                </StyledLink>
                <StyledLink href={BOOK_URL} bordered>
                  Acheter sur Amazon
                </StyledLink>
              </div>
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-item__summary">
              <span>Nous suivre au quotidien</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className="faq-item__chevron"
              />
            </summary>
            <div className="faq-item__answer">
              <p>Pour rester informé·e, ça se passe sur nos réseaux sociaux.</p>
              <div className="faq-item__actions">
                <StyledLink href={LINKEDIN_URL} bordered>
                  LinkedIn
                </StyledLink>
                <StyledLink href={INSTAGRAM_URL} bordered>
                  Instagram
                </StyledLink>
                <StyledLink href={YOUTUBE_URL} bordered>
                  YouTube
                </StyledLink>
                <StyledLink href={TIKTOK_URL} bordered>
                  TikTok
                </StyledLink>
                <StyledLink href={MEETUP_URL} bordered>
                  Meetup
                </StyledLink>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
