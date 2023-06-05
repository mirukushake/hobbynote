// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/styles.scss", "primeicons/primeicons.css"],
  build: {
    transpile: ["primevue"],
  },
  ssr: false,
})
