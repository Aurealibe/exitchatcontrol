import type { RouteObject } from 'react-router'
import Home from './pages/Home'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]
