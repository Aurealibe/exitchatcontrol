import { useState } from 'react'
import { T } from '../lib/i18n'
import { BRAND_ICONS } from '../icons.generated'
import { inkFor } from '../lib/ink'
import { SHELF, MARQUEE } from '../content/showcase'

/* ═══ The survival-kit showcase ══════════════════════════════════════════════
   Product-first band right under the breaking banner: the ten hero tools as a
   snap-scroll shelf (each card deep-links to its full dossier card below), and
   the whole arsenal as an icon marquee. Marquee is decorative (aria-hidden,
   nothing focusable inside) but WCAG 2.2.2 still wants moving content
   pausable: visible pause/play toggle drives [data-paused]; reduced-motion
   gets a static wrapped grid (CSS). All animation is CSS transform. */

function IconTile({ slug, tile, brand, size }: { slug?: string; tile: string; brand: string; size: 'shelf' | 'chip' }) {
  const path = slug ? BRAND_ICONS[slug] : undefined
  const ink = inkFor(brand)
  return (
    <span className={size === 'shelf' ? 'shelf-tile' : 'mq-chip'} style={{ ['--b' as string]: brand, color: ink }}>
      {path ? (
        <svg viewBox="0 0 24 24" role="presentation" style={{ fill: ink }}>
          <path d={path} />
        </svg>
      ) : (
        tile
      )}
    </span>
  )
}

export function Showcase() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="showcase" id="trousse" data-paused={paused || undefined}>
      <div className="showcase-head wrap-wide">
        <div>
          <div className="eyebrow">
            <T fr="L'arsenal, d'abord" en="The arsenal, first" />
          </div>
          <h2>
            <T fr="La trousse de survie" en="The survival kit" />
          </h2>
          <p className="showcase-lede">
            <T
              fr={<>Dix gestes, dix outils libres — chacun détaillé plus bas, tous dans <a href="#ecosysteme">l'annuaire</a>. Installez-en un aujourd'hui.</>}
              en={<>Ten moves, ten free tools — each detailed below, all in <a href="#ecosysteme">the directory</a>. Install one today.</>}
            />
          </p>
        </div>
      </div>

      <div className="shelf wrap-wide" role="list">
        {SHELF.map((s) => (
          <a key={s.name} role="listitem" className="shelf-card" href={s.anchor}>
            <IconTile slug={s.slug} tile={s.tile} brand={s.brand} size="shelf" />
            <b className="shelf-name">{s.name}</b>
            <span className="shelf-role">
              <T fr={s.fr} en={s.en} />
            </span>
            <span className="shelf-go" aria-hidden="true">
              ↓ <T fr="voir la fiche" en="see the card" />
            </span>
          </a>
        ))}
      </div>

      <div className="mq">
        <div className="mq-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="mq-seq">
              {MARQUEE.map((m) => (
                <IconTile key={`${copy}-${m.slug}`} slug={m.slug} tile="" brand={m.brand} size="chip" />
              ))}
            </div>
          ))}
        </div>
        <p className="mq-legend wrap-wide">
          <button
            type="button"
            className="btn mq-toggle"
            aria-pressed={paused}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? '▶' : '⏸'}{' '}
            <T fr={paused ? 'Reprendre' : 'Pause'} en={paused ? 'Play' : 'Pause'} />
          </button>
          <span>
            <T
              fr={<>+ 68 outils libres, licences vérifiées, dans <a href="#ecosysteme">l'annuaire complet</a></>}
              en={<>+ 68 free tools, licenses verified, in <a href="#ecosysteme">the full directory</a></>}
            />
          </span>
        </p>
      </div>
    </section>
  )
}
