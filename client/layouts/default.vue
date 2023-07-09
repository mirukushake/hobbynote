<template>
  <div class="container">
    <nav class="layout-nav">
      <button
        class="p-link layout-menu-button layout-topbar-button"
        @click="visible = !visible"
      >
        <i class="pi pi-bars"></i>
      </button>
      <NuxtLink to="/">hobbynote</NuxtLink>
    </nav>
    <aside class="layout-sidebar" v-if="!visible">
      <div><Menu :model="menuItems" /></div>
    </aside>
    <Sidebar v-model:visible="visible" class="mobile-sidebar">
      <div><Menu :model="menuItems" /></div>
    </Sidebar>
    <div class="layout-content">
      <div class="layout-main"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
const menuItems = ref([
  {
    label: "Arts",
    items: [
      { label: "Colored pencils", to: "/pencils" },
      { label: "Watercolors", to: "/watercolor" },
    ],
  },
  {
    label: "Crafts",
    items: [
      { label: "Embroidery floss", to: "/floss" },
      { label: "Fabric", to: "/fabric" },
    ],
  },
  {
    label: "Projects",
    items: [
      { label: "Embroidery", to: "/embroidery" },
      { label: "Sewing", to: "/sewing" },
    ],
  },
  {
    label: "Tools",
    items: [{ label: "Wishlist", to: "/wishlist" }],
  },
])

const visible = ref(false)
</script>
