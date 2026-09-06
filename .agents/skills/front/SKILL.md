---
name: front
description: Apply BEM naming and CSS nesting-depth rules when writing or reviewing CSS in src/ui-kit. Use when adding or editing component styles, creating a new component's CSS file, or asked to audit/uniformize CSS class naming.
---

# Front-end CSS conventions

Scope: this skill applies to CSS files under `src/ui-kit/**/*.css`.

## BEM naming

All class names follow BEM: `block`, `block__element`, `block--modifier`.

- **Block**: the component's own root class, kebab-case (multi-word blocks use `-`, e.g. `article-card`, `articles-list-page`).
- **Element**: `block__element` — a part of a block that has no standalone meaning outside it (e.g. `articles__list`, `footer__legal-link`). The element name itself may be kebab-case for multi-word names (`content-list`, `header-wrapper`), but the block/element separator is always `__`, never a bare `-`.
- **Modifier**: `block--modifier` for a variant of a block or element (e.g. `styled-link--bordered`, `author-card--mini`).

```css
/* ❌ hyphen used where it should be a BEM element separator */
.articles-list { }
.category_page { }
.category_page__section-title { }

/* ✅ */
.articles__list { }
.category-page { }
.category-page__section-title { }
```

When a reusable list-style component (e.g. `ArticlesList`) renders its own root element, that root is the block and its list is `{block}__list` — mirror the existing sibling components rather than inventing a new pattern.

## Nesting depth: parent → child only, never grandchild

Native CSS nesting (or a preprocessor's `&`) may only go **one level deep**: a block selector containing its own `block__element` rules. Do not nest a third level (an element's own descendant) inside that.

```css
/* ❌ three levels deep — child-of-child */
.last-articles {
  .last-articles__list {
    .article-card {
      .article-card__first-paragraph {
        display: none;
      }
    }
  }
}

/* ✅ one level: block, then its own element(s), as flat top-level rules */
.last-articles {
  width: 100%;
}

.last-articles__list {
  display: grid;
}

.article-card__first-paragraph {
  display: none;
}
```

If you need to scope a rule to "this element when inside that other block" (e.g. `.article-card__first-paragraph` only hidden inside `.last-articles__list`), write it as a flat compound selector instead of nesting — `.last-articles__list .article-card__first-paragraph { }` — rather than reaching for three levels of `&`/nesting.

Reminder: `.article-card` is itself a separate block (its own component, own CSS file) — reaching into another block's internals via nesting is what produces the grandchild pattern above. Prefer a flat, one-level-deep selector, or add a modifier/prop on the child component instead of overriding its internals positionally.

## Before declaring a CSS change done

- Grep for the class name you're introducing/renaming across `src/ui-kit` (`.tsx` and `.css`) to catch every usage — a renamed block/element must be updated everywhere it's referenced, including sibling pages that target it via a flat selector (e.g. `CategoryPage.css`, `SearchResultsPage.css` both reference `.articles__list`).
- Run `pnpm lint` and `pnpm test` — Biome and the component tests catch stale class references.
