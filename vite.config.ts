import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import reactSsg from 'vite-plugin-react-ssg'
import { ORIGIN, PATHS } from './site.config'

/* sitemap.xml derived from the same PATHS array that drives the prerender —
   one source of truth. hreflang alternates point at the ?lang= variants of
   the single page (language is a client-side toggle, both languages ship in
   the prerendered DOM). */
function sitemap(): Plugin {
  let outDir = 'dist'
  return {
    name: 'sitemap-xml',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const buildDate = new Date().toISOString().slice(0, 10)
      const urls = PATHS.map((p) => {
        const loc = p === '/' ? `${ORIGIN}/` : `${ORIGIN}${p}`
        return (
          `  <url>\n` +
          `    <loc>${loc}</loc>\n` +
          `    <lastmod>${buildDate}</lastmod>\n` +
          `    <changefreq>weekly</changefreq>\n` +
          `    <priority>1.0</priority>\n` +
          `    <xhtml:link rel="alternate" hreflang="fr" href="${loc}?lang=fr" />\n` +
          `    <xhtml:link rel="alternate" hreflang="en" href="${loc}?lang=en" />\n` +
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />\n` +
          `  </url>`
        )
      }).join('\n')
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
      writeFileSync(join(outDir, 'sitemap.xml'), xml)
    },
  }
}

// reactSsg() prerenders the route to static HTML at build time: the full
// bilingual guide is readable with JavaScript disabled (Tor Browser "safest"
// mode is part of this site's audience), then the client hydrates the
// interactive shell (language/theme toggles, tool filter, checklist).
export default defineConfig({
  plugins: [react(), tailwindcss(), reactSsg(), sitemap()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|scheduler)[\\/]/,
            },
          ],
        },
      },
    },
  },
})
