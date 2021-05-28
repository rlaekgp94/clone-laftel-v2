import { createRouter, createWebHistory } from "vue-router";
import TheMain from "../views/TheMain.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TheMain,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
