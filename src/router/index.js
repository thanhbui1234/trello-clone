import { createRouter, createWebHistory } from "vue-router";
import Mainlayout from "../layout/Mainlayout.vue";
import Home from "../Views/Home.vue";

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: Mainlayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
