<template>
  <div class="bg-white rounded-lg p-6" v-if="data">
    <a-list
      :grid="{ gutter: 1, column: 4 }"
      :data-source="filteredFloss"
      :pagination="pagination"
    >
      <template #renderItem="{ item }">
        <a-list-item
          ><a-card class="rounded-lg"
            ><div class="flex flex-row content-start">
              <div
                class="w-2/12 rounded-s-lg mr-2 border-r border-gray-100"
                :style="`background-color: rgb(${item.background})`"
              >
                &nbsp;
              </div>
              <div class="w-10/12 flex flex-row p-1">
                <div class="flex items-center w-9/12">
                  {{ item.brand?.brand_name?.en }} {{ item.code }}
                </div>
                <div class="flex items-center justify-end">
                  <a-button
                    type="link"
                    class="p-0 mb-1"
                    :class="{
                      'text-green-600': item.inv_qty !== 0,
                    }"
                    @click="updateInventory(item.item_id, item.inv_qty)"
                    ><Icon name="tabler:circle-check"
                  /></a-button>
                  <a-button
                    type="link"
                    class="p-0 mb-1"
                    :class="{
                      'text-pink-600': item.wish_qty !== 0,
                    }"
                    @click="updateWishlist(item.item_id, item.wish_qty)"
                    ><Icon name="tabler:heart"
                  /></a-button>
                  <a-button type="link" class="p-0 mb-1"
                    ><Icon name="tabler:info-circle"
                  /></a-button>
                </div>
              </div>
            </div>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue"

const { data } = await useFetch<Floss[]>("/api/floss")

definePageMeta({
  title: "Embroidery floss",
  category: "Crafts",
})

const search = ref("")
const brandSelect = ref<number[]>([])
const owned = ref("")
const wishlist = ref(false)
const pagination = {
  defaultPageSize: 100,
  showSizeChanger: false,
}

const filteredFloss: ComputedRef<Floss[]> = computed(() => {
  return data
    .value!.filter(
      (brand: any) =>
        !brandSelect.value.length || brandSelect.value.includes(brand.brand.id)
    )
    .filter((text: any) => text.code.includes(search.value))
    .filter(
      (inv: any) =>
        owned.value === "" ||
        (owned.value === "true" ? inv.inv_qty > 0 : inv.inv_qty === 0)
    )
})

const brands = computed(() => {
  const map = new Map(
    data.value!.map((brand: any) => [brand.brand.id, brand.brand])
  )
  return [...map.values()]
})

async function updateInventory(item_id: number, inv_qty: number) {
  const { data: invdata } = await useFetch<Floss>(`/api/floss//${item_id}`, {
    body: { inv_qty: inv_qty === 0 ? 1 : 0 },
    method: "PATCH",
  })
  const newArray = data.value!.map((p: any) =>
    p.item_id === item_id ? invdata.value : p
  )
  data.value = newArray
}

async function updateWishlist(item_id: number, wish_qty: number) {
  const { data: wishdata }: any = await useFetch<Floss>(
    `/api/floss//${item_id}`,
    {
      body: { wish_qty: wish_qty === 0 ? 1 : 0 },
      method: "PATCH",
    }
  )
  const newArray = data.value!.map((p: any) =>
    p.item_id === item_id ? wishdata.value : p
  )
  data.value = newArray
}

interface Floss {
  item_id: number
  code: string
  floss_name: Name
  brand: Brand
  order: number
  color: number
  background: string
  inv_qty: number
  wish_qty: number
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
