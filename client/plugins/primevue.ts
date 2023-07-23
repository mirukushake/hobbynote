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
import Dialog from "primevue/dialog"
import DialogService from "primevue/dialogservice"
import Checkbox from "primevue/checkbox"
import Paginator from "primevue/paginator"
import SpeedDial from "primevue/speeddial"
import RadioButton from "primevue/radiobutton"
import Toast from "primevue/toast"
import ToastService from "primevue/toastservice"
import Card from "primevue/card"
import Image from "primevue/image"
import FileUpload from "primevue/fileupload"
import Textarea from "primevue/textarea"
import SelectButton from "primevue/selectbutton"
// import Galleria from "primevue/galleria"
import AutoComplete from "primevue/autocomplete"
import Chip from "primevue/chip"
import OverlayPanel from "primevue/overlaypanel"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: false })
  nuxtApp.vueApp.use(DialogService)
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component("Button", Button)
  nuxtApp.vueApp.component("Menubar", Menubar)
  nuxtApp.vueApp.component("InputText", InputText)
  nuxtApp.vueApp.component("Menu", Menu)
  nuxtApp.vueApp.component("Sidebar", Sidebar)
  nuxtApp.vueApp.component("DataView", DataView)
  nuxtApp.vueApp.component("DataViewLayoutOptions", DataViewLayoutOptions)
  nuxtApp.vueApp.component("SplitButton", SplitButton)
  nuxtApp.vueApp.component("Panel", Panel)
  nuxtApp.vueApp.component("Dialog", Dialog)
  nuxtApp.vueApp.component("Checkbox", Checkbox)
  nuxtApp.vueApp.component("Paginator", Paginator)
  nuxtApp.vueApp.component("RadioButton", RadioButton)
  nuxtApp.vueApp.component("SpeedDial", SpeedDial)
  nuxtApp.vueApp.component("Toast", Toast)
  nuxtApp.vueApp.component("Card", Card)
  nuxtApp.vueApp.component("Image", Image)
  nuxtApp.vueApp.component("FileUpload", FileUpload)
  nuxtApp.vueApp.component("Textarea", Textarea)
  nuxtApp.vueApp.component("SelectButton", SelectButton)
  nuxtApp.vueApp.component("AutoComplete", AutoComplete)
  nuxtApp.vueApp.component("Chip", Chip)
  nuxtApp.vueApp.component("OverlayPanel", OverlayPanel)
  // nuxtApp.vueApp.component("Galleria", Galleria)
})
