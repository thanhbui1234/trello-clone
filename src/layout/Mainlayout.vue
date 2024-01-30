<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import NavHead from "../components/NavHead.vue";
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
        <div class="">
          <NavHead></NavHead>
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
  components: { Navbar, Sidebar, NavHead },
};
</script>
