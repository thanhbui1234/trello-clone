<template>
  <div class="containerNav border-b border-gray-500">
    <a-menu
      v-model:selectedKeys="current"
      mode="horizontal"
      :items="items"
      class=""
    />
    <div class="navRight">
      <a-space class="" direction="vertical">
        <a-input class="search" v-model:value="value" placeholder="Tìm kiếm" />
      </a-space>
      <BellOutlined />
      <a-avatar style="background-color: #87d068">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";

import { h, ref } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuOutlined,
  BarChartOutlined,
  DownOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

import { watch } from "vue";
const value = ref<string>("");
import { MenuProps } from "ant-design-vue";
const visible = ref<boolean>(false);
const hide = () => {
  visible.value = false;
};
watch(value, () => {
  console.log(value.value);
});

const current = ref<string[]>(["mail"]);
const items = ref<MenuProps["items"]>([
  {
    key: "Menu",
    icon: () => h(MenuOutlined),
    label: "",
    title: "Menu",
  },
  {
    key: "mail",
    icon: () => h(BarChartOutlined),
    label: "Trello",
    title: "Navigation One",
  },
  {
    key: "app",
    icon: () => h(DownOutlined),
    label: "Các không gian làm việc",
    title: "Navigation Two",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "sub1",
    icon: () => h(DownOutlined),

    label: "Gần đây",

    title: "Navigation Three - Submenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: "Đã đánh dấu sao",
    title: "Navigation Four - Link",
    icon: () => h(DownOutlined),
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "Mãu",
    label: "Mẫu",
    icon: () => h(DownOutlined),

    title: "Navigation Four - Link",
    children: [
      {
        label: "Option 3",
        key: "setting:3",
      },
      {
        label: "Option 4",
        key: "setting:4",
      },
    ],
  },
  {
    key: "Tạo mới",
    label: "Tạo mới",
    title: "Navigation Four - Link",
  },
]);
</script>
