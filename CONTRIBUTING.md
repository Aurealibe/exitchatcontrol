# Contributing / Contribuer

**EN** — Corrections, translations and new tool entries are welcome. Three
rules for a tool to qualify (upstream policy): **traction** (established,
actively maintained, real user base) · **open source** (for the directory the
license is verified against the repository — source-available doesn't qualify)
· **privacy-respecting**.

**FR** — Corrections, traductions et nouveaux outils bienvenus. Trois règles
pour qu'un outil soit accepté : **traction** (projet établi, maintenu, vraie
base d'utilisateurs) · **open source** (licence vérifiée sur le dépôt — le
source-available ne compte pas) · **respectueux de la vie privée**.

## Where things live / Où vivent les choses

| What | File |
|---|---|
| Directory entry (name, license, link, one-liner FR/EN) | `src/content/directory.tsx` |
| Full tool card (what/why/who/install, FR/EN) | `src/sections/tools-*.tsx` |
| Precedents timeline event (dated + primary source) | `src/content/events.tsx` |
| Big Brother observatory fact (dated + primary source) | `src/content/drift.tsx` |
| Survival-kit shelf / arsenal marquee | `src/content/showcase.tsx` |

## Checks / Vérifications

```bash
pnpm test                    # content integrity — tells you if an entry is malformed
pnpm lint && pnpm build      # types + prerender
node scripts/e2e.mjs         # full battery (needs Chrome)
node scripts/check-links.mjs # cited sources must answer (also runs weekly in CI)
```

Every cited source must be **primary** (statute, ruling, official release,
forensic report). Licenses in the directory carry the SPDX id shown by the
project's repository. Not comfortable with code? Open an Issue with the app's
name, link, and why it qualifies — someone will wire it in.
