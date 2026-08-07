import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "@/ui-kit/components/atoms/Avatar/Avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "number" } },
    border: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const url = "/authors/houleymatou-balde.webp";

export const Default: Story = {
  args: {
    src: url,
    alt: "Houleymatou Baldé",
    size: 100,
  },
};

export const Small: Story = {
  args: {
    src: url,
    alt: "Houleymatou Baldé",
    size: 40,
  },
};

export const Large: Story = {
  args: {
    src: url,
    alt: "Houleymatou Baldé",
    size: 200,
  },
};

export const WithBorder: Story = {
  args: {
    src: url,
    alt: "Houleymatou Baldé",
    size: 100,
    border: true,
  },
};
