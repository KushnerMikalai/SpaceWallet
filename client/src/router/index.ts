import { createRouter, createWebHashHistory } from 'vue-router'

const NotFound = () => import('../views/NotFound.vue');
const Index = () => import('../views/Index.vue');

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
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
