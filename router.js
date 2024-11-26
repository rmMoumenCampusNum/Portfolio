import { createRouter, createWebHistory } from 'vue-router'
import Projets from './src/components/Projets.vue'

const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Projets
        },
        {
            path: '/presentation',
            name: 'presentation',
            component: () => import('./src/components/Presentation.vue')
        },
        {
            path: '/projets',
            name: 'projets',
            component: () => import('./src/components/Projets.vue')
        },
        {
            path: '/technos',
            name: 'technos'
}]})

export default routes