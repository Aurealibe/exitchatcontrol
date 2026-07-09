import type { ReactNode } from 'react'

/* Bilingual leaf: BOTH languages render into the DOM; CSS on
   :root[data-lang=…] shows one. This is deliberate (inherited from v1):
   the language toggle keeps working before hydration and with JS disabled
   after the initial paint, and switching is instant with zero re-render
   of a 10k-word page. Language/theme setters live in lib/prefs.ts. */
export function T({ fr, en }: { fr: ReactNode; en: ReactNode }) {
  return (
    <>
      <span data-l="fr">{fr}</span>
      <span data-l="en">{en}</span>
    </>
  )
}
