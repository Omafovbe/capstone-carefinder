<script setup lang="ts">
import { ref } from 'vue'
import { useCarefinderStore } from '@/stores/carefinder'
import { useToast } from 'vue-toastification'

import type { IUser } from '@/types'
import { useRouter } from 'vue-router'

// const app_id = import.meta.env.VITE_APP_ID
// const displayName = ref('')
// const password = ref('')
// const email = ref('')
const toast = useToast()
const confirmpass = ref('')
const userData = ref<IUser>({ email: '', password: '' })

// const { displayName, email, password } = userInfo


const store = useCarefinderStore()
const router = useRouter()

const clearError = {
          status: '',
          message: ''
        }

const signUp = async () => {
    // let userInfo:IUser = { displayName.value, email.value, password.value}
    let isPasswordValid = validatePassword()
    if (userData.value.password !== confirmpass.value) {
        toast.error('password do not match')
        return false
    } 

    if (isPasswordValid) {

        await store.createUser(userData.value)
            .then(() => {
                router.push({ name: 'admin' })
            })
        if (store.notification.status == 'error') {
            toast.error(store.notification.message)
            store.notification = clearError
        }
    } else {
        toast.info('Passsword must have atleast contains a lowercase, an uppercase letter, a symbol (@,#,%,*,&) and atleast 8 Characters')
    }
    
}

const validatePassword = (): boolean => {
    let regex = new RegExp(/^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9]).{8,}$/)
    if (!regex.test(userData.value.password)) return false

    return true
}

</script>

<template>
    <!-- <P> {{ app_id }}</P> -->
    <div id="authForm">

        <h3>Registration</h3>

        <form @submit.prevent=" signUp ">
            <input type="text" required placeholder=" " aria-label="name" name="name" v-model=" userData.displayName "
                id="name">
            <label for="name">Name</label>

            <input type="email" required placeholder=" " aria-label="email" name="email" v-model=" userData.email "
                id="email">
            <label for="email">Email</label>

            <input type="password" name="password" aria-label="password" placeholder=" "
                v-model=" userData.password " id="password">
            <label for="password">Password <span class="info">(Must be 8 Characters, Alphanumeric & Symbol)</span></label>
            <input type="password" name="confirm-password" aria-label="confirm-password" placeholder=" "
                v-model=" confirmpass " id="confirm-password">
            <label for="confirm-password">Confirm Password</label>
            <button>Register</button>
        </form>
</div></template>