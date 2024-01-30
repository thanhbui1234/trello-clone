<script setup>
import {
  StarOutlined,
  UsergroupDeleteOutlined,
  DashboardOutlined,
  DownOutlined,
  BugOutlined,
  DingtalkOutlined,
  UserAddOutlined,
} from "@ant-design/icons-vue";
</script>

<template>
  <div class="w-full boardHead">
    <div class="flex gap-5 cursor-pointer boradHead_left_head">
      <p class="text-white font-bold text-xl">Chi Thanh</p>
      <p class="text-white mt-1">
        <StarOutlined />
      </p>
      <p class="text-white mt-1">
        <UsergroupDeleteOutlined />
      </p>
      <p class="mt-1 bg-[#dfe1e6] py-1 px-3 rounded-sm hover:bg-white">Board</p>
      <p class="mt-1 text-white">
        <DownOutlined></DownOutlined>
      </p>
      <p></p>
    </div>
    <div class="flex gap-5 cursor-pointer boradHead_left_head">
      <p class="text-white font-bold text-xl">Chi Thanh</p>
      <p class="text-white">
        <BugOutlined />
      </p>
      <p class="text-white">
        <DingtalkOutlined />
      </p>
      <p class="bg-[#dfe1e6] py-1 px-3 rounded-sm hover:bg-white">Share</p>

      <p class="text-white">
        <DownOutlined></DownOutlined>
      </p>
      <p></p>
    </div>
  </div>
</template>

<script>
import "../assets/boardHead.scss";

export default {
  name: "Nav_Head",
};
</script>
