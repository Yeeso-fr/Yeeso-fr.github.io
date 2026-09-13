import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GifPlayer } from "@/ui-kit/components/molecules/GifPlayer/GifPlayer";

const meta = {
  title: "Molecules/GifPlayer",
  component: GifPlayer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Affiche un GIF animé avec un bouton lecture/pause, dans l'esprit de gifa11y. " +
          "La première image est capturée pour servir de poster statique, ce qui permet " +
          "de mettre l'animation en pause. Les visiteur·euses ayant activé " +
          "`prefers-reduced-motion` voient le GIF en pause par défaut ; tout le monde peut " +
          "basculer lecture/pause.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: { type: "text" } },
    alt: { control: { type: "text" } },
  },
} satisfies Meta<typeof GifPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/storybook-assets/nyan-cat.gif",
    alt: "Nyan Cat volant dans l'espace en laissant une traînée arc-en-ciel",
  },
};
