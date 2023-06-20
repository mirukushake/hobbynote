import { defineNuxtPlugin } from "#app"
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Menubar from "primevue/menubar"
import InputText from "primevue/inputtext"
import Menu from "primevue/menu"
import Sidebar from "primevue/sidebar"
import DataView from "primevue/dataview"
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: false })
  nuxtApp.vueApp.component("Button", Button)
  nuxtApp.vueApp.component("Menubar", Menubar)
  nuxtApp.vueApp.component("InputText", InputText)
  nuxtApp.vueApp.component("Menu", Menu)
  nuxtApp.vueApp.component("Sidebar", Sidebar)
  nuxtApp.vueApp.component("DataView", DataView)
  nuxtApp.vueApp.component("DataViewLayoutOptions", DataViewLayoutOptions)
  //other components that you need
})
