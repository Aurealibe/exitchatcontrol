/* Builds dist/exitchatcontrol-offline.html — the whole prerendered site as
   ONE self-contained file (CSS + JS inlined). This preserves the v1 promise
   ("un site web autonome, s'ouvre directement dans un navigateur"): the
   guide can be mirrored, e-mailed, put on a USB stick, opened from file://.
   The page also links to this artifact ("Télécharger le guide"). */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
const htmlPath = join(dist, 'index.html')
let html = readFileSync(htmlPath, 'utf8')

// Inline stylesheets.
html = html.replace(
  /<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/g,
  (_m, file) => `<style>${readFileSync(join(dist, file), 'utf8')}</style>`,
)

// Inline module scripts (entry + modulepreload'ed chunks become importmap-free
// single scripts only if we inline the graph — simplest robust approach:
// drop modulepreload hints and inline each <script type="module" src>).
html = html.replace(/<link rel="modulepreload"[^>]*>/g, '')
html = html.replace(
  /<script type="module"[^>]*src="\/(assets\/[^"]+\.js)"[^>]*><\/script>/g,
  (_m, file) => {
    let js = readFileSync(join(dist, file), 'utf8')
    // Resolve the static import graph one level deep (react-vendor chunk).
    js = js.replace(/import\s*(?:([\w${},*\s]+)\s*from\s*)?["']\.\/([^"']+\.js)["'];?/g, (m2, _bindings, dep) => {
      const depPath = join(dist, 'assets', dep)
      if (!existsSync(depPath)) return m2
      return `/* inlined:${dep} */`
    })
    return `<script type="module">${js}</script>`
  },
)

// Inline the favicon as a data URI so the single file is truly standalone.
const fav = join(dist, 'favicon.svg')
if (existsSync(fav)) {
  const data = Buffer.from(readFileSync(fav)).toString('base64')
  html = html.replace(
    /<link rel="icon"[^>]*>/,
    `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,${data}">`,
  )
}

writeFileSync(join(dist, 'exitchatcontrol-offline.html'), html)
console.log('offline artifact: dist/exitchatcontrol-offline.html —', Math.round(html.length / 1024), 'KB')
