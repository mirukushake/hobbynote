import { defineStore, skipHydrate } from "pinia"

export const usePencilStore = defineStore("pencil", {
  state: () => {
    return {
      // for initially empty lists
      pencilList: [] as Pencil[],
    }
  },
  actions: {
    async fetchPencils() {
      const { data }: any = await useFetch("http://localhost:4000/pencils")
      this.pencilList = data
    },
    async addInventory() {},
  },
})

interface Pencil {
  item_id: number
  code: string
  pencil_name: Name
  brand: Brand
  order: number
  color: number
  rgb: string
  inventory: number | null
  wishlist: number | null
}

interface Brand {
  id: number
  country_id: number
  brand_name: Name
}

interface Name {
  en?: string
  ja?: string
}
