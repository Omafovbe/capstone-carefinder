<script setup lang="ts">
import { ref } from 'vue';

const year = ref(new Date().getFullYear().toString())

</script>
<template>
    <div class="section__footer">
        <div class="subscribe">
            <h2>Subscribe to Newsletter</h2>
            <p>Enter your email address to register to our newsletter subscription!</p>
            <form>
                <input type="email" placeholder="Email Address" name="email" id="email" aria-label="email">
                <button class="subscribe-btn">Subscribe</button>
            </form>
        </div>
        <footer>&copy; {{ year }} Carefinder Inc.</footer>
    </div>
</template>

<style scoped>
.section__footer {
    height: 350px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
}

.subscribe {
    width: 100%;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
}

.subscribe h2 {
    font-size: 48px;

}

.subscribe p{
    font-size: 18px;
}


form input {
    width: 350px;
    margin-top: 1rem;
    margin-right: 15px;
    border: none;
    outline: none;
    padding: .75rem;
    font-size: 18px;
    border-radius: 5px;
    border-bottom: 1px solid;
}

form input:focus {
    border-color: hsla(160, 100%, 37%, 1);
}

form button {
    padding: .75rem;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    transition: 0.3s;
    background-color: hsla(160, 100%, 37%, 0.2);
    box-shadow: 2px 2px 10px rgba(100, 200, 130, 0.3);
}

form button:hover {
    background-color: #00bd7e;
    color: #fff;
}

footer {
    padding: 1rem;
    align-self: flex-end;
    margin: 0 auto;
    /* place-self: center; */
}
</style>