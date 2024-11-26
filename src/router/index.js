import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Presentation',
      component: () => import('../components/Presentation.vue')
    },
    {
        path: '/projets',
        name: 'projets',
        component: () => import('../components/Projets.vue')
    }
   
  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router