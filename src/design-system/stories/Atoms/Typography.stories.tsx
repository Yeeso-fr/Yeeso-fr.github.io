import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";

const meta = {
  title: "Atoms/Typography",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Headings: StoryObj = {
  render: () => (
    <div className="article-content">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const HeadingWithId: StoryObj = {
  render: () => (
    <div className="article-content">
      <h3 id="custom-id">
        My Great Heading{" "}
        <a href="#custom-id" className="anchor">
          #
        </a>
      </h3>
      <p>
        Written in Markdown as:{" "}
        <code>## My Great Heading &#92;&#123;#custom-id&#92;&#125;</code>
      </p>
      <p>
        <em>
          Note: <code>remark-heading-id</code> handles the custom ID, and the
          backslashes are required for MDX to not treat it as a JSX expression.
        </em>
      </p>
    </div>
  ),
};

export const SimpleText: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>This is a simple text paragraph.</p>
    </div>
  ),
};

export const Small: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        <small>This is small text</small>
      </p>
      <p>
        Written in Markdown as: <code>&lt;small&gt;text&lt;/small&gt;</code>
      </p>
    </div>
  ),
};

export const Bold: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        <strong>This is bold text</strong>
      </p>
      <p>
        Written in Markdown as:<code>**text**</code> or <code>__text__</code>
      </p>
    </div>
  ),
};

export const Italic: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        <em>This is italic text</em>
      </p>
      <p>
        Written in Markdown as:<code>*text*</code> or <code>_text_</code>
      </p>
    </div>
  ),
};

export const Strikethrough: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        <del>This text is struck through</del>
      </p>
      <p>
        Written in Markdown as:<code>~~text~~</code>
      </p>
    </div>
  ),
};

export const InlineCode: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        Inline Code: <code>const hello = "world";</code>
      </p>
      <p>
        Written in Markdown as:<code>`code`</code>
      </p>
    </div>
  ),
};

export const Blockquote: StoryObj = {
  render: () => (
    <div className="article-content">
      <blockquote>
        <p>This is a blockquote element.</p>
        <p>— Author Name</p>
      </blockquote>
      <p>
        Written in Markdown with: <code>&gt;</code> prefix
      </p>
    </div>
  ),
};

export const NestedBlockquote: StoryObj = {
  render: () => (
    <div className="article-content">
      <blockquote>
        <p>This is a first-level blockquote.</p>
        <blockquote>
          <p>This is a nested blockquote.</p>
          <blockquote>
            <p>This is a deeply nested blockquote.</p>
          </blockquote>
        </blockquote>
        <p>— Author Name</p>
      </blockquote>
      <p>
        Written in Markdown with: <code>&gt;&gt;</code> prefix
      </p>
    </div>
  ),
};

export const HorizontalRule: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>Above the rule</p>
      <hr />
      <p>Below the rule</p>
      <p>
        Written in Markdown as: <code>---</code> or <code>***</code> or{" "}
        <code>___</code>
      </p>
    </div>
  ),
};

export const UnorderedList: StoryObj = {
  render: () => (
    <div className="article-content">
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>
          Third item
          <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
          </ul>
        </li>
        <li>Fourth item</li>
      </ul>
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`
- First item
- Second item
  - Nested item 1
  - Nested item 2
- Third item`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const OrderedList: StoryObj = {
  render: () => (
    <div className="article-content">
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>
          Third item
          <ol>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
          </ol>
        </li>
        <li>Fourth item</li>
      </ol>
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`
1. First item
2. Second item
   1. Nested item 1
   2. Nested item 2
3. Third item`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const Subscript: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        19<sup>th</sup>
        <br />H<sub>2</sub>O
      </p>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>{`19^th^
H~2~O`}</code>
        </pre>
      </div>
    </div>
  ),
};

export const InsertedText: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        <ins>Inserted text</ins>
      </p>
      <br />
      <p>
        Written in Markdown as: <code>++Inserted text++</code>
      </p>
    </div>
  ),
};

export const MarkedText: StoryObj = {
  render: () => (
    <div className="article-content">
      <p>
        <mark>Marked text</mark>
      </p>
      <br />
      <p>
        Written in Markdown as: <code>==Marked text==</code>
      </p>
    </div>
  ),
};
