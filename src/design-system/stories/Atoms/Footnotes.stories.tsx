import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";

const meta = {
  title: "Atoms/Footnotes",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Footnote: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        Here's a sentence with a footnote.
        <sup id="fnref-1">
          <a href="#fn-1" className="footnote-ref">
            1
          </a>
        </sup>
      </p>

      <section data-footnotes className="footnotes">
        <ol>
          <li id="fn-1">
            <p>
              This is the footnote.{" "}
              <a
                href="#fnref-1"
                className="footnote-backref"
                aria-label="Back to content"
              >
                ↩
              </a>
            </p>
          </li>
        </ol>
      </section>

      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.`}
          </code>
        </pre>
      </div>
    </div>
  ),
};
