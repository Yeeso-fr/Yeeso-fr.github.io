import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { clsx } from "clsx";
import type { CSSProperties } from "react";
import {
  BRAND_COLORS,
  type BrandColorName,
} from "@/ui-kit/styles/theme/brandColors";
import "../stories.css";

const allIcons = { ...Brands, ...Solid };
const iconNames = Object.keys(allIcons).filter(
  (key) => key.startsWith("fa") && key !== "fas" && key !== "fab",
) as (keyof typeof allIcons)[];

const brandColorNames = Object.keys(BRAND_COLORS) as BrandColorName[];

type ButtonStoryArgs = {
  label: string;
  filled: boolean;
  brandColor?: BrandColorName;
  customColor?: string;
  reversed: boolean;
  iconOnly: boolean;
  disabled: boolean;
  faIcon?: (typeof iconNames)[number];
};

const fillStyle = (
  brandColor: BrandColorName | undefined,
  customColor: string | undefined,
): CSSProperties | undefined => {
  if (customColor) {
    return {
      "--button-fill": customColor,
      "--button-fill-fg": "#fff",
    } as CSSProperties;
  }
  if (brandColor) {
    const { background, foreground } = BRAND_COLORS[brandColor];
    return {
      "--button-fill": background,
      "--button-fill-fg": foreground,
    } as CSSProperties;
  }
  return undefined;
};

const meta = {
  title: "Molecules/Button",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Deux types de bouton : **filled** (`.button.button--filled`, fond plein) et **contoured** (`.button`, style par défaut — bordure, fond transparent). `reversed` adapte l'un ou l'autre à un fond sombre/coloré. Un bouton filled accepte soit `brandColor` (une couleur de la charte Yeeso), soit `customColor` (n'importe quelle couleur CSS) — `customColor` est prioritaire si les deux sont fournis.",
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
  args: {
    label: "Button",
    filled: false,
    reversed: false,
    iconOnly: false,
    disabled: false,
  },
  render: ({
    label,
    filled,
    brandColor,
    customColor,
    reversed,
    iconOnly,
    disabled,
    faIcon,
  }) => {
    const icon = faIcon ? (
      <FontAwesomeIcon
        icon={allIcons[faIcon] as unknown as IconProp}
        aria-hidden
      />
    ) : null;

    return (
      <button
        type="button"
        disabled={disabled}
        className={clsx(
          "button",
          filled && "button--filled",
          reversed && "button--reversed",
          iconOnly && "button--icon",
        )}
        style={filled ? fillStyle(brandColor, customColor) : undefined}
      >
        {iconOnly ? <span className="sr-only">{label}</span> : label}
        {icon && (
          <span
            className={clsx(!iconOnly && "button__icon", "story-inline-icon")}
          >
            {icon}
          </span>
        )}
      </button>
    );
  },
} satisfies Meta<ButtonStoryArgs>;

export default meta;
type Story = StoryObj<ButtonStoryArgs>;

export const Basic: Story = {
  name: "Contoured (par défaut)",
  args: {
    label: "Contoured Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Type par défaut du composant `<button>` (pas besoin de classe supplémentaire) — bordure, fond transparent.",
      },
    },
  },
};

export const Filled: Story = {
  args: {
    label: "Filled Button",
    filled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Classe `button--filled` — fond plein.",
      },
    },
  },
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
        <button
          key={name}
          type="button"
          className="button button--filled"
          style={fillStyle(name, undefined)}
        >
          {BRAND_COLORS[name].label}
        </button>
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
          "Pour une couleur hors charte, la prop `customColor` accepte n'importe quelle couleur CSS (ignore `brandColor` si les deux sont fournis).",
      },
    },
  },
  args: {
    label: "Filled Button",
    filled: true,
    customColor: "#9333ea",
  },
};

export const Reversed: Story = {
  args: {
    label: "Reversed Button",
    reversed: true,
  },
  render: (args) => {
    const icon = args.faIcon ? (
      <FontAwesomeIcon
        icon={allIcons[args.faIcon] as unknown as IconProp}
        aria-hidden
      />
    ) : null;

    return (
      <div className="story-reversed-panel">
        <button
          type="button"
          disabled={args.disabled}
          className={clsx(
            "button",
            args.reversed && "button--reversed",
            args.iconOnly && "button--icon",
          )}
        >
          {args.iconOnly ? (
            <span className="sr-only">{args.label}</span>
          ) : (
            args.label
          )}
          {icon && (
            <span
              className={clsx(
                !args.iconOnly && "button--icon",
                "story-inline-icon",
              )}
            >
              {icon}
            </span>
          )}
        </button>
      </div>
    );
  },
};

export const Icon: Story = {
  args: {
    label: "icône lecture",
    iconOnly: true,
    faIcon: "faPlay",
  },
};

export const WithIconAfter: Story = {
  args: {
    label: "Button with Icon",
    faIcon: "faArrowRightLong",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};
