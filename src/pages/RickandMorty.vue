<script setup>
import axios from 'axios';
import CharacterCard from './CharacterCard.vue';
import { ref } from 'vue';
 
let characters = ref([]);
let info = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
});
 
let currentPage = ref(1);
let searchValue = ref('');
 
async function getCharacters(page) {
    let res = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page,
            name: searchValue.value,
        }
    });
    console.log(res);
    characters.value = res.data.results;
    info.value = res.data.info;
}
 
await getCharacters(currentPage.value)
function generatePages(count, current) {
    let pages = [];
    for (let i = 1; i <= 3; i++) {
        pages[i] = i;
    }
    if (current > 2) {
        pages.push('...');
    }
    if (current > 2 && current < count - 1) {
 
        for (let i = current - 2; i <= current + 2; i++) {
            pages[i] = i
        }
    }
    if (current < count - 2) {
        pages.push('...');
    }
    for (let i = count - 2; i <= count; i++) {
 
        pages[i] = i;
    }
 
 
    return pages.filter(page => page);
}
console.log(generatePages(42, 10));
 
let timeout;
 
async function getPage(page) {
clearTimeout(timeout);
    timeout = setTimeout(async () => {
        currentPage.value = page;
        await getCharacters(currentPage.value);
    }, 1000);
}
</script>
<template>
 
    <div class="field has-addons">
        <div class="control is-expanded">
 
 
            <input v-model="searchValue" @input="getPage(1)" class="input" type="text">
        </div>
        <div class="control">
            <button class="button is-info">
                Search
            </button>
        </div>
    </div>
 
 
   
    <div class="columns is-multiline">
        <div class="column is-3" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
 
        </div>
    </div>
</template>