import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OfferBlock } from "@/ui-kit/components/molecules/OfferBlock/OfferBlock";
import { Tabs } from "@/ui-kit/components/molecules/Tabs/Tabs";

const meta = {
  title: "Molecules/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Onglets accessibles (pattern ARIA `tablist`/`tab`/`tabpanel`, navigation clavier avec les flèches, Home/End). Un seul panneau visible à la fois — utilisés sur la page Entreprises pour afficher les offres d'une catégorie sans empiler des blocs pleine largeur.",
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
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: "Exemple d'onglets",
    items: [
      {
        id: "premier",
        label: "Premier onglet",
        content: <p>Contenu du premier onglet.</p>,
      },
      {
        id: "deuxieme",
        label: "Deuxième onglet",
        content: <p>Contenu du deuxième onglet.</p>,
      },
      {
        id: "troisieme",
        label: "Troisième onglet",
        content: <p>Contenu du troisième onglet.</p>,
      },
    ],
  },
};

export const WithOfferBlocks: Story = {
  name: "Avec des OfferBlock (usage réel, page Entreprises)",
  args: {
    ariaLabel: "Offres de partenariat",
    items: [
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
            ]}
            ctaLabel="Devenir entreprise hôte"
            ctaHref="mailto:partenariat@yeeso.org"
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
            description="Soutenez une action Yeeso en faveur de la mixité et de la visibilité des femmes dans la Tech."
            ctaLabel="Demander un devis ou plus d'infos"
            ctaHref="mailto:partenariat@yeeso.org"
          />
        ),
      },
    ],
  },
};
