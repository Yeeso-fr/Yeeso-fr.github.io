import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { clsx } from "clsx";
import "../stories.css";

const allIcons = { ...Brands, ...Solid };
const iconNames = Object.keys(allIcons).filter(
  (key) => key.startsWith("fa") && key !== "fas" && key !== "fab",
) as (keyof typeof allIcons)[];

type ButtonStoryArgs = {
  label: string;
  reversed: boolean;
  iconOnly: boolean;
  disabled: boolean;
  faIcon?: (typeof iconNames)[number];
};

const meta = {
  title: "Molecules/Button",
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
  args: {
    label: "Button",
    reversed: false,
    iconOnly: false,
    disabled: false,
  },
  render: ({ label, reversed, iconOnly, disabled, faIcon }) => {
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
          reversed && "button--reversed",
          iconOnly && "button--icon",
        )}
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
  args: {
    label: "Basic Button",
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
