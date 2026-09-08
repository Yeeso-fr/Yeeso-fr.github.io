import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";
import { useArgs } from "storybook/preview-api";

const meta = {
  title: "Molecules/Radio Button",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();
    const id = `radio-${args.label.replace(/\s+/g, "-").toLowerCase()}`;
    const isChecked = checked ?? args.checked;

    return (
      <div className="article-content">
        <div>
          <input
            type="radio"
            id={id}
            name={args.name}
            checked={isChecked}
            disabled={args.disabled}
            onChange={() => updateArgs({ checked: true })}
          />
          <label htmlFor={id}>{args.label}</label>
        </div>
      </div>
    );
  },
} satisfies Meta<RadioButtonStoryArgs>;

export default meta;

type RadioButtonStoryArgs = {
  label: string;
  checked: boolean;
  disabled: boolean;
  name?: string;
};

export const Basic: StoryObj<RadioButtonStoryArgs> = {
  args: {
    label: "Radio Button Label",
    checked: false,
    disabled: false,
    name: "radio-group",
  },
};

export const Checked: StoryObj<RadioButtonStoryArgs> = {
  args: {
    label: "Checked Radio Button",
    checked: true,
    disabled: false,
    name: "radio-group-checked",
  },
};

export const Disabled: StoryObj<RadioButtonStoryArgs> = {
  args: {
    label: "Disabled Radio Button",
    checked: false,
    disabled: true,
    name: "radio-group-disabled",
  },
};

export const DisabledChecked: StoryObj<RadioButtonStoryArgs> = {
  name: "Disabled & Checked",
  args: {
    label: "Disabled & Checked Radio Button",
    checked: true,
    disabled: true,
    name: "radio-group-disabled-checked",
  },
};
