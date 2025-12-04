<script setup>
import { ref } from 'vue';
import BuildingButton from '../components/BuildingButton.vue';

let cookies = ref(0);
let cps = ref(0);

setInterval(() => {
    cookies.value += cps.value;
}, 1000);

let buildings = ref([
    {name: 'Cursor', icon: '🖱️', cps: 0.1, price: 15, count: 0},
    {name: 'Grandma', icon: '👵🏻', cps: 1, price: 100, count: 0},
    {name: 'Farm', icon: '🚜', cps: 10, price: 1200, count: 0},
    {name: 'Mine', icon: '⛏️', cps: 100, price: 10000, count: 0},
]);

function buyCursor(){
    if(cookies.value >= building.price) {
        cookies.value -= building.price;
    cps.value += building.cps;
    };
}


</script>

<template>
    <div class="columns">
        <div class="column has-background-info has-text-centered">
            <h1>{{ parseFloat(cookies.toFixed(1)) }} cookies!</h1>
            <div @click="cookies++">
                <img src="https://pngimg.com/d/cookie_PNG13669.png"></img>
            </div>
        </div>
        <div class="column has-background-link">
            easda
        </div>
        <div class="column has-background-link">
            <BuildingButton v-for="building in buildings" :building="building" :disabled="cookies<building.price" @click="buyBuilding(building)"></BuildingButton>
        </div>
    </div>
</template>