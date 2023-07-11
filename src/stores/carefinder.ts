import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  auth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile,
  createUserWithEmailAndPassword, signOut
} from '@/config/firebase'
// import { useRouter } from 'vue-router'
import type { IUser, Notify } from '@/types'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   const increment = () => {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })


export const useCarefinderStore = defineStore('carefinder', () => {
  // const userDetails = ref({ displayName: '', email: '', password:'' })
  const userDetails = ref<Partial<IUser>>({displayName:'user', email:'dummy@email.com'})
  const isLoggedIn = ref(false)
  const notification = ref<Notify>({status:'',message:''})
  const createUser = async (user: IUser) => {
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        
        updateProfile(<any>auth.currentUser, {
          displayName: user.displayName
        })
      }).then(() => {
        // console.log(user)
        isLoggedIn.value = true
        
      })
      .catch((err) => {
        notification.value = {
          status: 'error',
          message: err.message
        }
    })

  }
  const signInUser = async (user:IUser) => {
    await signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        isLoggedIn.value = true
        // console.log(cred.user)
        // const {displayName, email, uid } = cred.user
        // userDetails.value = {displayName, email, uid }
      }).catch((err) => {
        notification.value = {
          status: 'error',
          message: err.message
        }
        // toast.error(err.message)
      })
  }
  const authUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true
        // console.log(user.uid)
        // const {uid, email, displayName} = user
        userDetails.value = { uid:user.uid, displayName:user.displayName, email:user.email}
        console.log(userDetails)
        return user
      }

      return null
    })

  }

  
  const logout = () => {
    signOut(auth)
      .then(() => {
        isLoggedIn.value = false
        console.log('user signed out')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return {
    userDetails, notification, isLoggedIn,
    authUser, signInUser, createUser,
    logout
  }
})
