import { defineStore, skipHydrate } from "pinia"
import { Pigment } from "@/models/models"

export const useFlossStore = defineStore("floss", () => {
  const floss = ref<any>([])

  const flossList: any = computed(() => {
    return floss.value.map((f: any) => ({
      label: `${f.brand.brand_name.en} ${f.code}`,
      background: f.background,
      value: f.item_id,
    }))
  })

  async function getFloss() {
    const { data } = await useFetch("api/floss")
    if (data.value) {
      floss.value = data.value
    }
  }

  return { floss, flossList, getFloss }
})

export const usePigmentStore = defineStore("pigments", () => {
  const pigments = ref<Pigment[]>([])

  async function getPigments() {
    const { data } = await useFetch<Pigment[]>("api/pigments")
    if (data.value) {
      pigments.value = data.value
    }
  }

  return { pigments, getPigments }
})
