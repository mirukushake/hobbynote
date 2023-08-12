<template>
  <!-- <div class="">
    <span class="flex flex-column gap-2 mb-5">
      <label for="title">Title</label>
      <InputText id="title" v-model="designForm.title" />
    </span>
    <span class="flex flex-column gap-2">
      <label for="finishedimage">Finished Image</label>
      <FileUpload
        mode="basic"
        name="finished[]"
        accept="image/*"
        @select="uploadFinished"
        @clear="clearFinished"
      />
      <div else>
        <Image :src="finishedImageURL" :image-style="{ width: '50%' }" />
      </div>
    </span>
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
    <span class="flex flex-column gap-2 mb-5">
      <label for="booktitle">Book title</label>
      <InputText id="booktitle" v-model="designForm.booktitle" />
    </span>
    <span class="flex flex-column gap-2 mb-5">
      <label for="websiteurl">Website</label>
      <InputText id="websiteurl" v-model="designForm.websiteurl" />
    </span>
    <span class="flex flex-column gap-2 mb-5">
      <label for="notes">Notes</label>
      <Textarea id="notes" rows="5" v-model="designForm.notes" />
    </span>
    <span class="flex flex-column gap-2 mb-5">
      <label for="status">Status</label>
      <SelectButton
        :options="status"
        option-label="label"
        option-value="value"
        v-model="designForm.status"
      />
    </span>
  </div> -->
  <div v-if="props.design">
    <h2>{{ props.design.title }}</h2>
    <div class="flex">
      <div class="col-6">
        <h3>Finished design</h3>
        <Image
          v-if="props.design.finished_image"
          :src="`http://localhost:4000/images/${props.design.finished_image}`"
          preview
          :image-style="{
            width: '100%',
            height: '180px',
            'border-radius': '6px 6px 0 0',
          }"
        />
      </div>
      <div class="col-6">
        <h3>Pattern</h3>
        <Image
          v-if="props.design.pattern_image"
          :src="`http://localhost:4000/images/${props.design.pattern_image}`"
          preview
          :image-style="{
            width: '100%',
            height: '180px',
            'border-radius': '6px 6px 0 0',
          }"
        />
      </div>
    </div>
    <h3>Floss</h3>
    <div v-if="props.design.floss.length > 0">
      <Chip
        v-for="color in props.design.floss"
        class="pl-0 pr-3 bg-transparent"
      >
        <span
          class="border-round-md w-2rem h-2rem flex align-items-center justify-content-center"
          :style="{ 'background-color': `rgb(${color.background})` }"
        ></span>
        <span
          class="ml-2 font-medium"
          :class="{ 'text-green-500': color.inv_qty > 0 ? true : false }"
          >{{ color.brand.brand_name.en }} {{ color.code }}
        </span>
      </Chip>
    </div>
    <h3>Source</h3>
    <div v-if="props.design.book_title">
      {{ props.design.book_title }}
    </div>
    <div v-else-if="props.design.website_url">
      {{ props.design.website_url }}
    </div>
    <div v-else>---</div>
    <h3>Status</h3>
    <div>
      {{ props.design.status ? props.design.status.code : "---" }}
    </div>
    <h3>Notes</h3>
    <div>
      {{ props.design.notes ? props.design.notes : "---" }}
    </div>
  </div>
  <div class="mt-2 text-right">
    <Button label="Edit" icon="far fa-edit" autofocus />
  </div>
</template>
<script setup lang="ts">
import { ref, PropType } from "vue"
import { storeToRefs } from "pinia"
import { useFlossStore } from "~/store/store"

const props = defineProps({
  design: {
    type: Object as PropType<Design>,
    required: true,
  },
})

const emit = defineEmits(["list"])
const sendList = () => emit("list", "hi!")

const flossStore = useFlossStore()
const { flossList } = storeToRefs(flossStore)

// const { data: design }: any = await useFetch<Design[]>(
//   `/api/embroidery-design/${props.id}`
// )

const designForm = ref({
  title: props.design?.title,
  floss: props.design.floss.map((f: any) => ({
    label: `${f.brand.brand_name.en} ${f.code}`,
    background: f.background,
    value: f.item_id,
  })),
  booktitle: props.design.book_title,
  websiteurl: props.design.website_url,
  notes: props.design.notes,
  status: props.design.status,
})

const finishedImage = ref(null)
const finishedImageURL = ref(
  `http://localhost:4000/images/${props.design.finished_image}`
)
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

const filteredFlossList = ref<any>([])

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

const updateLoad = ref(false)

// async function update() {
//   updateLoad.value = true
//   const formData = new FormData()
//   formData.append("title", designForm.value.title)
//   formData.append("floss", JSON.stringify(designForm.value.floss))
//   if (designForm.value.booktitle) {
//     formData.append("booktitle", designForm.value.booktitle)
//   }
//   if (designForm.value.websiteurl) {
//     formData.append("websiteurl", designForm.value.websiteurl)
//   }
//   if (designForm.value.notes) {
//     formData.append("notes", designForm.value.notes)
//   }
//   if (designForm.value.status) {
//     formData.append("status_id", designForm.value.status.toString())
//   }
//   if (finishedImage.value && finishedImageName.value) {
//     formData.append(
//       "finishedimage",
//       finishedImage.value,
//       finishedImageName.value
//     )
//   }
//   if (designImage.value && designImageName.value) {
//     formData.append("designimage", designImage.value, designImageName.value)
//   }
//   try {
//     const { data: newList, error }: any = await useFetch(
//       `/api/embroidery-design`,
//       {
//         method: "PATCH",
//         body: formData,
//       }
//     )

//     if (newList) {
//       data.value = newList
//       uploadLoad.value = false
//       designForm.value = {
//         title: "",
//         floss: [],
//         booktitle: undefined,
//         websiteurl: undefined,
//         notes: undefined,
//         status: null as number | null,
//       }
//       createDialog.value = false
//       showSuccess()
//       clearDesign()
//       clearFinished()
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

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
