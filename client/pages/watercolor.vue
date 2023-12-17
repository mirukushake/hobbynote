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
      <a-select
        v-model:value="pigmentSelect"
        mode="multiple"
        style="width: 50%"
        placeholder="Pigments"
        :options="pigments"
        :field-names="{ label: 'code', value: 'id' }"
        :filter-option="filterOption"
        id="watercolor"
      ></a-select>
    </div>
    <a-list
      :grid="{ gutter: 1, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }"
      :data-source="filteredWatercolor"
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
              <div class="w-2/12 rounded-s-lg mr-2 border-r border-gray-100">
                <img
                  v-if="item.swatch"
                  alt="swatch"
                  :src="`https://storage.googleapis.com/hobbynote/${item.swatch}`"
                  class="object-fill h-full w-fit rounded-l-lg"
                />
              </div>
              <div class="w-10/12 flex flex-row p-1">
                <div class="flex flex-col w-9/12">
                  {{ item.brand?.brand_name?.en }}
                  <div class="text-xs">
                    {{
                      item.paint_name?.en
                        ? item.paint_name?.en
                        : item.paint_name?.ja
                    }}
                  </div>
                  <div>
                    <span
                      v-for="pigment in item.pigments"
                      class="mr-2 last:mr-0"
                      >{{ pigment.code }}
                    </span>
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
                  <a-button
                    type="link"
                    class="p-0 mb-1"
                    @click="selectWatercolor(item.item_id)"
                    ><Icon name="tabler:info-circle"
                  /></a-button>
                </div>
              </div>
            </div>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
    <!-- <DynamicScroller
      :items="filteredWatercolor"
      :item-size="54"
      :grid-items="4"
      :item-secondary-size="200"
      key-field="item_id"
    >
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[item.pigments]"
          :data-index="index"
        >
          <div class="border border-gray-600 col-span-2">
            {{ item.brand?.brand_name?.en }}
          </div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller> -->
    <a-modal
      v-model:open="dialog"
      title="Watercolor info"
      @ok="handleOk"
      @cancel="handleOk"
      width="50%"
      :destroy-on-close="true"
    >
      <WatercolorInfo v-if="selectedID" :item_id="selectedID" />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { Watercolor } from "@/models/models"
import { usePigmentStore } from "~/store/store"

const { data, refresh } = await useFetch<Watercolor[]>("/api/watercolor")
const { pigments, getPigments } = usePigmentStore()

await getPigments()

definePageMeta({
  title: "Watercolor",
  category: "Art",
})

const search = ref("")
const brandSelect = ref<number[]>([])
const pigmentSelect = ref([])
const owned = ref("")
const wishlist = ref(false)
const pagination = {
  defaultPageSize: 99,
  showSizeChanger: false,
}

const dialog = ref(false)
const selectedID = ref<number | null>(null)

const filteredWatercolor: ComputedRef<Watercolor[]> = computed(() => {
  return data
    .value!.filter(
      (brand: any) =>
        !brandSelect.value.length || brandSelect.value.includes(brand.brand.id)
    )
    .filter(
      (pigment: any) =>
        !pigmentSelect.value.length ||
        pigment.pigments.some((item: any) =>
          pigmentSelect.value.includes(item.id)
        )
    )
    .filter(
      (text: any) =>
        text.paint_name &&
        (text.paint_name?.en
          .toLowerCase()
          .includes(search.value.toLowerCase()) ||
          text.paint_name?.ja.includes(search.value))
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
  const { data: invdata } = await useFetch<Watercolor>(
    `/api/watercolor/${item_id}`,
    {
      body: { inv_qty: inv_qty === 0 ? 1 : 0 },
      method: "PATCH",
    }
  )
  const newArray = data.value!.map((p: any) =>
    p.item_id === item_id ? invdata.value : p
  )
  data.value = newArray
}

async function updateWishlist(item_id: number, wish_qty: number) {
  const { data: wishdata }: any = await useFetch<Watercolor>(
    `/api/watercolor/${item_id}`,
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

async function handleOk() {
  await refresh()
  dialog.value = false
}

async function selectWatercolor(item_id: number) {
  selectedID.value = item_id
  dialog.value = true
}

const filterOption = (input: string, option: any) => {
  return option.code.toLowerCase().indexOf(input.toLowerCase()) >= 0
}
const watercolor = ref(null)
const { width } = useElementBounding(watercolor)
</script>
