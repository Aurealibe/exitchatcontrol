import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createHead, UnheadProvider } from '@unhead/react/client'
import { createBrowserRouter, RouterProvider, type HydrationState } from 'react-router'
import './index.css'
import { routes } from './routes'

/* Client entry — hydrate the prerendered HTML in prod, mount fresh in dev
   (same pattern as nika.sh: vite-plugin-react-ssg injects
   window.__staticRouterHydrationData into each prerendered page). */
const hydrationData = (
  window as Window & { __staticRouterHydrationData?: HydrationState }
).__staticRouterHydrationData

const router = createBrowserRouter(routes, {
  ...(hydrationData ? { hydrationData } : {}),
})

const head = createHead()
const container = document.getElementById('app')!

const tree = (
  <StrictMode>
    <UnheadProvider head={head}>
      <RouterProvider router={router} />
    </UnheadProvider>
  </StrictMode>
)

if (container.firstChild) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
