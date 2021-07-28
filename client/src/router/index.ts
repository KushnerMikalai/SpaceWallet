import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { store } from '../store'
import noAuthRoutes from './noAuthRoutes.json'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!store.state.appData) {
    await store.dispatch('getAppData')
  }

  if (!noAuthRoutes.includes(to.name) && !store.getters.isAuthenticated) {
    next({ name: 'error' })
  } else {
    next()
  }
})

export default router
