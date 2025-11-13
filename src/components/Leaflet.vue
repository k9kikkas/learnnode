<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';
import { onMounted, useId, watch } from 'vue';
let {lat, lng, zoom} = defineProps(['lat', 'lng', 'zoom']);

let id='map-' + useId();
let map = null;
onMounted(() => {
    map = L.map(id).setView([lat, lng], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.41641, 24.79871]).addTo(map);
    var marker = L.marker([59.34912890156508, 24.901998031261677]).addTo(map);
    
    var latlngs = [
        [59.3492428900839, 24.90195164781618],
        [59.3491405540034, 24.902265156733392],
        [59.34909800969939, 24.901624606139947],
        [59.34893358121246, 24.90193360413749]
    ];

    var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

    // zoom the map to the polygon
    map.fitBounds(polygon.getBounds());
});

watch(() => zoom, (zoom, oldZoom) => {
    console.log(zoom, oldZoom);
    map.setZoom(zoom);
});
watch(() => lat, lat => {
    map.panTo([lat, lng]);
});
watch(() => lng, lng => {
    map.panTo([lat, lng]);
});

</script>

<template>
<div :id="id"></div>

</template>

<style scoped>
div { height: 80vh; }
</style>