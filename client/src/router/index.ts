import { createRouter, createWebHashHistory } from 'vue-router'

const NotFound = () => import('../views/NotFound.vue')
const Index = () => import('../views/Index.vue')
const Login = () => import('../views/Login.vue')
const Dashboard = () => import('../views/Dashboard.vue')

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

// router.beforeEach((to, from, next) => {

//   console.log(store?.getters?.isAuth, 1);

//   // access store via `router.app.$store` here.
//   // if (router.app.$store.getters('user')) next();
//   // else next({ name: 'login' });

//   next()
// })
