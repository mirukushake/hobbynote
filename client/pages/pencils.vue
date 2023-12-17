<template>
  <div class="bg-white rounded-lg p-6" v-if="data">
    <div class="mb-8">
      <a-checkbox-group
        v-model:value="brandSelect"
        name="checkboxgroup"
        :options="brands"
      />
      <a-input v-model:value="search" placeholder="search" />
      <a-radio-group v-model:value="owned">
        <a-radio-button value="owned">Owned</a-radio-button>
        <a-radio-button value="unowned">Unowned</a-radio-button>
        <a-radio-button value="">All</a-radio-button>
      </a-radio-group>
      <a-checkbox v-model:checked="wishlist">Wishlist</a-checkbox>
      <br />
    </div>
    <a-list
      :grid="{ gutter: 1, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }"
      :data-source="filteredPencils"
      :pagination="pagination"
    >
      <template #renderItem="{ item }">
        <a-list-item
          ><a-card
            class="rounded-lg"
            :class="{
              'bg-green-50': item.inv_qty !== 0,
            }"
            ><div class="flex flex-row content-start">
              <div
                class="w-2/12 rounded-s-lg mr-2 border-r border-gray-100"
                :style="`background-color: rgb(${item.background})`"
              >
                &nbsp;
              </div>
              <div class="w-10/12 flex flex-row p-1">
                <div class="flex flex-col w-9/12">
                  {{ item.brand.brand_name.en }} {{ item.code }}
                  <div class="text-xs">
                    {{
                      item.pencil_name?.en
                        ? item.pencil_name?.en
                        : item.pencil_name?.ja
                    }}
                  </div>
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

definePageMeta({
  title: "Colored Pencils",
  category: "Arts",
})

const search = ref("")
const brandSelect = ref<number[]>([])
const owned = ref("")
const wishlist = ref(false)
const editDialog = ref(false)
const pencil = ref<any>(null)

const pagination = {
  defaultPageSize: 99,
  showSizeChanger: false,
}

const { data } = await useFetch<Pencil[]>("/api/pencils")

const filteredPencils: ComputedRef<Pencil[]> = computed(() => {
  return data
    .value!.filter(
      (brand: any) =>
        !brandSelect.value.length || brandSelect.value.includes(brand.brand.id)
    )
    .filter(
      (text: any) =>
        text.pencil_name &&
        (text.pencil_name?.en
          .toLowerCase()
          .includes(search.value.toLowerCase()) ||
          text.pencil_name?.ja.includes(search.value))
    )
    .filter(
      (inv: any) =>
        owned.value === "" ||
        (owned.value === "owned" ? inv.inv_qty > 0 : inv.inv_qty === 0)
    )
    .filter(
      (inv: any) =>
        owned.value === "" ||
        (owned.value === "unowned" ? inv.inv_qty === 0 : inv.inv_qty > 0)
    )
    .filter(
      (inv: any) =>
        wishlist.value === false ||
        (wishlist.value === true ? inv.wish_qty > 0 : inv.wish_qty === 0)
    )
})

const brands = computed(() => {
  const map = new Map(
    data.value!.map((brand: any) => [brand.brand.id, brand.brand.brand_name.en])
  )
  return [...map].map(([key, value]) => ({ label: value, value: key }))
})

async function updateInventory(item_id: number, inv_qty: number) {
  const { data: invdata } = await useFetch<Pencil>(`/api/pencils/${item_id}`, {
    body: { inv_qty: inv_qty === 0 ? 1 : 0 },
    method: "PATCH",
  })
  const newArray = data.value!.map((p: any) =>
    p.item_id === item_id ? invdata.value : p
  )
  data.value = newArray
}

async function updateWishlist(item_id: number, wish_qty: number) {
  const { data: wishdata }: any = await useFetch<Pencil>(
    `/api/pencils//${item_id}`,
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

interface Pencil {
  item_id: number
  code: string
  pencil_name: Name
  brand: Brand
  order: number
  color: number
  rgb: any
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
  en?: string
  ja?: string
}
</script>
