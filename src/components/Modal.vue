<script setup>
import {
  EyeOutlined,
  BarsOutlined,
  UserOutlined,
  HighlightOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  DeploymentUnitOutlined,
  DingtalkOutlined,
  PlusOutlined,
  ArrowRightOutlined,
  CopyOutlined,
  AndroidOutlined,
  FacebookOutlined,
  ShareAltOutlined,
} from "@ant-design/icons-vue";
</script>
<template>
  <div class="flex gap-5">
    <div class="w-[75%] flex gap-6 flex-col">
      <div class="ml-5">
        <p>Notifications</p>
        <span
          class="flex gap-2 bg-[#e4e6ea] h-8 px-2 rounded-sm w-[90px] cursor-pointer hover:bg-[#d0d4db] text-[#172B4D]"
        >
          <p class="">
            <EyeOutlined />
          </p>
          <p class="mt-1">Watch</p>
        </span>
      </div>
      <div class="flex gap-3 flex-col">
        <span class="flex gap-3"
          ><BarsOutlined class="mt-1" />
          <p class="">Description</p></span
        >

        <input
          class="outline-none bg-[#e4e6ea] hover:bg-[#d0d4db] h-12 rounded-lg pb-4 pl-2 text-b"
          placeholder="Add a more detailed description..."
          type="text"
        />
      </div>
      <div class="flex gap-3 justify-between">
        <span class="flex gap-3"
          ><BarsOutlined class="mt-1" />
          <p class="">Description</p></span
        >
        <span
          class="flex gap-2 bg-[#e4e6ea] rounded-sm w-[90px] h-8 px-1 cursor-pointer hover:bg-[#d0d4db] text-[#172B4D]"
        >
          <p class="mt-1">Show details</p>
        </span>
      </div>
      <div class="flex gap-2">
        <UserOutlined class="text-2xl" />

        <input
          class="outline-none bg-[#e4e6ea] hover:bg-[#d0d4db] w-full h-12 rounded-lg pb-4 pl-2 text-b"
          placeholder="Add a more detailed description..."
          type="text"
        />
      </div>
    </div>
    <div class="w-[25%] flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <p>Add to card</p>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm"
        >
          <UserOutlined class="text-l mt-1" />
          <p class="text-l">Members</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm cursor-pointer"
        >
          <HighlightOutlined class="text-l mt-1" />
          <p class="text-l">Labels</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm cursor-pointer"
        >
          <CheckCircleOutlined class="text-l mt-1" />
          <p class="text-l">Checklists</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm cursor-pointer"
        >
          <ClockCircleOutlined class="text-l mt-1" />
          <p class="text-l">Dates</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm cursor-pointer"
        >
          <DeploymentUnitOutlined class="text-l mt-1" />
          <p class="text-l">Attachment</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm cursor-pointer"
        >
          <DingtalkOutlined class="text-l mt-1" />
          <p class="text-l">Cover</p>
        </span>
      </div>
      <div class="flex flex-col gap-2">
        <p>Power-Ups</p>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm"
        >
          <PlusOutlined class="text-l mt-1" />
          <p class="text-l">Add Power-Ups</p>
        </span>
      </div>
      <div class="flex flex-col gap-2">
        <p>Automation</p>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm"
        >
          <PlusOutlined class="text-l mt-1" />
          <p class="text-l">Add Button</p>
        </span>
      </div>
      <div class="flex flex-col gap-2">
        <p>Actions</p>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm"
        >
          <ArrowRightOutlined class="text-l mt-1" />
          <p class="text-l">Move</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm"
        >
          <CopyOutlined class="text-l mt-1" />
          <p class="text-l">Coppy</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm"
        >
          <AndroidOutlined class="text-l mt-1" />
          <p class="text-l">Make template</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm"
        >
          <FacebookOutlined class="text-l mt-1" />
          <p class="text-l">Archive</p>
        </span>
        <span
          class="flex gap-3 bg-[#e4e6ea] hover:bg-[#d0d4db] text-[#172B4D] py-1 px-1 h-8 rounded-sm"
        >
          <ShareAltOutlined class="text-l mt-1" />
          <p class="text-l">Share</p>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
