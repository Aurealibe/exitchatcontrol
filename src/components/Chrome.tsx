import { T } from '../lib/i18n'
import { setLang, toggleTheme, useLang, setFilter, useFilter } from '../lib/prefs'

/* Top bar. Pressed-state VISUALS are driven by CSS on :root[data-lang] so the
   correct button is highlighted before hydration; aria-pressed comes from the
   useLang store (server snapshot: absent → no hydration mismatch). */
export function TopBar() {
  const lang = useLang()

  return (
    <div className="topbar">
      <a className="brand" href="#top">
        <span className="glyph">◆</span> <T fr="INGOUVERNABLE" en="UNGOVERNABLE" />
      </a>
      <div className="controls">
        <button
          type="button"
          className="btn lang-fr"
          aria-pressed={lang ? lang === 'fr' : undefined}
          onClick={() => setLang('fr')}
        >
          <span className="flag">🇫🇷</span> FR
        </button>
        <button
          type="button"
          className="btn lang-en"
          aria-pressed={lang ? lang === 'en' : undefined}
          onClick={() => setLang('en')}
        >
          <span className="flag">🇬🇧</span> EN
        </button>
        <button type="button" className="btn" onClick={toggleTheme} aria-label="Thème clair/sombre — Light/dark theme">
          ◐
        </button>
      </div>
    </div>
  )
}

/* Profile filter — sets data-filter on <html>; tokens.css hides .tg cards
   whose data-levels doesn't contain the active profile. */
export function FilterBar() {
  const f = useFilter()

  return (
    <div className="filterbar" role="group" aria-label="Filtrer les outils par profil — Filter tools by profile">
      <span className="fb-lab">
        <T fr="Filtrer les outils" en="Filter tools" />
      </span>
      <button type="button" className="btn fb-all" aria-pressed={f === null} onClick={() => setFilter(null)}>
        <T fr="Tous" en="All" />
      </button>
      <button type="button" className="btn fb-b" aria-pressed={f === 'b'} onClick={() => setFilter('b')}>
        🟢 <T fr="Citoyen" en="Citizen" />
      </button>
      <button type="button" className="btn fb-i" aria-pressed={f === 'i'} onClick={() => setFilter('i')}>
        🟡 <T fr="Pseudonyme" en="Pseudonymous" />
      </button>
      <button type="button" className="btn fb-a" aria-pressed={f === 'a'} onClick={() => setFilter('a')}>
        🔴 <T fr="Lanceur d'alerte" en="Whistleblower" />
      </button>
    </div>
  )
}
