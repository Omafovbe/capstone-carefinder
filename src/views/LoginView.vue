<script setup lang="ts">
import { ref } from 'vue'

import { useCarefinderStore } from '@/stores/carefinder'
import type { IUser } from '@/types'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const store = useCarefinderStore()
const router = useRouter()
const toast = useToast()
const clearError = {
          status: '',
          message: ''
        }

const userData = ref<IUser>({email:'',password:''})

const userLogIn = async () => {
    // alert(userData.value.email)
    if (store.isLoggedIn)
        router.push({ path: '/admin' })

    await store.signInUser(userData.value).then(() => {
        router.push({path: '/admin'})
    })

    if (store.notification.status == 'error') {
        toast.error(store.notification.message)
        store.notification = clearError
    }
    
}
</script>

<template>
    <!-- <P> {{ app_id }}</P> -->
    <div id="authForm">
        <form @submit.prevent="userLogIn">
        <h3>Login {{ store.authUser() }}</h3>
        <input type="email" name="email" v-model="userData.email" placeholder=" " id="email">
        <label for="email" class="login">Email</label>
        <input type="password" name="password" v-model="userData.password" placeholder=" " id="password">
        <label for="password" class="login">Password</label>
        <button>Submit</button>
    </form>
    </div>
</template>

<style>
#authForm{
    width: 100%;
    padding: 2rem;
    background-color: #fff;
    border-radius: .6rem;
    
}


h3 {
    text-align: center;
    margin-bottom: 1.2rem;
    font-weight: 600;
}



#authForm input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
}

/* #authForm input:first-of-type{
    margin-top: .7rem;
} */

/* #authForm.login {
    transform: translate(1.45rem, 5rem);
} */

#authForm label {
    display: block;
    transform: translate(0.45rem, -1.7rem);
    transition: all 0.4s ease-out;
}

#authForm input:focus {
    border-color: hsla(160, 100%, 37%, 0.377);
}

#authForm input:focus + label,
#authForm input:not(:placeholder-shown) + label {
    transform: translate(0, -3.5rem);
}



#authForm button, .btn {
    padding: .75rem;
    margin-top: 10px;
    display: block;
    width: 100%;
    letter-spacing: 3px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    transition: 0.3s;
    cursor: pointer;
    background-color: hsla(160, 100%, 37%, 0.377);
    box-shadow: 2px 2px 10px rgba(100, 200, 130, 0.3);

}


.info {
    font-size: smaller;
}
</style>