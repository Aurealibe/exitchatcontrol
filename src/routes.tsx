import type { RouteObject } from 'react-router'
import Home from './pages/Home'

/* ONE wildcard route: the same Home serves both / and the derived English
   landing /en/ (dist/en/index.html, built by scripts/postbuild-en.mjs).
   A literal '/' route would 404 client-side on /en/ after hydration —
   the router would replace the perfectly good prerendered page with its
   error boundary. The prerender itself uses the explicit `paths` list in
   react-ssg.config.ts, so the wildcard adds no extra prerendered routes. */
export const routes: RouteObject[] = [
  {
    path: '/*',
    element: <Home />,
  },
]
