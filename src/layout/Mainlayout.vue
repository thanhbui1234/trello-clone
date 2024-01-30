<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import "../assets/board.index.scss";
</script>
<template>
  <div class="container border border-solid border-gray-500">
    <Navbar></Navbar>
    <div class="boardContainer">
      <div class="boardSideBar">
        <Sidebar></Sidebar>
      </div>
      <div class="boardContent">
        <div class="boardHead">
          <div class="text-red-500">TEST</div>
          <div>cáds</div>
        </div>
        <div class="boardHome">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainLayout",
  components: { Navbar, Sidebar },
};
</script>
