import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/ui-kit/components/molecules/Badge/Badge";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";

const meta: Meta<typeof Badge> = {
  title: "Molecules/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    filled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default Badge",
  },
};

export const Filled: Story = {
  name: "Filled (hero eyebrow tag)",
  args: {
    children: "Association loi 1901",
    filled: true,
    color: "var(--color-lightgreen)",
  },
};

export const FilledCustomColor: Story = {
  name: "Filled, custom color",
  args: {
    children: "Custom Color",
    filled: true,
    color: "var(--color-lightpurple)",
  },
};

export const AsLink: Story = {
  name: "As a link (Footer QA score style)",
  args: {
    children: <StyledLink href="#">Lighthouse 96</StyledLink>,
  },
};
