import { T } from '../lib/i18n'
import { Box, Lvl, PartHead, TableWrap } from '../components/ui'
import { ToolCard, type Tool } from '../components/ToolCard'

/* PART 04 · VPN + Censorship/ID + PART 05 · Leave Google + PART 06 · Storage
   + PART 07 · Passwords + 2FA — ported verbatim from v1. */

const VPNS: Tool[] = [
  {
    id: 't-mullvad',
    name: 'Mullvad VPN',
    slug: 'mullvad',
    tile: 'Mv',
    brand: '#2b4b8f',
    levels: ['b', 'i', 'a'],
    tags: [
      <T key="l" fr="🟢🟡🔴 Tous niveaux" en="🟢🟡🔴 All levels" />,
      <T key="r" fr="Sans compte · cash/Monero" en="No account · cash/Monero" />,
      '🇸🇪 · open-source',
    ],
    what: (
      <T
        fr="Un VPN qui masque votre adresse IP et chiffre votre trafic jusqu'à ses serveurs, sans jamais vous demander la moindre information personnelle."
        en="A VPN that masks your IP address and encrypts your traffic up to its servers, without ever asking for a single piece of personal information."
      />
    ),
    why: (
      <T
        fr="C'est l'étalon-or de la vie privée. Pas d'e-mail, pas de nom : à l'inscription, on vous attribue un simple numéro de compte. Politique « no-log » auditée, prix unique et honnête (5 € par mois, sans palier ni fausse promesse), et paiement possible en espèces ou en Monero. C'est précisément ce qui compte le jour où un État tente de couper l'accès aux VPN : un compte impossible à relier à votre identité, et un paiement que les banques ne peuvent pas bloquer."
        en={`It's the privacy gold standard. No email, no name: at signup you're given a plain account number. Audited no-log policy, a single honest price (€5 per month, no tiers, no false promises), and payment in cash or Monero. That's exactly what matters the day a state tries to cut off VPN access: an account that can't be tied to your identity, and a payment banks can't block.`}
      />
    ),
    who: (
      <T
        fr="Tout le monde, du citoyen qui veut contourner une vérification d'identité au profil à haut risque. C'est le VPN à recommander en priorité."
        en="Everyone, from the citizen bypassing an ID check to the high-risk profile. It's the VPN to recommend first."
      />
    ),
    steps: [
      <T key="1" fr={<>Allez sur <b>mullvad.net</b>. Si le site est bloqué dans votre pays, ouvrez-le via le navigateur Tor ou son adresse <b>.onion</b>. Cliquez sur « Générer un numéro de compte » : aucun e-mail ni nom n'est demandé. Notez ce numéro dans votre gestionnaire de mots de passe et ne le partagez jamais, c'est votre unique clé d'accès.</>} en={<>Go to <b>mullvad.net</b>. If the site is blocked in your country, open it through the Tor Browser or its <b>.onion</b> address. Click "Generate account number": no email or name is asked. Save this number in your password manager and never share it, it's your only access key.</>} />,
      <T key="2" fr="Choisissez la durée et le mode de paiement. Le prix est fixe. Trois voies : carte bancaire (le plus simple si elle n'est pas bloquée), espèces envoyées par courrier, ou cryptomonnaie." en="Choose the duration and payment method. The price is flat. Three routes: bank card (simplest if not blocked), cash sent by post, or cryptocurrency." />,
      <T key="3" fr={<><b>Paiement anonyme en crypto :</b> cliquez sur « Créer une adresse de paiement à usage unique ». Mullvad affiche une adresse (Bitcoin ou Monero) et un montant exact. Envoyez ce montant depuis votre portefeuille. Pour l'anonymat maximal, préférez <b>Monero</b> (confidentiel par défaut) ; Bitcoin est plus simple mais traçable. Voir la section 09 pour acheter de la crypto. Comptez environ 30 minutes de confirmation.</>} en={<><b>Anonymous crypto payment:</b> click "Create a one-time payment address." Mullvad shows an address (Bitcoin or Monero) and an exact amount. Send that amount from your wallet. For maximum anonymity, prefer <b>Monero</b> (private by default); Bitcoin is simpler but traceable. See section 09 to buy crypto. Allow about 30 minutes for confirmation.</>} />,
      <T key="4" fr={<>Téléchargez l'application sur <b>mullvad.net/download</b> (via Tor si le site est filtré) et installez-la. Sur mobile, passez par l'App Store, Google Play, ou l'APK officiel si l'application a été retirée de votre magasin.</>} en={<>Download the app from <b>mullvad.net/download</b> (via Tor if the site is filtered) and install it. On mobile, use the App Store, Google Play, or the official APK if the app was pulled from your store.</>} />,
      <T key="5" fr={<>Lancez l'application, entrez votre numéro de compte, puis connectez-vous à un serveur situé <b>hors de votre pays</b>, idéalement hors Union européenne (Suisse, États-Unis…). Activez le « kill switch » (qui coupe Internet si le VPN tombe) et le DNS de Mullvad.</>} en={<>Launch the app, enter your account number, then connect to a server <b>outside your country</b>, ideally outside the EU (Switzerland, US…). Enable the "kill switch" (which cuts the internet if the VPN drops) and Mullvad's DNS.</>} />,
    ],
    links: [{ label: 'mullvad.net →', href: 'https://mullvad.net' }],
  },
  {
    id: 't-protonvpn',
    name: 'Proton VPN',
    slug: 'protonvpn',
    tile: 'Pv',
    brand: '#6d4aff',
    levels: ['b'],
    tags: [
      <T key="l" fr="🟢 Débutant" en="🟢 Beginner" />,
      <T key="r" fr="Offre gratuite honnête" en="Honest free tier" />,
      '🇨🇭 · open-source',
    ],
    what: (
      <T
        fr="Le VPN de l'écosystème Proton, avec une véritable offre gratuite (rare et honnête)."
        en="The VPN from the Proton ecosystem, with a genuine free tier (rare and honest)."
      />
    ),
    why: (
      <T
        fr="Basé en Suisse, audité, open-source. Son offre gratuite est sans publicité, sans revente de données et sans limite de volume (le nombre de pays est simplement réduit). C'est la porte d'entrée idéale pour un débutant, surtout si vous utilisez déjà Proton Mail."
        en="Swiss-based, audited, open-source. Its free tier has no ads, no data resale and no data cap (only the number of countries is limited). It's the ideal on-ramp for a beginner, especially if you already use Proton Mail."
      />
    ),
    who: (
      <T
        fr="Débutants, et toute personne déjà dans l'écosystème Proton qui veut un seul compte pour tout."
        en="Beginners, and anyone already in the Proton ecosystem who wants a single account for everything."
      />
    ),
    steps: [
      <T key="1" fr={<>Rendez-vous sur <b>protonvpn.com</b> et connectez-vous avec votre compte Proton (ou créez-en un).</>} en={<>Go to <b>protonvpn.com</b> and sign in with your Proton account (or create one).</>} />,
      <T key="2" fr="Installez l'application (Windows, macOS, Linux, Android, iOS)." en="Install the app (Windows, macOS, Linux, Android, iOS)." />,
      <T key="3" fr="Utilisez « Quick Connect » ou choisissez un pays, puis activez le kill switch et NetShield (blocage des pubs et traqueurs)." en={`Use "Quick Connect" or pick a country, then enable the kill switch and NetShield (ad and tracker blocking).`} />,
    ],
    links: [{ label: 'protonvpn.com →', href: 'https://protonvpn.com' }],
  },
  {
    id: 't-ivpn',
    name: 'IVPN',
    tile: 'iv',
    brand: '#3b5bdb',
    levels: ['i', 'a'],
    tags: [
      <T key="l" fr="🟡🔴 Interm. / Avancé" en="🟡🔴 Interm. / Advanced" />,
      <T key="r" fr="Sans e-mail · no-log" en="No email · no-log" />,
      '🇬🇮 · open-source',
    ],
    what: (
      <T
        fr="Un petit fournisseur de VPN particulièrement rigoureux et transparent, sur le même modèle que Mullvad."
        en="A small, especially rigorous and transparent VPN provider, on the same model as Mullvad."
      />
    ),
    why: (
      <T
        fr="Politique no-log auditée, pas d'e-mail obligatoire, paiement en crypto ou en espèces. Il propose même des options anti-traçage (blocage des trackers au niveau réseau) et une inscription sans aucun identifiant."
        en="Audited no-log policy, no mandatory email, payment in crypto or cash. It even offers anti-tracking options (network-level tracker blocking) and signup with no identifier at all."
      />
    ),
    who: (
      <T
        fr="Une alternative solide à Mullvad, pour les profils pseudonymes et à haut risque qui veulent diversifier."
        en="A solid alternative to Mullvad, for pseudonymous and high-risk profiles who want to diversify."
      />
    ),
    steps: [
      <T key="1" fr={<>Sur <b>ivpn.net</b>, générez un compte (un identifiant est créé pour vous, sans e-mail).</>} en={<>At <b>ivpn.net</b>, generate an account (an ID is created for you, no email).</>} />,
      <T key="2" fr="Payez en cryptomonnaie ou en espèces, comme pour Mullvad." en="Pay in crypto or cash, as with Mullvad." />,
      <T key="3" fr="Installez l'application, connectez-vous hors UE, activez le kill switch et le protocole WireGuard." en="Install the app, connect outside the EU, enable the kill switch and the WireGuard protocol." />,
    ],
    links: [{ label: 'ivpn.net →', href: 'https://www.ivpn.net' }],
  },
]

const STORAGE: Tool[] = [
  {
    id: 't-protondrive',
    name: 'Proton Drive',
    slug: 'protondrive',
    tile: 'Pd',
    brand: '#6d4aff',
    levels: ['b', 'i'],
    tags: [
      <T key="l" fr="🟢 Débutant" en="🟢 Beginner" />,
      <T key="r" fr="Remplace Google Drive / iCloud" en="Replaces Google Drive / iCloud" />,
      '🇨🇭 · E2EE',
    ],
    what: (
      <T
        fr="Un cloud chiffré de bout en bout pour vos fichiers et vos photos, intégré à Proton."
        en="An end-to-end encrypted cloud for your files and photos, part of Proton."
      />
    ),
    why: (
      <T
        fr="Contrairement à Google Drive ou iCloud, Proton ne peut pas lire vos fichiers : ils sont chiffrés avant de quitter votre appareil. Juridiction suisse, même compte que Proton Mail."
        en="Unlike Google Drive or iCloud, Proton can't read your files: they're encrypted before leaving your device. Swiss jurisdiction, same account as Proton Mail."
      />
    ),
    who: (
      <T
        fr="Tout le monde, comme remplacement direct et simple du cloud de Google ou d'Apple."
        en="Everyone, as a simple, direct replacement for Google's or Apple's cloud."
      />
    ),
    steps: [
      <T key="1" fr="Activez Proton Drive dans votre compte Proton et installez l'application." en="Enable Proton Drive in your Proton account and install the app." />,
      <T key="2" fr="Activez la sauvegarde automatique de vos photos, puis désactivez celle de Google/Apple." en="Turn on automatic photo backup, then disable Google's/Apple's." />,
    ],
    links: [{ label: 'proton.me/drive →', href: 'https://proton.me/drive' }],
  },
  {
    id: 't-cryptomator',
    name: 'Cryptomator',
    slug: 'cryptomator',
    tile: 'Cy',
    brand: '#26a69a',
    levels: ['i', 'a'],
    tags: [
      <T key="l" fr="🟡 Intermédiaire" en="🟡 Intermediate" />,
      <T key="r" fr="Chiffre avant l'envoi" en="Encrypt before upload" />,
      '🇩🇪 · open-source',
    ],
    what: (
      <T
        fr={<>Un coffre qui chiffre vos fichiers <b>avant</b> de les envoyer sur n'importe quel cloud, même Google Drive ou Dropbox.</>}
        en={<>A vault that encrypts your files <b>before</b> uploading them to any cloud, even Google Drive or Dropbox.</>}
      />
    ),
    why: (
      <T
        fr="L'astuce parfaite si vous devez garder un cloud existant : vous conservez le service pratique, mais le fournisseur ne voit plus que du charabia chiffré. Vous gardez seul la clé."
        en="The perfect trick if you must keep an existing cloud: you keep the convenient service, but the provider only sees encrypted gibberish. You alone hold the key."
      />
    ),
    who: (
      <T
        fr="Ceux qui ne peuvent pas quitter un cloud grand public tout de suite, mais veulent protéger leurs fichiers dès maintenant."
        en="Those who can't leave a mainstream cloud yet, but want to protect their files right now."
      />
    ),
    steps: [
      <T key="1" fr="Installez Cryptomator (PC et mobile) depuis cryptomator.org." en="Install Cryptomator (desktop and mobile) from cryptomator.org." />,
      <T key="2" fr="Créez un « coffre » dans le dossier synchronisé de votre cloud, choisissez un mot de passe fort." en={`Create a "vault" in your cloud's synced folder, choose a strong password.`} />,
      <T key="3" fr="Placez vos fichiers dans le coffre : ils sont chiffrés puis synchronisés automatiquement." en="Put your files in the vault: they're encrypted then synced automatically." />,
    ],
    links: [{ label: 'cryptomator.org →', href: 'https://cryptomator.org' }],
  },
  {
    id: 't-nc-storage',
    name: 'Nextcloud',
    slug: 'nextcloud',
    tile: 'Nc',
    brand: '#0082c9',
    levels: ['a'],
    tags: [
      <T key="l" fr="🔴 Avancé" en="🔴 Advanced" />,
      <T key="r" fr="Votre propre cloud" en="Your own cloud" />,
      '🌍 · open-source',
    ],
    what: (
      <T
        fr="Votre propre nuage (fichiers, agenda, contacts, notes) hébergé sur votre serveur."
        en="Your own cloud (files, calendar, contacts, notes) hosted on your server."
      />
    ),
    why: (
      <T
        fr="Le degré ultime de contrôle : vos données ne quittent jamais votre matériel. Détaillé dans la section 10 (Auto-hébergement)."
        en="The ultimate degree of control: your data never leaves your hardware. Detailed in section 10 (Self-hosting)."
      />
    ),
    who: <T fr="Les auto-hébergeurs. Voir la fiche complète en section 10." en="Self-hosters. See the full card in section 10." />,
    links: [
      { label: <T fr="→ Section 10" en="→ Section 10" />, href: '#selfhost' },
      { label: 'nextcloud.com →', href: 'https://nextcloud.com' },
    ],
  },
]

const PASSWORDS: Tool[] = [
  {
    id: 't-bitwarden',
    name: 'Bitwarden',
    slug: 'bitwarden',
    tile: 'Bw',
    brand: '#175ddc',
    levels: ['b', 'i', 'a'],
    tags: [
      <T key="l" fr="🟢 Débutant" en="🟢 Beginner" />,
      <T key="r" fr="Le meilleur pour débuter" en="Best to start with" />,
      '🌍 · open-source',
    ],
    what: (
      <T
        fr="Un coffre-fort à mots de passe qui les mémorise, les génère et les remplit pour vous, sur tous vos appareils."
        en="A password vault that remembers, generates and fills your passwords for you, across all your devices."
      />
    ),
    why: (
      <T
        fr={<>Gratuit, audité, multiplateforme, et chiffré de bout en bout. Vous n'avez plus qu'un seul mot de passe fort à retenir. Il est même <b>auto-hébergeable</b> (via Vaultwarden) pour ne dépendre de personne.</>}
        en={<>Free, audited, cross-platform, and end-to-end encrypted. You only need to remember one strong password. It's even <b>self-hostable</b> (via Vaultwarden) so you depend on no one.</>}
      />
    ),
    who: (
      <T
        fr="Tout le monde. C'est le point de départ de toute la sécurité : un mot de passe unique et fort par service."
        en="Everyone. It's the foundation of all security: one strong, unique password per service."
      />
    ),
    steps: [
      <T key="1" fr={<>Créez un compte sur bitwarden.com et choisissez un mot de passe maître <b>long</b> (une phrase). Ne l'oubliez jamais : il n'est pas récupérable.</>} en={<>Create an account at bitwarden.com and choose a <b>long</b> master password (a phrase). Never forget it: it can't be recovered.</>} />,
      <T key="2" fr="Installez l'extension de navigateur et l'application mobile." en="Install the browser extension and the mobile app." />,
      <T key="3" fr="Au fil de vos connexions, laissez Bitwarden enregistrer puis remplacer vos anciens mots de passe par des mots de passe générés." en="As you log in, let Bitwarden save and then replace your old passwords with generated ones." />,
    ],
    links: [{ label: 'bitwarden.com →', href: 'https://bitwarden.com' }],
  },
  {
    id: 't-keepassxc',
    name: 'KeePassXC',
    slug: 'keepassxc',
    tile: 'Kp',
    brand: '#2c6b9e',
    levels: ['a'],
    tags: [
      <T key="l" fr="🔴 Avancé" en="🔴 Advanced" />,
      <T key="r" fr="100% local" en="100% local" />,
      '🌍 · open-source',
    ],
    what: (
      <T
        fr={<>Un coffre-fort <b>local</b> : un fichier chiffré que vous seul détenez, sans aucun cloud ni compte.</>}
        en={<>A <b>local</b> vault: an encrypted file only you hold, with no cloud and no account.</>}
      />
    ),
    why: (
      <T
        fr="Rien ne quitte votre appareil, sauf si vous décidez de synchroniser le fichier vous-même (par exemple via Cryptomator). C'est le choix des puristes qui ne veulent aucun intermédiaire."
        en="Nothing leaves your device, unless you choose to sync the file yourself (for example via Cryptomator). It's the purist's choice, with no middleman at all."
      />
    ),
    who: (
      <T
        fr="Les profils avancés qui veulent le contrôle total et zéro dépendance en ligne."
        en="Advanced profiles who want full control and zero online dependency."
      />
    ),
    steps: [
      <T key="1" fr="Installez KeePassXC (PC) et une application compatible sur mobile (KeePassDX sur Android, Strongbox sur iOS)." en="Install KeePassXC (desktop) and a compatible mobile app (KeePassDX on Android, Strongbox on iOS)." />,
      <T key="2" fr="Créez un fichier de base de données protégé par un mot de passe maître." en="Create a database file protected by a master password." />,
      <T key="3" fr="Pour l'avoir sur tous vos appareils, synchronisez ce fichier via un cloud chiffré." en="To have it on all devices, sync that file through an encrypted cloud." />,
    ],
    links: [{ label: 'keepassxc.org →', href: 'https://keepassxc.org' }],
  },
  {
    id: 't-protonpass',
    name: 'Proton Pass',
    tile: 'Pp',
    brand: '#6d4aff',
    levels: ['b', 'i'],
    tags: [
      <T key="l" fr="🟢 Débutant" en="🟢 Beginner" />,
      <T key="r" fr="Avec alias e-mail" en="With email aliases" />,
      '🇨🇭 · open-source',
    ],
    what: (
      <T
        fr="Le gestionnaire de mots de passe de l'écosystème Proton, avec des alias e-mail jetables intégrés."
        en="The password manager of the Proton ecosystem, with built-in disposable email aliases."
      />
    ),
    why: (
      <T
        fr="Idéal si vous êtes déjà chez Proton : un seul compte pour le mail, le cloud et les mots de passe. Ses alias e-mail vous évitent de donner votre vraie adresse partout."
        en="Ideal if you're already on Proton: one account for mail, cloud and passwords. Its email aliases save you from giving your real address everywhere."
      />
    ),
    who: <T fr="Ceux qui veulent tout regrouper chez Proton." en="Those who want everything in one place with Proton." />,
    links: [{ label: 'proton.me/pass →', href: 'https://proton.me/pass' }],
  },
]

const TWOFA: Tool[] = [
  {
    id: 't-yubikey',
    name: 'YubiKey · Nitrokey',
    slug: 'yubico',
    tile: 'Yk',
    brand: '#84bd00',
    levels: ['i', 'a'],
    tags: [
      <T key="l" fr="🟡🔴 Interm. / Avancé" en="🟡🔴 Interm. / Advanced" />,
      <T key="r" fr="Clé matérielle FIDO2" en="FIDO2 hardware key" />,
    ],
    what: (
      <T
        fr="Une petite clé physique (format USB, souvent avec NFC) qui prouve votre identité d'un simple contact du doigt."
        en="A small physical key (USB, often with NFC) that proves your identity with a single touch."
      />
    ),
    why: (
      <T
        fr={<>C'est la 2FA la plus solide : elle résiste à l'hameçonnage, car la clé vérifie l'adresse réelle du site avant de répondre. <b>Nitrokey</b> est l'alternative à matériel et micrologiciel entièrement ouverts. Un faux site ne peut pas vous piéger.</>}
        en={<>It's the strongest 2FA: it resists phishing, because the key checks the site's real address before responding. <b>Nitrokey</b> is the fully open-hardware, open-firmware alternative. A fake site can't trick you.</>}
      />
    ),
    who: (
      <T
        fr={<>Ceux qui veulent le maximum de sécurité sur leurs comptes clés. Achetez-en <b>deux</b> (une principale, une de secours).</>}
        en={<>Those who want maximum security on key accounts. Buy <b>two</b> (one main, one backup).</>}
      />
    ),
    steps: [
      <T key="1" fr="Procurez-vous deux clés sur yubico.com ou nitrokey.com." en="Get two keys from yubico.com or nitrokey.com." />,
      <T key="2" fr="Dans les réglages de sécurité de chaque compte (e-mail, gestionnaire de mots de passe…), ajoutez une « clé de sécurité » ou « passkey ». Enregistrez vos deux clés." en={`In each account's security settings (email, password manager…), add a "security key" or "passkey." Enrol both keys.`} />,
      <T key="3" fr="Gardez la clé de secours dans un lieu sûr, séparé." en="Keep the backup key in a safe, separate place." />,
    ],
    links: [
      { label: 'yubico.com →', href: 'https://www.yubico.com' },
      { label: 'nitrokey.com →', href: 'https://www.nitrokey.com' },
    ],
  },
  {
    id: 't-aegis',
    name: 'Aegis · Ente Auth',
    tile: 'Ae',
    brand: '#2c5c9c',
    levels: ['b', 'i'],
    tags: [
      <T key="l" fr="🟢 Débutant" en="🟢 Beginner" />,
      <T key="r" fr="Codes TOTP" en="TOTP codes" />,
      '🌍 · open-source',
    ],
    what: (
      <T
        fr="Des applications qui génèrent les codes à six chiffres qui changent toutes les 30 secondes, en remplacement de Google Authenticator."
        en="Apps that generate the six-digit codes changing every 30 seconds, replacing Google Authenticator."
      />
    ),
    why: (
      <T
        fr={<><b>Aegis</b> (Android) garde vos codes dans un coffre chiffré local, sans cloud. <b>Ente Auth</b> ajoute une synchronisation chiffrée de bout en bout entre appareils, et a été audité. Bien plus sûrs que le SMS, et gratuits.</>}
        en={<><b>Aegis</b> (Android) keeps your codes in a local encrypted vault, no cloud. <b>Ente Auth</b> adds end-to-end encrypted sync across devices, and has been audited. Far safer than SMS, and free.</>}
      />
    ),
    who: (
      <T
        fr="Tout le monde : c'est le niveau de 2FA à adopter par défaut, avant les clés matérielles."
        en="Everyone: it's the default 2FA level to adopt, ahead of hardware keys."
      />
    ),
    steps: [
      <T key="1" fr="Installez Aegis (F-Droid) ou Ente Auth (toutes plateformes)." en="Install Aegis (F-Droid) or Ente Auth (all platforms)." />,
      <T key="2" fr="Sur chaque compte, activez la 2FA « application d'authentification » et scannez le QR code affiché." en={`On each account, enable "authenticator app" 2FA and scan the QR code shown.`} />,
      <T key="3" fr={<>Notez les <b>codes de secours</b> sur papier et faites une sauvegarde chiffrée de votre coffre.</>} en={<>Write down the <b>backup codes</b> on paper and make an encrypted backup of your vault.</>} />,
    ],
    links: [
      { label: 'getaegis.app →', href: 'https://getaegis.app' },
      { label: 'ente.io/auth →', href: 'https://ente.io/auth' },
    ],
  },
]

export function Vpn() {
  return (
    <section id="vpn">
      <PartHead
        num={<>PARTIE 04 · <Lvl n={1} /></>}
        title={<T fr="VPN : la vérité" en="VPN: the truth" />}
        intro={
          <T
            fr="Un VPN est utile, mais vendu avec beaucoup de mensonges. Voici ce qu'il protège vraiment."
            en="A VPN is useful, but sold with a lot of lies. Here's what it actually protects."
          />
        }
      />
      <Box tone="warn" label={<T fr="Ce qu'un VPN ne fait PAS" en="What a VPN does NOT do" />}>
        <p>
          <T
            fr={<>Un VPN <strong>ne vous protège pas du scan côté client</strong> de Chat Control : celui-ci lit vos messages sur votre appareil, avant le chiffrement et donc avant le VPN. Ce n'est pas non plus une cape d'invisibilité : votre système et vos applications en voient plus que votre fournisseur de VPN.</>}
            en={<>A VPN <strong>does not protect you from Chat Control's client-side scanning</strong>: that reads your messages on your device, before encryption and therefore before the VPN. It's also not an invisibility cloak: your OS and apps see more than your VPN provider does.</>}
          />
        </p>
      </Box>
      <Box tone="ok" label={<T fr="Ce qu'un VPN fait bien" en="What a VPN does well" />}>
        <p>
          <T
            fr={<>Il cache votre activité à votre <strong>fournisseur d'accès</strong> et masque votre <strong>adresse IP</strong> (donc votre localisation) aux sites visités. Utile contre la surveillance réseau, la géolocalisation et la censure. Une brique du puzzle, pas la solution.</>}
            en={<>It hides your activity from your <strong>ISP</strong> and masks your <strong>IP address</strong> (and thus location) from the sites you visit. Useful against network surveillance, geolocation and censorship. One piece of the puzzle, not the solution.</>}
          />
        </p>
      </Box>
      {VPNS.map((t) => (
        <ToolCard key={t.id} {...t} />
      ))}
      <Box label={<T fr="Comparer avant de choisir" en="Compare before you pick" />}>
        <p>
          <T
            fr={<>Le marché du VPN déborde de fausses promesses — comparez toujours juridiction, audits et politique no-log avant de payer. En français, <a href="https://vpn-gratuit.fr/" target="_blank" rel="noopener">vpn-gratuit.fr</a> compare les offres gratuites sérieuses (et leurs limites) : utile pour débuter sans carte bancaire avant de passer à un Mullvad. Rappel : un VPN gratuit qui vit de la publicité vend vos données — préférez les offres gratuites d'acteurs audités (Proton) ou payez en cash/Monero.</>}
            en={<>The VPN market overflows with false promises — always compare jurisdiction, audits and no-log policy before paying. In French, <a href="https://vpn-gratuit.fr/" target="_blank" rel="noopener">vpn-gratuit.fr</a> compares the serious free tiers (and their limits): useful to start without a bank card before moving to a Mullvad. Reminder: a free VPN living off ads sells your data — prefer free tiers from audited providers (Proton) or pay cash/Monero.</>}
          />
        </p>
      </Box>
    </section>
  )
}

export function Censorship() {
  return (
    <section id="censure">
      <PartHead
        num={<>CENSURE · <T fr="IDENTITÉ NUMÉRIQUE" en="DIGITAL IDENTITY" /> · <Lvl n={2} /></>}
        title={<T fr="Censure & vérification d'identité" en="Censorship & identity checks" />}
        intro={
          <T
            fr="Le même prétexte (« protéger les mineurs ») sert à imposer la vérification d'identité pour accéder à Internet. C'est la fin programmée de l'anonymat en ligne, donc une forme de censure. Voici l'état des lieux, puis comment y échapper légalement."
            en={`The same pretext ("protect minors") is used to force identity checks to access the internet. It's the planned end of online anonymity, and therefore a form of censorship. Here's the state of play, then how to escape it lawfully.`}
          />
        }
      />
      <h4><T fr="Où en est-on (2025-2026)" en="Where we stand (2025-2026)" /></h4>
      <ul>
        <li>
          <T
            fr={<><strong>France.</strong> La loi SREN (mai 2024) confie à l'Arcom la vérification d'âge ; depuis avril 2025, les sites concernés doivent la mettre en place. Un décret imposant la vérification d'âge a été validé par le Conseil d'État le 15 juillet 2025, et une proposition interdisant les réseaux sociaux aux moins de 15 ans a été votée à l'Assemblée le 26 janvier 2026, ce qui suppose de vérifier l'âge, donc l'identité, de tout le monde.</>}
            en={<><strong>France.</strong> The SREN law (May 2024) tasks regulator Arcom with age verification; since April 2025, covered sites must implement it. A decree imposing age checks was upheld by the Conseil d'État on 15 July 2025, and a bill banning under-15s from social media passed the Assemblée on 26 January 2026, which means verifying the age, and thus the identity, of everyone.</>}
          />
        </li>
        <li>
          <T
            fr={<><strong>Royaume-Uni.</strong> Depuis le 25 juillet 2025, l'Online Safety Act impose une vérification d'âge « hautement efficace » (pièce d'identité, carte bancaire, estimation faciale). Résultat immédiat : les inscriptions VPN ont bondi de plus de 1 400 % en quelques heures. La Chambre des Lords a même débattu, début 2026, d'un âge minimum pour utiliser un VPN.</>}
            en={<><strong>UK.</strong> Since 25 July 2025, the Online Safety Act requires "highly effective" age verification (ID, credit card, facial estimation). The immediate result: VPN signups jumped over 1,400% within hours. The House of Lords even debated, in early 2026, an age limit on VPN use itself.</>}
          />
        </li>
        <li>
          <T
            fr={<><strong>Union européenne.</strong> La Commission a présenté une application de vérification d'âge (avril 2025), pilotée dans cinq pays, pensée pour s'articuler avec le portefeuille d'identité numérique européen (EUDI Wallet, eIDAS 2) que chaque État doit proposer d'ici fin 2026. L'EFF et EDRi alertent : la preuve « à divulgation nulle » n'est qu'optionnelle, et cela construit une infrastructure d'identité en ligne bien au-delà de la protection de l'enfance.</>}
            en={<><strong>EU.</strong> The Commission unveiled an age-verification app (April 2025), piloted in five countries, designed to plug into the European digital identity wallet (EUDI Wallet, eIDAS 2) that every state must offer by end of 2026. EFF and EDRi warn: the "zero-knowledge" proof is only optional, and this builds an online-ID infrastructure far beyond child protection.</>}
          />
        </li>
      </ul>
      <h4><T fr="Y échapper légalement" en="Escaping it lawfully" /></h4>
      <p>
        <T
          fr="La parade tient en une idée : prendre une adresse IP dans un pays qui n'impose pas ces contrôles, et se procurer les outils de façon anonyme, même si un jour ils sont bloqués."
          en="The counter comes down to one idea: take an IP address in a country that doesn't impose these checks, and obtain the tools anonymously, even if they get blocked one day."
        />
      </p>
      <ul>
        <li>
          <T
            fr={<><strong>Un VPN hors juridiction.</strong> Connectez-vous à un serveur situé hors du pays qui filtre (idéalement hors UE et hors « 14 Eyes »), avec une politique no-log auditée. C'est ce qui vous rend l'accès aux réseaux qui exigent une pièce d'identité.</>}
            en={<><strong>An offshore VPN.</strong> Connect to a server outside the filtering country (ideally outside the EU and the "14 Eyes"), with an audited no-log policy. This restores access to networks demanding an ID.</>}
          />
        </li>
        <li>
          <T
            fr={<><strong>Un paiement anonyme.</strong> Payez le VPN en cryptomonnaie ou en espèces (Mullvad, IVPN, Proton l'acceptent). Crucial : si un jour les VPN sont « interdits », les processeurs de paiement pourraient refuser les cartes ; le cash et la crypto resteront les seuls moyens.</>}
            en={<><strong>Anonymous payment.</strong> Pay for the VPN in crypto or cash (Mullvad, IVPN, Proton accept it). Crucial: if VPNs ever get "banned," payment processors could refuse cards; cash and crypto would be the only options left.</>}
          />
        </li>
        <li>
          <T
            fr={<><strong>Tor pour récupérer un VPN bloqué.</strong> Si le site du fournisseur devient inaccessible depuis votre pays, passez par le navigateur Tor (ou une adresse .onion) pour télécharger le client. Une fois installé, le VPN est bien plus rapide pour l'usage quotidien.</>}
            en={<><strong>Tor to fetch a blocked VPN.</strong> If the provider's site becomes unreachable from your country, use the Tor Browser (or a .onion address) to download the client. Once installed, the VPN is far faster for daily use.</>}
          />
        </li>
        <li>
          <T
            fr={<><strong>Changer le pays du compte.</strong> Un compte Apple/Google réglé sur un autre pays fait réapparaître les applications retirées de votre magasin local.</>}
            en={<><strong>Switch your store country.</strong> An Apple/Google account set to another country brings back apps pulled from your local store.</>}
          />
        </li>
      </ul>
      <Box tone="warn" label={<T fr="Le droit bouge, vérifiez" en="The law is shifting, check" />}>
        <p>
          <T
            fr="Contourner une restriction géographique est légal dans la plupart des pays européens, mais le terrain change vite : l'Utah (États-Unis) a criminalisé le contournement par VPN, et les Lords britanniques envisagent d'encadrer l'usage des VPN. Vérifiez la loi de votre pays avant de vous reposer sur une méthode. Ce guide vise la protection de la vie privée, pas la dissimulation d'un délit."
            en="Bypassing a geo-restriction is legal in most European countries, but the ground shifts fast: Utah (US) has criminalised VPN circumvention, and the UK Lords are eyeing VPN limits. Check your country's law before relying on any method. This guide is about protecting privacy, not hiding a crime."
          />
        </p>
      </Box>
    </section>
  )
}

export function LeaveGoogle() {
  return (
    <section id="proton">
      <PartHead
        num={<>PARTIE 05 · <T fr="REPRENDRE LE CONTRÔLE" en="TAKE BACK CONTROL" /> · <Lvl n={2} /></>}
        title={<T fr="Quitter Google" en="Leave Google" />}
        intro={
          <T
            fr="Google, c'est un compte unique qui connaît vos e-mails, votre agenda, vos fichiers, vos déplacements et vos recherches. On remplace la suite entière."
            en="Google is a single account that knows your email, calendar, files, movements and searches. Replace the whole suite."
          />
        }
      />
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Google</th>
              <th>Proton</th>
              <th><T fr="Autres" en="Others" /></th>
            </tr>
          </thead>
          <tbody>
            <tr><td><span className="old">Gmail</span></td><td><span className="new">Proton Mail</span></td><td>Tuta, mailbox.org</td></tr>
            <tr><td><span className="old">Google Drive</span></td><td><span className="new">Proton Drive</span></td><td>Nextcloud, Cryptomator</td></tr>
            <tr><td><span className="old">Google Calendar</span></td><td><span className="new">Proton Calendar</span></td><td>Tuta Calendar</td></tr>
            <tr><td><span className="old">Google Password</span></td><td><span className="new">Proton Pass</span></td><td>Bitwarden, KeePassXC</td></tr>
            <tr><td><span className="old">Google One VPN</span></td><td><span className="new">Proton VPN</span></td><td>Mullvad, IVPN</td></tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        <T
          fr={<>L'intérêt de <strong>Proton</strong> (Suisse, à but non lucratif via une fondation, open-source) : un seul compte remplace tout Google, avec chiffrement de bout en bout et une juridiction hors « Five Eyes ». On peut migrer progressivement, service par service. Pour qui préfère éviter de recentraliser chez un seul acteur, chaque ligne du tableau a une alternative indépendante.</>}
          en={<>The appeal of <strong>Proton</strong> (Swiss, non-profit foundation, open-source): one account replaces all of Google, with end-to-end encryption and a jurisdiction outside "Five Eyes". You can migrate gradually, service by service. If you'd rather not recentralise on one provider, every row has an independent alternative.</>}
        />
      </p>
    </section>
  )
}

export function Storage() {
  return (
    <section id="stockage">
      <PartHead num={<>PARTIE 06 · <Lvl n={2} /></>} title={<T fr="Stockage chiffré" en="Encrypted storage" />} />
      {STORAGE.map((t) => (
        <ToolCard key={t.id} {...t} />
      ))}
    </section>
  )
}

export function Passwords() {
  return (
    <section id="motsdepasse">
      <PartHead
        num={<>PARTIE 07 · <Lvl n={2} /></>}
        title={<T fr="Gestionnaire de mots de passe" en="Password manager" />}
        intro={
          <T
            fr="Un mot de passe unique et fort par service : c'est la base de toute la sécurité qui suit. Arrêtez le carnet, arrêtez le même mot de passe partout."
            en="One strong, unique password per service: the foundation of everything that follows. Drop the notebook, drop the reused password."
          />
        }
      />
      {PASSWORDS.map((t) => (
        <ToolCard key={t.id} {...t} />
      ))}
    </section>
  )
}

export function TwoFa() {
  return (
    <section id="deuxfa">
      <PartHead
        num={<>SÉCURITÉ · 2FA · <Lvl n={2} /></>}
        title={<T fr="Double authentification & clés matérielles" en="Two-factor auth & hardware keys" />}
        intro={
          <T
            fr="Un mot de passe, même fort, peut fuiter. La double authentification (2FA) ajoute une seconde preuve à la connexion : même si votre mot de passe est volé, le compte reste fermé. C'est indispensable sur vos comptes sensibles (e-mail, gestionnaire de mots de passe, réseaux)."
            en="A password, even a strong one, can leak. Two-factor authentication (2FA) adds a second proof at login: even if your password is stolen, the account stays locked. It's essential on your sensitive accounts (email, password manager, social)."
          />
        }
      />
      <Box tone="warn" label={<T fr="Évitez le 2FA par SMS" en="Avoid SMS 2FA" />}>
        <p>
          <T
            fr="Le code reçu par SMS est le maillon faible : il est vulnérable au « SIM-swap » (un attaquant fait transférer votre numéro) et à l'interception via le réseau téléphonique (SS7). Des études estiment que la majorité des tentatives de SIM-swap réussissent. Utilisez le SMS seulement en dernier recours, jamais comme protection principale."
            en={`A code sent by SMS is the weak link: it's vulnerable to "SIM-swap" (an attacker gets your number transferred) and to interception over the phone network (SS7). Studies estimate most SIM-swap attempts succeed. Use SMS only as a last resort, never as your main protection.`}
          />
        </p>
      </Box>
      {TWOFA.map((t) => (
        <ToolCard key={t.id} {...t} />
      ))}
    </section>
  )
}
