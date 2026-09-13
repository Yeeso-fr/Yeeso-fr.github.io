---
name: rgaa-reference
description: Référence complète des 106 critères RGAA 4.1.2 organisés par thème. À charger pour approfondir un critère précis, auditer une page ou vérifier la conformité d'un composant.
metadata:
  type: reference
---

# RGAA 4.1.2 — Les 106 critères et leurs tests

Source officielle : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/

Les critères sont regroupés en 13 thèmes. Chaque critère est suivi de ses tests (numérotés `X.Y.Z`) qui indiquent les cas concrets à vérifier.

---

## Thème 1 — Images (9 critères)

**1.1** Chaque image porteuse d'information a-t-elle une alternative textuelle ?
- 1.1.1 : balise `<img>` ou élément avec `role="img"`
- 1.1.2 : zone réactive `<area>` avec `href`
- 1.1.3 : bouton image `<input type="image">`
- 1.1.4 : carte réactive côté serveur
- 1.1.5 : image vectorielle `<svg>`
- 1.1.6 : image objet `<object type="image/…">`
- 1.1.7 : image embarquée `<embed type="image/…">`
- 1.1.8 : image bitmap `<canvas>`

**1.2** Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ?
- 1.2.1 : `<img>` décoratif — `alt=""` et `aria-hidden="true"` ou `role="presentation"`
- 1.2.2 : `<area>` sans `href` — absence d'alternative
- 1.2.3 : `<object type="image/…">` décoratif
- 1.2.4 : `<svg>` décoratif — `aria-hidden="true"` et `focusable="false"`
- 1.2.5 : `<canvas>` décoratif
- 1.2.6 : `<embed type="image/…">` décoratif

**1.3** Pour chaque image porteuse d'information ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?
- 1.3.1 : alternative `<img>` ou `role="img"` — décrit le sens, pas le fichier
- 1.3.2 : alternative `<area>` — décrit la destination ou l'action
- 1.3.3 : alternative bouton image — décrit la fonction du bouton
- 1.3.4 : alternative `<object type="image/…">`
- 1.3.5 : alternative `<embed type="image/…">`
- 1.3.6 : alternative `<svg>` via `<title>` ou `aria-label`
- 1.3.7 : alternative `<canvas>` via contenu textuel enfant ou `aria-label`
- 1.3.8 : le texte alternatif de `<canvas>` est-il restitué ?
- 1.3.9 : l'alternative est-elle concise (pas une description longue là où un court texte suffit) ?

**1.4** Pour chaque image utilisée comme CAPTCHA ou image-test, ayant une alternative textuelle, cette alternative permet-elle d'identifier la nature et la fonction de l'image ?
- 1.4.1 : `<img>` CAPTCHA
- 1.4.2 : `<area>` CAPTCHA
- 1.4.3 : bouton image CAPTCHA
- 1.4.4 : `<object type="image/…">` CAPTCHA
- 1.4.5 : `<embed type="image/…">` CAPTCHA
- 1.4.6 : `<svg>` CAPTCHA
- 1.4.7 : `<canvas>` CAPTCHA

**1.5** Pour chaque image utilisée comme CAPTCHA, une solution d'accès alternatif est-elle présente ?
- 1.5.1 : CAPTCHA non graphique ou accès alternatif disponible
- 1.5.2 : bouton image avec CAPTCHA — alternative accessible

**1.6** Chaque image porteuse d'information a-t-elle, si nécessaire, une description détaillée ?
- 1.6.1 : `<img>` — `longdesc`, `aria-describedby` ou lien adjacent
- 1.6.2 : `<object type="image/…">`
- 1.6.3 : `<embed type="image/…">`
- 1.6.4 : bouton image `<input type="image">`
- 1.6.5 : `<svg>` — `<desc>` ou `aria-describedby`
- 1.6.6 : la description détaillée d'un `<svg>` est-elle restituée ?
- 1.6.7 : `<canvas>` — contenu textuel enfant ou `aria-describedby`
- 1.6.8 : la description détaillée d'un `<canvas>` est-elle restituée ?
- 1.6.9 : vérification de l'association via `aria-describedby`
- 1.6.10 : `role="img"` avec description détaillée

**1.7** Pour chaque image porteuse d'information ayant une description détaillée, cette description est-elle pertinente ?
- 1.7.1 : `<img>` — pertinence de la description
- 1.7.2 : bouton image
- 1.7.3 : `<object type="image/…">`
- 1.7.4 : `<embed type="image/…">`
- 1.7.5 : `<svg>`
- 1.7.6 : `<canvas>`

**1.8** Chaque image texte porteuse d'information doit-elle être remplacée par du texte stylé (hors cas particuliers) ?
- 1.8.1 : `<img>` contenant du texte
- 1.8.2 : bouton image contenant du texte
- 1.8.3 : `<object type="image/…">` contenant du texte
- 1.8.4 : `<embed type="image/…">` contenant du texte
- 1.8.5 : `<canvas>` contenant du texte
- 1.8.6 : `<svg>` contenant du texte non structuré sémantiquement

