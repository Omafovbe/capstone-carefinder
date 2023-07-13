import { createRouter, createWebHistory } from 'vue-router'
import { useCarefinderStore } from '@/stores/carefinder'
import HomeView from '../views/HomeView.vue'
import AdminView from '@/views/admin/AdminView.vue'
import Dashboard from '@/components/admin/AdminDashboard.vue'
import Accounts from '@/components/admin/UserAccount.vue'
import Hospitals from '@/components/admin/HospitalComp.vue'




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
     
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('@/views/NotFound.vue'),
    },
    {
      path: '/admin',
      component: AdminView,
      children: [
        {path:'', name:'admin.dashboard', component:Dashboard},
        {path:'hospital', name:'admin.hospital', component:Hospitals},
        {path:'account', name:'admin.account', component:Accounts},
      ],
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

router.beforeEach(async (to) => {
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
