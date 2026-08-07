import type { Root as MdastRoot } from "mdast";
import { visit } from "unist-util-visit";

export const remarkTypographyPlugin = () => {
  return (tree: MdastRoot) => {
    visit(tree, "text", (node) => {
      let value = node.value;
      value = value.replace(/\(c\)/gi, "©");
      value = value.replace(/\(r\)/gi, "®");
      value = value.replace(/\(tm\)/gi, "™");
      value = value.replace(/\+-/g, "±");
      node.value = value;
    });
  };
};
