# Retours site internet (point du 01/09/2026 avec Houleymatou)

> Extrait du transcript automatique `Point site internet .pdf` (52 pages, transcription vocale
> assez bruitée par endroits). Certains points sont reformulés/déduits du contexte — à confirmer
> au fil du traitement si un point semble ambigu.

## Navigation / menu

- [x] Retirer "Notre mission" du menu (ça reste une ancre sur la page d'accueil, pas une entrée de
      menu séparée).
- [x] Ajouter "Nos prestations" dans le menu, après "Nos actions", le lien doit rediriger vers les prestations pour entreprises

## Page Actions

- [x] Réordonner le sous menu : Éducation, Réseau, Événement Tech, Entreprises (dans cet ordre).
- [x] Renommer "Conférence" en "Événement Tech" dans le menu / sous-menu Réseau.
- [x] Dans le sous-menu Réseau, ajuster le libellé : "accompagnement des équipes organisatrices de
  conférence" → "accompagnement des équipes organisatrices d'événement tech / Meetup".

## Page Entreprises / Prestations

- [x] Renommer la page/l'entrée de menu "Entreprise" → "Nos prestations pour les
  entreprises". (titre de page + `<title>` ; l'entrée de menu reste "Nos prestations", plus courte).
- [x] ~~Le bouton "Devenir partenaire" / bordé est invisible (vert sur vert)~~ — obsolète : la page a
      été refaite entre-temps avec des boutons pleins bien contrastés, ce bouton n'existe plus sous
      cette forme.
- [x] Le bouton "Télécharger notre offre" (PDF) ne doit rien faire pour l'instant car la nouvelle
      plaquette est en cours de finalisation par Louison → **masquer le bouton sans le supprimer**,
      il sera réactivé quand le nouveau PDF sera prêt.
- [x] Déplacer le bloc "Nos partenaires" (logos qui défilent) tout en bas de cette page, après les
      sections Partenariat/Conférence/Formation/Conseil.
- [ ] Sur cette page, les logos des vrais partenaires devraient défiler en carrousel comme le fait
      le bandeau de mots-clés en face (même effet des deux côtés de la section), sinon utiliser le
      même mot "partenaire financier" pour les deux colonnes. — **non fait** : avec la nouvelle page,
      les logos tiennent déjà dans une grille compacte et lisible ; un défilement automatique
      ajouterait du mouvement sans bénéfice clair (et complique l'accessibilité). À rediscuter si la
      liste de partenaires grossit beaucoup.
- [ ] Distinguer les logos : entreprises d'abord, puis associations/partenaires — ne pas mélanger
      l'ordre à chaque mise à jour. — non touché, le classement actuel ("Partenaires financiers" /
      "Partenaires écosystèmes") mélange déjà entreprises et fondations/écoles dans le premier
      groupe ; dites-moi si vous voulez un tri strict entreprises-puis-associations à l'intérieur de
      chaque groupe.

## Page d'accueil (Home)

- [x] Retirer le bloc "réseau de confiance" de la page d'accueil : il est dupliqué avec la page
      Réseau — ne le garder que sur la page Réseau.
- [x] Vérifier la couleur du texte des chiffres clés (24%, "2 programmes", "labellisé…") : un des
      textes était trop clair/gris et peu lisible par rapport aux autres blocs de la page — harmoniser.
- [ ] Idée facultative "pour se faire plaisir" : au survol de la photo de la fondatrice sur le
      hero, afficher un petit clin d'œil texte "yes" (easter egg) — **tenté puis abandonné** : les
      trois photos du hero se chevauchent avec un empilement (z-index) déjà fragile/particulier
      (chaque photo a sa propre animation d'entrée, ce qui casse l'ordre d'empilement voulu et fait
      que la photo de droite peut recouvrir le badge selon la paire tirée au hasard). Corriger cette
      base avant d'ajouter le easter egg — dites-moi si vous voulez que je m'attaque à ce chantier
      plus large.

