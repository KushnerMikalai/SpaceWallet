import { createRouter, createWebHashHistory } from 'vue-router'

const NotFound = () => import('../views/NotFound.vue');
const Index = () => import('../views/Index.vue');
const Login = () => import('../views/Login.vue');

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
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
