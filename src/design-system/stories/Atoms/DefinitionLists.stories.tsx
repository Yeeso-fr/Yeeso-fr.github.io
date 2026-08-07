import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";

const meta = {
  title: "Atoms/Definition Lists",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const SimpleDefinitionList: StoryObj = {
  render: () => (
    <div className="article-content">
      <dl>
        <dt>First Term</dt>
        <dd>This is the definition of the first term.</dd>
        <dt>Second Term</dt>
        <dd>This is one definition of the second term.</dd>
        <dd>This is another definition of the second term.</dd>
      </dl>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.`}
          </code>
        </pre>
      </div>
    </div>
  ),
};
