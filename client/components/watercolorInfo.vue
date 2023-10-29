<template>
  <div class="flex flex-row" v-if="data">
    <div class="w-6/12">
      <img
        alt="example"
        :src="`https://storage.googleapis.com/hobbynote/${data.swatch}`"
        class=""
      />
    </div>
    <div>
      <div class="text-xl font-bold">
        {{ data.brand?.brand_name.en }}
        {{ data.code }}
      </div>
      <div class="text-lg font-bold">
        {{ data.paint_name?.en ? data.paint_name?.en : data.paint_name?.ja }}
      </div>
      <div class="text-lg font-bold">Pigments</div>
      <div v-if="selectedPigments">
        <a-select
          v-model:value="selectedPigments"
          mode="multiple"
          style="width: 50%"
          placeholder="Pigments"
          :options="pigments"
          :field-names="{ label: 'code', value: 'id' }"
          :filter-option="filterOption"
        ></a-select>
        <a-button @click="updatePigments">Save</a-button>
      </div>
      {{ data }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, PropType } from "vue"
import { storeToRefs } from "pinia"
import { usePigmentStore } from "~/store/store"
import { Watercolor, Pigment } from "@/models/models"

const props = defineProps<{
  item_id: number | null
}>()

// watch(
//   () => props.item_id,
//   (newValue, oldValue) => {
//     if (newValue !== oldValue) {
//       updateWatercolor(newValue)
//     }
//     console.log(newValue)
//   }
// )

const data = ref<any>({})
const { pigments } = usePigmentStore()
const selectedPigments = ref<any>([])

updateWatercolor(props.item_id)

async function updateWatercolor(item_id: number | null) {
  const { data: newWatercolor } = await useFetch<Watercolor>(
    `/api/watercolor/${item_id}`
  )
  if (newWatercolor) {
    data.value = newWatercolor.value
    const map = newWatercolor.value?.pigments.map((pigment: any) => pigment.id)
    selectedPigments.value = map
  }
}

async function updatePigments() {
  const watercolor = await $fetch<Watercolor>(
    `/api/watercolor/${data.value.item_id}`,
    {
      body: { pigments: selectedPigments.value },
      method: "PATCH",
    }
  )

  data.value = watercolor
  const map = watercolor?.pigments.map((pigment: any) => pigment.id)
  selectedPigments.value = map
}

const filterOption = (input: string, option: any) => {
  return option.code.toLowerCase().indexOf(input.toLowerCase()) >= 0
}
</script>
