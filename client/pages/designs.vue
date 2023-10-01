<template>
  <div class="bg-white rounded-lg p-6" v-if="data">
    <a-list :grid="{ gutter: 1, column: 4 }" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card hoverable style="width: 240px" class="rounded-xl">
            <template #cover>
              <img
                alt="example"
                :src="`https://storage.googleapis.com/hobbynote/${item.finished_image}`"
              />
            </template>
            <a-card-meta :title="item.title" class="p-4">
              <template #description>yo</template>
            </a-card-meta>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
  <a-modal
    v-model:open="modalOpen"
    title="Add a design"
    @cancel="closeModal"
    @ok="testModal"
    :mask-closable="false"
  >
    <a-form
      layout="vertical"
      :model="designForm"
      :rules="formRules"
      ref="formRef"
    >
      <a-form-item label="Design title" required name="title">
        <a-input v-model:value="designForm.title" />
      </a-form-item>
      <a-form-item label="Finished image" name="finishedimage">
        <a-upload
          v-model:file-list="finishedFileList"
          name="finishedimage"
          list-type="picture"
          accept=".png, .jpg, .jpeg"
          @preview="handleFinishedPreview"
          @change="handleFinishedImageChange"
          @remove="handleFinishedImageRemove"
        >
          <a-button> Upload </a-button>
        </a-upload>
      </a-form-item>
      <a-modal
        :open="finishedImagePreview"
        title="Finished Design"
        :footer="null"
        @cancel="closeFinishedPreview"
        width="80%"
      >
        <img alt="example" style="width: 100%" :src="finishedImageURL" />
      </a-modal>
      <a-form-item label="Design image" name="designimage">
        <a-upload
          v-model:file-list="designFileList"
          name="designimage"
          list-type="picture"
          accept=".png, .jpg, .jpeg, .pdf"
          @preview="handleDesignPreview"
          @change="handleDesignImageChange"
          @remove="handleDesignImageRemove"
        >
          <a-button> Upload </a-button>
        </a-upload>
      </a-form-item>
      <a-modal
        :open="designImagePreview"
        title="Design image"
        :footer="null"
        @cancel="closeDesignPreview"
        width="80%"
      >
        <img alt="example" style="width: 100%" :src="finishedImageURL" />
      </a-modal>
      <a-form-item label="Book title" name="booktitle">
        <a-input v-model:value="designForm.booktitle" />
      </a-form-item>
      <a-form-item label="Website" name="websiteurl">
        <a-input v-model:value="designForm.websiteurl" placeholder="http://" />
      </a-form-item>
      <a-form-item label="Floss">
        <a-select
          v-model:value="designForm.floss"
          mode="multiple"
          style="width: 100%"
          placeholder="Please select"
          :options="flossList"
          :filter-option="filterOption"
        >
          <template #option="{ value: value, label, background }">
            <span
              class="w-4 inline-block"
              :style="`background-color: rgb(${background})`"
              >&nbsp;</span
            >
            &nbsp;&nbsp;{{ label }}
          </template>
        </a-select></a-form-item
      >
      <a-form-item label="Status">
        <a-radio-group
          v-model:value="designForm.status"
          option-type="button"
          :options="status"
        />
      </a-form-item>
      <a-form-item label="Notes">
        <a-textarea v-model:value="designForm.notes" />
      </a-form-item>
    </a-form>
  </a-modal>
  <a-float-button @click="showModal">
    <template #icon>
      <Icon name="tabler:plus" />
    </template>
  </a-float-button>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from "vue"
import type { Rule } from "ant-design-vue/es/form"
import type { FormInstance } from "ant-design-vue"
import { message } from "ant-design-vue"

definePageMeta({
  title: "Embroidery Designs",
  category: "Crafts",
})

const { data }: any = await useFetch<Design[]>("/api/embroidery-design")
const { data: floss }: any = await useFetch<Floss[]>("/api/floss")

const flossList: any = computed(() => {
  return floss.value.map((f: any) => ({
    label: `${f.brand.brand_name.en} ${f.code}`,
    background: f.background,
    value: f.item_id,
  }))
})

const search = ref("")
const modalOpen = ref<boolean>(false)
const showModal = () => {
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
}

const formRef = ref<FormInstance>()
const designForm = reactive(initialForm())
const images = ref({ finished_image: null, pattern_image: null })

const formRules: Record<string, Rule[]> = {
  title: [
    { required: true, message: "Please enter design title", trigger: "change" },
    {
      min: 3,
      max: 30,
      message: "Length should be 3 to 30 characters",
      trigger: "blur",
    },
  ],
}

const filterOption = (input: string, option: any) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const finishedFileList = ref([])
const designFileList = ref([])
const loading = ref<boolean>(false)

const finishedImage = ref(null)
const finishedImageURL = ref("")
const finishedImagePreview = ref(false)
const designImage = ref(null)
const designImageURL = ref("")
const designImagePreview = ref(false)
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

// form functions
const handleFinishedImageChange = async (file: any) => {
  const reader = new FileReader()
  finishedImage.value = file.file.originFileObj
  reader.readAsDataURL(file.file.originFileObj)
  reader.onload = async (e: any) => {
    finishedImageURL.value = e.target?.result
  }
}
const handleFinishedImageRemove = () => {
  finishedImage.value = null
  finishedImageURL.value = ""
}
const handleFinishedPreview = () => {
  finishedImagePreview.value = true
}
const closeFinishedPreview = () => {
  finishedImagePreview.value = false
}

const handleDesignImageChange = async (file: any) => {
  const reader = new FileReader()
  designImage.value = file.file.originFileObj
  reader.readAsDataURL(file.file.originFileObj)
  reader.onload = async (e: any) => {
    designImageURL.value = e.target?.result
  }
}
const handleDesignImageRemove = () => {
  designImage.value = null
  designImageURL.value = ""
}
const handleDesignPreview = () => {
  designImagePreview.value = true
}
const closeDesignPreview = () => {
  designImagePreview.value = false
}

const uploadLoad = ref(false)

async function testModal() {
  //   if (newDesigns) {
  //     await data.value.unshift(newDesigns)
  //     Object.assign(designForm, initialForm())
  //     images.value = { finished_image: null, pattern_image: null }
  //     modalOpen.value = false
  //   }
  uploadLoad.value = true
  const formData = new FormData()
  formData.append("title", designForm.title)
  formData.append("floss", JSON.stringify(designForm.floss))
  if (designForm.booktitle) {
    formData.append("booktitle", designForm.booktitle)
  }
  if (designForm.websiteurl) {
    formData.append("websiteurl", designForm.websiteurl)
  }
  if (designForm.notes) {
    formData.append("notes", designForm.notes)
  }
  if (designForm.status) {
    formData.append("status_id", designForm.status.toString())
  }
  if (finishedImage.value) {
    formData.append("finishedimage", finishedImage.value)
  }
  if (designImage.value) {
    formData.append("designimage", designImage.value)
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
      images.value = { finished_image: null, pattern_image: null }
      Object.assign(designForm, initialForm())
      designImage.value = null
      designImageURL.value = ""
      finishedImage.value = null
      finishedImageURL.value = ""
      finishedFileList.value = []
      designFileList.value = []
      message.success("Design added!", 10)
    }
  } catch (error) {
    console.log(error)
  }
}

function initialForm() {
  return {
    title: "",
    floss: [],
    booktitle: undefined,
    websiteurl: undefined,
    notes: undefined,
    status: null as number | null,
  }
}

interface Design {
  id: number
  title: string
  finished_image: string
  pattern_image: string
  book_title: string
  website_url: string
  notes: string
  floss: Floss
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
