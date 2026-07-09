import { T } from '../lib/i18n'
import { PartHead } from '../components/ui'

/* ═══ NEW SECTION · Allied initiatives + the chroniclers ════════════════════
   Two grids: (1) campaigns fighting Chat Control & friends right now,
   (2) projects that CHRONICLE surveillance — the receipts-keepers this
   site's precedents section stands on. Curated from the July 2026 research
   sweep (see docs/RESEARCH.md in the repo). */

type Ally = {
  name: string
  href: string
  url: string
  role: { fr: string; en: string }
}

const CAMPAIGNS: Ally[] = [
  {
    name: 'Fight Chat Control',
    href: 'https://fightchatcontrol.eu',
    url: 'fightchatcontrol.eu',
    role: {
      fr: 'Plateforme citoyenne (collectif anonyme) : outil de contact des eurodéputés, suivi des positions par État membre, comparatif 1.0 vs 2.0. Relancée pour chaque vote.',
      en: 'Citizen-led platform (anonymous collective): MEP contact tool, per-member-state position tracking, 1.0 vs 2.0 comparison. Relaunched for every vote.',
    },
  },
  {
    name: 'Stop Scanning Me · EDRi',
    href: 'https://stopscanningme.eu',
    url: 'stopscanningme.eu',
    role: {
      fr: 'Coalition de 60+ organisations : pétition à 200 000+ signatures, lettre ouverte passée de 300 à 450 scientifiques, lettre commune de 133 ONG.',
      en: 'Coalition of 60+ organisations: 200,000+ signature petition, open letter grown from 300 to 450 scientists, joint letter of 133 NGOs.',
    },
  },
  {
    name: 'Patrick Breyer · chatcontrol.eu',
    href: 'https://www.patrick-breyer.de/en/posts/chat-control/',
    url: 'patrick-breyer.de',
    role: {
      fr: 'L’ex-eurodéputé Pirate qui a nommé « Chat Control ». La chronique de référence du dossier, vote par vote, document par document, depuis 2020.',
      en: 'The former Pirate MEP who coined "Chat Control". The reference chronicle of the file, vote by vote, document by document, since 2020.',
    },
  },
  {
    name: 'EDRi',
    href: 'https://edri.org',
    url: 'edri.org',
    role: {
      fr: 'Le réseau européen des droits numériques (50+ ONG). Analyses juridiques, plaidoyer à Bruxelles, coordination des campagnes.',
      en: 'The European digital rights network (50+ NGOs). Legal analysis, Brussels advocacy, campaign coordination.',
    },
  },
  {
    name: 'La Quadrature du Net',
    href: 'https://www.laquadrature.net',
    url: 'laquadrature.net',
    role: {
      fr: 'Depuis 2008 : recours devant la CJUE (arrêt de 2020 sur la rétention), campagne Technopolice, analyses des lois françaises de surveillance.',
      en: 'Since 2008: CJEU litigation (the 2020 retention ruling), the Technopolice campaign, analysis of French surveillance laws.',
    },
  },
  {
    name: 'noyb',
    href: 'https://noyb.eu',
    url: 'noyb.eu',
    role: {
      fr: 'L’ONG de Max Schrems : le contentieux RGPD systématique qui a fait tomber deux accords de transfert UE-US (Schrems I et II).',
      en: 'Max Schrems’ NGO: systematic GDPR litigation that brought down two EU-US transfer deals (Schrems I and II).',
    },
  },
  {
    name: 'EFF',
    href: 'https://www.eff.org',
    url: 'eff.org',
    role: {
      fr: 'Trente ans de contentieux et d’outils (Jewel v. NSA, Certbot, Privacy Badger, Rayhunter) et le guide Surveillance Self-Defense.',
      en: 'Thirty years of litigation and tools (Jewel v. NSA, Certbot, Privacy Badger, Rayhunter) and the Surveillance Self-Defense guide.',
    },
  },
  {
    name: 'Signal Foundation',
    href: 'https://signal.org/blog/',
    url: 'signal.org',
    role: {
      fr: 'A promis de quitter l’UE plutôt que d’installer un scan. Meta/WhatsApp (oct. 2025) et Threema (« toutes les options ») ont suivi sur l’opposition.',
      en: 'Pledged to leave the EU rather than install scanning. Meta/WhatsApp (Oct 2025) and Threema ("all options") followed with opposition.',
    },
  },
]

