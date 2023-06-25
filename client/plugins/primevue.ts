import { defineNuxtPlugin } from "#app"
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Menubar from "primevue/menubar"
import InputText from "primevue/inputtext"
import Menu from "primevue/menu"
import Sidebar from "primevue/sidebar"
import DataView from "primevue/dataview"
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions"
import SplitButton from "primevue/splitbutton"
import Panel from "primevue/panel"
import DynamicDialog from "primevue/dialog"
import DialogService from "primevue/dialogservice"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: false })
  nuxtApp.vueApp.use(DialogService)
  nuxtApp.vueApp.component("Button", Button)
  nuxtApp.vueApp.component("Menubar", Menubar)
  nuxtApp.vueApp.component("InputText", InputText)
  nuxtApp.vueApp.component("Menu", Menu)
  nuxtApp.vueApp.component("Sidebar", Sidebar)
  nuxtApp.vueApp.component("DataView", DataView)
  nuxtApp.vueApp.component("DataViewLayoutOptions", DataViewLayoutOptions)
  nuxtApp.vueApp.component("SplitButton", SplitButton)
  nuxtApp.vueApp.component("Panel", Panel)
  nuxtApp.vueApp.component("DynamicDialog", DynamicDialog)
  //other components that you need
})
