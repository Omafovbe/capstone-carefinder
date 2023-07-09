<script setup lang="ts">
import { ref } from 'vue';
import type { IUser } from '@/interfaces';
import {useRouter } from 'vue-router'
import { useCarefinderStore } from '@/stores/carefinder'

const store = useCarefinderStore()
const router = useRouter()
const userData = ref<IUser>({email:'',password:''})

const userLogIn = async () => {
    // alert(userData.value.email)
    if (store.isLoggedIn)
        router.push({ name: 'admin' })

    await store.signInUser(userData.value).then(() => {
        router.push({name: 'admin'})
    })
    
}
</script>

<template>
    <!-- <P> {{ app_id }}</P> -->
    <div id="authForm">
        <form @submit.prevent="userLogIn">
        <h3>Login {{ store.authUser() }}</h3>
        <input type="email" name="email" v-model="userData.email" placeholder="Email" id="email">
        <input type="password" name="password" v-model="userData.password" placeholder="Password" id="password">
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
    font-weight: 600;
}

#authForm input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
@/types@/stores/carefinder