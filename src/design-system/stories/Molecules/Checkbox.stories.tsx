import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";
import { useArgs } from "storybook/preview-api";

const meta = {
  title: "Molecules/Checkbox",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();
    const id = `checkbox-${args.label.replace(/\s+/g, "-").toLowerCase()}`;
    const isChecked = checked ?? args.checked;

    return (
      <div className="article-content">
        <div>
          <input
            type="checkbox"
            id={id}
            checked={isChecked}
            disabled={args.disabled}
            onChange={() => updateArgs({ checked: !isChecked })}
          />
          <label htmlFor={id}>{args.label}</label>
        </div>
      </div>
    );
  },
} satisfies Meta<CheckboxStoryArgs>;

export default meta;

type CheckboxStoryArgs = {
  label: string;
  checked: boolean;
  disabled: boolean;
};

export const Basic: StoryObj<CheckboxStoryArgs> = {
  args: {
    label: "Checkbox Label",
    checked: false,
    disabled: false,
  },
};

export const Checked: StoryObj<CheckboxStoryArgs> = {
  args: {
    label: "Checked Checkbox",
    checked: true,
    disabled: false,
  },
};

export const Disabled: StoryObj<CheckboxStoryArgs> = {
  args: {
    label: "Disabled Checkbox",
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: StoryObj<CheckboxStoryArgs> = {
  name: "Disabled & Checked",
  args: {
    label: "Disabled & Checked Checkbox",
    checked: true,
    disabled: true,
  },
};