**1.9** Chaque légende d'image est-elle, si nécessaire, correctement reliée à l'image correspondante ?
- 1.9.1 : `<img>` avec `<figcaption>` dans un `<figure>`
- 1.9.2 : `<object type="image/…">` avec légende
- 1.9.3 : `<embed type="image/…">` avec légende
- 1.9.4 : `<svg>` avec légende
- 1.9.5 : `<canvas>` avec légende

---

## Thème 2 — Cadres (2 critères)

**2.1** Chaque cadre a-t-il un titre de cadre ?
- 2.1.1 : `<iframe>` ou `<frame>` possède un attribut `title` non vide

**2.2** Pour chaque cadre ayant un titre de cadre, ce titre est-il pertinent ?
- 2.2.1 : le contenu de l'attribut `title` décrit la fonction ou le contenu du cadre

---

## Thème 3 — Couleurs (3 critères)

**3.1** Dans chaque page web, l'information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?
- 3.1.1 : mots ou ensembles de mots en couleur — une alternative non colorée existe
- 3.1.2 : indications textuelles de couleur — moyen alternatif présent
- 3.1.3 : images véhiculant une information par la couleur — autre indice visuel disponible
- 3.1.4 : propriétés CSS déterminant une couleur — vérifier l'absence de dépendance chromatique exclusive

**3.2** Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?
- 3.2.1 : texte normal (< 18,66 px bold ou < 24 px) — rapport ≥ 4,5:1
- 3.2.2 : texte de grande taille (≥ 18,66 px bold ou ≥ 24 px) — rapport ≥ 3:1
- 3.2.3 : texte dans ou sur une image — rapport ≥ 4,5:1 ou ≥ 3:1 selon la taille
- 3.2.4 : texte dans une image vectorielle `<svg>` — même règle
- 3.2.5 : texte dans un `<canvas>` — même règle

**3.3** Dans chaque page web, les couleurs utilisées dans les composants d'interface ou les éléments porteurs d'informations sont-elles suffisamment contrastées (hors cas particuliers) ?
- 3.3.1 : composants d'interface (bordures de champ, icônes, boutons) — rapport ≥ 3:1 avec l'arrière-plan adjacent
- 3.3.2 : éléments graphiques porteurs d'information — rapport ≥ 3:1

---

## Thème 4 — Multimédia (13 critères)

**4.1** Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription (hors cas particuliers) ?
- 4.1.1 : contenu audio seul — transcription textuelle accessible
- 4.1.2 : contenu vidéo seul — audiodescription ou transcription textuelle
- 4.1.3 : contenu synchronisé — transcription textuelle ou audiodescription

**4.2** Pour chaque média temporel pré-enregistré ayant une transcription ou une audiodescription, celles-ci sont-elles pertinentes ?
- 4.2.1 : pertinence de la transcription pour un audio seul
- 4.2.2 : pertinence de l'audiodescription ou transcription pour une vidéo seule
- 4.2.3 : pertinence pour un contenu synchronisé

**4.3** Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers) ?
- 4.3.1 : présence de sous-titres synchronisés pour toute vidéo avec dialogue ou information sonore

**4.4** Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres, ceux-ci sont-ils pertinents ?
- 4.4.1 : les sous-titres retranscrivent fidèlement les dialogues, effets sonores et informations contextuelles

**4.5** Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée (hors cas particuliers) ?
- 4.5.1 : vidéo — présence d'une audiodescription pour les informations visuelles non restituées par la bande-son
- 4.5.2 : vidéo — piste d'audiodescription étendue si nécessaire

**4.6** Pour chaque média temporel pré-enregistré ayant une audiodescription, celle-ci est-elle pertinente ?
- 4.6.1 : l'audiodescription restitue correctement toutes les informations visuelles significatives

**4.7** Chaque média temporel est-il clairement identifiable (hors cas particuliers) ?
- 4.7.1 : le lecteur ou la vignette permet d'identifier le type de contenu (audio, vidéo, etc.)
- 4.7.2 : l'identifiant est accessible aux technologies d'assistance

**4.8** Chaque média non temporel a-t-il, si nécessaire, une alternative (hors cas particuliers) ?
- 4.8.1 : objet Flash, Java ou autre plug-in — alternative textuelle ou version accessible
- 4.8.2 : objet non identifiable — alternative fournie

**4.9** Pour chaque média non temporel ayant une alternative, celle-ci est-elle pertinente ?
- 4.9.1 : pertinence de l'alternative pour les objets Flash, Java ou plug-ins
- 4.9.2 : pertinence pour les autres objets

