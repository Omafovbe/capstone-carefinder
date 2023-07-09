<template>
    <div class="hero">
        <div class="hero__content">
            <h2 class="hero__header">Find Health Centres near you easily and quickly </h2>
            <p>Welcome to carefinder, the premier online platform that connects users with healthcare providers near them for a seamless experience.</p>
            <form>
                <div class="form__group">
                    <input type="text" placeholder="location" name="search">
                    <img src="@/assets/search.svg" alt="search">
                </div>
                <button class="btn">Find</button>
            </form>
        </div>
        <div class="hero__img">
            <img src="@/assets/hospital.svg" alt="hospital" />
        </div>
    </div>
</template>

<style scoped>
.hero{
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem; 
    align-items: center;

}

.hero__content p{
    font-size: 1.4rem;
}
.hero__img{
    max-width: 100%;
    
}

.hero__img img {
    width: 100%;
    margin: auto;
}

.hero__header {
    font-size: 4rem;
    line-height: 3.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.btn {
    min-width: 150px;
    padding: .75rem;
    font-size: 1.5rem;
    /* font-weight: 600; */
    outline: none;
    border: none;
    border-radius: .8rem;
    cursor: pointer;
    transition: 0.3s;
    background-color: hsla(160, 100%, 37%, 0.2);
    box-shadow: 2px 2px 10px rgba(100, 200, 130, 0.3);
}

.btn:hover {
    background-color: #00bd7e;
}

.form__group {
    max-width: 300px;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    border: 2px solid #777;
    border-radius: 0.8rem;
}

.form__group img{
    height: 20px;
}

.form__group input {
    width: 100%;
    font-size: 1.3rem;
    outline: none;
    border: none;
    background-color: transparent;
}
</style>