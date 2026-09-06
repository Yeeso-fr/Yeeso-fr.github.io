import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  StyledLink,
  type StyledLinkProps,
} from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import {
  BRAND_COLORS,
  type BrandColorName,
} from "@/ui-kit/styles/theme/brandColors";

const allIcons = { ...Brands, ...Solid };
const iconNames = Object.keys(allIcons).filter(
  (key) => key.startsWith("fa") && key !== "fas" && key !== "fab",
) as (keyof typeof allIcons)[];

const brandColorNames = Object.keys(BRAND_COLORS) as BrandColorName[];

type StyledLinkStoryArgs = StyledLinkProps & {
  faIcon?: (typeof iconNames)[number];
};

const meta = {
  title: "Molecules/Link",
  component: StyledLink,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'Deux types : **filled** (fond plein) et **contoured** (`bordered` — bordure, fond transparent). Un lien filled accepte soit `brandColor` (une couleur de la charte Yeeso), soit `customColor` (n\'importe quelle couleur CSS) — `customColor` est prioritaire si les deux sont fournis. Ex. « Nous rejoindre » utilise `filled brandColor="mint"`.',
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    faIcon: {
      options: iconNames,
      control: {
        type: "select",
      },
    },
    brandColor: {
      options: brandColorNames,
      control: {
        type: "select",
      },
    },
    customColor: {
      control: {
        type: "color",
      },
    },
  },
} satisfies Meta<StyledLinkStoryArgs>;

export default meta;
type Story = StoryObj<StyledLinkStoryArgs>;

export const Basic: Story = {
  args: {
    href: "#",
    children: "CSS Tricks",
  },
  render: (args) => (
    <>
      <StyledLink {...args} />
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>[CSS Tricks](#)</code>
        </pre>
      </div>
    </>
  ),
};

export const Bordered: Story = {
  name: "Contoured",
  args: {
    href: "#",
    children: "CSS Tricks",
    bordered: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Type contoured (`bordered`) — bordure, fond transparent.",
      },
    },
  },
  render: (args) => (
    <>
      <StyledLink {...args} />
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>[CSS Tricks](#?bordered)</code>
        </pre>
      </div>
    </>
  ),
};

export const Filled: Story = {
  args: {
    href: "#",
    children: "CSS Tricks",
    filled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Type filled — fond plein (couleur `primary` par défaut).",
      },
    },
  },
  render: (args) => (
    <>
      <StyledLink {...args} />
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>[CSS Tricks](#?filled)</code>
        </pre>
      </div>
    </>
  ),
};

export const Colors: Story = {
  name: "Filled — couleurs de la charte",
  parameters: {
    docs: {
      description: {
        story:
          "Le type filled décliné dans chaque couleur de la charte graphique, via la prop `brandColor` (voir Brand Guidelines et `brandColors.ts`).",
      },
    },
  },
  render: () => (
    <div className="story-button-row">
      {brandColorNames.map((name) => (
        <StyledLink key={name} href="#" filled brandColor={name}>
          {BRAND_COLORS[name].label}
        </StyledLink>
      ))}
    </div>
  ),
};

export const CustomColor: Story = {
  name: "Filled — couleur personnalisée",
  parameters: {
    docs: {
      description: {
        story:
          "Pour une couleur hors charte, la prop `customColor` accepte n'importe quelle couleur CSS (ignore `color` si les deux sont fournis).",
      },
    },
  },
  args: {
    href: "#",
    children: "CSS Tricks",
    filled: true,
    customColor: "#9333ea",
  },
};

export const Icon: Story = {
  args: {
    href: "#",
    iconOnly: true,
    ariaLabel: "icône Discord",
    faIcon: "faDiscord",
  },
  render: ({ faIcon, ...args }) => (
    <>
      <StyledLink {...args}>
        {faIcon && (
          <FontAwesomeIcon
            icon={allIcons[faIcon] as unknown as IconProp}
            aria-hidden
          />
        )}
      </StyledLink>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>[](#?iconOnly&icon=discord)</code>
        </pre>
      </div>
    </>
  ),
};

export const WithIconAfter: Story = {
  args: {
    href: "#",
    children: "Learn more",
    faIcon: "faArrowRightLong",
    bordered: true,
  },
  render: ({ faIcon, ...args }) => (
    <>
      <StyledLink
        {...args}
        icon={
          faIcon && (
            <FontAwesomeIcon icon={allIcons[faIcon] as unknown as IconProp} />
          )
        }
      />
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>[Learn more](#?bordered&icon=arrowRightLong)</code>
        </pre>
      </div>
    </>
  ),
};

export const External: Story = {
  args: {
    href: "https://css-tricks.com",
    children: "CSS Tricks",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pour les liens externes (commençant par `http`), l\'attribut `target="_blank"` est ajouté automatiquement, ainsi que `rel="noopener noreferrer"` pour la sécurité. Un élément `<span class="sr-only">(ouvre un nouvel onglet)</span>` est également inséré pour l\'accessibilité.',
      },
    },
  },
  render: (args) => (
    <>
      <StyledLink {...args} />
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>[CSS Tricks](https://css-tricks.com)</code>
        </pre>
      </div>
    </>
  ),
};
