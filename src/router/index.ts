import { createRouter, createWebHistory } from 'vue-router'
import { useCarefinderStore } from '@/stores/carefinder'
import HomeView from '../views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/AuthView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: {
        beforeRouteEnter(to, from) {
          const store = useCarefinderStore()
          // const dest = {
          //   path: from.path || '/auth',
          //   query: from.query,
          //   params: from.params
          // }
          // console.log(dest)
          if (!from) { console.log('No from') }
          
          console.log("running before hook");
          store.logout()
          return {
            name: 'auth'
          }
        }
      }
    }
  ]
})


// const isAuthenticated: boolean = false

const canUserAccess = (to: any): boolean => {
  const store = useCarefinderStore()
  if (!store.isLoggedIn && to.meta.requiresAuth && to.name !== 'login') {
    return false
  }
  return true
}

router.beforeEach(async (to, from) => {
  const canAccess: boolean = await canUserAccess(to)
 
  if (!canAccess) {
    return {
      name: 'auth',
      
    }
  }

  // if (store.isLoggedIn) {
  //   return {
  //     name: 'admin'
  //   }
  // }
})

export default router
