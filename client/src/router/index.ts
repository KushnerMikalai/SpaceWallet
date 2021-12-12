import { createRouter, createWebHashHistory } from 'vue-router'
import { useRootStore } from '../stores/root'

const NotFound = () => import('../pages/NotFound.vue')
const Index = () => import('../pages/Index.vue')
const Login = () => import('../pages/Login.vue')
const Dashboard = () => import('../pages/Dashboard.vue')

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const store = useRootStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})
