import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";

const meta = {
  title: "Molecules/Alert",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="article-content">
      <div className="alert alert-default">
        <p>
          <strong>Some text</strong>
        </p>
      </div>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`:::default
Some text
:::`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const Errors: StoryObj = {
  render: () => (
    <div className="article-content">
      <div className="alert alert-error">
        <p>
          <strong>oh no</strong>
        </p>
      </div>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`:::error
**oh no**
:::`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const Warnings: StoryObj = {
  render: () => (
    <div className="article-content">
      <div className="alert alert-warning">
        <p>
          <em>here be dragons</em>
        </p>
      </div>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`:::warning
*here be dragons*
:::`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const Successes: StoryObj = {
  render: () => (
    <div className="article-content">
      <div className="alert alert-success">
        <p>You can also use tips!</p>
      </div>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`:::success
You can also use tips!
:::`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const Infos: StoryObj = {
  render: () => (
    <div className="article-content">
      <div className="alert alert-info">
        <p>This is an info box.</p>
      </div>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>
            {`:::info
This is an info box.
:::`}
          </code>
        </pre>
      </div>
    </div>
  ),
};
