<script setup lang="ts">
import { useCarefinderStore } from '@/stores/carefinder'

const store = useCarefinderStore()
const { displayName } = store.userDetails


</script>
<template>
    <div class="dashboard container">
        <div class="links">
            <h3>Welcome {{ displayName }}</h3>
            <ul>
                <li><RouterLink :to="{name:'admin.dashboard'}">New Record</RouterLink></li>
                <li><RouterLink :to="{name:'admin.hospital'}">Hospitals</RouterLink></li>
                <li><RouterLink :to="{name:'admin.account'}">Account</RouterLink></li>
                dsds
            </ul>
        </div>
        <div id="display">
            
            <RouterView />
        </div>
    </div>

    
</template>

<style scoped>

* {
    padding: 0;
}
.dashboard {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2px 20px;
}

.links {
    grid-column: 1 / 2;
    align-self: self-start;
}

ul li {
    list-style: none;
    margin-bottom: 1rem;
    margin-left: .5rem;
    padding: .2rem;
}

.links li a{
    margin: 0;
    padding: 0.5rem 0.3rem;
    
}

.links a:hover{
    margin-left: 10px;
}



#display {
    grid-column: 2/3;
    padding: 1rem 1.5rem 3rem !important;
    background-color: #fff;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    min-height: 30rem;
}


</style>