**4.10** Chaque son déclenché automatiquement est-il contrôlable par l'utilisateur ?
- 4.10.1 : tout son se déclenchant automatiquement dure moins de 3 secondes ou dispose d'un mécanisme de pause/arrêt/volume

**4.11** La consultation de chaque média temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?
- 4.11.1 : chaque fonctionnalité du lecteur (lecture, pause, volume, sous-titres, audiodescription) est accessible au clavier
- 4.11.2 : aucun piège au clavier dans le lecteur

**4.12** La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?
- 4.12.1 : objet ou plug-in — toutes les interactions accessibles sans souris

**4.13** Chaque média temporel et non temporel est-il compatible avec les technologies d'assistance (hors cas particuliers) ?
- 4.13.1 : le lecteur et ses contrôles sont restitués correctement par les lecteurs d'écran
- 4.13.2 : les alternatives textuelles et sous-titres sont correctement restitués

---

## Thème 5 — Tableaux (8 critères)

**5.1** Chaque tableau de données complexe a-t-il un résumé ?
- 5.1.1 : présence d'un résumé via `<caption>`, `aria-describedby` ou contenu adjacent
- 5.1.2 : le résumé est accessible aux technologies d'assistance

**5.2** Pour chaque tableau de données complexe ayant un résumé, ce résumé est-il pertinent ?
- 5.2.1 : le résumé explique la structure du tableau et comment le parcourir

**5.3** Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible ?
- 5.3.1 : en lisant les cellules de gauche à droite et de haut en bas, l'information reste compréhensible

**5.4** Pour chaque tableau de données ayant un titre, le titre est-il pertinent ?
- 5.4.1 : le `<caption>` ou l'intitulé associé identifie clairement les données présentées

**5.5** Chaque tableau de données a-t-il un titre ?
- 5.5.1 : présence d'un `<caption>` ou titre associé via `aria-labelledby` ou `aria-label`
- 5.5.2 : le titre est restitué par les technologies d'assistance

**5.6** Pour chaque tableau de données, chaque en-tête de colonnes et de lignes est-il correctement déclaré ?
- 5.6.1 : en-têtes déclarés avec `<th>` (et non `<td>`)
- 5.6.2 : l'attribut `scope` est présent et pertinent (`col`, `row`, `colgroup`, `rowgroup`)
- 5.6.3 : pour les en-têtes complexes, utilisation de `id` sur `<th>`
- 5.6.4 : éléments `<thead>`, `<tbody>`, `<tfoot>` utilisés si nécessaire
- 5.6.5 : en-têtes restitués correctement par les technologies d'assistance

**5.7** Pour chaque tableau de données, la technique associant les cellules à leurs en-têtes est-elle correctement utilisée (hors cas particuliers) ?
- 5.7.1 : tableaux simples — `scope` sur les `<th>`
- 5.7.2 : tableaux complexes — `headers` sur les `<td>` référençant les `id` des `<th>`
- 5.7.3 : vérification que chaque `<td>` est associé à au moins un en-tête pertinent
- 5.7.4 : les associations sont correctement restituées
- 5.7.5 : pas d'association erronée (mauvais `id` dans `headers`)

**5.8** Chaque tableau de mise en forme ne doit pas utiliser d'éléments propres aux tableaux de données. Cette règle est-elle respectée ?
- 5.8.1 : absence de `<th>`, `<caption>`, `scope`, `headers`, `summary`, `<thead>`, `<tfoot>` dans un tableau de présentation

---

## Thème 6 — Liens (6 critères)

**6.1** Chaque lien est-il explicite (hors cas particuliers) ?
- 6.1.1 : intitulé du lien (texte + contexte de lien) est suffisant pour comprendre la destination
- 6.1.2 : lien image — l'alternative textuelle de l'image constitue l'intitulé
- 6.1.3 : lien combinant image et texte — l'ensemble est cohérent
- 6.1.4 : lien avec `aria-label` ou `aria-labelledby` — la valeur est pertinente
- 6.1.5 : lien SVG — `<title>` ou `aria-label` constitue l'intitulé

**6.2** Dans chaque page web, chaque lien a-t-il un intitulé ?
- 6.2.1 : `<a href>` avec texte non vide
- 6.2.2 : `<a href>` image — `alt` non vide sur l'image
- 6.2.3 : `<a href>` SVG — `<title>` ou `aria-label` présent
- 6.2.4 : `<a href>` avec `role="img"` — alternative présente

**6.3** Sur chaque page web, chaque intitulé de lien est-il explicite hors contexte (hors cas particuliers) ?
- 6.3.1 : l'intitulé seul (sans contexte) permet de comprendre la destination ou la fonction
- 6.3.2 : si l'intitulé n'est pas explicite seul, le contexte de lien accessible fournit l'information manquante

