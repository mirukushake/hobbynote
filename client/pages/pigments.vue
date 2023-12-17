<template>
  <div class="bg-white rounded-lg p-6">
    <a-tabs v-model:activeKey="activeKey" tabPosition="left">
      <a-tab-pane
        v-for="color in pigmentList"
        :key="color.order"
        :tab="color.color_name"
        ><a-list item-layout="horizontal" :data-source="sorted[color.id]">
          <template #renderItem="{ item }">
            <a-list-item class="list-item">
              <a-list-item-meta>
                <template #title>
                  <span class="text-xl font-bold"> {{ item.code }}</span>
                </template>
              </a-list-item-meta>

              <div class="text-lg font-bold mb-3 text-gray-500">
                Single pigment
              </div>

              <div
                v-for="paint in item.watercolors.filter(
              (p: any) => p.pigments.length === 1
            )"
                class="mb-3"
              >
                <span
                  class="font-semibold"
                  :class="{
                    'border-b-4 border-green-400': paint.inv_qty !== 0,
                  }"
                  >{{ paint.brand.brand_name.en }}
                  {{
                    paint.paint_name.en
                      ? paint.paint_name.en
                      : paint.paint_name.ja
                  }}</span
                >
                <div>
                  <span
                    v-for="pigment in paint.pigments"
                    class="mr-2 last:mr-0"
                  >
                    {{ pigment.code }}
                  </span>
                </div>
              </div>

              <div class="text-lg font-bold mb-3 text-gray-500 mt-12">
                Multiple pigment
              </div>
              <div
                v-for="paint in item.watercolors.filter(
              (p: any) => p.pigments.length > 1
            )"
                class="mb-3"
              >
                <span
                  class="font-semibold"
                  :class="{
                    'border-b-4 border-green-400': paint.inv_qty !== 0,
                  }"
                  >{{ paint.brand.brand_name.en }}
                  {{
                    paint.paint_name.en
                      ? paint.paint_name.en
                      : paint.paint_name.ja
                  }}</span
                >
                <div>
                  <span
                    v-for="pigment in paint.pigments"
                    class="mr-2 last:mr-0"
                  >
                    {{ pigment.code }}
                  </span>
                </div>
              </div>
            </a-list-item>
          </template>
        </a-list>
        <a-back-top
      /></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Pigment } from "@/models/models"

definePageMeta({
  title: "Pigments",
  category: "Art",
})

const { data } = await useFetch<Pigment[]>("/api/pigments")

const activeKey = ref("1")
const pigmentList = [
  {
    color_name: "magenta",
    order: 1,
    id: 5548,
    color: null,
  },
  {
    color_name: "red",
    order: 2,
    id: 1303,
    color: null,
  },
  {
    color_name: "orange",
    order: 4,
    id: 2467,
    color: null,
  },
  {
    color_name: "earth",
    order: 5,
    id: 5939,
    color: null,
  },
  {
    color_name: "yellow",
    order: 6,
    id: 743,
    color: null,
  },
  {
    color_name: "green",
    order: 7,
    id: 3599,
    color: null,
  },
  {
    color_name: "blue",
    order: 8,
    id: 6894,
    color: null,
  },
  {
    color_name: "violet",
    order: 11,
    id: 9776,
    color: null,
  },
  {
    color_name: "brown",
    order: 13,
    id: 4129,
    color: null,
  },
  {
    color_name: "black",
    order: 14,
    id: 1004,
    color: null,
  },
  {
    color_name: "grey",
    order: 15,
    id: 6865,
    color: null,
  },
  {
    color_name: "white",
    order: 16,
    id: 5789,
    color: null,
  },
  {
    color_name: "silver",
    order: 17,
    id: 7723,
    color: null,
  },
  {
    color_name: "gold",
    order: 18,
    id: 8618,
    color: null,
  },
]

const sorted = computed(() => {
  const groupByKey = (_data: any, _key: any) => {
    return _data.reduce((result: any, next: any) => {
      const key = next[_key]
      result[key] = result[key]?.length ? [...result[key], next] : [next]
      return result
    }, {})
  }

  return groupByKey(data.value, "color_id")
})
</script>
