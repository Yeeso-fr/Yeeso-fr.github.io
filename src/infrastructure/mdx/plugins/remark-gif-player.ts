import type { Root } from "mdast";
import { visit } from "unist-util-visit";

const GIF_SRC = /\.gif($|\?)/i;

// Raw JSX tags (<img>) in MDX content bypass the `components` override map
// entirely (see remark-base-path), so `img: MdxImg` never runs for them and
// cannot swap animated GIFs for the interactive player. Rewrite the node name
// to `GifPlayer` at compile time instead — capitalized identifiers *are*
// resolved from the MDX component scope, so `components.GifPlayer` renders.
//
// Runs after remark-base-path so the `src` attribute is already prefixed.
export const remarkGifPlayer = () => {
  return (tree: Root) => {
    // biome-ignore lint/suspicious/noExplicitAny: mdast doesn't type MDX JSX nodes/attributes
    visit(tree, (node: any) => {
      if (
        (node.type === "mdxJsxFlowElement" ||
          node.type === "mdxJsxTextElement") &&
        node.name === "img"
      ) {
        const src = node.attributes?.find(
          // biome-ignore lint/suspicious/noExplicitAny: mdast doesn't type MDX JSX attributes
          (attr: any) => attr.type === "mdxJsxAttribute" && attr.name === "src",
        );
        if (typeof src?.value === "string" && GIF_SRC.test(src.value)) {
          node.name = "GifPlayer";
        }
      }
    });
  };
};
