# Contribuer au contenu du blog

Ce guide explique comment ajouter ou modifier un article du blog (les portraits de rôles modèles publiés sur `/articles`). Pour contribuer au code du site, voir le [README](./README.md).

## Où se trouve le contenu

```
src/content/
├── articles/   # un fichier .mdx par article
└── authors/    # un fichier .mdx par auteur·ice (utilisé aussi bien pour les articles que la page /authors)
```

## Ajouter un article

1. Créez un fichier `src/content/articles/mon-nouvel-article.mdx`. Le nom du fichier n'a pas d'importance pour le site (le contenu est lu par `slug`), mais gardez-le identique au `slug` par convention.
2. Renseignez le frontmatter en haut du fichier :

```md
---
title: "Prénom Nom – Intitulé du poste"
slug: "prenom-nom-intitule-du-poste"
author: "yeeso"
publishedAt: "2026-09-08"
categories: ["Nos rôles modèles"]
coverImage:
  src: "/articles/prenom-nom-intitule-du-poste.webp"
  alt: "Portrait de Prénom Nom"
---
```

Champs disponibles (validés par [`ArticleSchema`](./src/entities/articles/articles.ts)) :

| Champ | Obligatoire | Description |
|---|---|---|
| `title` | oui | Titre affiché sur la page et dans les listes |
| `slug` | oui | Minuscules, chiffres et tirets uniquement (`^[a-z0-9]+(-[a-z0-9]+)*$`) — détermine l'URL `/articles/<slug>` |
| `author` | oui | `slug` d'un fichier existant dans `src/content/authors` (en pratique, toujours `"yeeso"` pour l'instant) |
| `coAuthor` | non | `slug` d'un·e second·e auteur·ice à créditer |
| `publishedAt` | oui | Date au format `AAAA-MM-JJ` |
| `categories` | oui | Tableau de chaînes ; toutes les publications actuelles utilisent `["Nos rôles modèles"]` |
| `originalUrl` | non | URL de l'article d'origine si republié depuis l'ancien site |
| `coverImage` | non | `src` (chemin depuis `public/`, commence par `/`) et `alt` (texte alternatif obligatoire si l'image est présente) |

3. Écrivez le contenu en Markdown après le frontmatter (voir la syntaxe disponible ci-dessous).
4. Ajoutez l'image de couverture dans `public/articles/<slug>.webp`, au format carré **1200×1200** (convention suivie par toutes les images existantes).
5. Prévisualisez avec `pnpm dev` puis ouvrez `http://localhost:3000/articles/<slug>`.

## Ajouter un·e nouvel·le auteur·ice

Créez `src/content/authors/prenom-nom.mdx` :

```md
---
name: "Prénom Nom"
slug: "prenom-nom"
pronouns: "elle"
avatar: "/authors/prenom-nom.webp"
---

Courte bio (1 à 3 phrases).
```

`avatar` est obligatoire ; les réseaux (`linkedin`, `github`, `bluesky`, `mastodon`, `website`, `medium`, `devto`, `codepen`) et `pronouns` sont optionnels. Ajoutez l'image dans `public/authors/prenom-nom.webp`, carrée, **420×420**.

## Syntaxe Markdown disponible

En plus du Markdown standard (titres, listes, gras, citations, liens, tableaux), le site supporte :

- **Émojis** : `:sparkles:` → :sparkles:
- **Exposant** (pandoc) : `3^ème^` → 3ème
- **Texte souligné/inséré** : `++texte++`
- **Surlignage** : `==texte==`
- **Listes de définitions** : `Terme\n: Définition`
- **Abréviations** : définissez `*[IT]: Information Technology` dans son propre paragraphe, puis chaque occurrence de `IT` dans le texte devient une `<abbr>`
- **Callouts** (encadrés colorés) :

  ```md
  :::info
  Un encadré d'information.
  :::

  :::warning
  Un encadré d'avertissement.
  :::

  :::success
  :::

  :::error
  :::
  ```

- **Blocs de code** : coloration syntaxique automatique (Shiki) via les blocs \`\`\`langage habituels.
- **Images** : `![alt](/chemin/vers/image.webp)` — le texte alternatif est **obligatoire** (accessibilité).

## Vérifier avant de proposer votre contribution

```bash
pnpm dev                   # démarre le site — une erreur de frontmatter (champ manquant, slug invalide…) apparaît immédiatement dans le terminal
pnpm test:a11y:content     # vérifie l'accessibilité des articles/auteurs modifiés par rapport à main
```

`test:a11y:content` détecte automatiquement les fichiers `.mdx` modifiés sous `src/content` (non commités ou par rapport à `origin/main`) et lance les tests d'accessibilité (axe-core) sur les pages correspondantes, en thème clair et sombre. Écrivez ou modifiez votre article avant de le lancer.

## Proposer votre contribution

Ouvrez une pull request avec votre fichier `.mdx` (et l'image associée si nouvelle). Un·e mainteneur·se de Yeeso relira le contenu avant de merger.
