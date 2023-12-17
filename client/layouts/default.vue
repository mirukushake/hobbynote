<template>
  <a-style-provider>
    <a-layout class="">
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        style="background-color: transparent"
        class="max-md:-mr-40"
      >
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          @click="clickMenuItem"
          theme="dark"
          class="h-screen fixed top-0 left-0 w-20 md:w-56 bg-sky-900"
        >
          <a-menu-item key="test">
            <Icon name="tabler:test-pipe" size="17" class="mr-1" />
            <span>Test page</span>
          </a-menu-item>
          <a-divider />
          <a-menu-item key="pencils">
            <Icon class="visible md:hidden" name="tabler:pencil" />
            <span class="">Colored pencils</span>
          </a-menu-item>
          <a-menu-item key="watercolor">
            <Icon class="visible md:hidden" name="tabler:droplet" />
            <span class="">Watercolors</span>
          </a-menu-item>
          <a-menu-item key="pigments">
            <Icon class="visible md:hidden" name="tabler:color-filter" />
            <span class="">Pigments</span>
          </a-menu-item>
          <a-divider />
          <a-menu-item key="floss">
            <Icon class="visible md:hidden" name="tabler:needle-thread" />
            <span class="">Embroidery floss</span>
          </a-menu-item>
          <a-menu-item key="designs">
            <Icon class="visible md:hidden" name="tabler:notebook" />
            <span class="">Embroidery designs</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout class="min-h-screen">
        <a-layout-header style="background-color: transparent">
          <a-page-header
            :title="route.meta.title"
            :sub-title="route.meta.category"
          />
        </a-layout-header>
        <a-layout-content class="m-6">
          <slot />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-style-provider>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue"
import { ref, computed } from "vue"
const route = useRoute()
const router = useRouter()
const state = reactive({
  openKeys: [] as string[],
  selectedKeys: [route.name] as string[],
})

const clickMenuItem = ({ key }: any) => {
  router.push({ name: key })
}

const collapsed = ref(false)
const selectedKeys = ref<string[]>(["1"])
const menuItems = ref([
  {
    type: "group",
    label: "Arts",
    children: [
      { label: "Colored pencils", to: "/pencils" },
      { label: "Watercolors", to: "/watercolor" },
    ],
  },
  {
    type: "group",
    label: "Crafts",
    children: [
      { label: "Embroidery floss", to: "/floss" },
      { label: "Fabric", to: "/fabric" },
    ],
  },
  {
    type: "group",
    label: "Patterns",
    children: [
      { label: "Embroidery", to: "/designs" },
      { label: "Sewing", to: "/sewing" },
    ],
  },
])

const visible = ref(false)
</script>
