import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";
import "../stories.css";

const meta = {
  title: "Organisms/Tables",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Les tableaux générés à partir du Markdown incluent automatiquement les attributs `scope=\"col\"` pour les cellules d'en-tête du `thead` et `scope=\"row\"` pour les cellules d'en-tête du `tbody` afin d'améliorer l'accessibilité.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const SimpleTable: StoryObj = {
  render: () => (
    <div className="article-content">
      <table>
        <thead>
          <tr>
            <th scope="col">Syntax</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Header</td>
            <td>Title</td>
          </tr>
          <tr>
            <td>Paragraph</td>
            <td>Text</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        {/* biome-ignore format: prevent table formatting */}
        <pre>
          <code>
{`| Syntax      | Description |
 | ----------- | ----------- |
 | Header      | Title       |
 | Paragraph   | Text        |`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const AlignedTable: StoryObj = {
  render: () => (
    <div className="article-content">
      <table>
        <thead>
          <tr>
            <th scope="col" align="left">
              Syntax
            </th>
            <th scope="col" align="center">
              Description
            </th>
            <th scope="col" align="right">
              Test Text
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">Header</td>
            <td align="center">Title</td>
            <td align="right">Here's this</td>
          </tr>
          <tr>
            <td align="left">Paragraph</td>
            <td align="center">Text</td>
            <td align="right">And more</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        {/* biome-ignore format: prevent table formatting */}
        <pre>
          <code>
{`| Syntax      | Description | Test Text     |
 | :---        |    :----:   |          ---: |
 | Header      | Title       | Here's this   |
 | Paragraph   | Text        | And more      |`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const ResponsiveTable: StoryObj = {
  render: () => (
    <div className="article-content story-max-width-600">
      <section
        className="table-wrapper"
        aria-label="Responsive table"
        // biome-ignore lint/a11y/noNoninteractiveTabindex: the wrapper is a horizontally scrollable region and must be keyboard-focusable so it can be scrolled without a mouse (axe scrollable-region-focusable); this mirrors the tabindex the rehype-table-accessibility plugin adds at runtime
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Priority</th>
              <th scope="col">Assignee</th>
              <th scope="col">Due Date</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Responsiveness</td>
              <td>Table should scroll horizontally</td>
              <td>In Progress</td>
              <td>High</td>
              <td>Junie</td>
              <td>2026-04-25</td>
              <td>
                This is a very long note to ensure the table overflows its
                container.
              </td>
            </tr>
            <tr>
              <td>Styling</td>
              <td>Consistent with design system</td>
              <td>Completed</td>
              <td>Medium</td>
              <td>Design Team</td>
              <td>2026-04-20</td>
              <td>All colors and borders match the spec.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <br />
      <p>Written in Markdown with a wrapper as:</p>
      <div className="pre-wrapper">
        {/* biome-ignore format: prevent table formatting */}
        <pre>
          <code>
{`<div class="table-wrapper">
  // Any table
</div>`}
          </code>
        </pre>
      </div>
    </div>
  ),
};

export const RowHeaderTable: StoryObj = {
  render: () => (
    <div className="article-content">
      <table>
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Âge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Alice</th>
            <td>25</td>
          </tr>
          <tr>
            <th scope="row">Bob</th>
            <td>30</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        Pour des tableaux accessibles avec des en-têtes de ligne, utilisez des
        balises <code>&lt;th scope="row"&gt;</code> dans le corps du tableau
        (via MDX) :
      </p>
      <div className="pre-wrapper">
        {/* biome-ignore format: prevent table formatting */}
        <pre>
          <code>
{`<table>
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Âge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Alice</th>
      <td>25</td>
    </tr>
  </tbody>
</table>`}
          </code>
        </pre>
      </div>
    </div>
  ),
};
