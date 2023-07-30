<template>
  <h2>Embroidery patterns</h2>
  <div class="flex flex-column">
    <DataView :value="data" layout="grid" data-key="id" paginator :rows="30">
      <template #grid="slotProps">
        <div class="flex flex-wrap col-12 md:col-3">
          <Card
            class="w-full m-2 cursor-pointer hover:surface-50"
            @click="editDesign(slotProps.data.id)"
          >
            <template #header>
              <div
                :style="{
                  background: '#eee',
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  'border-radius': '6px 6px 0 0',
                }"
                class="flex justify-content-center designheader"
              >
                <Image
                  v-if="slotProps.data.finished_image"
                  :src="`http://localhost:4000/images/${slotProps.data.finished_image}`"
                  preview
                  :image-style="{
                    width: '100%',
                    height: '180px',
                    'border-radius': '6px 6px 0 0',
                  }"
                /></div
            ></template>
            <template #title
              ><span>{{ slotProps.data.title }}</span></template
            >
            <template #content>
              <div class="mb-3">
                <div class="gallerymeta">Pattern</div>
                <div>
                  <Image
                    v-if="slotProps.data.design_image"
                    :src="`http://localhost:4000/images/${slotProps.data.design_image}`"
                    preview
                    width="50"
                  />
                  <div v-else>---</div>
                </div>
              </div>
              <div class="mb-3">
                <div class="gallerymeta">Source</div>
                <div v-if="slotProps.data.book_title">
                  {{ slotProps.data.book_title }}
                </div>
                <div v-else-if="slotProps.data.website_url">
                  {{ slotProps.data.website_url }}
                </div>
                <div v-else>---</div>
              </div>
              <div class="mb-3">
                <div class="gallerymeta">Status</div>
                <div>
                  {{
                    slotProps.data.status ? slotProps.data.status.code : "---"
                  }}
                </div>
              </div>
              <div class="mb-3">
                <div class="gallerymeta">Notes</div>
                <div>
                  {{ slotProps.data.notes ? slotProps.data.notes : "---" }}
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </DataView>
    <Dialog
      v-model:visible="createDialog"
      modal
      header="Add a design"
      :style="{ width: '50vw' }"
    >
      <div class="">
        <!-- title -->
        <span class="flex flex-column gap-2 mb-5">
          <label for="title">Title</label>
          <InputText id="title" v-model="designForm.title" />
        </span>
        <!-- finished image -->
        <span class="flex flex-column gap-2">
          <label for="finishedimage">Finished Image</label>
          <FileUpload
            mode="basic"
            name="finished[]"
            accept="image/*"
            @select="uploadFinished"
            @clear="clearFinished"
          />
          <div>
            <Image :src="finishedImageURL" :image-style="{ width: '50%' }" />
          </div>
        </span>
        <!-- design -->
        <span class="flex flex-column gap-2">
          <label for="designimage">Design</label>
          <FileUpload
            mode="basic"
            name="design[]"
            accept="image/*"
            @select="uploadDesign"
            @clear="clearDesign"
          />
          <div>
            <Image :src="designImageURL" :image-style="{ width: '50%' }" />
          </div>
        </span>
        <!-- floss -->
        <span class="flex flex-column gap-2 mb-5">
          <label for="floss">Floss</label>
          <AutoComplete
            id="floss"
            multiple
            v-model="designForm.floss"
            :suggestions="filteredFlossList"
            option-label="label"
            option-value="value"
            @complete="autocomplete"
          >
            <template #option="slotProps">
              <div class="flex align-options-center">
                <span
                  :style="{
                    'background-color': `rgb(${slotProps.option.background})`,
                    width: '1.25rem',
                    height: '1.25rem',
                    'margin-right': '0.5rem',
                    'border-radius': '3px',
                  }"
                ></span>
                <div>{{ slotProps.option.label }}</div>
              </div>
            </template>
          </AutoComplete>
        </span>
        <!-- book -->
        <span class="flex flex-column gap-2 mb-5">
          <label for="booktitle">Book title</label>
          <InputText id="booktitle" v-model="designForm.booktitle" />
        </span>
        <!-- website -->
        <span class="flex flex-column gap-2 mb-5">
          <label for="websiteurl">Website</label>
          <InputText id="websiteurl" v-model="designForm.websiteurl" />
        </span>
        <!-- notes -->
        <span class="flex flex-column gap-2 mb-5">
          <label for="notes">Notes</label>
          <Textarea id="notes" rows="5" v-model="designForm.notes" />
        </span>
        <!-- status -->
        <span class="flex flex-column gap-2 mb-5">
          <label for="status">Status</label>
          <SelectButton
            :options="status"
            option-label="label"
            option-value="value"
            v-model="designForm.status"
          />
        </span>
      </div>

      <template #footer>
        <Button
          label="Cancel"
          icon="pi pi-times"
          @click="createDialog = false"
          text
        />
        <Button label="Create" icon="pi pi-check" autofocus @click="upload" />
      </template>
    </Dialog>
    <Dialog
      v-model:visible="editDialog"
      modal
      header="Design"
      :style="{ width: '50vw' }"
    >
      <DesignEdit :design="design"></DesignEdit>
      <!-- <template #footer>
        <Button
          label="Cancel"
          icon="pi pi-times"
          @click="createDialog = false"
          text
        />
        <Button label="Create" icon="pi pi-check" autofocus @click="upload" />
      </template> -->
    </Dialog>
    <div>
      <SpeedDial
        direction="up"
        :style="{ left: 'calc(95% - 2rem)', bottom: '2rem' }"
        :rotate-animation="false"
        @click="createDialog = true"
      />

      <Toast />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue"
