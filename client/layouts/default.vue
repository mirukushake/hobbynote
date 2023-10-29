<template>
  <a-style-provider>
    <a-layout class="">
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        style="background-color: transparent"
      >
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          @click="clickMenuItem"
          theme="dark"
          class="h-screen fixed top-0 left-0 w-56 bg-sky-900"
        >
          <a-menu-item key="test">
            <user-outlined />
            <span>Test page</span>
          </a-menu-item>
          <a-menu-item key="pencils">
            <video-camera-outlined />
            <span>Colored pencils</span>
          </a-menu-item>
          <a-menu-item key="watercolor">
            <video-camera-outlined />
            <span>Watercolors</span>
          </a-menu-item>
          <a-menu-item key="floss">
            <upload-outlined />
            <span>Embroidery floss</span>
          </a-menu-item>
          <a-menu-item key="designs">
            <upload-outlined />
            <span>Embroidery designs</span>
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
