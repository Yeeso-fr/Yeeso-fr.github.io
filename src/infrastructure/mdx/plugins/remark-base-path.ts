import type { Root } from "mdast";
import { visit } from "unist-util-visit";

const SRC_TAGS = new Set(["img"]);

// Raw JSX tags (<img>) in MDX content bypass the `components` override map
// entirely (unlike markdown-syntax elements), so MdxImg's basePath prefixing
// never runs for them. Prefix root-relative `src` values here instead, at
// compile time, so local assets resolve correctly under the GitHub Pages sub-path.
export const remarkBasePath = () => {
  const basePath = process.env.PAGES_BASE_PATH ?? "";

  return (tree: Root) => {
    if (!basePath) return;

    // biome-ignore lint/suspicious/noExplicitAny: mdast doesn't type MDX JSX nodes/attributes
    visit(tree, (node: any) => {
      if (
        (node.type === "mdxJsxFlowElement" ||
          node.type === "mdxJsxTextElement") &&
        SRC_TAGS.has(node.name)
      ) {
        for (const attr of node.attributes ?? []) {
          if (
            attr.type === "mdxJsxAttribute" &&
            attr.name === "src" &&
            typeof attr.value === "string" &&
            attr.value.startsWith("/")
          ) {
            attr.value = `${basePath}${attr.value}`;
          }
        }
      }
    });
  };
};
