/**
 * Do not use this hook in the server side.
 */
export function useDevice() {
    const isSupported = process.client;

    const isXs = ref(false);
    const isSm = ref(false);
    const isMd = ref(false);
    const isLg = ref(false);
    const isXl = ref(false);
    const is2Xl = ref(false);

    const updateBreakpoints = () => {
        if (!isSupported) return;
        const { innerWidth } = window
        isXs.value = innerWidth < 640
        isSm.value = innerWidth >= 640 && innerWidth < 768
        isMd.value = innerWidth >= 768 && innerWidth < 1024
        isLg.value = innerWidth >= 1024 && innerWidth < 1280
        isXl.value = innerWidth >= 1280 && innerWidth < 1536
        is2Xl.value = innerWidth >= 1536
    }

    onMounted(() => {
        if (!isSupported) return;
        updateBreakpoints()
        window.addEventListener('resize', updateBreakpoints)
    })

    onUnmounted(() => {
        if (!isSupported) return;
        window.removeEventListener('resize', updateBreakpoints)
    })

    const isSmartPhone = computed(() => isXs.value);

    return { isSupported, isSmartPhone, isXs, isSm, isMd, isLg, isXl, is2Xl }
}
