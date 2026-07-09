import { defineReactSsgConfig } from 'vite-plugin-react-ssg'
import { routes } from './src/routes'
import { ORIGIN, PATHS } from './site.config'

/* Build-time prerender config (route mode). The route table in src/routes.tsx
   is the single source of truth; PATHS lists the static paths explicitly as a
   belt-and-suspenders guard so a route never silently drops from the build. */
export default defineReactSsgConfig({
  history: 'browser',
  origin: ORIGIN,
  routes,
  paths: PATHS,
})
