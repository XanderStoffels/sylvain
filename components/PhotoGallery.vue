<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(image, i) in images" :key="i" class="flex flex-col">
            <div class="aspect-w-1 aspect-h-1 overflow-hidden">
                <img :src="image" class="inset-0 w-full h-full object-cover" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useGallery from '~~/composables/gallery';

const { images } = useGallery();

</script>

<style scoped></style>