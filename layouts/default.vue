<template>
    <div>
        <PToast />
        <div id="desktop-nav" class="hidden lg:block">
            <nav
                class="relative flex w-full flex-wrap items-center justify-between pt-3 pb-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700">
                <div class="flex w-full flex-wrap items-center justify-around text-xl text-neutral-800 lg:px-40 xl:px-64">
                    <NuxtLink to="/" class="hover:text-blue-700">Welkom</NuxtLink>
                    <NuxtLink to="/fotos">Foto album</NuxtLink>
                    <NuxtLink to="/info">Info</NuxtLink>
                    <NuxtLink to="/reserveren">Reserveer</NuxtLink>
                    <NuxtLink to="/location">Ligging</NuxtLink>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </div>
            </nav>
        </div>
        <div id="mobile-nav" class="block lg:hidden">
            <Icon class="h-8 w-8 m-3" name="material-symbols:menu" @click="showDrawer = true"></Icon>
            <PSideBar v-model:visible="showDrawer">
                <div class="flex flex-col gap-y-4 text-xl text-neutral-800">
                    <NuxtLink @click="showDrawer = false" to="/">Welkom</NuxtLink>
                    <NuxtLink @click="showDrawer = false" to="/fotos">Foto album</NuxtLink>
                    <NuxtLink @click="showDrawer = false" to="/info">Info</NuxtLink>
                    <NuxtLink @click="showDrawer = false" to="/reserveren">Reserveer</NuxtLink>
                    <NuxtLink @click="showDrawer = false" to="/location">Ligging</NuxtLink>
                    <NuxtLink @click="showDrawer = false" to="/contact">Contact</NuxtLink>
                </div>
            </PSideBar>
        </div>
        <slot />

        <div class="absolute bottom-0">
            <div class="sm:hidden">XS</div>
            <div class="hidden sm:block md:hidden">SM</div>
            <div class="hidden md:block lg:hidden">MD</div>
            <div class="hidden lg:block xl:hidden">LG</div>
            <div class="hidden xl:block 2xl:hidden">XL</div>
            <div class="hidden 2xl:block">2XL</div>
        </div>

    </div>
</template>

<script setup lang="ts">
const showDrawer = ref(false);

</script>

<style scoped>
.router-link-active {
    color: #3B82F6;
}

.router-link-exact-active {
    color: #3B82F6;
}
</style>