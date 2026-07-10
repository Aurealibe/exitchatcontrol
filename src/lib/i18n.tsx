import type { ReactNode } from 'react'

/* Bilingual leaf: BOTH languages render into the DOM; CSS on
   :root[data-lang=…] shows one. This is deliberate (inherited from v1):
   the language toggle keeps working before hydration and with JS disabled
   after the initial paint, and switching is instant with zero re-render
   of a 10k-word page. Language/theme setters live in lib/prefs.ts.

   Each leaf carries its own lang attribute: on the FR page the visible FR
   span matches the page language (harmless) while any EN fragment a screen
   reader encounters is pronounced with English rules — and vice versa on
   /en/. WCAG 3.1.2 (language of parts), one attribute, ~2000 nodes. */
export function T({ fr, en }: { fr: ReactNode; en: ReactNode }) {
  return (
    <>
      <span data-l="fr" lang="fr">
        {fr}
      </span>
      <span data-l="en" lang="en">
        {en}
      </span>
    </>
  )
}
