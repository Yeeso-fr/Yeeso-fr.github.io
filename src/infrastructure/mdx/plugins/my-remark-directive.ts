import type { Root as MdastRoot } from "mdast";
import { visit } from "unist-util-visit";

export const myRemarkDirectivePlugin = () => {
  return (tree: MdastRoot) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective" || node.type === "leafDirective") {
        if (!node.data) node.data = {};
        const data = node.data;
        const type = node.name || "info";
        data.hName = "div";
        data.hProperties = {
          ...(node.attributes ?? {}),
          className: ["alert", `alert-${type}`],
        };
      }
    });
  };
};
