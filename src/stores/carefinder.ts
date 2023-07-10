import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  auth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile,
  createUserWithEmailAndPassword, signOut
} from '@/config/firebase'
// import { useRouter } from 'vue-router'
import type { IUser } from '@/types'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   const increment = () => {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

// const router = useRouter()

export const useCarefinderStore = defineStore('carefinder', () => {
  // const userDetails = ref({ displayName: '', email: '', password:'' })
  const userDetails = ref({})
  const isLoggedIn = ref(false)
  const message = ref('')
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
        message.value = err.message
    })

  }
  const signInUser = async (user:IUser) => {
    await signInWithEmailAndPassword(auth, user.email, user.password)
      .then((cred) => {
        isLoggedIn.value = true        
        console.log(cred.user.displayName)
        // userDetails.value = { ...cred.user }
        
      }).catch((err) => {
        message.value = err.message
      })
  }
  const authUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true
        // console.log(user.uid)
        const {uid, email, displayName} = user
        userDetails.value = { uid, email, displayName}
        // console.log(userDetails)
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
    userDetails, message, isLoggedIn,
    authUser, signInUser, createUser,
    logout
  }
})
