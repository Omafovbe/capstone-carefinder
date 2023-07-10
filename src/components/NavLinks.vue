<script setup lang="ts">
import { RouterLink} from 'vue-router'
import HeartIcon from '@/components/icons/IconPulseHeart.vue'

import { useCarefinderStore } from '@/stores/carefinder'
// import { watch } from 'vue';
// import router from '@/router';

const store = useCarefinderStore()



</script>
<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/hospital.svg" height="100" /> -->
    <div class="logo-title">
      <HeartIcon size="80px" />
      <span class='title'>Carefinder</span>
    </div>
    <!-- <HelloWorld msg="You did it!" /> -->
    
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>
        <RouterLink v-if="store.isLoggedIn" to="/logout">Logout</RouterLink>
        <RouterLink v-if="!store.isLoggedIn" to="/auth">Login</RouterLink>
      </nav>
    </div>
    

  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  place-items: center;
  margin: 0.5rem auto 2rem;

}


.logo {
  display: block;
}

.logo-title {
  display: flex;
  align-items: center;
}

.title {
  padding-left: 10px;
  font-size: 2rem;
  font-weight: 600;
}


nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  /* margin-top: 2rem; */

}


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: right;
    font-size: 1.5rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>