import { useToast } from "primevue/usetoast"
import { useDialog } from "primevue/usedialog"
import { storeToRefs } from "pinia"
import { useFlossStore } from "~/store/store"
import designEdit from "../components/designEdit.vue"
import designEditFooter from "../components/designEditFooter.vue"

const flossStore = useFlossStore()
const { flossList } = storeToRefs(flossStore)

const toast = useToast()

const dialog = useDialog()
const createDialog = ref(false)
const editDialog = ref(false)
const design = ref<any>(null)

const { data }: any = await useFetch<Design[]>("/api/embroidery-design")

const filteredFlossList = ref<any>([])

const search = ref("")
const designForm = ref({
  title: "",
  floss: [],
  booktitle: undefined,
  websiteurl: undefined,
  notes: undefined,
  status: null as number | null,
})

const finishedImage = ref(null)
const finishedImageURL = ref("")
const finishedImageName = ref(null)
const designImage = ref(null)
const designImageName = ref(null)
const designImageURL = ref("")
const status = [
  {
    label: "No status",
    value: null,
  },
  {
    label: "Not started",
    value: 1,
  },
  {
    label: "In progress",
    value: 2,
  },
  {
    label: "On hold",
    value: 3,
  },
  {
    label: "Finished",
    value: 4,
  },
  {
    label: "Abandoned",
    value: 5,
  },
]

const uploadLoad = ref(false)

async function upload() {
  uploadLoad.value = true
  const formData = new FormData()
  formData.append("title", designForm.value.title)
  formData.append("floss", JSON.stringify(designForm.value.floss))
  if (designForm.value.booktitle) {
    formData.append("booktitle", designForm.value.booktitle)
  }
  if (designForm.value.websiteurl) {
    formData.append("websiteurl", designForm.value.websiteurl)
  }
  if (designForm.value.notes) {
    formData.append("notes", designForm.value.notes)
  }
  if (designForm.value.status) {
    formData.append("status_id", designForm.value.status.toString())
  }
  if (finishedImage.value && finishedImageName.value) {
    formData.append(
      "finishedimage",
      finishedImage.value,
      finishedImageName.value
    )
  }
  if (designImage.value && designImageName.value) {
    formData.append("designimage", designImage.value, designImageName.value)
  }
  try {
    const { data: newList, error }: any = await useFetch(
      `/api/embroidery-design`,
      {
        method: "POST",
        body: formData,
      }
    )

    if (newList) {
      data.value = newList
      uploadLoad.value = false
      designForm.value = {
        title: "",
        floss: [],
        booktitle: undefined,
        websiteurl: undefined,
        notes: undefined,
        status: null as number | null,
      }
      createDialog.value = false
      showSuccess()
      clearDesign()
      clearFinished()
    }
  } catch (error) {
    showError()
    console.log(error)
  }
}

const uploadFinished = async (event: any) => {
  const file = event.files[0]
  finishedImage.value = event.files[0]
  const reader = new FileReader()
  reader.onload = async (e: any) => {
    finishedImageURL.value = e.target?.result
    finishedImageName.value = file.name
  }
  reader.readAsDataURL(file)
}
const uploadDesign = async (event: any) => {
  const file = event.files[0]
  designImage.value = event.files[0]
  const reader = new FileReader()
  reader.onload = async (e: any) => {
    designImageURL.value = e.target?.result
    designImageName.value = file.name
  }
  reader.readAsDataURL(file)
}

const clearFinished = () => {
  finishedImage.value = null
  finishedImageName.value = null
  finishedImageURL.value = ""
}
const clearDesign = () => {
  designImage.value = null
  designImageName.value = null
  designImageURL.value = ""
}

const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "Success!",
    detail: "Design added successfully",
    life: 3000,
  })
}

const toastTest = () => {
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Message Content",
    life: 3000,
  })
}

const showError = () => {
  toast.add({
    severity: "error",
    summary: "Oh no!",
    detail: "Something went wrong",
    life: 3000,
  })
}

const autocomplete = (event: any) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredFlossList.value = [...flossList.value]
    } else {
      filteredFlossList.value = flossList.value.filter((list: any) => {
        return list.label.toLowerCase().includes(event.query.toLowerCase())
      })
    }
  }, 250)
}

async function editDesign(id: number) {
  const { data }: any = await useFetch<Design>(`/api/embroidery-design/${id}`)
  design.value = data.value
  editDialog.value = true
  console.log(data.value)
}

interface Design {
  id: number
  title: string
  finished_image: string
  pattern_image: string
  book_title: string
  website_url: string
  notes: string
  floss: Floss[]
  status: Status
  created: Date
  updated: Date
}

interface Status {
  id: number
  code: String
  code_name: Name
  order: number
}

interface Floss {
  item_id: number
  code: string
  floss_name: Name
  brand: Brand
  order: number
  color: number
  rgb: string
  inv_qty: number
  wish_qty: number
  background: string
}

interface Brand {
  id: number
  country_id: number
  brand_name: Name
}

interface Name {
  en: string
  ja: string
}
</script>
