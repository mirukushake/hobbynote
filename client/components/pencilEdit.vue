<template>
  <div v-if="props.pencil">
    <h2 class="flex flex-nowrap flex-row">
      <span
        class="border-round-md w-2rem h-2rem flex align-items-center justify-content-center mr-2"
        :style="{ 'background-color': `${props.pencil.pencil_color}` }"
      ></span>
      <span class="">
        {{ props.pencil.brand.en[0].brand_name }}
        {{ props.pencil.series.en[0].series_name }} {{ props.pencil.code }}
      </span>
    </h2>
    <div>Inventory / wishlist</div>
    {{ props.pencil }}
    <h3>Color</h3>
    {{ props.pencil.color }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  pencil: {
    type: Object,
    required: true,
  },
})
</script>
