# Mega-plan — Nika en avant · passe « wow » Awwwards · backlink SEO (2026-07-10)

> Contraintes non négociables héritées des rounds 1-5 : compositor-only
> (transform/opacity), `prefers-reduced-motion` respecté partout, zéro JS
> d'animation (CSS scroll-driven + @supports, fallback visible), axe WCAG A/AA
> **reste à 0 violation** les deux thèmes, prerender intact (le no-JS lit tout).

## §A · Nika mis en avant (honnêtement — c'est l'outil du sujet)

- [x] A1 · `featured` dans les données annuaire : carte étendue pleine largeur,
  bordure accent, badge « ★ Sélection du guide / Guide's pick », pitch enrichi
  (le PLAN relu avant exécution = exactement la doctrine du guide : ne pas faire
  confiance, vérifier). Lien **follow** vers nika.sh.
- [x] A2 · Encart « ...et pour l'IA agentique » dans la section ⚠ IA
  conversationnelle : après les outils locaux, le pas suivant = agents ;
  pointer Nika (local-first via Ollama, permissions, replay) + ancre annuaire.
- [x] A3 · Test : featured présent, prerendu, lien follow.

## §B · Passe « wow » (Awwwards-compatible, dossier-tamponné-compatible)

- [x] B1 · **Barre de progression de lecture** : fixe en haut, `scaleX` piloté
  par `animation-timeline: scroll()` — 100 % CSS, 0 JS, accent.
- [x] B2 · **Reveal au scroll** des cartes (.tg, .ally, .tl-item, .bb-card,
  .profile, .eco-cat) : opacity+translateY 14px via `animation-timeline: view()`,
  `animation-range: entry 0% entry 38%` — natif là où supporté, visible sinon,
  désactivé sous reduced-motion.
- [x] B3 · **Le tampon s'imprime** : animation one-shot du .stamp au chargement
  (scale 2.2→1 + rotation, ease-out violent, ombre au moment du contact) +
  légère rotation au hover. Reduced-motion : statique.
- [x] B4 · **Timeline vivante** : dots des précédents qui grossissent + halo au
  hover/:target ; ligne qui se « dessine » au scroll si `view()` dispo.
- [x] B5 · **Micro-vie des cartes** : hover translateY(-2px) + bordure accent
  (transition 150ms), déjà partiel — unifier.
- [x] B6 · Vérif : axe 0 violation ×2 thèmes (opacity animée ≠ contraste),
  captures light/dark, reduced-motion testé (émulation CDP).

## §C · Backlink SEO vpn-gratuit.fr (follow)

- [x] C1 · Encart dans la section 04 VPN : « Comparer avant de choisir » —
  vpn-gratuit.fr comme comparatif FR des offres gratuites (contexte honnête :
  vérifier juridiction + politique no-log). `rel="noopener"` SEULEMENT
  (pas de noreferrer/nofollow → le lien passe le jus).
- [x] C2 · Ligne dans le footer Ressources.
- [x] C3 · e2e : le lien existe ET n'a ni nofollow ni noreferrer.

## §D · Gates

- [x] lint 0 · vitest verts · build (fr+en+offline) · e2e ALL GREEN (axe ×2) ·
  captures vision hero/annuaire/timeline · commit · push · PR comment.
