import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import reactSsg from 'vite-plugin-react-ssg'
import { ORIGIN, PATHS, EN_PATH } from './site.config'

/* sitemap.xml — the French page (/) and the derived English landing (/en/,
   built by scripts/postbuild-en.mjs) as a proper hreflang cluster. */
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
      const alternates =
        `    <xhtml:link rel="alternate" hreflang="fr" href="${ORIGIN}/" />\n` +
        `    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${EN_PATH}" />\n` +
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}/" />`
      const urls = [...PATHS, EN_PATH]
        .map((p) => {
          const loc = p === '/' ? `${ORIGIN}/` : `${ORIGIN}${p}`
          return (
            `  <url>\n` +
            `    <loc>${loc}</loc>\n` +
            `    <lastmod>${buildDate}</lastmod>\n` +
            `    <changefreq>weekly</changefreq>\n` +
            `    <priority>${p === '/' ? '1.0' : '0.9'}</priority>\n` +
            `${alternates}\n` +
            `  </url>`
          )
        })
        .join('\n')
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
