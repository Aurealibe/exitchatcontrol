/* WCAG-contrast ink picker for brand tiles — data helper shared by
   ToolCard and Showcase (lives outside component files for fast-refresh). */
/* Tile/icon ink picked by WCAG contrast against the brand color — white on
   light brands (Bitchat orange, mailbox blue…) fails 4.5:1, and axe checks
   contrast even inside aria-hidden. Computed once per card at render. */
export function inkFor(brand: string): string {
  const hex = brand.replace('#', '')
  const chan = (i: number) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }
  const L = 0.2126 * chan(0) + 0.7152 * chan(2) + 0.0722 * chan(4)
  const contrast = (l1: number, l2: number) => (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
  const white = contrast(1, L)
  const dark = contrast(0.011, L) // #14161a
  return white >= dark ? '#ffffff' : '#14161a'
}
