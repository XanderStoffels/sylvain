<template>
    <div>
        <div
            class="flex flex-col gap-2 border rounded-md mx-2 bg-gray-100 border-transparent md:grid md:grid-cols-5 md:grid-rows-1">
            <div class="md:col-span-2 md:row-start-1" :class="{ 'md:col-start-4': right }">
                <!-- These rounded corners are something -->
                <img class="w-full h-full object-cover border border-transparent rounded-t-md md:rounded-t-none md:rounded-l-md md:rounded-tl-md"
                    :class="{ 'md:rounded-r-md md:rounded-l-none md:rounded-tl-none': right }" :src="imageUrl" :alt=alt>
            </div>
            <div class="mx-2 mb-2 border border-transparent rounded-b-md md:col-span-3">
                <slot>
                    <h3 class="text-2xl md:mt-3">Lorem</h3>
                    <div class="flex flex-col w-4/5 md:w-1/2 text-left">
                        <p class="pb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, libero adipisci ducimus quis
                            error
                            perspiciatis culpa suscipit doloribus accusantium ab voluptas, id amet maiores, quas dolorem hic
                            at
                            perferendis quam!
                        </p>
                    </div>
                </slot>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

interface Props {
    imageUrl: string;
    alt: string;
    right?: boolean;
}

// Accept a url prop for image.
const props = withDefaults(defineProps<Props>(), {
    right: false
})

const { imageUrl, alt, right } = toRefs(props);

</script>

<style scoped></style>