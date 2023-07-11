<script setup lang="ts">
import { useCarefinderStore } from '@/stores/carefinder'

const store = useCarefinderStore()
const { displayName, email, uid } = store.userDetails


</script>
<template>
    <div class="dashboard container">
        <div class="links">
            <h3>Welcome {{ store.userDetails.displayName }}</h3>
            <ul>
                <li><RouterLink :to="{name:'admin.dashboard'}">New Record</RouterLink></li>
                <li><RouterLink :to="{name:'admin.hospital'}">Hospitals</RouterLink></li>
                <li><RouterLink :to="{name:'admin.account'}">Account</RouterLink></li>
            </ul>
        </div>
        <div class="display">
            <RouterView />
        </div>
    </div>

    
</template>

<style scoped>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2px 20px;
}

.links {
    grid-column: 1 / 2;
    align-self: self-start;
}

.display {
    grid-column: 2/3;
    padding: 3px 10px;
}

ul li {
    list-style-type: none;
}
</style>