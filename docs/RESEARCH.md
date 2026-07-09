# Research notes — 2026-07-09/10

Recherche multi-sources menée pour la v2 (swarm : ~30 agents recherche/extraction ;
la passe de vérification adversariale a été interrompue par un quota — chaque claim
ci-dessous est donc ancré directement sur son **document primaire** plutôt que sur
un vote de vérificateurs).

## 1 · La chaîne législative Chat Control, sur pièces

| Date | Fait | Source primaire |
|---|---|---|
| 2021-07-14 | Règlement (UE) 2021/1232 : dérogation ePrivacy, scan **volontaire**, sunset 03/08/2024 | [EUR-Lex 2021/1232](https://eur-lex.europa.eu/eli/reg/2021/1232/oj) |
| 2024-04-29 | Règlement (UE) 2024/1307 : sunset repoussé au 03/04/2026 | [EUR-Lex 2024/1307](https://eur-lex.europa.eu/eli/reg/2024/1307/oj) |
| 2025-11-13 | Position du Conseil pour les trilogues CSAR (doc 15318/25) : **suppression de la clause d'extinction** | cité par l'avis EDPS ci-dessous |
| 2025-12-19 | COM(2025) 797 : la Commission propose de prolonger jusqu'au **03/04/2028** | [Avis EDPS 16/02/2026, PDF](https://www.edps.europa.eu/system/files/2026-02/26-02-16_opinion-extending-application-regulation-2021-1232_en.pdf) |
| 2026-02-16 | L'EDPS : le scan côté client « dégrade substantiellement la confidentialité », l'analyse indiscriminée du texte est disproportionnée | idem |
| 2026-03-11 | Position du Parlement : extension raccourcie (août 2027), rapporteure Birgit Sippel | [OEIL 2025/0429(COD)](https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1896266) |
| 2026-03-26 | **Le Parlement rejette l'extension** : 228 pour / 311 contre / 92 abst. | [Communiqué PE](https://www.europarl.europa.eu/news/en/press-room/20260325IPR39207/child-sexual-abuse-online-voluntary-detection-measures-will-not-be-extended) |
| 2026-04-03/04 | **La base légale expire** ; les plateformes annoncent continuer à scanner | [The Record](https://therecord.media/big-tech-vows-to-continue-csam-scanning) |
| 2026-06-29 | 5ᵉ trilogue CSAR (annoncé « final ») échoue ; rounds précédents : déc. 2025, 26/02, 16/04, 11/05 | Breyer (ci-dessous) |
| 2026-07-02 | **Le Conseil adopte sa position de rétablissement** jusqu'au 03/04/2028, transmise en **seconde lecture** | [Communiqué Conseil](https://www.consilium.europa.eu/en/press/press-releases/2026/07/02/council-moves-to-reinstate-interim-measure-to-combat-child-sexual-abuse-online/) |
| 2026-07-07 | Procédure d'urgence (Rule 170) approuvée 331/304/11 ; lettre de 4 commissaires aux eurodéputés le 06/07 | presse + Breyer |
| 2026-07-09 | **Motion de rejet : 314 pour / 276 contre / 17 abst. — échec** (majorité absolue de 361 requise en seconde lecture). Amendement « suspects désignés par un juge » : 322/255, même sort. Un carve-out E2EE passe (portée pratique incertaine). Reprise CSAR en septembre | [Breyer, 09/07/2026](https://www.patrick-breyer.de/en/eu-parliament-greenlights-chat-control-1-0-breyer-our-children-lose-out/) |

**Correction apportée au site** : la v1 disait « prolongé jusqu'au 3 avril 2028 » —
en réalité le texte a **expiré** le 3 avril 2026 (victoire parlementaire de mars),
vécu 3 mois mort, puis a été **rétabli** le 9 juillet via seconde lecture. La v2
raconte la chaîne complète (elle est plus parlante : le rempart a tenu, la
procédure l'a contourné).

## 2 · Paysage des initiatives (état post-vote)

- **fightchatcontrol.eu** — collectif citoyen anonyme ; outil de contact des
  eurodéputés, suivi par État membre ; relancé ~28/06 avant le week-end décisif.
- **stopscanningme.eu** (EDRi) — 60+ orgs, pétition 200k+, lettre de 300→450
  scientifiques, lettre de 133 ONG. Page d'accueil datée (rien post-2023 au 09/07).
- **chatcontrol.eu / patrick-breyer.de** — la chronique de référence, vote par vote.
- Signal : menace de quitter l'UE (oct. 2025) ; Threema « toutes les options » ;
  Meta/WhatsApp opposé (oct. 2025) ; projet danois d'automne 2025 = scan côté
  client obligatoire.

## 3 · Chroniqueurs « orweliens » étudiés (méthodes reprises pour la section Précédents)

| Projet | Modèle de « receipts » |
|---|---|
| EFF NSA Spying Timeline (1791-2015) | chronologie fondée sur les pièces du procès Jewel v. NSA ; chaque entrée datée + « Source: » ; **plus maintenue** (leçon : prévoir la maintenance) |
| EFF Atlas of Surveillance | 14 900+ points, 6 000+ juridictions US, 8 technologies, 1 000+ étudiants ; carto plutôt que chrono ; **assume l'incomplétude** |
| Technopolice (LQDN, 2019) | par ville et par entreprise ; marchés publics + forum + canal de leaks ; nomme l'adversaire (« Safe City » → Technopolice) |
| OONI (2012-) | mesure crowdsourcée en quasi-temps réel, données CC + API publique — la censure prouvée, pas racontée |
| Digital Violence (Forensic Architecture, 2021) | infections Pegasus **reliées aux conséquences physiques** ; narration (Snowden) + design pour rendre lisible |
| Pegasus Project / Amnesty (18/07/2021) | forensique publiée + peer-review Citizen Lab + outillage open source (MVT) : la preuve reproductible |
| Crypto AG / Rubicon (WaPo, 11/02/2020) | l'histoire interne de la CIA comme document : 1970 rachat Hagelin, 1993 sortie du BND, 40 % des câbles décodés dans les années 80 |
| CJUE (DRI 2014 → Tele2 2016 → LQDN 2020) | la jurisprudence comme chronologie ; **aucune procédure d'infraction** malgré les arrêts — un rempart sans exécution s'érode |

Principe retenu pour la timeline du site : **un fait = une date + un document
primaire + un motif** (promesse / dérive / rempart / révélation). 23 événements,
1993 → 2026-07-09, testés dans `tests/content.test.ts`.
