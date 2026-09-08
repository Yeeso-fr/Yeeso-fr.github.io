import rehypeShiki from "@shikijs/rehype";
import type { Element, Root, Text } from "hast";

// biome-ignore lint/suspicious/noExplicitAny: plugin hard to type
export const rehypeShikiPlugin: any = [
  rehypeShiki,
  {
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
    transformers: [
      {
        name: "copy-code",
        pre(node: Element) {
          const codeNode = node.children.find(
            (n): n is Element => n.type === "element" && n.tagName === "code",
          );
          if (codeNode) {
            const extractText = (n: Element | Text | Root): string => {
              if (n.type === "text") return n.value;
              if ("children" in n && Array.isArray(n.children)) {
                return (n.children as (Element | Text)[])
                  .map(extractText)
                  .join("");
              }
              return "";
            };
            const codeText = codeNode.children
              .map((n) => extractText(n as Element | Text))
              .join("");
            node.properties ??= {};
            node.properties["data-code"] = codeText;
          }
        },
      },
    ],
  },
];
