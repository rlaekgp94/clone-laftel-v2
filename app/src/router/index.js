import { createRouter, createWebHistory } from "vue-router";
import TheMain from "../views/TheMain.vue";
import TheLogin from "../views/TheLogin.vue";
import TheEmailLogin from "../views/TheEmailLogin.vue";
import TheApiLogin from "../views/TheApiLogin.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TheMain,
  },
  {
    path: "/login",
    name: "login",
    component: TheLogin,
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/email-login",
    name: "email-login",
    component: TheEmailLogin,
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/api-login",
    name: "api-login",
    component: TheApiLogin,
    meta: { hideHeader: true, hideFooter: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
