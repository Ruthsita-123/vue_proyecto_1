import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /*  {
      path: '/',
      name: 'home',
      component: HomeView,
    },
     */
    {
      path: '/Contador',
      name: 'Contador',

      component: () => import('../modules/contador/components/Contador.vue')
    },

     {
      path: '/listaDeTareas',
      name: 'ListaDeTareas',

      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue')
    },

    
     {
      path: '/registrar',
      name: 'registrar',

      component: () => import('../modules/registro/views/RegistrarView.vue')
    },

  ],
})

export default router
