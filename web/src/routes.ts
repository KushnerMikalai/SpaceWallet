import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Index from './pages/Index'
import { ADMIN_ROUTE, INDEX_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
]

export const publicRoutes = [
  {
    path: INDEX_ROUTE,
    Component: Index
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
]
