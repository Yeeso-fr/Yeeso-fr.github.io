import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AuthorCard } from "@/ui-kit/components/organisms/AuthorCard/AuthorCard";

const meta: Meta<typeof AuthorCard> = {
  title: "Organisms/Author Card",
  component: AuthorCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthorCard>;

export const Default: Story = {
  args: {
    author: {
      name: "Yeeso",
      slug: "yeeso",
      avatar: "https://github.com/yeeso.png",
      pronouns: "iels/elleux",
      website: "https://yeeso.fr",
      bluesky: "https://bsky.app/profile/yeeso.bsky.social",
      mastodon: "https://mastodon.social/@yeeso",
      github: "https://github.com/yeeso",
      linkedin: "https://linkedin.com/company/yeeso-itwomen-network",
      bio: (
        <p>
          L'avenir de l'IT avec les <span lang="en">femmes</span>.
        </p>
      ),
    },
  },
};

export const Mini: Story = {
  args: {
    variant: "mini",
    author: {
      name: "Yeeso",
      slug: "yeeso",
      avatar: "https://github.com/yeeso.png",
    },
  },
};
