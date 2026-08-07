import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";

const meta = {
  title: "Atoms/Abbreviations",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        The <abbr title="HyperText Markup Language">HTML</abbr> specification is
        maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.
      </p>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`The HTML specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium`}
          </code>
        </pre>
      </div>
    </div>
  ),
};
