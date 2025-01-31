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
    },{
      path: '/cv',
      name: 'cv',
      component: () => import('../components/Cv.vue')
    }
    
   
  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router