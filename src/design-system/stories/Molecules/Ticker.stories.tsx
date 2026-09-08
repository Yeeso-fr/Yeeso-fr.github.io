import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Ticker } from "@/ui-kit/components/molecules/Ticker/Ticker";

const meta = {
  title: "Molecules/Ticker",
  component: Ticker,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Ticker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      "Rôles modèles",
      "IT Women Network",
      "Confiance",
      "Éducation",
      "Mixité",
      "Mentorat",
    ],
  },
};
