<template>
  <a-popover v-model:open="visible" title="Title" trigger="click">
    <template #content>
      <a @click="hide"><MenuOutlined></MenuOutlined></a>
    </template>
    <a-button type="primary">Click me</a-button>
  </a-popover>
</template>
<script lang="ts" setup>
import { MenuOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
const visible = ref<boolean>(false);

const hide = () => {
  visible.value = false;
};
</script>
