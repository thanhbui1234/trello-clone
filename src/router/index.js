import { createRouter, createWebHistory } from "vue-router";
import Mainlayout from "../layout/Mainlayout.vue";
import Add from "../Views/Add.vue";
import Dragbag from "../Views/Dragbag.vue";

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: Mainlayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Dragbag,
      },
      {
        path: "dragbag",
        name: "dragbag",
        component: Add,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
