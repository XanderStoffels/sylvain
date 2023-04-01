// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    css: [
        "assets/css/prime.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css"
    ],
    build: {
        transpile: ["primevue"]
    },
    runtimeConfig: {
        public: {
            GOOGLE_KEY: process.env.GOOGLE_KEY
        }
    }
});