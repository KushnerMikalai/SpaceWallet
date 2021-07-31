import Index from '../pages/index.vue'
const About = () => import('../pages/about.vue')
const ErrorPage = () => import('../pages/error.vue')

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/error/:code',
    name: 'error',
    component: ErrorPage
  }
]

export default routes
