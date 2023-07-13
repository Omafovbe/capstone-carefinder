<script setup lang="ts">
import { onMounted } from 'vue'
import { useCarefinderStore } from '../../stores/carefinder'



const store = useCarefinderStore()

onMounted(() => {
    console.log('mounted')
    store.getAllRecords()
})
</script>
<template>
    <pre>{{ store.allFacilities }}</pre>
</template>
