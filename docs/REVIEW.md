# Review v1 → v2 — ce qui a été trouvé, ce qui a changé

Review en profondeur du site original (monolithe `index.html`, 1 959 lignes, ~248 KB)
puis rebuild complet sur le stack Vite + React 19 + Tailwind v4 (même stack que nika.sh),
branche `revamp/nika-stack`. Le contenu FR/EN a été porté **verbatim** — la voix
éditoriale du guide est sa valeur ; rien n'a été réécrit sans raison factuelle.

## Verdict sur la v1

**Points forts (conservés tels quels)**
- Copy exceptionnelle, bilingue de bout en bout, honnêteté technique rare
  (« ni VPN ni E2EE ne suffisent contre le scan côté client », nuance Cloudflare,
  Immich pas E2EE, Bitchat non audité, anonymat étatique « difficile et faillible »).
- Design « dossier tamponné » distinctif : serif éditorial + mono machine à écrire,
  un seul accent ambre, light/dark, reduced-motion respecté partout.
- Structure par profils de menace (🟢 citoyen / 🟡 pseudonyme / 🔴 lanceur d'alerte).

**Défauts corrigés**

| # | Problème v1 | Fix v2 |
|---|---|---|
| 1 | **Fuite vers un CDN tiers** : les logos chargés depuis `cdn.simpleicons.org` à l'exécution — une requête externe par visite… sur un guide de vie privée | Icônes SVG inlinées au build (`scripts/gen-icons.mjs`, paquet npm `simple-icons`, CC0). Zéro requête externe, vérifiable à l'inspecteur réseau ; encart « proof » ajouté au footer |
| 2 | Monolithe de 1 959 lignes : contenu, styles et i18n mélangés, impossible à maintenir à 45 fiches outils | Composants (`ToolCard`, `Box`, `PartHead`, `Checklist`, timeline) + fiches en **données typées** ; le contenu est testable (`tests/content.test.ts`) |
| 3 | Pas de méta OG/Twitter, pas de canonical, pas de sitemap, pas de robots.txt, pas de favicon | Tout ajouté ; sitemap dérivé des routes au build ; hreflang fr/en |
| 4 | `aria-pressed` géré à la main, boutons sans type, filtrage impossible | Stores `useSyncExternalStore` hydration-safe ; visuels des boutons pilotés par CSS `:root[data-lang]` (corrects avant hydratation) ; **filtre par profil** (pure CSS via `data-filter`) |
| 5 | Le « plan progressif » était 3 lignes statiques | **Checklist cochable** persistée en `localStorage` uniquement (rien ne part du navigateur — c'est écrit et vérifiable) |
| 6 | Récit législatif figé au 9 juillet sans la chaîne complète | Chronologie corrigée sur sources primaires : rejet du Parlement 26/03 (228/311/92) → **expiration réelle 3/04/2026** → position du Conseil 02/07 → échec du rejet 09/07 (314/276/17, majorité absolue 361 requise, procédure d'urgence Rule 170). Voir `docs/RESEARCH.md` |
| 7 | Aucune preuve historique de la thèse « l'infrastructure est détournée » | **Section Précédents** : 23 événements datés 1993→2026, chacun avec document primaire, taggés promesse/dérive/rempart/révélation |
| 8 | La mobilisation renvoyait vers 3 liens en vrac | **Section Alliés** : 8 campagnes + 8 chroniqueurs (EFF Timeline, Atlas of Surveillance, Technopolice, OONI…) avec leur rôle |
| 9 | « Site autonome » perdu si on passe à un bundler | Préservé : `dist/exitchatcontrol-offline.html` (~660 KB, un seul fichier, CSS+JS inlinés) généré à chaque build, lien « Télécharger le guide » au footer |
| 10 | Placeholders d'images d'écran (`images/.gitkeep`, styles `.shot` morts) | Supprimés (le dossier vivait sans images depuis le premier commit) |

## Architecture v2

```
index.html                 boot script (lang/theme avant peinture, ?goto, rig capture)
site.config.ts             ORIGIN + PATHS (source unique sitemap + prerender)
vite.config.ts             tailwindcss() + reactSsg() + sitemap dérivé
react-ssg.config.ts        prerender de src/routes.tsx (le guide entier est du HTML statique)
scripts/gen-icons.mjs      simple-icons → src/icons.generated.ts (build-time, zéro CDN)
scripts/postbuild-offline.mjs  dist → exitchatcontrol-offline.html (1 fichier)
src/
  styles/tokens.css        TOUTES les valeurs brutes (light/dark ×3 voies) + classes
  lib/prefs.ts             stores lang/filter/theme (useSyncExternalStore)
  lib/i18n.tsx             <T fr en> — les 2 langues dans le DOM, CSS affiche l'une
  components/              ToolCard · Chrome (TopBar/FilterBar) · Checklist · Footer · ui
  content/events.tsx       LES DONNÉES de la timeline (testées)
  sections/                intro · precedents · tools-* · allies · action
tests/content.test.ts      intégrité timeline + icônes embarquées
```

Décisions notables :
- **Prerender obligatoire** : le public de ce guide inclut Tor Browser en mode
  « le plus sûr » (JS coupé). Tout le contenu est dans le HTML ; le JS n'ajoute
  que les toggles, le filtre et la persistance de la checklist.
  (Piège rencontré : `<div id="app"><!--app-html--></div>` empêchait
  vite-plugin-react-ssg d'injecter — le conteneur doit être vide.)
- **`<T fr en>` plutôt qu'un i18n à runtime** : hérité de la v1 et assumé — bascule
  instantanée sans re-render d'une page de 10 000 mots, fonctionne sans JS après
  la première peinture, prerender unique.
- **Pas de police web** : les piles serif/mono système font partie de l'identité
  v1 et suppriment tout téléchargement de police.

## Vérifié

- `pnpm lint` — 0 erreur, 0 warning (règles react-hooks v7 + react-refresh incluses)
- `pnpm test` — 4/4 (tri chronologique, bilingue, sources https, icônes inline)
- `pnpm build` — type-check + prerender 1 route + sitemap + artefact offline
- Captures light/dark/mobile (`shots/`, gitignorées) : hero, menace, timeline,
  fiches outils, alliés, checklist — boucle vision passée
- Grep des assets construits : zéro URL externe requêtée à l'exécution
