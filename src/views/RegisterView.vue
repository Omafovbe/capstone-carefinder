<script setup lang="ts">
import { useCarefinderStore } from '@/stores/carefinder'
import { ref } from 'vue'

import type { IUser } from '@/types'
import { useRouter } from 'vue-router'

// const app_id = import.meta.env.VITE_APP_ID
// const displayName = ref('')
// const password = ref('')
// const email = ref('')
const confirmpass = ref('')
const userData = ref<IUser>({email:'', password:''})

// const { displayName, email, password } = userInfo


const store = useCarefinderStore()
const router = useRouter()

const signUp = async () => {
    // let userInfo:IUser = { displayName.value, email.value, password.value}
    await store.createUser(userData.value)
        .then(() => {
                router.push({name: 'admin'})
            })
}

</script>

<template>
    <!-- <P> {{ app_id }}</P> -->
    <div id="authForm">

        <h3>Registration</h3>
        
            <form @submit.prevent="signUp">
            <input type="text" required placeholder="Name" name="displayNameame" v-model="userData.displayName" id="displayName">
            
            <input type="email" required placeholder="Email" name="email" v-model="userData.email" id="email">
            
            <input type="password" name="password" placeholder="Password" v-model="userData.password" id="password">
            <input type="password" name="confirmpass" placeholder="Confirm Password" v-model="confirmpass" id="confirmpassword">
            <button>Register</button>
        </form>
    </div>
    
</template>