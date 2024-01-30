<template>
  <div
    class="flex justify-between px-3 py-6 items-center bg-[#0c57b9] text-white"
  >
    Trello Workspace
    <GithubOutlined />
  </div>
  <a-menu
    class="border border-solid border-gray-500 sideBar"
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    :items="items"
    @click="handleClick"
  ></a-menu>
</template>
<script lang="ts" setup>
import "../assets/sidebar.scss";
import { reactive, ref, watch, VueElement, h } from "vue";
import {
  GithubOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps, ItemType } from "ant-design-vue";

const selectedKeys = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: "group"
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const items: ItemType[] = reactive([
  getItem("Bảng", "sub4", () => h(SettingOutlined)),
  getItem("Thành viên", "sub2", () => h(AppstoreOutlined)),

  getItem("Cài đặt không gian làm việc", "sub4", () => h(SettingOutlined), [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Navigation Three", "sub4", () => h(SettingOutlined), [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Navigation Three", "sub4", () => h(SettingOutlined), [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),

  getItem(
    "Workplace views",
    "grp",
    null,
    [getItem("Bảng", "13"), getItem("Lịch", "14")],
    "group"
  ),
  getItem(
    "Your boards",
    "grp",
    null,
    [getItem("Bảng", "13"), getItem("Lịch", "14")],
    "group"
  ),
]);

const handleClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

watch(openKeys, (val) => {
  console.log("openKeys", val);
});
</script>
