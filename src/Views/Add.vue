<template>
  <div class="container_home">
    <div>
      <div class="pt-5 pl-5" @click="toggleVisibility" v-if="isVisible">
        <div
          class="bg-[#519ee2] py-3 px-2 cursor-pointer rounded-lg w-[240px] text-white hover:bg-[#318bdb]"
        >
          + Add a list
        </div>
      </div>
      <div class="pl-5 bg-[#F8F4F4] min-w-[280px] pb-1 rounded-2xl" v-else>
        <div class="flex justify-between mt-4">
          <VueDraggable
            v-model="list"
            :animation="150"
            handle=".handle"
            class="flex flex-col gap-2 w-300px rounded"
          >
            <span class="flex justify-between px-4">
              <h2 class="pt-4">Chi Thanh123</h2>
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
            <div class="addDragBag">
              <div
                v-for="(item, index) in list"
                :key="item.id"
                class="rounded flex items-center justify-between px-4 mb-3"
              >
                <IconSort class="handle cursor-move"></IconSort>
                <input
                  class="w-[220px] outline-none rounded-md h-8 pl-3"
                  type="text"
                  v-model="item.name"
                />
                <iconClose
                  class="cursor-pointer"
                  @click="remove(index)"
                ></iconClose>
              </div>
            </div>
          </VueDraggable>
          <preview-list :list="list" />
        </div>
        <span class="flex gap-2 px-5 cursor-pointer">
          <p
            @click="handleAdd"
            class="flex gap-2 w-[80%] px-4 py-1 rounded-md hover:bg-[#091e4224]"
          >
            <PlusOutlined /> + Add a card
          </p>
          <p class="flex w-[25%] px-4 py-1 rounded-md hover:bg-[#091e4224">
            <IdcardOutlined />
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import "../assets/add.scss";
import {
  IdcardOutlined,
  PlusOutlined,
  BarsOutlined,
} from "@ant-design/icons-vue";
import { VueDraggable } from "vue-draggable-plus";
export default {
  setup() {
    const list = ref([]);
    const handleAdd = () => {
      const length = list.value.length + 1;
      list.value.push({
        name: `Juan ${length}`,
        id: `${length}`,
      });
    };

    const remove = (index) => {
      list.value.splice(index, 1);
    };
    const inputValue = ref("");
    let isVisible = ref(true);
    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
      console.log(isVisible.value);
    };

    return {
      inputValue,
      isVisible,
      toggleVisibility,
      list,
      handleAdd,
      remove,
    };
  },
};
</script>
