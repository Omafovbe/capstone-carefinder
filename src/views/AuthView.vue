<script setup lang="ts">
import { ref, watch } from 'vue';
import Login from './LoginView.vue'
import Register from './RegisterView.vue'
import { useCarefinderStore } from '@/stores/carefinder'

const store = useCarefinderStore()

const isLogin = ref(true)

const toggleAuth = () => { isLogin.value = !isLogin.value }
watch(() => store.isLoggedIn, () => {
    
})

</script>

<template>
    <div class="auth container">

        <component :is="isLogin ? Login : Register"></component>
        <p>Don't have an account? <span class="bolder" @click="toggleAuth">{{ isLogin ? "Register" : "Login"}}</span></p>
    </div>
</template>

<style scoped>
.auth {
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    margin: 0 auto;
    /* justify-content: center; */
    /* margin: 10rem auto;    */
    place-content: center;
}

p {
    margin: 10px 3px;
    font-size: 18px;
}

.bolder {
    font-weight: bold;
}

</style>@/stores/carefinder