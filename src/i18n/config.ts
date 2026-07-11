import en from './en.json'
import fr from './fr.json'
import nl from './nl.json'
import hu from './hu.json'
import { defaultLocale, locales, type Locale } from './locales'

export { locales, defaultLocale, localeNames, localeFlags, type Locale } from './locales'

type Dict = typeof en
// A fr/nl/hu fájlok az angol struktúrához vannak típus-ellenőrizve (type-checked): egy hiányzó kulcs
// fordítási (build) hibát okoz, nem pedig egy csendes angol visszaesést (fallback).
const dicts: Record<Locale, Dict> = { en, fr, nl, hu }

function lookup(dict: Dict, path: string): unknown {
  return path.split('.').reduce<unknown>((node, key) => {
    if (node && typeof node === 'object' && key in node) {
      return (node as Record<string, unknown>)[key]
    }
    return undefined
  }, dict)
}

/** Visszaadja a felhasználói felület (UI) karakterláncát a megadott „path”-hoz a megadott „locale”-ban, szükség esetén angolra visszaesve. */
export function useT(locale: Locale) {
  return (path: string): string => {
    const hit = lookup(dicts[locale], path) ?? lookup(dicts[defaultLocale], path)
    if (typeof hit !== 'string') {
      throw new Error(`Hiányzó i18n kulcs: „${path}” (nyelv: ${locale})`)
    }
    return hit
  }
}

/** Útvonal-előtag (path prefix) egy nyelvhez: '' az alapértelmezett nyelvhez (a / útvonalon kiszolgálva). */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`
}

/** A nem alapértelmezett nyelvek, pl. a [lang] útvonal getStaticPaths függvényéhez. */
export const translatedLocales = locales.filter((l) => l !== defaultLocale)
