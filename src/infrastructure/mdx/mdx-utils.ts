import { myRemarkDirectivePlugin } from "./plugins/my-remark-directive";
import { rehypeAutolinkHeadingsPlugin } from "./plugins/rehype-autolink-headings";
import { rehypeShikiPlugin } from "./plugins/rehype-shiki";
import { rehypeSlug } from "./plugins/rehype-slug";
import { rehypeTableAccessibility } from "./plugins/rehype-table-accessibility";
import { remarkAbbr } from "./plugins/remark-abbr";
import { remarkBasePath } from "./plugins/remark-base-path";
import { remarkDeflist } from "./plugins/remark-deflist";
import { remarkDirective } from "./plugins/remark-directive";
import { remarkEmoji } from "./plugins/remark-emoji";
import { remarkFlexibleMarkers } from "./plugins/remark-flexible-markers";
import { remarkGfm } from "./plugins/remark-gfm";
import { remarkGifPlayer } from "./plugins/remark-gif-player";
import { remarkIns } from "./plugins/remark-ins";
import { remarkSmartypants } from "./plugins/remark-smartypants";
import { remarkSupersub } from "./plugins/remark-supersub";
import { remarkTypographyPlugin } from "./plugins/remark-typography";

/* biome-ignore lint/suspicious/noExplicitAny: unified plugin types are complex to unify across different remark/rehype versions */
export const remarkPlugins: any[] = [
  remarkGfm,
  remarkEmoji,
  remarkDeflist,
  remarkAbbr,
  remarkSmartypants,
  remarkDirective,
  myRemarkDirectivePlugin,
  remarkTypographyPlugin,
  remarkSupersub,
  remarkIns,
  remarkFlexibleMarkers,
  remarkBasePath,
  remarkGifPlayer,
];

/* biome-ignore lint/suspicious/noExplicitAny: unified plugin types are complex to unify across different remark/rehype versions */
export const rehypePlugins: any[] = [
  rehypeTableAccessibility,
  rehypeSlug,
  rehypeAutolinkHeadingsPlugin,
  rehypeShikiPlugin,
];
