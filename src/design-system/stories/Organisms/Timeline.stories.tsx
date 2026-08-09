import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Timeline } from "@/ui-kit/components/organisms/Timeline/Timeline";

const meta = {
  title: "Organisms/Timeline",
  component: Timeline,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          'Timeline responsive : lignes connectées et éventuellement enroulées (« serpentine ») en horizontal sur les grands écrans, liste verticale avec étiquette à droite en dessous du point de rupture. `cardStyle="flat"` (par défaut) laisse la carte blanche et ne colore que le point ; `cardStyle="tinted"` colore aussi la carte. `columns` fixe le nombre d\'étapes par ligne avant retour à la ligne (passer le nombre total d\'étapes garde tout sur une seule ligne). `breakpoint` choisit le seuil de bascule horizontal/vertical : `"wide"` (1200px, par défaut) pour 4 colonnes ou plus, `"compact"` (768px) pour une timeline plus courte.',
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="container" style={{ padding: "3rem 2rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flat: Story = {
  name: "Flat (blanc, point coloré)",
  args: {
    columns: 4,
    cardStyle: "flat",
    stepLabel: "Étape {index} sur {total}",
    steps: [
      {
        title: "Maternelle",
        tone: "green",
        content: (
          <p className="timeline-item__description">
            Ateliers de sensibilisation à l'égalité filles-garçons à travers des
            échanges ludiques : jeux, activités et projections.
          </p>
        ),
      },
      {
        title: "Primaire",
        tone: "purple",
        content: (
          <p className="timeline-item__description">
            Ateliers de sensibilisation à l'égalité filles-garçons et notions du
            monde du travail.
          </p>
        ),
      },
      {
        title: "Collège",
        tone: "blue",
        content: (
          <p className="timeline-item__description">
            Cartographie des métiers du digital et de la tech, témoignages de
            rôles modèles féminins.
          </p>
        ),
      },
      {
        title: "Lycée",
        tone: "coral",
        content: (
          <p className="timeline-item__description">
            Jeu de cartes Genre et Inégalités, et speed-meetings avec des
            professionnel·les de l'IT.
          </p>
        ),
      },
      {
        title: "Écoles de reconversion",
        tone: "green",
        content: (
          <p className="timeline-item__description">
            Masterclass techniques et pitchs de rôles modèles, animés par des IT
            Women expérimentées.
          </p>
        ),
      },
      {
        title: "Étudiantes Tech",
        tone: "purple",
        content: (
          <p className="timeline-item__description">
            Mentorat, parrainage et marrainage, conseils pour la recherche de
            stage ou d'emploi.
          </p>
        ),
      },
    ],
  },
};

export const Tinted: Story = {
  name: "Tinted (carte colorée), 3 colonnes",
  args: {
    columns: 3,
    cardStyle: "tinted",
    breakpoint: "compact",
    steps: [
      {
        title: "Avant l'événement",
        tone: "green",
        content: (
          <ul>
            <li>Accès à nos ressources et guides</li>
            <li>Mise en relation avec notre réseau d'intervenant·es</li>
          </ul>
        ),
      },
      {
        title: "Le jour J",
        tone: "purple",
        content: (
          <ul>
            <li>Check-list sécurité</li>
            <li>Prestations possibles sur devis</li>
          </ul>
        ),
      },
      {
        title: "Après l'événement",
        tone: "coral",
        content: (
          <ul>
            <li>Récapitulatif sur les KPI</li>
            <li>Partage des contenus créés</li>
          </ul>
        ),
      },
    ],
  },
};
