import { defineNuxtPlugin } from "#app"
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Menu from "primevue/menu"
import Menubar from "primevue/menubar"
import Sidebar from "primevue/sidebar"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: false })
  nuxtApp.vueApp.component("Button", Button)
  nuxtApp.vueApp.component("Menu", Menu)
  nuxtApp.vueApp.component("Menubar", Menubar)
  nuxtApp.vueApp.component("Sidebar", Sidebar)
})
