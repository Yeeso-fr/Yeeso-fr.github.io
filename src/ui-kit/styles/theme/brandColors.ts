/**
 * Yeeso brand palette (see the --yeeso-* tokens in `_variables.css` and the
 * swatches in `src/design-system/stories/Brand.mdx`), exposed as a typed
 * enum so components can offer "pick one of the brand colors" instead of
 * accepting an arbitrary CSS string. `foreground` is the text color that
 * keeps each background AAA-compliant (see Brand.mdx for the contrast
 * rationale behind each pairing).
 */
export const BRAND_COLORS = {
  primary: {
    label: "Bleu",
    background: "var(--yeeso-primary)",
    foreground: "var(--color-light)",
  },
  primaryTint: {
    label: "Bleu tint",
    background: "var(--yeeso-primary-tint)",
    foreground: "var(--blackPearl)",
  },
  coral: {
    label: "Aigre-doux",
    background: "var(--yeeso-coral)",
    foreground: "var(--color-dark)",
  },
  mint: {
    label: "Mint",
    background: "var(--yeeso-green)",
    foreground: "var(--color-dark)",
  },
  mauve: {
    label: "Mauve",
    background: "var(--yeeso-accent)",
    foreground: "var(--yeeso-primary)",
  },
  noir: {
    label: "Noir velours",
    background: "var(--yeeso-noir-velours)",
    foreground: "var(--color-light)",
  },
  cream: {
    label: "Crème",
    background: "var(--yeeso-cream)",
    foreground: "var(--yeeso-primary)",
  },
} as const;

export type BrandColorName = keyof typeof BRAND_COLORS;
