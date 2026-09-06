import rehypeAutolinkHeadings from "rehype-autolink-headings";

// biome-ignore lint/suspicious/noExplicitAny: plugin hard to type
export const rehypeAutolinkHeadingsPlugin: any = [
  rehypeAutolinkHeadings,
  {
    behavior: "append",
    properties: {
      className: ["anchor"],
      // rehype-autolink-headings defaults to these for "append"/"prepend" to keep the
      // decorative icon link out of tab order and hidden from screen readers (the
      // heading itself is already reachable/announced) — restoring them since setting
      // a custom `properties` object replaces the library default instead of merging.
      ariaHidden: true,
      tabIndex: -1,
    },
  },
];
