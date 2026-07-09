/* Single source of truth for canonical URLs — consumed by vite.config.ts
   (sitemap), react-ssg.config.ts (prerender paths) and the postbuild
   English-landing transform (scripts/postbuild-en.mjs). */
export const ORIGIN = 'https://exitchatcontrol.org'
export const PATHS = ['/']
/* /en/ is not a React route: it is derived from dist/index.html at postbuild
   (same DOM, EN-default html attributes + EN head) so search engines get a
   real English landing page instead of a ?lang= query variant. */
export const EN_PATH = '/en/'
