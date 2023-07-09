<template>
  <h2>Embroidery patterns</h2>
  <div class="flex flex-column">
    <div class="flex col-12">
      <div class="col-3 p-2 gallery">
        <Card>
          <template #header>
            <div
              :style="{
                background: '#ccc',
                width: '100%',
                height: '180px',
                overflow: 'hidden',
              }"
              class="flex justify-content-center"
            >
              <Image
                src="images/Screenshot - 2023-06-23 21.06.30.png"
                preview
                :image-style="{
                  'object-position': 'top',
                  'object-fit': 'cover',
                  width: '100%',
                  height: '180px',
                }"
              /></div
          ></template>
          <template #title>Elegant flowers</template>
          <template #content>
            <div class="mb-3">
              <div class="gallerymeta">Pattern</div>
              <div>image</div>
            </div>
            <div class="mb-1">
              <div class="gallerymeta">Source</div>
              <div>annas tiny animals</div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-3 p-2">test</div>
    </div>
    <div>
      <!-- <DataView
        :value="tempGallery"
        layout="grid"
        data-key="id"
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
                    />
                    <Button
                      icon="fa-regular fa-heart"
                      text
                      rounded
                      aria-label="Add to wishlist"
                      :class="{
                        'text-pink-500': slotProps.data.wish_qty !== 0,
                      }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView> -->
      <SpeedDial
        direction="up"
        :style="{ left: 'calc(95% - 2rem)', bottom: '2rem' }"
        :rotate-animation="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from "vue"
import { useToast } from "primevue/usetoast"

const toast = useToast()

const search = ref("")
const owned = ref("")
const tempGallery = [
  {
    id: 8432874329,
  },
]

const menu = ref([
  {
    label: "Add",
    icon: "pi pi-pencil",
    command: () => {
      toast.add({ severity: "info", summary: "Add", detail: "Data Added" })
    },
  },
])

const { data } = await useFetch("/api/pencils")
</script>
