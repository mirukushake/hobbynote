<template>
  <div class="bg-white rounded-lg p-6">Hi</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const active = ref(0)
definePageMeta({
  title: "Some Page",
  category: "Test",
})
</script>
