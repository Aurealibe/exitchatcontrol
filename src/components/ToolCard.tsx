import type { ReactNode } from 'react'
import { T } from '../lib/i18n'
import { BRAND_ICONS } from '../icons.generated'

export type Level = 'b' | 'i' | 'a'

export type Tool = {
  id: string
  name: ReactNode
  /** simple-icons slug (embedded at build time — never a CDN request) */
  slug?: string
  /** letter tile fallback */
  tile: string
  /** tile background color */
  brand: string
  /** which reader profiles this tool suits — drives the filter + the dots */
  levels: Level[]
  tags: ReactNode[]
  what: ReactNode
  why: ReactNode
  who: ReactNode
  steps?: ReactNode[]
  caution?: { label: ReactNode; body: ReactNode }
  links: { label: ReactNode; href: string }[]
}

const DOTS: Record<Level, string> = { b: '🟢', i: '🟡', a: '🔴' }

function Logo({ slug, tile, brand }: { slug?: string; tile: string; brand: string }) {
  const path = slug ? BRAND_ICONS[slug] : undefined
  return (
    <span className="tg-logo" style={{ ['--b' as string]: brand }} aria-hidden="true">
      {path ? (
        <svg viewBox="0 0 24 24" role="presentation">
          <path d={path} />
        </svg>
      ) : (
        tile
      )}
    </span>
  )
}

export function ToolCard(tool: Tool) {
  return (
    <article className="tg" id={tool.id} data-levels={tool.levels.join(' ')}>
      <div className="tg-h">
        <Logo slug={tool.slug} tile={tool.tile} brand={tool.brand} />
        <div className="tg-hd">
          <h3 className="tg-name">{tool.name}</h3>
          <div className="tg-tags">
            {tool.tags.map((tag, i) => (
              <span key={i} className="tg-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="tg-field">
        <b className="lbl">
          <T fr="À quoi ça sert" en="What it's for" />
        </b>
        {tool.what}
      </p>
      <p className="tg-field">
        <b className="lbl">
          <T fr="Pourquoi" en="Why it matters" />
        </b>
        {tool.why}
      </p>
      <p className="tg-field">
        <b className="lbl">
          <T fr="Pour qui & quand" en="For whom & when" />
        </b>
        {tool.who}
      </p>
      {tool.caution ? (
        <div className="box warn" style={{ margin: '.6rem 0 .4rem' }}>
          <span className="lab">{tool.caution.label}</span>
          <p>{tool.caution.body}</p>
        </div>
      ) : null}
      {tool.steps && tool.steps.length > 0 ? (
        <details className="tg-install">
          <summary>
            <T fr="Installer & utiliser" en="Install & use" />
          </summary>
          <ol className="tg-steps">
            {tool.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </details>
      ) : null}
      <div className="tg-foot">
        {tool.links.map((l, i) => (
          <a key={i} className="tg-link" href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
        <span className="tg-note" aria-label="profils">
          {tool.levels.map((l) => DOTS[l]).join('')}
        </span>
      </div>
    </article>
  )
}
