// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["assets/styles.scss"],
  build: {
    transpile: [],
  },
  plugins: ["@/plugins/antd"],
  ssr: false,
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vant/nuxt",
    "@nuxtjs/device",
    "nuxt-icon",
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
})
