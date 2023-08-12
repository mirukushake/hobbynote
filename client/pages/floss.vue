<template>
  <h2>Embroidery floss</h2>
  <div class="flex flex-column" v-if="data">
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
            :inputId="brand.id"
            name="brand"
            :value="brand.id"
          />
          <label :for="brand">{{ brand.en[0]?.brand_name }}</label>
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
    <div class="dataview" v-if="filteredFloss">
      <DataView
        :value="filteredFloss"
        layout="grid"
        data-key="item_id"
        paginator
        :rows="150"
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
                :style="`background-color: ${slotProps.data.floss_color}`"
              ></div>
              <div class="col-10">
                <div class="flex align-items-center justify-content-between">
                  <div class="">
                    {{ slotProps.data.brand?.en[0]?.brand_name }}
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
                          slotProps.data.id,
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
                          slotProps.data.id,
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
import Floss from "~/graphql/queries/floss.gql"
import updateFloss from "~/graphql/mutations/updatefloss.gql"
import { FlossQuery } from "~/types/gql/graphql"

const { data } = await useAsyncQuery<FlossQuery>(Floss)

const search = ref("")
const brandSelect = ref<number[]>([])
const owned = ref("")

const filteredFloss: ComputedRef<any> = computed(() => {
  return data.value.floss
    .filter(
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
    data.value.floss.map((brand: any) => [brand.brand?.id, brand.brand])
  )
  return [...map.values()]
})

const { mutate: update, error: updateError } = useMutation(updateFloss)

async function updateInventory(id: string, inv_qty: number) {
  const obj = data.value.floss.find((obj) => {
    return obj.id === id
  })

  if (obj !== undefined) {
    obj.inv_qty = inv_qty === 0 ? 1 : 0
  }

  const newInfo = await update({
    id: id,
    input: { inv_qty: inv_qty === 0 ? 1 : 0 },
  })

  if (!newInfo && obj !== undefined) {
    obj.inv_qty = inv_qty
  }
  console.log(updateError)
}

async function updateWishlist(id: string, wish_qty: number) {
  const obj = data.value.floss.find((obj) => {
    return obj.id === id
  })

  if (obj !== undefined) {
    obj.wish_qty = wish_qty === 0 ? 1 : 0
  }

  const newInfo = await update({
    id: id,
    input: { wish_qty: wish_qty === 0 ? 1 : 0 },
  })

  if (!newInfo && obj !== undefined) {
    obj.wish_qty = wish_qty
  }
  console.log(updateError)
}
</script>
