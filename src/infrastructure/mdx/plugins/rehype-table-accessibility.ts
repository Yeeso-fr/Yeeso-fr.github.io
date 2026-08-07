import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

export const rehypeTableAccessibility = () => {
  return (tree: Root) => {
    // Add tabindex=0 to any manually-written table-wrapper div
    visit(tree, "element", (node: Element) => {
      if (
        node.tagName === "div" &&
        (node.properties?.className as string[] | undefined)?.includes(
          "table-wrapper",
        )
      ) {
        node.properties.tabIndex = 0;
      }
    });

    // Add scope attributes to th elements and wrap bare tables
    const tablesToWrap: Array<{
      index: number;
      node: Element;
      parent: Element | Root;
    }> = [];

    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "table") return;

      visit(node, "element", (child: Element) => {
        if (child.tagName === "thead") {
          visit(child, "element", (th: Element) => {
            if (th.tagName === "th") {
              th.properties = th.properties || {};
              th.properties.scope = "col";
            }
          });
        }
        if (child.tagName === "tbody") {
          visit(child, "element", (tr: Element) => {
            if (tr.tagName === "tr") {
              visit(tr, "element", (th: Element) => {
                if (th.tagName === "th") {
                  th.properties = th.properties || {};
                  th.properties.scope = "row";
                }
              });
            }
          });
        }
      });

      if (index === null || index === undefined || !parent) return;

      const parentIsWrapper =
        "tagName" in parent &&
        (parent as Element).tagName === "div" &&
        (
          (parent as Element).properties?.className as string[] | undefined
        )?.includes("table-wrapper");

      if (!parentIsWrapper) {
        tablesToWrap.push({ index, node, parent: parent as Element | Root });
      }
    });

    for (const { index, node, parent } of tablesToWrap) {
      // biome-ignore lint/suspicious/noExplicitAny: hast Root and Element both have children
      (parent as any).children[index] = {
        type: "element",
        tagName: "div",
        properties: { className: ["table-wrapper"], tabIndex: 0 },
        children: [node],
      };
    }
  };
};
