import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import "@/ui-kit/articles/ArticleContent/ArticleContent.css";

const meta = {
  title: "Organisms/Checkbox List",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const DisabledTaskList: StoryObj = {
  name: "Disabled Task List",
  render: () => (
    <div className="article-content">
      <ul className="contains-task-list">
        <li>
          <input type="checkbox" checked={true} disabled={true} id="item-1" />
          <label htmlFor="item-1">Finished task</label>
        </li>
        <li>
          <input type="checkbox" checked={false} disabled={true} id="item-2" />
          <label htmlFor="item-2">Unfinished task</label>
        </li>
      </ul>
      <br />
      <p>Written in Markdown as:</p>
      <div className="pre-wrapper">
        <pre>
          <code>{`- [x] Finished task
- [ ] Unfinished task`}</code>
        </pre>
      </div>
    </div>
  ),
};