const CHRONICLERS: Ally[] = [
  {
    name: 'EFF · NSA Spying Timeline',
    href: 'https://www.eff.org/nsa-spying/timeline',
    url: 'eff.org/nsa-spying',
    role: {
      fr: 'Chronologie 1791-2015 de la surveillance américaine, bâtie sur les preuves du procès Jewel v. NSA : chaque entrée datée et sourcée. Le modèle « receipts » dont s’inspire notre section Précédents.',
      en: 'US surveillance chronology 1791-2015, built on the Jewel v. NSA evidence record: every entry dated and sourced. The receipts model our Precedents section borrows.',
    },
  },
  {
    name: 'Atlas of Surveillance',
    href: 'https://atlasofsurveillance.org',
    url: 'atlasofsurveillance.org',
    role: {
      fr: '14 900+ déploiements policiers documentés dans 6 000+ juridictions US (drones, reconnaissance faciale, IMSI-catchers…), compilés par 1 000+ étudiants et bénévoles. Cartographique plutôt que chronologique.',
      en: '14,900+ documented police deployments across 6,000+ US jurisdictions (drones, face recognition, IMSI catchers…), compiled by 1,000+ students and volunteers. Geographic rather than chronological.',
    },
  },
  {
    name: 'Technopolice',
    href: 'https://technopolice.fr',
    url: 'technopolice.fr',
    role: {
      fr: 'Campagne de La Quadrature (2019) qui documente la « Safe City » ville par ville, entreprise par entreprise : marchés publics, forum participatif, canal de fuites.',
      en: 'La Quadrature’s 2019 campaign documenting the "Safe City" city by city, company by company: procurement records, participatory forum, leak channel.',
    },
  },
  {
    name: 'OONI',
    href: 'https://ooni.org',
    url: 'ooni.org',
    role: {
      fr: 'Le plus grand jeu de données ouvert sur la censure d’Internet : des millions de mesures depuis 2012, 200+ pays, données CC et API publique. La censure, prouvée en temps réel.',
      en: 'The largest open dataset on internet censorship: millions of measurements since 2012, 200+ countries, CC-licensed data and a public API. Censorship, proven in real time.',
    },
  },
  {
    name: 'Digital Violence · Forensic Architecture',
    href: 'https://forensic-architecture.org/investigation/digital-violence-how-the-nso-group-enables-state-terror',
    url: 'forensic-architecture.org',
    role: {
      fr: 'La cartographie interactive de l’écosystème Pegasus/NSO : licences d’export, infections, et les conséquences physiques pour les personnes visées.',
      en: 'The interactive map of the Pegasus/NSO ecosystem: export licenses, infections, and the physical consequences for the people targeted.',
    },
  },
  {
    name: 'Surveillance Watch',
    href: 'https://www.surveillancewatch.io',
    url: 'surveillancewatch.io',
    role: {
      fr: 'Cartographie interactive de l’industrie du logiciel espion : qui fabrique, qui finance, qui achète.',
      en: 'Interactive map of the spyware industry: who builds, who funds, who buys.',
    },
  },
  {
    name: 'NetBlocks',
    href: 'https://netblocks.org',
    url: 'netblocks.org',
    role: {
      fr: 'Observatoire en temps réel des coupures d’Internet et des blocages, pays par pays, incident par incident.',
      en: 'Real-time observatory of internet shutdowns and blocking, country by country, incident by incident.',
    },
  },
  {
    name: 'Big Brother Awards',
    href: 'https://bigbrotherawards.de',
    url: 'bigbrotherawards.de',
    role: {
      fr: 'Depuis 2000, le « prix » annuel des pires atteintes à la vie privée (éditions dans plusieurs pays) : une chronique par l’exemple, année après année.',
      en: 'Since 2000, the annual "award" for the worst privacy offenders (editions in several countries): a chronicle by example, year after year.',
    },
  },
]

function AllyCard({ a }: { a: Ally }) {
  return (
    <a className="ally" href={a.href} target="_blank" rel="noopener noreferrer">
      <span className="ally-name">{a.name}</span>
      <span className="ally-role">
        <T fr={a.role.fr} en={a.role.en} />
      </span>
      <span className="ally-url">{a.url} →</span>
    </a>
  )
}

export function Allies() {
  return (
    <section id="allies">
      <PartHead
        num={<>RÉSEAU · <T fr="VOUS N'ÊTES PAS SEUL" en="YOU ARE NOT ALONE" /></>}
        title={<T fr="Les initiatives alliées" en="Allied initiatives" />}
        intro={
          <T
            fr="Ce guide est un maillon. En voici d'autres : les campagnes qui se battent contre Chat Control maintenant, et les projets qui documentent la surveillance — parce qu'une dérive documentée est une dérive attaquable."
            en="This guide is one link in a chain. Here are others: the campaigns fighting Chat Control right now, and the projects documenting surveillance — because a documented drift is an attackable drift."
          />
        }
      />
      <h3>
        <T fr="Se battre" en="Fight" />
      </h3>
      <div className="allies">
        {CAMPAIGNS.map((a) => (
          <AllyCard key={a.name} a={a} />
        ))}
      </div>
      <h3>
        <T fr="Documenter" en="Document" />
      </h3>
      <p>
        <T
          fr="Les greffiers de la dérive orwellienne : chronologies, cartes et bases de données à sources primaires. C'est sur leurs méthodes (chaque fait daté + document vérifiable) que s'appuie notre section Précédents."
          en="The clerks of the Orwellian drift: timelines, maps and databases built on primary sources. Our Precedents section borrows their method (every fact dated + a verifiable document)."
        />
      </p>
      <div className="allies">
        {CHRONICLERS.map((a) => (
          <AllyCard key={a.name} a={a} />
        ))}
      </div>
    </section>
  )
}
