/* The survival-kit showcase — the apps, FIRST, as products.
   SHELF = the ten heroes (one per battlefront), each deep-linking to its full
   card down the page. MARQUEE = the mass of the arsenal, every embedded brand
   icon (build-time simple-icons, zero CDN). Tested in tests/content.test.ts. */

export type ShelfEntry = {
  slug?: string
  tile: string
  brand: string
  name: string
  /** internal anchor of the full card (e2e anchor-integrity guards it) */
  anchor: string
  fr: string
  en: string
}

export const SHELF: ShelfEntry[] = [
  { slug: 'signal', tile: 'S', brand: '#3a76f0', name: 'Signal', anchor: '#t-signal', fr: 'Vos messages, chiffrés par défaut', en: 'Your messages, encrypted by default' },
  { slug: 'protonmail', tile: 'Pm', brand: '#6d4aff', name: 'Proton Mail', anchor: '#t-protonmail', fr: 'Quitter Gmail en un week-end', en: 'Leave Gmail in a weekend' },
  { slug: 'mullvad', tile: 'Mv', brand: '#2b4b8f', name: 'Mullvad', anchor: '#t-mullvad', fr: 'Le VPN sans compte, payable en cash', en: 'The no-account VPN, cash accepted' },
  { slug: 'bitwarden', tile: 'Bw', brand: '#175ddc', name: 'Bitwarden', anchor: '#t-bitwarden', fr: 'Un mot de passe fort par service', en: 'One strong password per service' },
  { slug: 'torbrowser', tile: 'Tor', brand: '#7d4698', name: 'Tor Browser', anchor: '#t-tor', fr: 'Séparer qui vous êtes de ce que vous faites', en: 'Split who you are from what you do' },
  { slug: 'grapheneos', tile: 'Gr', brand: '#1f8a70', name: 'GrapheneOS', anchor: '#t-grapheneos', fr: 'Reprendre le téléphone lui-même', en: 'Take back the phone itself' },
  { slug: 'linux', tile: '🐧', brand: '#2b2b2b', name: 'Linux', anchor: '#t-linux', fr: 'Un ordinateur qui ne rapporte rien sur vous', en: 'A computer that reports on no one' },
  { slug: 'ollama', tile: 'Ai', brand: '#111111', name: 'Ollama', anchor: '#t-localai', fr: "L'IA qui ne quitte pas votre machine", en: 'AI that never leaves your machine' },
  { tile: 'N', brand: '#101828', name: 'Nika', anchor: '#dir-ia-locale-agentique', fr: 'Des agents IA qui montrent leur plan avant d’agir', en: 'AI agents that show their plan before acting' },
  { slug: 'mastodon', tile: 'Ma', brand: '#6364ff', name: 'Mastodon', anchor: '#t-mastodon', fr: 'Un réseau social sans propriétaire', en: 'A social network nobody owns' },
]

/** the arsenal strip — every slug here must exist in BRAND_ICONS */
export const MARQUEE: { slug: string; brand: string }[] = [
  { slug: 'signal', brand: '#3a76f0' },
  { slug: 'protonmail', brand: '#6d4aff' },
  { slug: 'mullvad', brand: '#2b4b8f' },
  { slug: 'bitwarden', brand: '#175ddc' },
  { slug: 'torbrowser', brand: '#7d4698' },
  { slug: 'grapheneos', brand: '#1f8a70' },
  { slug: 'linux', brand: '#2b2b2b' },
  { slug: 'ollama', brand: '#111111' },
  { slug: 'mastodon', brand: '#6364ff' },
  { slug: 'session', brand: '#178a5a' },
  { slug: 'element', brand: '#0dbd8b' },
  { slug: 'firefoxbrowser', brand: '#e66000' },
  { slug: 'brave', brand: '#fb542b' },
  { slug: 'ublockorigin', brand: '#7a0d0d' },
  { slug: 'duckduckgo', brand: '#de5833' },
  { slug: 'quad9', brand: '#1a5fb4' },
  { slug: 'pihole', brand: '#96060c' },
  { slug: 'protonvpn', brand: '#6d4aff' },
  { slug: 'tailscale', brand: '#242424' },
  { slug: 'protondrive', brand: '#6d4aff' },
  { slug: 'cryptomator', brand: '#26a69a' },
  { slug: 'nextcloud', brand: '#0082c9' },
  { slug: 'keepassxc', brand: '#2c6b9e' },
  { slug: 'immich', brand: '#7b3fbf' },
  { slug: 'openstreetmap', brand: '#0a7d33' },
  { slug: 'jitsi', brand: '#1d6fb8' },
  { slug: 'simplelogin', brand: '#c0392b' },
  { slug: 'pixelfed', brand: '#ea580c' },
  { slug: 'matrix', brand: '#0dbd8b' },
  { slug: 'bitcoin', brand: '#f7931a' },
  { slug: 'monero', brand: '#ff6600' },
  { slug: 'tails', brand: '#56347c' },
  { slug: 'qubesos', brand: '#3874d8' },
]
