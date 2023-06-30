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
      const { data }: any = await useFetch("/api/pencils")
      this.pencilList = data
    },
    async updateInventory(item_id: number, inv_qty: number) {
      const { data }: any = await useFetch(`/api/pencils//${item_id}`, {
        body: { inv_qty: inv_qty === 0 ? 1 : 0 },
        method: "PATCH",
      })
      const newArray = this.pencilList.map((p) =>
        p.item_id === item_id ? data.value : p
      )
      this.pencilList = newArray
    },
    async updateWishlist(item_id: number, wish_qty: number) {
      const { data }: any = await useFetch(`/api/pencils//${item_id}`, {
        body: { wish_qty: wish_qty === 0 ? 1 : 0 },
        method: "PATCH",
      })
      const newArray = this.pencilList.map((p) =>
        p.item_id === item_id ? data.value : p
      )
      this.pencilList = newArray
    },
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
  inv_qty: number
  wish_qty: number
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
