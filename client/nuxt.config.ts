// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["assets/styles.scss"],

  build: {
    transpile: [],
  },

  plugins: ["@/plugins/antd", "@/plugins/virtual-scroller"],
  ssr: false,

  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vant/nuxt",
    "@nuxtjs/device",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],

  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})