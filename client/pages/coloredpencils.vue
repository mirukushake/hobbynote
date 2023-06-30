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
        {{ test }}
      </Panel>
    </div>
    <div>
      <DataView
        :value="filteredPencils"
        layout="grid"
        data-key="item_id"
        v-if="filteredPencils.length > 0"
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
                :style="'background-color: rgb(' + slotProps.data.rgb + ' )'"
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
import { storeToRefs } from "pinia"
import { usePencilStore } from "@/store/store"

const search = ref("")
const pencilStore = usePencilStore()
const { fetchPencils, updateInventory, updateWishlist } = pencilStore
const pencilList = storeToRefs(pencilStore).pencilList
const test = ref({})

await fetchPencils()
await nextTick()

const filteredPencils = computed(() => {
  return pencilList.value.filter((val) => val.code.includes(search.value))
})
</script>
