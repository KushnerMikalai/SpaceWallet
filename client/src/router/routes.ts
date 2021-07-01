import Index from '../pages/index.vue'
const About = () => import('../pages/about.vue')

const routes = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/about',
        component: About,
    }
]

export default routes
