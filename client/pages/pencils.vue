<template>
  <h2>Colored pencils</h2>
  <div class="flex flex-column">
    <div class="col-12">
      <Panel header="Filters" toggleable>
        <template #icons
          ><span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="search"
              placeholder="Search"
              class="mr-1"
            /> </span
        ></template>
        <div
          v-for="brand of brands"
          :key="brand.id"
          class="flex align-items-center"
        >
          <Checkbox
            v-model="brandSelect"
            :inputId="brand.brand_name.en"
            name="brand"
            :value="brand.id"
          />
          <label :for="brand.brand_name.en">{{ brand.brand_name.en }}</label>
        </div>
        <div class="flex flex-wrap gap-3">
          <div class="flex align-items-center">
            <RadioButton
              v-model="owned"
              inputId="ingredient1"
              name="pizza"
              value=""
            />
            <label for="ingredient1" class="ml-2">All</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="owned"
              inputId="ingredient2"
              name="pizza"
              value="true"
            />
            <label for="ingredient2" class="ml-2">Owned</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="owned"
              inputId="ingredient3"
              name="pizza"
              value="false"
            />
            <label for="ingredient3" class="ml-2">Not owned</label>
          </div>
        </div>
      </Panel>
    </div>
    <div class="dataview">
      <DataView
        :value="filteredPencils"
        layout="grid"
        data-key="item_id"
        v-if="filteredPencils.length > 0"
        paginator
        :rows="100"
      >
        <template #grid="slotProps">
          <div class="col-3 p-2">
            <div
              class="border-1 surface-border border-round flex"
              :class="{
                'bg-green-50': slotProps.data.inv_qty != +0,
              }"
            >
              <div
                class="col-2 border-round-left border-right-1 surface-border"
                :style="
                  'background-color: rgb(' + slotProps.data.background + ' )'
                "
              ></div>
              <div class="col-10">
                <div class="flex align-items-center justify-content-between">
                  <div class="">
                    {{ slotProps.data.brand.brand_name.en }}
                    {{ slotProps.data.code }}
                  </div>
                  <div class="">
                    <Button
                      icon="fa-regular fa-circle-check"
                      text
                      rounded
                      aria-label="Add to inventory"
                      :class="{
                        'text-green-500': slotProps.data.inv_qty !== 0,
                      }"
                      @click="
                        updateInventory(
                          slotProps.data.item_id,
                          slotProps.data.inv_qty
                        )
                      "
                    />
                    <Button
                      icon="fa-regular fa-heart"
                      text
                      rounded
                      aria-label="Add to wishlist"
                      :class="{
                        'text-pink-500': slotProps.data.wish_qty !== 0,
                      }"
                      @click="
                        updateWishlist(
                          slotProps.data.item_id,
                          slotProps.data.wish_qty
                        )
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue"

const search = ref("")
const brandSelect = ref<number[]>([])
const owned = ref("")

const { data } = await useFetch<Pencil[]>("/api/pencils")

const filteredPencils: ComputedRef<Pencil[]> = computed(() => {
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
