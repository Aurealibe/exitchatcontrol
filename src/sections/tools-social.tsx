import { T } from '../lib/i18n'
import { Box, Lvl, PartHead } from '../components/ui'
import { ToolCard, type Tool } from '../components/ToolCard'

/* PART 08 · Decentralised social + PART 09 · Financial sovereignty
   + AI blind spot + Everyday toolbox — ported verbatim from v1. */

const SOCIAL: Tool[] = [
  {
    id: 't-mastodon',
    name: 'Mastodon',
    slug: 'mastodon',
    tile: 'Ma',
    brand: '#6364ff',
    levels: ['b', 'i'],
    tags: [
      <T key="l" fr="🟢 Débutant" en="🟢 Beginner" />,
      <T key="r" fr="Remplace X / Twitter" en="Replaces X / Twitter" />,
      '🌍 · open-source',
    ],
    what: (
      <T
        fr="L'alternative à X/Twitter : un réseau social fait de milliers de serveurs indépendants qui communiquent entre eux (le « fédiverse »)."
        en={`The X/Twitter alternative: a social network made of thousands of independent servers that talk to each other (the "fediverse").`}
      />
    ),
    why: (
      <T
        fr="Pas de patron unique, pas d'algorithme qui décide à votre place, pas de bannissement arbitraire par une seule entreprise. Le fil est chronologique, sans publicité ni manipulation."
        en="No single owner, no algorithm deciding for you, no arbitrary ban by one company. The feed is chronological, with no ads or manipulation."
      />
    ),
    who: (
      <T
        fr="Tout le monde. Idéal pour les comptes d'information qui veulent une présence qu'aucune entreprise ne peut couper."
        en="Everyone. Ideal for information accounts that want a presence no company can cut off."
      />
    ),
    steps: [
      <T key="1" fr="Sur joinmastodon.org, choisissez un serveur (ou « instance ») qui vous correspond, puis créez un compte." en={`On joinmastodon.org, choose a server (or "instance") that suits you, then create an account.`} />,
      <T key="2" fr="Installez une application (l'officielle, ou Ivory, Tusky…) et suivez des comptes : vous voyez tout le fédiverse, quel que soit leur serveur." en="Install an app (the official one, or Ivory, Tusky…) and follow accounts: you see the whole fediverse, whatever their server." />,
    ],
    links: [{ label: 'joinmastodon.org →', href: 'https://joinmastodon.org' }],
  },
  {
    id: 't-nostr',
    name: 'Nostr',
    tile: 'No',
    brand: '#8e30eb',
    levels: ['i', 'a'],
    tags: [
      '🟡🔴',
      <T key="r" fr="Incensurable" en="Un-censorable" />,
      <T key="p" fr="🌍 · protocole ouvert" en="🌍 · open protocol" />,
    ],
    what: (
      <T
        fr="Pas une application mais un protocole : un réseau social où votre identité est une simple paire de clés, comme pour Bitcoin."
        en="Not an app but a protocol: a social network where your identity is a simple key pair, like Bitcoin."
      />
    ),
    why: (
      <T
        fr="Zéro e-mail, zéro mot de passe, aucun compte qu'on puisse supprimer. Vos messages voyagent sur des relais décentralisés et vous possédez vraiment votre audience : personne ne peut vous bannir durablement. Vous pouvez même recevoir des pourboires en Bitcoin (les « zaps ») et changer d'application quand vous voulez sans perdre vos abonnés."
        en={`No email, no password, no account anyone can delete. Your posts travel across decentralised relays and you truly own your audience: no one can ban you for good. You can even receive Bitcoin tips ("zaps") and switch apps anytime without losing your followers.`}
      />
    ),
    who: (
      <T
        fr="Comptes d'information et créateurs qui craignent la censure de plateforme et veulent une présence vraiment à eux."
        en="Information accounts and creators who fear platform censorship and want a presence truly their own."
      />
    ),
    steps: [
      <T key="1" fr="Installez un client : Damus (iPhone), Amethyst ou Primal (Android), ou une version web." en="Install a client: Damus (iPhone), Amethyst or Primal (Android), or a web version." />,
      <T key="2" fr={<>L'application génère votre paire de clés. <b>Sauvegardez votre clé privée (nsec)</b> comme une phrase de récupération Bitcoin : sur papier, jamais partagée.</>} en={<>The app generates your key pair. <b>Back up your private key (nsec)</b> like a Bitcoin seed phrase: on paper, never shared.</>} />,
      <T key="3" fr="Créez votre profil, suivez des gens, activez les zaps pour recevoir des sats." en="Create your profile, follow people, enable zaps to receive sats." />,
    ],
    links: [{ label: 'nostr.com →', href: 'https://nostr.com' }],
  },
  {
    id: 't-element',
    name: 'Matrix / Element',
    slug: 'element',
    tile: 'El',
    brand: '#0dbd8b',
    levels: ['i', 'a'],
    tags: [
      '🟡🔴',
      <T key="r" fr="Remplace Discord / Slack" en="Replaces Discord / Slack" />,
      <T key="f" fr="🌍 · fédéré · E2EE" en="🌍 · federated · E2EE" />,
    ],
    what: (
      <T
        fr="Une messagerie de communautés, dans l'esprit de Discord ou Slack, mais fédérée et chiffrable de bout en bout. Element est l'application, Matrix le réseau."
        en="Community chat, in the spirit of Discord or Slack, but federated and end-to-end encryptable. Element is the app, Matrix the network."
      />
    ),
    why: (
      <T
        fr="Vous pouvez héberger votre propre serveur (Synapse) et contrôler vos données. Parfait pour un collectif, une rédaction, une association qui veut son espace indépendant."
        en="You can host your own server (Synapse) and control your data. Perfect for a collective, a newsroom or an association that wants its own independent space."
      />
    ),
    who: (
      <T
        fr="Communautés et groupes. Voir la nuance sur les métadonnées ci-dessous."
        en="Communities and groups. See the metadata caveat below."
      />
    ),
    steps: [
      <T key="1" fr="Installez Element (element.io) et créez un compte sur un serveur public, ou sur le vôtre (section 10)." en="Install Element (element.io) and create an account on a public server, or on your own (section 10)." />,
      <T key="2" fr="Rejoignez ou créez des salons, et activez le chiffrement de bout en bout pour les conversations privées." en="Join or create rooms, and enable end-to-end encryption for private conversations." />,
    ],
    links: [{ label: 'element.io →', href: 'https://element.io' }],
  },
  {
    id: 't-fediverse',
    name: 'Pixelfed · PeerTube · Lemmy',
    slug: 'pixelfed',
    tile: 'Pi',
    brand: '#ea580c',
    levels: ['i'],
    tags: ['🟡', 'Insta · YouTube · Reddit', '🌍 · open-source'],
    what: (
      <T
        fr="Les cousins fédérés d'Instagram (Pixelfed), de YouTube (PeerTube) et de Reddit (Lemmy)."
        en="The federated cousins of Instagram (Pixelfed), YouTube (PeerTube) and Reddit (Lemmy)."
      />
    ),
    why: (
      <T
        fr="Même logique que Mastodon : pas de propriétaire unique, pas d'algorithme publicitaire, pas de traçage. Vous publiez photos, vidéos ou discussions sans nourrir une machine à profiler."
        en="Same logic as Mastodon: no single owner, no ad algorithm, no tracking. You post photos, videos or discussions without feeding a profiling machine."
      />
    ),
    who: (
      <T
        fr="Ceux qui veulent quitter Instagram, YouTube ou Reddit sans renoncer au format."
        en="Those who want to leave Instagram, YouTube or Reddit without giving up the format."
      />
    ),
    links: [
      { label: 'pixelfed.org →', href: 'https://pixelfed.org' },
      { label: 'peertube →', href: 'https://joinpeertube.org' },
      { label: 'lemmy →', href: 'https://join-lemmy.org' },
    ],
  },
]

const MONEY: Tool[] = [
  {
    id: 't-bitcoin',
    name: <T fr="Bitcoin (auto-conservation)" en="Bitcoin (self-custody)" />,
    slug: 'bitcoin',
    tile: '₿',
    brand: '#f7931a',
    levels: ['i', 'a'],
    tags: ['🟡🔴', <T key="r" fr="Résistant à la censure" en="Censorship-resistant" />],
    what: (
      <T
        fr="Une monnaie numérique que vous détenez vous-même, sans passer par une banque."
        en="A digital money you hold yourself, without going through a bank."
      />
    ),
    why: (
      <T
        fr={<>En <b>auto-conservation</b> (vos clés dans un portefeuille que vous seul contrôlez), personne ne peut geler ni bloquer vos fonds. Sa confidentialité n'est pas parfaite (le registre est public), mais il échappe à la censure bancaire, utile le jour où un paiement est refusé.</>}
        en={<>In <b>self-custody</b> (your keys in a wallet only you control), no one can freeze or block your funds. Its privacy isn't perfect (the ledger is public), but it escapes banking censorship, useful the day a payment is refused.</>}
      />
    ),
    who: (
      <T
        fr="Se prémunir contre le gel de compte ou la dé-bancarisation, et payer anonymement un service comme un VPN."
        en="Guarding against account freezes or de-banking, and paying anonymously for a service like a VPN."
      />
    ),
    steps: [
      <T key="1" fr="Procurez-vous des bitcoins (plateforme d'échange, ou entre particuliers)." en="Get some bitcoin (an exchange, or peer-to-peer)." />,
      <T key="2" fr={<>Transférez-les aussitôt vers un portefeuille que <b>vous</b> contrôlez : un portefeuille matériel (Trezor, ColdCard) ou une application libre. Ne les laissez pas sur la plateforme.</>} en={<>Move them right away to a wallet <b>you</b> control: a hardware wallet (Trezor, ColdCard) or an open-source app. Don't leave them on the exchange.</>} />,
      <T key="3" fr="Sauvegardez votre phrase de récupération sur papier, jamais en photo ni en ligne." en="Back up your recovery phrase on paper, never as a photo or online." />,
    ],
    links: [{ label: 'bitcoin.org →', href: 'https://bitcoin.org' }],
  },
  {
    id: 't-monero',
    name: 'Monero (XMR)',
    slug: 'monero',
    tile: 'ɱ',
    brand: '#ff6600',
    levels: ['a'],
    tags: [
      <T key="l" fr="🔴 Avancé" en="🔴 Advanced" />,
      <T key="r" fr="Confidentiel par défaut" en="Private by default" />,
    ],
    what: (
      <T
        fr="La cryptomonnaie de la vie privée : montants, expéditeur et destinataire sont masqués par défaut."
        en="The privacy cryptocurrency: amounts, sender and recipient are hidden by default."
      />
    ),
    why: (
      <T
        fr="C'est l'exact opposé de Bitcoin sur ce point : les transactions sont confidentielles par conception. C'est le meilleur moyen de payer un service sans laisser de trace reliable à vous."
        en="It's the exact opposite of Bitcoin here: transactions are private by design. It's the best way to pay for a service without leaving a trail back to you."
      />
    ),
    who: (
      <T
        fr="Ceux qui veulent le maximum de confidentialité financière. Note : Monero est déjà retiré de plusieurs plateformes en Europe, il faut souvent passer par un échange décentralisé."
        en="Those who want maximum financial privacy. Note: Monero is already delisted from several European exchanges, so you often need a decentralised swap."
      />
    ),
    steps: [
      <T key="1" fr="Installez un portefeuille (l'officiel sur getmonero.org, ou Cake Wallet sur mobile)." en="Install a wallet (the official one at getmonero.org, or Cake Wallet on mobile)." />,
      <T key="2" fr="Obtenez des XMR via un service d'échange décentralisé (par exemple un « swap » depuis une autre crypto)." en={`Get XMR through a decentralised exchange service (for example a "swap" from another crypto).`} />,
      <T key="3" fr="Sauvegardez votre phrase de récupération sur papier." en="Back up your recovery phrase on paper." />,
    ],
    links: [{ label: 'getmonero.org →', href: 'https://www.getmonero.org' }],
  },
]

const AI_TOOLS: Tool[] = [
  {
    id: 't-localai',
    name: 'Ollama · LM Studio · Jan · GPT4All',
    slug: 'ollama',
    tile: 'Ai',
    brand: '#111111',
    levels: ['i', 'a'],
    tags: [
      '🟡🔴',
      <T key="r" fr="Remplace ChatGPT" en="Replaces ChatGPT" />,
      <T key="p" fr="🌍 · 100% local" en="🌍 · 100% local" />,
    ],
    what: (
      <T
        fr="Des logiciels pour faire tourner un modèle d'intelligence artificielle directement sur votre ordinateur."
        en="Software to run an AI model directly on your own computer."
      />
    ),
    why: (
      <T
        fr={<>Vos questions ne quittent jamais l'appareil : aucun serveur, aucun compte, aucune télémétrie, et ça marche hors ligne. La qualité dépend de votre matériel, mais rien ne fuit. <b>Ollama</b> et <b>LM Studio</b> sont les plus simples ; <b>Jan</b> et <b>GPT4All</b> visent la vie privée maximale.</>}
        en={<>Your questions never leave the device: no server, no account, no telemetry, and it works offline. Quality depends on your hardware, but nothing leaks. <b>Ollama</b> and <b>LM Studio</b> are the easiest; <b>Jan</b> and <b>GPT4All</b> aim for maximum privacy.</>}
      />
    ),
    who: (
      <T
        fr="Tous ceux qui utilisent l'IA pour des sujets un tant soit peu personnels et ne veulent pas les confier à un serveur américain."
        en="Anyone who uses AI for even slightly personal topics and doesn't want to hand them to a US server."
      />
    ),
    steps: [
      <T key="1" fr={<>Pour débuter en douceur, installez <b>LM Studio</b> ou <b>Jan</b> (interface graphique, comme une application classique).</>} en={<>For a gentle start, install <b>LM Studio</b> or <b>Jan</b> (a graphical interface, like a normal app).</>} />,
      <T key="2" fr="Téléchargez un modèle proposé dans l'application (par exemple Llama ou Mistral), adapté à la puissance de votre machine." en="Download a model offered in the app (for example Llama or Mistral), matched to your machine's power." />,
      <T key="3" fr="Discutez : tout se passe en local. Ollama est la version en ligne de commande pour les plus techniques." en="Chat away: everything happens locally. Ollama is the command-line version for the more technical." />,
    ],
    links: [
      { label: 'lmstudio.ai →', href: 'https://lmstudio.ai' },
      { label: 'jan.ai →', href: 'https://jan.ai' },
      { label: 'ollama.com →', href: 'https://ollama.com' },
    ],
  },
  {
    id: 't-cloudai',
    name: 'Duck.ai · Lumo (Proton)',
    slug: 'duckduckgo',
    tile: '☁',
    brand: '#de5833',
    levels: ['b', 'i'],
    tags: ['🟢🟡', <T key="r" fr="Cloud orienté vie privée" en="Privacy-minded cloud" />],
    what: (
      <T
        fr="Des accès à l'IA dans le cloud, mais conçus pour la vie privée, quand une IA locale n'est pas possible."
        en="Cloud AI access, but built for privacy, when a local AI isn't possible."
      />
    ),
    why: (
      <T
        fr={<><b>Duck.ai</b> (DuckDuckGo) donne un accès anonymisé à plusieurs modèles. <b>Lumo</b> (Proton) chiffre les échanges et ne s'en sert pas pour entraîner. Bien mieux que ChatGPT grand public, mais cela reste un serveur distant.</>}
        en={<><b>Duck.ai</b> (DuckDuckGo) gives anonymised access to several models. <b>Lumo</b> (Proton) encrypts exchanges and doesn't train on them. Far better than consumer ChatGPT, but it's still a remote server.</>}
      />
    ),
    who: (
      <T
        fr="Ceux qui veulent la commodité du cloud sans nourrir les géants. Gardez-y les sujets non sensibles."
        en="Those who want cloud convenience without feeding the giants. Keep non-sensitive topics there."
      />
    ),
    links: [
      { label: 'duck.ai →', href: 'https://duck.ai' },
      { label: 'lumo →', href: 'https://lumo.proton.me' },
    ],
  },
]

const TOOLBOX: Tool[] = [
  {
    id: 't-maps',
    name: 'Organic Maps · OsmAnd',
    slug: 'openstreetmap',
    tile: 'Om',
    brand: '#0a7d33',
    levels: ['b'],
    tags: [
      <T key="l" fr="🟢 Débutant" en="🟢 Beginner" />,
      <T key="r" fr="Remplace Google Maps" en="Replaces Google Maps" />,
      '🌍 · open-source',
    ],
    what: (
      <T
        fr="Des applications de cartes et de navigation, fondées sur OpenStreetMap, qui fonctionnent hors ligne."
        en="Map and navigation apps, built on OpenStreetMap, that work offline."
      />
    ),
    why: (
      <T
        fr={<>Google Maps enregistre chacun de vos trajets et bâtit un historique de lieux d'une précision redoutable. <b>Organic Maps</b> ne trace rien et n'affiche aucune publicité ; <b>OsmAnd</b> vise les utilisateurs avancés (randonnée, courbes de niveau, navigation détaillée).</>}
        en={<>Google Maps logs every trip and builds a chillingly precise location history. <b>Organic Maps</b> tracks nothing and shows no ads; <b>OsmAnd</b> targets power users (hiking, contour lines, detailed navigation).</>}
      />
    ),
    who: (
      <T
        fr="Tout le monde. Le trafic en temps réel et les transports sont moins complets que chez Google, mais la navigation quotidienne est excellente."
        en="Everyone. Live traffic and transit are less complete than Google's, but everyday navigation is excellent."
      />
    ),
    steps: [
      <T key="1" fr="Installez depuis F-Droid, l'App Store ou Google Play." en="Install from F-Droid, the App Store or Google Play." />,
      <T key="2" fr="Téléchargez à l'avance les cartes des régions qui vous intéressent pour l'usage hors ligne." en="Download the maps of the regions you need in advance for offline use." />,
    ],
    links: [
      { label: 'organicmaps.app →', href: 'https://organicmaps.app' },
      { label: 'osmand.net →', href: 'https://osmand.net' },
    ],
  },
  {
    id: 't-notes',
    name: 'Standard Notes · Joplin · CryptPad',
    tile: 'No',
    brand: '#2e7d6b',
    levels: ['b', 'i'],
    tags: ['🟢🟡', <T key="r" fr="Remplace Docs / Notion" en="Replaces Docs / Notion" />, '🌍 · open-source'],
    what: (
      <T
        fr="Des notes et documents chiffrés de bout en bout, pour remplacer Google Docs, Notion ou Evernote."
        en="End-to-end encrypted notes and documents, to replace Google Docs, Notion or Evernote."
      />
    ),
    why: (
      <T
        fr={<><b>Standard Notes</b> (par Proton) chiffre vos notes par défaut. <b>Joplin</b> gère des carnets en Markdown avec chiffrement optionnel et la synchronisation de votre choix. <b>CryptPad</b> (français) offre l'équivalent de Google Docs en temps réel, entièrement chiffré.</>}
        en={<><b>Standard Notes</b> (by Proton) encrypts your notes by default. <b>Joplin</b> handles Markdown notebooks with optional encryption and the sync of your choice. <b>CryptPad</b> (French) offers a real-time, fully encrypted Google Docs equivalent.</>}
      />
    ),
    who: (
      <T fr="Tout le monde pour les notes ; CryptPad pour la collaboration à plusieurs." en="Everyone for notes; CryptPad for multi-person collaboration." />
    ),
    steps: [
      <T key="1" fr="Standard Notes / Joplin : créez un compte, installez l'application, et activez le chiffrement (par défaut sur Standard Notes, à activer dans Joplin)." en="Standard Notes / Joplin: create an account, install the app, and enable encryption (on by default in Standard Notes, to switch on in Joplin)." />,
      <T key="2" fr="CryptPad : utilisez cryptpad.fr ou une autre instance, aucun compte requis pour commencer." en="CryptPad: use cryptpad.fr or another instance, no account needed to start." />,
    ],
    links: [
      { label: 'standardnotes.com →', href: 'https://standardnotes.com' },
      { label: 'joplinapp.org →', href: 'https://joplinapp.org' },
      { label: 'cryptpad.org →', href: 'https://cryptpad.org' },
    ],
  },
  {
    id: 't-visio',
    name: 'Jitsi Meet · Element Call',
    slug: 'jitsi',
    tile: 'Vi',
    brand: '#1d6fb8',
    levels: ['b', 'i'],
    tags: ['🟢🟡', <T key="r" fr="Remplace Zoom / Meet" en="Replaces Zoom / Meet" />, '🌍 · open-source'],
    what: (
      <T
        fr="Des outils de visioconférence sans compte ni installation lourde, pour remplacer Zoom, Google Meet ou Teams."
        en="Video-conferencing tools with no account or heavy install, to replace Zoom, Google Meet or Teams."
      />
    ),
    why: (
      <T
        fr={<><b>Jitsi Meet</b> se lance dans le navigateur, sans compte, et peut être auto-hébergé (c'est aussi la base de Brave Talk). <b>Element Call</b> est chiffré de bout en bout et fédéré via Matrix. Pour un appel simple et totalement chiffré, les appels <b>Signal</b> font aussi le travail.</>}
        en={<><b>Jitsi Meet</b> runs in the browser, no account, and can be self-hosted (it's also the basis of Brave Talk). <b>Element Call</b> is end-to-end encrypted and federated via Matrix. For a simple, fully encrypted call, <b>Signal</b> calls also do the job.</>}
      />
    ),
    who: (
      <T
        fr="Tout le monde. Sur un serveur Jitsi public, les appels à plusieurs sont chiffrés en transport ; le chiffrement de bout en bout est en option."
        en="Everyone. On a public Jitsi server, multi-party calls are transport-encrypted; end-to-end encryption is optional."
      />
    ),
    steps: [
      <T key="1" fr="Jitsi : allez sur meet.jit.si, créez un nom de salon, partagez le lien. Rien à installer." en="Jitsi: go to meet.jit.si, create a room name, share the link. Nothing to install." />,
      <T key="2" fr="Element Call : depuis l'application Element (Matrix), lancez un appel dans un salon." en="Element Call: from the Element (Matrix) app, start a call in a room." />,
    ],
    links: [
      { label: 'jitsi.org →', href: 'https://jitsi.org' },
      { label: 'element.io/element-call →', href: 'https://element.io/element-call' },
    ],
  },
  {
    id: 't-photos',
    name: 'Ente · Immich',
    slug: 'immich',
    tile: 'Ph',
    brand: '#7b3fbf',
    levels: ['i', 'a'],
    tags: ['🟡🔴', <T key="r" fr="Remplace Google Photos" en="Replaces Google Photos" />, '🌍 · open-source'],
    what: (
      <T
        fr="Deux façons de garder vos photos sans les confier à Google ou Apple."
        en="Two ways to keep your photos without handing them to Google or Apple."
      />
    ),
    why: (
      <T
        fr={<><b>Ente</b> est un service géré, chiffré de bout en bout, avec reconnaissance et recherche faites sur l'appareil : simple et sûr. <b>Immich</b> est un clone de Google Photos que vous <b>hébergez vous-même</b> (recherche par visages et objets incluse), à réserver à ceux qui savent gérer un serveur.</>}
        en={<><b>Ente</b> is a managed, end-to-end encrypted service, with on-device recognition and search: simple and safe. <b>Immich</b> is a Google Photos clone you <b>host yourself</b> (face and object search included), for those comfortable running a server.</>}
      />
    ),
    who: (
      <T
        fr="Ente pour tous ; Immich pour les auto-hébergeurs. Attention : Immich n'est pas chiffré de bout en bout, sa sécurité dépend de votre serveur."
        en="Ente for everyone; Immich for self-hosters. Note: Immich is not end-to-end encrypted, its security depends on your server."
      />
    ),
    steps: [
      <T key="1" fr="Ente : installez l'application, créez un compte, activez la sauvegarde automatique de votre pellicule." en="Ente: install the app, create an account, turn on automatic backup of your camera roll." />,
      <T key="2" fr="Immich : déployez-le sur votre serveur (voir section 10) via Docker, puis connectez l'application mobile." en="Immich: deploy it on your server (see section 10) via Docker, then connect the mobile app." />,
    ],
    links: [
      { label: 'ente.io →', href: 'https://ente.io' },
      { label: 'immich.app →', href: 'https://immich.app' },
    ],
  },
  {
    id: 't-alias',
    name: 'SimpleLogin · addy.io',
    slug: 'simplelogin',
    tile: '@',
    brand: '#c0392b',
    levels: ['b', 'i'],
    tags: ['🟢🟡', <T key="r" fr="Alias e-mail" en="Email aliases" />, '🌍 · open-source'],
    what: (
      <T
        fr="Des alias e-mail jetables : une adresse unique par site, qui redirige vers votre vraie boîte sans jamais la révéler."
        en="Disposable email aliases: a unique address per site, forwarding to your real inbox without ever revealing it."
      />
    ),
    why: (
      <T
        fr={<>Vous ne donnez plus votre vraie adresse partout. Si un site est piraté ou vous spamme, vous coupez l'alias correspondant, et vous savez immédiatement qui a fait fuiter vos données. <b>SimpleLogin</b> est intégré à Proton ; <b>addy.io</b> propose des alias illimités dès l'offre gratuite.</>}
        en={<>You stop giving out your real address everywhere. If a site is breached or spams you, you cut that one alias, and you instantly know who leaked your data. <b>SimpleLogin</b> is integrated with Proton; <b>addy.io</b> offers unlimited aliases on the free tier.</>}
      />
    ),
    who: (
      <T
        fr="Tout le monde, et particulièrement les comptes pseudonymes qui veulent cloisonner leurs inscriptions."
        en="Everyone, and especially pseudonymous accounts that want to compartmentalise their signups."
      />
    ),
    steps: [
      <T key="1" fr="Créez un compte, installez l'extension de navigateur." en="Create an account, install the browser extension." />,
      <T key="2" fr="À chaque inscription, générez un nouvel alias au lieu de saisir votre vraie adresse." en="At each signup, generate a new alias instead of typing your real address." />,
    ],
    links: [
      { label: 'simplelogin.io →', href: 'https://simplelogin.io' },
      { label: 'addy.io →', href: 'https://addy.io' },
    ],
  },
  {
    id: 't-backups',
    name: <T fr="Sauvegardes chiffrées" en="Encrypted backups" />,
    slug: 'cryptomator',
    tile: 'Bk',
    brand: '#5a6570',
    levels: ['i', 'a'],
    tags: ['🟡🔴', 'Cryptomator · restic', '🌍 · open-source'],
    what: (
      <T
        fr={<>De quoi sauvegarder votre téléphone et votre ordinateur en chiffrant les données <b>avant</b> qu'elles ne partent dans un cloud.</>}
        en={<>A way to back up your phone and computer, encrypting the data <b>before</b> it leaves for any cloud.</>}
      />
    ),
    why: (
      <T
        fr={<>Les sauvegardes iCloud/Google sont souvent accessibles au fournisseur, donc à la justice. <b>Cryptomator</b> chiffre vos fichiers avant de les envoyer sur n'importe quel cloud ; <b>restic</b> fait des sauvegardes chiffrées automatiques ; <b>Proton Drive</b> est chiffré de bout en bout. Sur iPhone, activez la « Protection avancée des données » pour chiffrer vos sauvegardes iCloud.</>}
        en={<>iCloud/Google backups are often accessible to the provider, and thus to courts. <b>Cryptomator</b> encrypts your files before sending them to any cloud; <b>restic</b> makes automatic encrypted backups; <b>Proton Drive</b> is end-to-end encrypted. On iPhone, enable "Advanced Data Protection" to encrypt your iCloud backups.</>}
      />
    ),
    who: (
      <T
        fr="Tout le monde devrait chiffrer ses sauvegardes. Règle d'or : deux copies chiffrées, sur deux supports, en deux lieux."
        en="Everyone should encrypt their backups. Golden rule: two encrypted copies, on two media, in two places."
      />
    ),
    steps: [
      <T key="1" fr="iPhone : Réglages > votre nom > iCloud > Protection avancée des données : activez-la." en="iPhone: Settings > your name > iCloud > Advanced Data Protection: turn it on." />,
      <T key="2" fr="PC : installez Cryptomator, créez un coffre, placez-y vos fichiers avant de synchroniser vers le cloud." en="PC: install Cryptomator, create a vault, put your files in it before syncing to the cloud." />,
    ],
    links: [
      { label: 'cryptomator.org →', href: 'https://cryptomator.org' },
      { label: 'restic.net →', href: 'https://restic.net' },
    ],
  },
  {
    id: 't-databrokers',
    name: <T fr="Effacer ses données (RGPD)" en="Erase your data (GDPR)" />,
    tile: 'RG',
    brand: '#b8860b',
    levels: ['i'],
    tags: ['🟡', <T key="r" fr="Courtiers en données" en="Data brokers" />],
    what: (
      <T
        fr="Faire retirer vos informations personnelles des « courtiers en données » qui les collectent et les revendent."
        en={`Getting your personal information removed from the "data brokers" that collect and resell it.`}
      />
    ),
    why: (
      <T
        fr={<>En Europe, le RGPD (article 17) vous donne un <b>droit à l'effacement</b> : vous pouvez exiger, gratuitement, qu'une entreprise supprime vos données, en principe sous un mois. Des services comme <b>Incogni</b> automatisent ces demandes en masse, moyennant paiement.</>}
        en={<>In Europe, the GDPR (Article 17) gives you a <b>right to erasure</b>: you can demand, for free, that a company delete your data, in principle within a month. Services like <b>Incogni</b> automate these requests at scale, for a fee.</>}
      />
    ),
    who: (
      <T
        fr="Ceux qui veulent réduire leur exposition. Attention : les données réapparaissent avec le temps, et cela ne touche ni les registres publics ni les réseaux sociaux. Le faire soi-même est gratuit mais fastidieux."
        en="Those who want to reduce their exposure. Note: data reappears over time, and this doesn't touch public records or social media. Doing it yourself is free but tedious."
      />
    ),
    steps: [
      <T key="1" fr="Pour une demande manuelle : écrivez au courtier en invoquant l'article 17 du RGPD et demandez la suppression." en="For a manual request: write to the broker citing GDPR Article 17 and ask for deletion." />,
      <T key="2" fr="Pour automatiser : souscrivez à un service de retrait et laissez-le envoyer les demandes en votre nom." en="To automate: subscribe to a removal service and let it send the requests on your behalf." />,
    ],
    links: [
      { label: 'cnil.fr →', href: 'https://www.cnil.fr' },
      { label: 'incogni.com →', href: 'https://incogni.com' },
    ],
  },
]

export function Social() {
  return (
    <section id="social">
      <PartHead
        num={<>PARTIE 08 · <Lvl n={2} /></>}
        title={<T fr="Réseaux sociaux décentralisés" en="Decentralised social" />}
        intro={
          <T
            fr="Instagram, X et Facebook appartiennent à des entreprises qui vous profilent et peuvent vous censurer ou vous supprimer du jour au lendemain. Le « fédiverse » propose des réseaux appartenant à leurs utilisateurs."
            en={`Instagram, X and Facebook belong to companies that profile you and can censor or delete you overnight. The "fediverse" offers networks owned by their users.`}
          />
        }
      />
      {SOCIAL.map((t) => (
        <ToolCard key={t.id} {...t} />
      ))}
      <Box label={<T fr="Nuance métadonnées" en="Metadata caveat" />}>
        <p>
          <T
            fr={<>Matrix chiffre bien le <em>contenu</em>, mais en fédération, les serveurs participants voient l'appartenance aux salons et l'horodatage des messages. Pour un usage très sensible, préférez SimpleX/Session ou auto-hébergez votre serveur.</>}
            en={<>Matrix encrypts <em>content</em> well, but in federation, participating servers see room membership and message timing. For highly sensitive use, prefer SimpleX/Session or self-host your server.</>}
          />
        </p>
      </Box>
    </section>
  )
}

export function Money() {
  return (
    <section id="argent">
      <PartHead
        num={<>PARTIE 09 · <Lvl n={2} /></>}
        title={<T fr="Souveraineté financière" en="Financial sovereignty" />}
        intro={
          <T
            fr="L'argent aussi est surveillé et censurable. Des comptes de militants ont été gelés, des dons bloqués, chaque paiement par carte est tracé. La vie privée financière fait partie de la souveraineté."
            en="Money is surveilled and censorable too. Activists' accounts have been frozen, donations blocked, and every card payment is tracked. Financial privacy is part of sovereignty."
          />
        }
      />
      {MONEY.map((t) => (
        <ToolCard key={t.id} {...t} />
      ))}
      <Box tone="warn" label={<T fr="Légalité & prudence" en="Legality & caution" />}>
        <p>
          <T
            fr={<>La confidentialité financière est <strong>légale</strong>. Ne la confondez pas avec l'évasion fiscale : déclarez ce qui doit l'être. Les cryptomonnaies sont <strong>volatiles</strong> et les arnaques nombreuses ; ne placez jamais ce que vous ne pouvez pas perdre, et formez-vous avant d'agir.</>}
            en={<>Financial privacy is <strong>legal</strong>. Don't confuse it with tax evasion: declare what must be declared. Cryptocurrencies are <strong>volatile</strong> and scams are common; never risk what you can't lose, and learn before you act.</>}
          />
        </p>
      </Box>
    </section>
  )
}

export function Ai() {
  return (
    <section id="ia">
      <PartHead
        num={<>ANGLE MORT · <T fr="LA FOLIE DE L'IA" en="THE AI MADNESS" /> · <Lvl n={2} /></>}
        title={<T fr="L'IA conversationnelle" en="Conversational AI" />}
        intro={
          <T
            fr="Pendant qu'on se bat pour chiffrer nos messages, des centaines de millions de gens confient leurs pensées les plus intimes à ChatGPT, Gemini ou Copilot, sur des serveurs américains. C'est l'angle mort de toute cette histoire. Une pure folie."
            en="While we fight to encrypt our messages, hundreds of millions of people pour their most intimate thoughts into ChatGPT, Gemini or Copilot, on US servers. This is the blind spot of the whole story. Sheer madness."
          />
        }
      />
      <p>
        <T
          fr={<>Ce que vous tapez dans une IA cloud est une <strong>confession écrite, horodatée et stockée</strong>. Pire qu'un message : vous y déballez vos angoisses, votre santé, vos finances, vos secrets professionnels, souvent plus honnêtement qu'à un proche. Et contrairement à une messagerie chiffrée, tout est lisible en clair côté serveur.</>}
          en={<>What you type into a cloud AI is a <strong>written, timestamped, stored confession</strong>. Worse than a message: you spill your anxieties, your health, your finances, your work secrets, often more honestly than to a friend. And unlike an encrypted messenger, it's all readable in plaintext on the server.</>}
        />
      </p>
      <Box tone="warn" label={<T fr="Ce que disent les faits (2025-2026)" en="What the facts say (2025-2026)" />}>
        <p>
          <T
            fr={<>Les offres grand public <strong>s'entraînent sur vos données par défaut</strong>. En janvier 2026, un juge américain a ordonné à OpenAI de produire <strong>20 millions de conversations ChatGPT</strong> comme preuves : les utilisateurs concernés n'ont été ni prévenus ni consultés. Supprimer une conversation <strong>ne garantit pas</strong> son effacement. Et lors d'une fuite, 47 000 conversations exposées contenaient e-mails, numéros et détails intimes ré-identifiables.</>}
            en={<>Consumer tiers <strong>train on your data by default</strong>. In January 2026, a US judge ordered OpenAI to produce <strong>20 million ChatGPT conversations</strong> as evidence: the affected users were neither notified nor consulted. Deleting a chat <strong>does not guarantee</strong> it's gone. And in one leak, 47,000 exposed conversations held emails, phone numbers and re-identifiable intimate details.</>}
          />
        </p>
      </Box>
      <h4>
        <T fr="La parade : l'IA locale" en="The counter: local AI" />
      </h4>
      {AI_TOOLS.map((t) => (
        <ToolCard key={t.id} {...t} />
      ))}
      <Box tone="honest" label={<T fr="La règle simple" en="The simple rule" />}>
        <p>
          <T
            fr="Ne collez jamais dans une IA cloud ce que vous ne diriez pas à un inconnu qui enregistre : identité, santé, mots de passe, secrets professionnels, aveux. Pour tout le reste de sensible, une IA locale."
            en="Never paste into a cloud AI what you wouldn't tell a stranger who's recording: identity, health, passwords, work secrets, confessions. For anything sensitive, use a local AI."
          />
        </p>
      </Box>
      <Box tone="ok" label={<T fr="L'étape d'après : les agents" en="The next step: agents" />}>
        <p>
          <T
            fr={<>Le chatbot local règle la confidentialité de vos <em>questions</em> ; l'étape suivante, ce sont les <strong>agents</strong> — des IA qui agissent (fichiers, terminal, réseau). Là, le principe de ce guide s'applique au carré : ne pas faire confiance, <strong>vérifier avant d'exécuter</strong>. C'est exactement le modèle de <a href="https://nika.sh" target="_blank" rel="noopener"><strong>Nika</strong></a> (AGPL, un binaire) : l'agent propose un <em>plan</em> que vous relisez avant le run, ses permissions sont imposées par le moteur, chaque exécution est rejouable — et il tourne sur vos modèles locaux via Ollama. Les alternatives libres (goose, OpenHands, Aider) sont dans <a href="#dir-ia-locale-agentique">l'annuaire</a>.</>}
            en={<>A local chatbot fixes the privacy of your <em>questions</em>; the next step is <strong>agents</strong> — AI that acts (files, terminal, network). There, this guide's principle applies squared: don't trust, <strong>review before it runs</strong>. That is exactly <a href="https://nika.sh" target="_blank" rel="noopener"><strong>Nika</strong></a>'s model (AGPL, one binary): the agent proposes a <em>plan</em> you review before the run, its permissions are enforced by the engine, every execution is replayable — and it runs on your local models via Ollama. Free alternatives (goose, OpenHands, Aider) sit in <a href="#dir-ia-locale-agentique">the directory</a>.</>}
          />
        </p>
      </Box>
    </section>
  )
}

export function Toolbox() {
  return (
    <section id="boiteaoutils">
      <PartHead
        num={<><T fr="REMPLACER LE RESTE" en="REPLACE THE REST" /> · <Lvl n={2} /></>}
        title={<T fr="La boîte à outils du quotidien" en="The everyday toolbox" />}
        intro={
          <T
            fr="Google et Apple ne sont pas que des e-mails : cartes, notes, agenda, photos, visio, tout est relié à votre identité. Voici de quoi remplacer chaque brique, une par une, sans rien perdre en confort."
            en="Google and Apple are not just email: maps, notes, calendar, photos, video calls, everything is tied to your identity. Here's how to replace each brick, one at a time, without losing convenience."
          />
        }
      />
      {TOOLBOX.map((t) => (
        <ToolCard key={t.id} {...t} />
      ))}
    </section>
  )
}
