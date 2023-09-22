<template>
  <div class="bg-white rounded-lg p-6" v-if="data">
    <a-list :grid="{ gutter: 1, column: 4 }" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card hoverable style="width: 240px" class="rounded-xl">
            <template #cover>
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            </template>
            <a-card-meta title="Card title" class="p-4">
              <template #description>yo</template>
            </a-card-meta>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue"

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

      clearDesign()
      clearFinished()
    }
  } catch (error) {
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
  console.log(JSON.stringify(designForm.value.floss))
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
