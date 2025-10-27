<script setup>
import { ref } from 'vue';
import RouterTabs from './components/RouterTabs.vue';
 
</script>
 
<template>
    <RouterTabs></RouterTabs>
    <div v-if="$route.meta.noContianer === true" class="content">
        <Suspense>
            <RouterView></RouterView>
        </Suspense>
    </div>

    <div v-else class="container mt-3">
        <div class= "content">
            <Suspense>
                <RouterView></RouterView>
            </Suspense>
        </div>
    </div>
</template>