**6.4** La fonctionnalité de chaque lien est-elle identifiable sans la couleur ?
- 6.4.1 : les liens dans un bloc de texte sont distinguables du texte environnant par un autre moyen visuel que la couleur (soulignement, graisse, icône…)

**6.5** Sur chaque page web, chaque lien a-t-il un intitulé visible (hors cas particuliers) ?
- 6.5.1 : l'intitulé visible correspond à l'intitulé accessible (pas d'`aria-label` qui contredit le texte visible)
- 6.5.2 : le texte visible est inclus dans l'intitulé accessible (WCAG 2.5.3 Label in Name)

**6.6** Pour chaque lien texte stylistiquement distingué du texte environnant, le changement de style est-il visible à la prise de focus ?
- 6.6.1 : les styles distinctifs (soulignement, couleur de survol) s'appliquent aussi en `:focus` / `:focus-visible`
- 6.6.2 : le contraste du lien avec son arrière-plan reste suffisant en état focalisé

---

## Thème 7 — Scripts (5 critères)

**7.1** Chaque script est-il, si nécessaire, compatible avec les technologies d'assistance ?
- 7.1.1 : les composants d'interface créés par script utilisent les rôles, états et propriétés ARIA adéquats
- 7.1.2 : les interactions au clavier correspondent aux patrons WAI-ARIA APG (ex. : `Esc` ferme un dialogue, flèches naviguent dans un menu)
- 7.1.3 : les mises à jour du DOM sont notifiées aux technologies d'assistance (via `aria-live`, focus, ou autre mécanisme)

**7.2** Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?
- 7.2.1 : l'alternative fournit les mêmes informations et fonctionnalités que le script

**7.3** Chaque page web est-elle exempte de scripts qui déclenchent des changements de contexte inopinés ?
- 7.3.1 : les gestionnaires `onchange`, `onfocus`, `onblur` ne provoquent pas de changement de page, de formulaire soumis ou de focus déplacé sans action explicite de l'utilisateur
- 7.3.2 : si un changement de contexte survient, l'utilisateur en est informé avant

**7.4** Pour chaque script qui initie un changement de contexte, l'utilisateur est-il averti ?
- 7.4.1 : un avertissement textuel précède le déclencheur (ex. : « L'envoi du formulaire redirige vers une nouvelle page. »)

**7.5** Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d'assistance ?
- 7.5.1 : les messages de statut utilisent `role="status"`, `role="alert"` ou `aria-live` selon leur urgence
- 7.5.2 : les messages d'erreur ou de confirmation sont restitués sans déplacer le focus

---

## Thème 8 — Éléments obligatoires (9 critères)

**8.1** Chaque page web est-elle définie par un type de document ?
- 8.1.1 : la déclaration de type de document (`<!DOCTYPE html>`) est présente
- 8.1.2 : la déclaration est bien formée et placée en première position
- 8.1.3 : le type de document activé correspond à celui déclaré

**8.2** Pour chaque page web, le code source généré est-il valide selon le type de document spécifié (hors cas particuliers) ?
- 8.2.1 : pas d'erreurs de validation bloquant l'accessibilité (attributs `id` dupliqués, balises non fermées, nesting invalide…)

**8.3** Dans chaque page web, la langue par défaut est-elle présente et appropriée ?
- 8.3.1 : `<html lang="xx">` présent avec un code BCP 47 valide correspondant à la langue principale de la page

**8.4** Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?
- 8.4.1 : le code de langue déclaré correspond effectivement à la langue principale du contenu

**8.5** Chaque page web a-t-elle un titre de page ?
- 8.5.1 : balise `<title>` présente dans le `<head>` et non vide

**8.6** Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?
- 8.6.1 : le `<title>` identifie le sujet ou l'objectif de la page et, si nécessaire, le nom du site

**8.7** Dans chaque page web, chaque changement de langue est-il indiqué dans le code source (hors cas particuliers) ?
- 8.7.1 : tout passage dans une langue différente de celle déclarée sur `<html>` porte un attribut `lang` avec le bon code

**8.8** Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?
- 8.8.1 : le code de langue dans les attributs `lang` locaux est un code BCP 47 valide et correspond au passage concerné

**8.9** Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?
- 8.9.1 : pas de balises sémantiques (`<h1>`–`<h6>`, `<p>`, `<ul>`, `<strong>`, `<em>`…) employées uniquement pour leurs effets visuels par défaut

---

## Thème 9 — Structuration de l'information (6 critères)

**9.1** Dans chaque page web, l'information est-elle structurée par l'utilisation appropriée de titres ?
- 9.1.1 : les titres utilisent les éléments `<h1>` à `<h6>` ou `role="heading"` avec `aria-level`
- 9.1.2 : chaque passage de contenu pertinent est introduit par un titre
- 9.1.3 : les balises de titre ne sont pas utilisées à des fins de présentation

**9.2** Dans chaque page web, la structure du document est-elle cohérente (hors cas particuliers) ?
- 9.2.1 : la hiérarchie des titres est logique, sans sauts de niveaux (ex. : pas de `<h4>` après `<h2>` sans `<h3>` intermédiaire)

**9.3** Dans chaque page web, chaque liste est-elle correctement structurée ?
- 9.3.1 : listes non ordonnées — éléments `<ul>` et `<li>` utilisés
- 9.3.2 : listes ordonnées — éléments `<ol>` et `<li>` utilisés
- 9.3.3 : listes de définitions — éléments `<dl>`, `<dt>`, `<dd>` utilisés

**9.4** Dans chaque page web, chaque citation est-elle correctement indiquée ?
- 9.4.1 : citations courtes — élément `<q>` utilisé
- 9.4.2 : citations longues — élément `<blockquote>` utilisé

**9.5** Dans chaque page web, chaque passage en emphase ou en forte importance est-il signalé ?
- 9.5.1 : emphase légère — `<em>` utilisé (et non `<i>` à des fins sémantiques)
- 9.5.2 : forte importance — `<strong>` utilisé (et non `<b>` à des fins sémantiques)

**9.6** Dans chaque page web, les éléments qui citent une ressource externe utilisent-ils un attribut `cite` ?
- 9.6.1 : `<blockquote cite="…">` ou `<q cite="…">` avec URL valide quand la source est connue

---

## Thème 10 — Présentation de l'information (14 critères)

**10.1** Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation ?
- 10.1.1 : la mise en forme est assurée par CSS, pas par des attributs de présentation HTML (`bgcolor`, `border`, `align`…)
- 10.1.2 : les balises de présentation dépréciées (`<font>`, `<center>`, `<b>` à fins stylistiques) ne sont pas utilisées
- 10.1.3 : les CSS s'appliquent uniquement à la présentation, pas à la structure

**10.2** Dans chaque page web, le contenu visible reste-t-il présent lorsque les feuilles de styles sont désactivées ?
- 10.2.1 : aucun contenu informatif n'est affiché uniquement via `content` CSS, `background-image` ou propriétés équivalentes

**10.3** Dans chaque page web, l'information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?
- 10.3.1 : la lecture linéaire du DOM sans CSS reste cohérente et compréhensible

**10.4** Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu'à 200 % (hors cas particuliers) ?
- 10.4.1 : pas de troncature ou superposition irréparable de texte à 200 %
- 10.4.2 : les textes redimensionnent proportionnellement (pas de taille fixe en `px` pour les `font-size`)
- 10.4.3 : aucun élément de mise en page ne masque le texte agrandi

**10.5** Dans chaque page web, les déclarations CSS de couleurs de fond et de police sont-elles correctement utilisées ?
- 10.5.1 : si une couleur de texte est déclarée, la couleur de fond l'est aussi (et vice versa)
- 10.5.2 : si une image de fond décorative est utilisée, la lisibilité du texte est assurée sans cette image
- 10.5.3 : les couleurs définies en CSS sont compatibles avec les préférences système de l'utilisateur

**10.6** Dans chaque page web, chaque lien dont la nature n'est pas évidente est-il visible par rapport au texte environnant ?
- 10.6.1 : les liens dans un bloc de texte courant sont distingués du texte par un moyen autre que la couleur
- 10.6.2 : cette distinction est maintenue pour les états `:hover` et `:focus`

**10.7** Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible (hors cas particuliers) ?
- 10.7.1 : un indicateur de focus visible et suffisamment contrasté (≥ 3:1) est présent pour tous les éléments interactifs

**10.8** Dans chaque page web, l'ordre de tabulation est-il cohérent ?
- 10.8.1 : l'ordre de focus suit la lecture visuelle naturelle — pas de `tabindex` positif pour réordonner

**10.9** Dans chaque page web, l'information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?
- 10.9.1 : les instructions basées sur la forme (« le bouton rond ») ont une alternative textuelle
- 10.9.2 : les instructions basées sur la taille (« le grand bouton ») ont une alternative textuelle
- 10.9.3 : les instructions basées sur la position (« le bouton à droite ») ont une alternative textuelle

**10.10** Dans chaque page web, l'information ne doit pas être donnée par un élément graphique de position uniquement. Cette règle est-elle respectée ?
- 10.10.1 : les bordures, séparateurs ou icônes utilisés pour véhiculer une information ont une alternative textuelle
- 10.10.2 : les éléments CSS purement positionnels ne portent pas d'information sans équivalent textuel

**10.11** Pour chaque page web, les contenus peuvent-ils être présentés sans perte d'information ou de fonctionnalité et sans défilement horizontal pour une largeur de 320 pixels CSS (hors cas particuliers) ?
- 10.11.1 : à 320 px de large, le contenu est lisible et utilisable sans défilement horizontal (WCAG 1.4.10 Reflow)

**10.12** Dans chaque page web, les propriétés d'espacement du texte peuvent-elles être redéfinies par l'utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?
- 10.12.1 : `line-height` ≥ 1,5 fois la taille de police — aucune perte de contenu
- 10.12.2 : `letter-spacing` ≥ 0,12 em — aucune perte de contenu
- 10.12.3 : `word-spacing` ≥ 0,16 em — aucune perte de contenu
- 10.12.4 : `margin-bottom` sur paragraphes ≥ 2 fois la taille de police — aucune perte de contenu (WCAG 1.4.12 Text Spacing)

**10.13** Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d'un composant sont-ils contrôlables par l'utilisateur (hors cas particuliers) ?
- 10.13.1 : les contenus apparus au survol/focus peuvent être fermés sans déplacer le focus (ex. : touche `Esc`)
- 10.13.2 : les contenus apparus au survol peuvent être survolés à la souris sans disparaître
- 10.13.3 : les contenus apparus restent visibles jusqu'à ce que l'utilisateur les ferme, déplace son focus ou que l'information devienne invalide
- 10.13.4 : les contenus apparus sont consultables dans leur intégralité (pas tronqués hors de la zone de survol) (WCAG 1.4.13 Content on Hover or Focus)

**10.14** Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?
- 10.14.1 : les pseudoéléments `::before`/`::after` portant de l'information ont une alternative textuelle dans le DOM
- 10.14.2 : les contenus révélés via `:hover` uniquement sont également accessibles via `:focus`

---

## Thème 11 — Formulaires (13 critères)

**11.1** Chaque champ de formulaire a-t-il une étiquette ?
- 11.1.1 : `<input>`, `<textarea>`, `<select>` — `<label>` associé via `for`/`id`
- 11.1.2 : composants ARIA (`role="combobox"`, etc.) — `aria-label` ou `aria-labelledby` présent
- 11.1.3 : l'étiquette est restituée correctement par les technologies d'assistance

**11.2** Pour chaque champ de formulaire ayant une étiquette, cette étiquette est-elle pertinente (hors cas particuliers) ?
- 11.2.1 : le texte de l'étiquette identifie clairement la nature et le but du champ
- 11.2.2 : les attributs `title`, `aria-label` ou `aria-labelledby` utilisés comme étiquettes sont pertinents
- 11.2.3 : le placeholder n'est pas utilisé comme unique étiquette
- 11.2.4 : les champs `type="hidden"` n'ont pas besoin d'étiquette visible
- 11.2.5 : `autocomplete` est cohérent avec l'étiquette déclarée
- 11.2.6 : l'étiquette visible fait partie de l'intitulé accessible (WCAG 2.5.3 Label in Name)

**11.3** Dans chaque formulaire, l'étiquette de chaque champ est-elle visible ?
- 11.3.1 : les étiquettes sont visibles à l'écran (pas uniquement `aria-label` ou `title`)
- 11.3.2 : les étiquettes ne disparaissent pas à la saisie (contrairement aux placeholders)

**11.4** Pour chaque champ ayant une étiquette visible, celle-ci est-elle visuellement accolée au champ (hors cas particuliers) ?
- 11.4.1 : pour les champs de saisie — étiquette au-dessus ou à gauche
- 11.4.2 : pour les cases à cocher / boutons radio — étiquette à droite
- 11.4.3 : pas de champ et d'étiquette séparés par d'autres éléments interactifs

**11.5** Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?
- 11.5.1 : les boutons radio ou cases à cocher d'un même groupe sont dans un `<fieldset>`
- 11.5.2 : le regroupement ARIA (`role="group"` ou `role="radiogroup"`) est utilisé quand `<fieldset>` n'est pas applicable

**11.6** Dans chaque formulaire, chaque regroupement de champs a-t-il une légende ?
- 11.6.1 : `<fieldset>` avec `<legend>` non vide
- 11.6.2 : `role="group"` ou `role="radiogroup"` avec `aria-labelledby` ou `aria-label`

**11.7** Dans chaque formulaire, la légende associée à un regroupement est-elle pertinente ?
- 11.7.1 : le texte de `<legend>` décrit clairement la nature du regroupement
- 11.7.2 : les `aria-label` / `aria-labelledby` des groupes ARIA sont pertinents

**11.8** Dans chaque formulaire, les items de même nature d'une liste de choix sont-ils regroupés de manière pertinente ?
- 11.8.1 : les options d'un `<select>` sont regroupées en `<optgroup>` si pertinent
- 11.8.2 : le libellé de l'`<optgroup>` est pertinent
- 11.8.3 : les composants de liste ARIA utilisent des regroupements cohérents

**11.9** Dans chaque formulaire, l'intitulé de chaque bouton est-il pertinent (hors cas particuliers) ?
- 11.9.1 : `<button>` — texte non vide et descriptif de l'action
- 11.9.2 : `<input type="submit|reset|button">` — attribut `value` pertinent
- 11.9.3 : `<input type="image">` — attribut `alt` décrivant la fonction
- 11.9.4 : bouton avec `aria-label` ou `aria-labelledby` — valeur pertinente
- 11.9.5 : l'intitulé visible correspond à l'intitulé accessible (WCAG 2.5.3)

**11.10** Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente (hors cas particuliers) ?
- 11.10.1 : les champs obligatoires sont indiqués (attribut `required` ou `aria-required="true"`)
- 11.10.2 : les erreurs de format sont annoncées (attribut `type` approprié, pattern, `aria-describedby`)
- 11.10.3 : les messages d'erreur identifient le champ en erreur et décrivent le problème
- 11.10.4 : les messages d'erreur sont accessibles aux technologies d'assistance
- 11.10.5 : la détection d'erreur n'utilise pas uniquement la couleur
- 11.10.6 : les contraintes de format sont indiquées avant ou dans l'étiquette
- 11.10.7 : en cas d'erreur de saisie, des suggestions de correction sont proposées si possible

**11.11** Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction ?
- 11.11.1 : des exemples ou formats attendus sont fournis dans ou à proximité du champ
- 11.11.2 : les messages d'erreur suggèrent une correction valide quand c'est possible

**11.12** Pour chaque formulaire qui modifie ou supprime des données, ou qui a des conséquences financières ou juridiques, les données peuvent-elles être modifiées, mises à jour ou récupérées ?
- 11.12.1 : une étape de confirmation ou de prévisualisation est proposée avant soumission définitive
- 11.12.2 : les données saisies peuvent être annulées ou modifiées après soumission (ex. : annulation de commande)

**11.13** La finalité d'un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique ?
- 11.13.1 : les champs personnels courants portent un attribut `autocomplete` conforme à la liste WCAG (ex. : `autocomplete="name"`, `autocomplete="email"`)
- 11.13.2 : la valeur d'`autocomplete` correspond au type de donnée attendu par le champ

---

## Thème 12 — Navigation (9 critères)

**12.1** Chaque ensemble de pages dispose-t-il d'au moins deux systèmes de navigation différents (hors cas particuliers) ?
- 12.1.1 : présence d'au moins deux parmi : menu de navigation, moteur de recherche, plan du site

**12.2** Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place (hors cas particuliers) ?
- 12.2.1 : la position et l'ordre des éléments de navigation principaux sont constants d'une page à l'autre

**12.3** La page plan du site est-elle pertinente ?
- 12.3.1 : le plan du site liste toutes les pages du site ou au moins toutes les rubriques principales, avec des liens fonctionnels

**12.4** Dans chaque ensemble de pages, la page plan du site est-elle accessible depuis la même place (hors cas particuliers) ?
- 12.4.1 : le lien vers le plan du site est présent et à la même position sur toutes les pages

**12.5** Dans chaque ensemble de pages, le moteur de recherche est-il accessible depuis la même place (hors cas particuliers) ?
- 12.5.1 : le moteur de recherche ou son lien d'accès est présent et à la même position sur toutes les pages

**12.6** Les zones de regroupement de contenu présentes dans plusieurs pages (en-tête, navigation, contenu principal, pied de page, moteur de recherche) peuvent-elles être atteintes ou évitées ?
- 12.6.1 : présence de liens d'évitement ou d'accès direct (skip links) permettant d'atteindre ou de sauter chaque zone principale
- 12.6.2 : les liens d'évitement sont visibles à la prise de focus (ou toujours visibles)
- 12.6.3 : les liens d'évitement pointent vers des cibles valides et fonctionnelles

**12.7** Dans chaque page web, un lien d'évitement ou d'accès rapide à la zone de contenu principal est-il présent (hors cas particuliers) ?
- 12.7.1 : un lien « Aller au contenu principal » ou équivalent est le premier lien interactif de la page

**12.8** Dans chaque page web, l'ordre de tabulation est-il cohérent ?
- 12.8.1 : la séquence de tabulation suit le flux de lecture visuel — pas de `tabindex` positif pour réordonner artificiellement

**12.9** Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?
- 12.9.1 : l'utilisateur peut naviguer vers et depuis chaque composant en utilisant uniquement le clavier
- 12.9.2 : les modales et panneaux focalisés programmatiquement permettent de revenir au flux principal (ex. : `Esc`)

---

## Thème 13 — Consultation (12 critères)

**13.1** Pour chaque page web, l'utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?
- 13.1.1 : l'utilisateur peut désactiver, ajuster ou prolonger toute limite de temps avant son expiration
- 13.1.2 : la limite de temps est signalée à l'utilisateur avec un délai d'avertissement suffisant (ex. : 20 secondes avant expiration de session)
- 13.1.3 : les rafraîchissements automatiques de page sont contrôlables
- 13.1.4 : la durée par défaut est d'au moins 20 heures ou configurable
- 13.1.5 : les exceptions (sécurité, temps réel) sont documentées

**13.2** Dans chaque page web, l'ouverture d'une nouvelle fenêtre ou d'un nouvel onglet ne doit pas être déclenchée sans action de l'utilisateur. Cette règle est-elle respectée ?
- 13.2.1 : aucune nouvelle fenêtre ou onglet ne s'ouvre sans interaction explicite de l'utilisateur
- 13.2.2 : si l'ouverture d'une nouvelle fenêtre est inévitable, l'utilisateur en est averti (ex. : via l'intitulé du lien ou un `aria-label`)

**13.3** Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible (hors cas particuliers) ?
- 13.3.1 : les documents PDF sont accessibles ou disposent d'une alternative HTML/texte
- 13.3.2 : les documents Word/ODT sont accessibles ou disposent d'une alternative
- 13.3.3 : les documents Excel/ODS sont accessibles ou disposent d'une alternative
- 13.3.4 : les documents PowerPoint/ODP sont accessibles ou disposent d'une alternative

**13.4** Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?
- 13.4.1 : la version accessible contient l'intégralité du contenu du document d'origine

**13.5** Dans chaque page web, chaque contenu cryptique (art ASCII, émoticônes, syntaxe cryptique) a-t-il une alternative ?
- 13.5.1 : les séquences ASCII artistiques, les émoticônes et la syntaxe ésotérique ont une alternative textuelle ou une explication

**13.6** Dans chaque page web, pour chaque contenu cryptique, l'alternative est-elle pertinente ?
- 13.6.1 : l'alternative décrit le sens ou l'intention du contenu cryptique, pas sa représentation graphique

**13.7** Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?
- 13.7.1 : aucun contenu ne flashe plus de 3 fois par seconde (seuil général)
- 13.7.2 : les flashs dépassant le seuil général respectent le seuil de flash rouge défini par les WCAG

**13.8** Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l'utilisateur ?
- 13.8.1 : tout contenu qui se déplace, défile ou clignote pendant plus de 5 secondes dispose d'un mécanisme de pause/arrêt/masquage
- 13.8.2 : les carrousels et diaporamas en lecture automatique ont un bouton pause visible
- 13.8.3 : les animations respectent `prefers-reduced-motion` ou sont désactivables
- 13.8.4 : les animations déclenchées par l'interaction peuvent être désactivées sans perte de fonctionnalité

**13.9** Dans chaque page web, le contenu est-il consultable quelle que soit l'orientation de l'écran (portrait ou paysage) (hors cas particuliers) ?
- 13.9.1 : aucun contenu ni fonctionnalité n'est limité à une seule orientation (WCAG 1.3.4 Orientation)

**13.10** Dans chaque page web, les fonctionnalités nécessitant un geste complexe disposent-elles d'une alternative accessible via un geste simple (hors cas particuliers) ?
- 13.10.1 : les fonctionnalités par glissement (drag-and-drop, pinch-to-zoom applicatif) ont une alternative activable en un seul point de contact (WCAG 2.5.1 Pointer Gestures)

**13.11** Dans chaque page web, les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran peuvent-elles faire l'objet d'une annulation (hors cas particuliers) ?
- 13.11.1 : les actions s'exécutent au relâchement du pointeur (not on `mousedown`) ou disposent d'un mécanisme d'annulation (WCAG 2.5.2 Pointer Cancellation)

**13.12** Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l'appareil peuvent-elles être satisfaites par des composants d'interface alternatifs ?
- 13.12.1 : les fonctionnalités déclenchées par un geste physique (secouer, incliner l'appareil) ont une alternative accessible par un composant d'interface standard
- 13.12.2 : la réponse aux mouvements de l'appareil peut être désactivée (WCAG 2.5.4 Motion Actuation)

---

## Récapitulatif par thème

| Thème | Intitulé | Critères |
|-------|----------|----------|
| 1 | Images | 1.1 – 1.9 |
| 2 | Cadres | 2.1 – 2.2 |
| 3 | Couleurs | 3.1 – 3.3 |
| 4 | Multimédia | 4.1 – 4.13 |
| 5 | Tableaux | 5.1 – 5.8 |
| 6 | Liens | 6.1 – 6.6 |
| 7 | Scripts | 7.1 – 7.5 |
| 8 | Éléments obligatoires | 8.1 – 8.9 |
| 9 | Structuration de l'information | 9.1 – 9.6 |
| 10 | Présentation de l'information | 10.1 – 10.14 |
| 11 | Formulaires | 11.1 – 11.13 |
| 12 | Navigation | 12.1 – 12.9 |
| 13 | Consultation | 13.1 – 13.12 |

**Total : 106 critères — 282 tests**

Source officielle et référence de conformité : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/
