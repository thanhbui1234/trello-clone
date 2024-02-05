<template>
  <div class="flex gap-1">
    <div class="dragbag">
      <section
        class="bg-[#F8F4F4] min-w-[250px] pt-4 pb-1 rounded-2xl box-border dragbagChild"
        ref="el1"
      >
        <span class="flex justify-between px-4">
          <h2>Chi Thanh123</h2>

          <a-popover v-model:open="visible" title="Title" trigger="click">
            <template #content>
              <a @click="hide">Close</a>
            </template>
            <span type="primary" @click="showModal">
              <p class="cursor-pointer hover:bg-gray-300 box-border px-1">
                <BarsOutlined />
              </p>
            </span>
          </a-popover>
        </span>
        <div
          v-for="item in list1"
          :key="item.id"
          class="cursor-move rounded p-3"
        >
          <div>
            <a-modal v-model:open="open" :title="item.name" @ok="handleOk">
              <MoDal></MoDal>
            </a-modal>
          </div>
          <div
            @click="showModal"
            class="bg-white px-4 py-2 rounded-lg text-gray-600 hover:border-blue-600 border"
          >
            {{ item.name }}
          </div>
        </div>
        <span class="flex gap-2 px-4 cursor-pointer">
          <p
            class="flex gap-2 w-[80%] px-4 py-1 rounded-md hover:bg-[#091e4224]"
          >
            <PlusOutlined /> Add a card
          </p>
          <p class="flex w-[25%] px-4 py-1 rounded-md hover:bg-[#091e4224">
            <IdcardOutlined />
          </p>
        </span>
      </section>
      <section
        class="bg-[#F8F4F4] min-w-[250px] pt-4 pb-1 rounded-2xl dragbagChild"
        ref="el2"
      >
        <span class="flex justify-between px-4">
          <h2>Chi Thanh</h2>
          <p class="cursor-pointer"><BarsOutlined /></p>
        </span>
        <div
          v-for="item in list2"
          :key="item.id"
          class="cursor-move h-30 rounded p-3"
        >
          <div
            class="bg-white px-4 py-2 rounded-lg text-gray-600 hover:border-blue-600 border"
          >
            {{ item.name }}
          </div>
        </div>
        <span class="flex gap-2 px-4 cursor-pointer">
          <p
            class="flex gap-2 w-[80%] px-4 py-1 rounded-md hover:bg-[#091e4224]"
          >
            <PlusOutlined /> Add a card
          </p>
          <p class="flex w-[25%] px-4 py-1 rounded-md hover:bg-[#091e4224">
            <IdcardOutlined />
          </p>
        </span>
      </section>
    </div>
    <div class="">
      <preview-list :list="list1" />
      <preview-list :list="list2" />
    </div>
    <AddVue />
  </div>
</template>
<script setup>
import MoDal from "../components/Modal.vue";
import AddVue from "./Add.vue";
import { ref } from "vue";
import { useDraggable } from "vue-draggable-plus";
import { vDraggable } from "vue-draggable-plus";
import "../assets/dragbag.scss";
import {
  BarsOutlined,
  PlusOutlined,
  IdcardOutlined,
} from "@ant-design/icons-vue";
const list1 = ref([
  {
    name: "Joao",
    id: "1",
  },
  {
    name: "Jean",
    id: "2",
  },
  {
    name: "Johanna",
    id: "3",
  },
  {
    name: "Juan",
    id: "4",
  },
]);
const list2 = ref(
  list1.value.map((item) => ({
    name: `${item.name}-2`,
    id: `${item.id}-2`,
  }))
);
const el1 = ref();
const el2 = ref();
const open = ref(false);
const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
useDraggable(el1, list1, {
  animation: 150,
  ghostClass: "ghost",
  group: "people",
  onUpdate: () => {
    console.log("update list1");
  },
  onAdd: () => {
    console.log("add list1");
  },
  remove: () => {
    console.log("remove list1");
  },
});
useDraggable(el2, list2, {
  animation: 150,
  ghostClass: "ghost",
  group: "people",
  onUpdate: () => {
    console.log("update list2");
  },
  onAdd: () => {
    console.log("add list2");
  },
  remove: () => {
    console.log("remove list2");
  },
});

const visible = ref(false);

const hide = () => {
  visible.value = false;
};
</script>
