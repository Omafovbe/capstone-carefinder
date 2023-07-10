<script setup lang="ts">
import StarIcon from '@/components/icons/IconStar.vue'
import HalfStar from '@/components/icons/IconStarHalf.vue'
import StarLine from '@/components/icons/IconStarLine.vue'

</script>
<template>
    <section class="section__brands">
        <div class="brands">
            <img src="@/assets/images/brand1.png" class="brand__img" alt="brand 1">
            <img src="@/assets/images/brand2.png" class="brand__img" alt="brand 2">
            <img src="@/assets/images/brand3.png" class="brand__img" alt="brand 3">
        </div>
        <div class="section__ratings">
            <div class="ratings">
                <p class="ratings__number">4.5</p>
                <StarIcon class="star"/>
                <StarIcon class="star"/>
                <StarIcon class="star"/>
                <HalfStar class="star"/>
                <StarLine class="star"/>
                <p class="ratings__source">Google Reviews</p>
                
            </div>
            <div class="ratings__comment">
                <p class="ratings__title">Trusted by many health care seekers</p>
                <p class="ratings__user">John Doe</p>
                <p>I have been using the carefinder app for a few months now and I am very satisfied with it. It is a great tool for finding and booking caregivers for my elderly parents who live in another city. The app is easy to use, has a lot of options and filters, and shows the ratings and reviews of the caregivers. I would recommend this app to anyone who needs reliable and affordable care for their loved ones.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

.section__brands {
    background-color: #fff;
    margin: 5rem 0;
    padding: 5rem 10rem;
    
}

.brands {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.brand__img {
    height: 120px;
    margin: 0 25px;
}

.section__ratings {
    display: flex; 
    justify-content: space-between;
    flex-direction: row;
    margin: 8rem 0;
}

.ratings {
    font-size: 30px;
    line-height: 2.6rem;
}

.ratings .ratings__number {
    font-size: 52px;
    font-weight: var(--text-weight) !important;
    margin-bottom: 0.6rem;
}

.ratings__title{
    font-size: 30px;
}

.ratings__user {
    font-weight: var(--text-weight);
    color: hsla(160, 42%, 54%, 0.8);
    font-size: 24px;
    margin: 0.5rem 0;
}
.ratings__comment {
    width: 60%;
    font-size: 18px;
    
}
</style>