<template>
  <h2>Colored pencils</h2>
  <div>
    <DataView data-key="pencils.item_id" :value="pencils" layout="grid">
      <template #grid="slotProps">
        <div class="w-12rem p-2">
          <div class="border-1 surface-border surface-card border-round flex">
            <div
              class="col-2"
              :style="
                'background-color: rgb(' +
                slotProps.data.rgb.r +
                ',' +
                slotProps.data.rgb.g +
                ',' +
                slotProps.data.rgb.b +
                ' )'
              "
            ></div>
            <div class="col-10">
              <div class="flex justify-content-start">
                {{ slotProps.data.brand.brand_name.en }}
                {{ slotProps.data.code }}
              </div>
              <div class="flex justify-content-start">
                <Button
                  icon="fa-solid fa-check"
                  text
                  rounded
                  aria-label="Minus"
                  size="small"
                />
                <Button
                  icon="fa-solid fa-heart"
                  text
                  rounded
                  aria-label="Minus"
                  size="small"
                />
                <Button
                  icon="fa-solid fa-cart-arrow-down"
                  text
                  rounded
                  aria-label="Minus"
                  size="small"
                />
                <Button
                  icon="fa-solid fa-info"
                  text
                  rounded
                  aria-label="Minus"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup lang="ts">
const pencils = [
  {
    item_id: 3743826,
    code: "205",
    rgb: { r: 235, g: 234, b: 100 },
    pencil_name: { en: "cadmium yellow lemon", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 8263725,
    code: "105",
    rgb: { r: 255, g: 231, b: 62 },
    pencil_name: { en: "light cadmium yellow", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 3743826,
    code: "205",
    rgb: { r: 235, g: 234, b: 100 },
    pencil_name: { en: "cadmium yellow lemon", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 8263725,
    code: "105",
    rgb: { r: 255, g: 231, b: 62 },
    pencil_name: { en: "light cadmium yellow", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 3743826,
    code: "205",
    rgb: { r: 235, g: 234, b: 100 },
    pencil_name: { en: "cadmium yellow lemon", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 8263725,
    code: "105",
    rgb: { r: 255, g: 231, b: 62 },
    pencil_name: { en: "light cadmium yellow", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 3743826,
    code: "205",
    rgb: { r: 235, g: 234, b: 100 },
    pencil_name: { en: "cadmium yellow lemon", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 8263725,
    code: "105",
    rgb: { r: 255, g: 231, b: 62 },
    pencil_name: { en: "light cadmium yellow", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 3743826,
    code: "205",
    rgb: { r: 235, g: 234, b: 100 },
    pencil_name: { en: "cadmium yellow lemon", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 8263725,
    code: "105",
    rgb: { r: 255, g: 231, b: 62 },
    pencil_name: { en: "light cadmium yellow", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 3743826,
    code: "205",
    rgb: { r: 235, g: 234, b: 100 },
    pencil_name: { en: "cadmium yellow lemon", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
  {
    item_id: 8263725,
    code: "105",
    rgb: { r: 255, g: 231, b: 62 },
    pencil_name: { en: "light cadmium yellow", ja: "" },
    brand: { id: 4834, brand_name: { en: "Polychromos", ja: "ポリクロモス" } },
  },
]
</script>
