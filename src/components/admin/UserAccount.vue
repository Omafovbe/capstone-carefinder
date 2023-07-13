<script setup lang="ts">
import { useCarefinderStore } from '@/stores/carefinder';

const store = useCarefinderStore()
</script>
<template>
    <pre>{{ store.userDetails }}</pre>
</template>