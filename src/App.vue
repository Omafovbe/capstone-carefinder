<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/NavLinks.vue'
</script>

<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
.container {
  /* min-height: 100vh; */
  max-width: 1280px;
  margin: 0 auto;
}

</style>
