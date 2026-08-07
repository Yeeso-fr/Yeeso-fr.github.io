import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";

const meta = {
  title: "Atoms/Emojis",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>Classic markup: 😉 😢 😆 😋 🐶</p>
      <p>
        Written in Markdown as:
        <code>:wink: :cry: :laughing: :yum: :dog:</code>
      </p>
    </div>
  ),
};

export const InText: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>I love coding 💻 and learning new things 📚!</p>
      <p>
        Written in Markdown as:
        <code>I love coding :computer: and learning new things :books:!</code>
      </p>
    </div>
  ),
};
