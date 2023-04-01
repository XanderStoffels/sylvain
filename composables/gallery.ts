
export function useGallery() {
    const { getKitten } = usePlaceholders();
    const images: Ref<string[]> = ref([]);

    onMounted(() => {
        if (images.value.length !== 0)
            return;

        // Add 10 images
        for (let i = 0; i < 25; i++) {
            images.value.push(getKitten(400, 400));
        }

    });

    return { images }

}