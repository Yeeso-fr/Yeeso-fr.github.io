import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  StyledLink,
  type StyledLinkProps,
} from "@/ui-kit/components/molecules/StyledLink/StyledLink";

const allIcons = { ...Brands, ...Solid };
const iconNames = Object.keys(allIcons).filter(
  (key) => key.startsWith("fa") && key !== "fas" && key !== "fab",
) as (keyof typeof allIcons)[];

type StyledLinkStoryArgs = StyledLinkProps & {
  faIcon?: (typeof iconNames)[number];
};

const meta = {
  title: "Molecules/Link",
  component: StyledLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    faIcon: {
      options: iconNames,
      control: {
        type: "select",
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
  args: {
    href: "#",
    children: "CSS Tricks",
    bordered: true,
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