## Page À propos

- [ ] Ajouter des ancres de sommaire en haut de page (comme sur "Nos prestations") pointant vers "Nos
      leaders / Notre équipe" et "Nos antennes", etc.
- [ ] Sur l'histoire de Houleymatou, à côté de la mention "rôle modèle", ajouter un exemple entre parenthèses pour
  que ce soit plus concret, ex. "(Chloé, dans la série 24h chrono)" — vérifier que ça ne
  provoque pas de retour à la ligne disgracieux.
- [ ] Créer une section "Une équipe engagée partout en France" séparée en deux blocs :
  - Bureau + Squads (comme actuellement).
  - "Nos antennes" : liste des villes avec le nom de la leader + lien LinkedIn.
- [ ] Ajouter une carte de France avec les antennes (photo/carte OpenStreetMap ou équivalent),
      positionnée après le bloc "Nos leaders/équipes", avant la section finale (mot de fin
      David + Houleymatou).
- [ ] Au survol de la photo de la fondatrice, le texte ne doit pas disparaître complètement —
      garder un affichage propre du texte au hover.

## Page Réseau

- [ ] Ajouter un bloc "Ils nous hébergent déjà" listant les entreprises qui ont accueilli des
      Meetups Yeeso (logos, idéalement en défilement plutôt qu'en liste statique pour ne pas
      allonger la page) — positionné avant la section adhésion.
- [ ] Bien distinguer ce bloc "hébergeurs de Meetup" du bloc "Ils nous soutiennent" (vrais
      partenaires), qui reste sur la page Entreprises/Prestations tout en bas.
- [ ] Vérifier qu'il n'y a plus de duplication du texte "réseau de confiance" avec la page
      d'accueil (cf. point ci-dessus dans la section Accueil).

## Mode sombre (dark mode)

- [ ] Le mode doit être celui du système si choisi, sinon le mode sombre doit être **actif par défaut**, avec la possibilité pour l'utilisateur de
      repasser en mode clair (actuellement à vérifier quel est le comportement par défaut).

## Adhésion / Call-to-action "Nous rejoindre"

- [ ] Le CTA "Nous rejoindre"/adhésion ne doit plus renvoyer directement vers HelloAsso : créer
      (ou pointer vers) une nouvelle page interne qui explique d'abord les bénéfices de l'adhésion (accès au
      Slack, lunch talks, mentorat, cafés yeeso du vendredi, etc.), avec un CTA vers HelloAsso à l'intérieur de cette page.
- [ ] Harmoniser le libellé des CTA "Nous rejoindre" vs "Soutenir" partout sur le site.
- [ ] Mettre à jour la FAQ ("pourquoi adhérer ?") pour renvoyer vers cette nouvelle page
      explicative plutôt que directement vers HelloAsso.

## FAQ

- [ ] Rendre la FAQ plus visible/trouvable : actuellement le lien "Consulter notre FAQ" sur la home est jugé
      peu lisible — envisager un petit bouton coloré (vert)

## Footer

- [ ] Vérifier la présence d'un crédit "site créé par Manon Carbonnel" (ou équivalent) dans le
      footer.
- [ ] Vérifier que le résumé d'impact environnemental (éco-index) dans le footer renvoie bien vers
      le détail dans les mentions légales.

## Mentions légales

- [ ] Vérifier que les mentions légales créditent bien Manon Carbonnel pour le développement du site.

## Global et technique

- [ ] Remplacer "égalité" par "équité" partout où c'est le terme de l'association qui doit
  apparaître (ex. "L'égalité comme boussole" → "L'équité comme boussole"). Garder "égalité" si
  c'est le nom propre d'un atelier existant ("atelier de sensibilisation à l'égalité").
- [ ] Nettoyer les restes de formatage/génération IA dans le texte à propos : retirer les "-IA",
  doubles tirets ou artefacts similaires qui traînent dans le contenu.
- [ ] Renommer le projet pour refléter le nom final
      `yeeso.org`.