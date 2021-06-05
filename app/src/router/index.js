import { createRouter, createWebHistory } from "vue-router";
import TheMain from "../views/TheMain.vue";
import TheLogin from "../views/TheLogin.vue";
import TheEmailJoin from "../views/TheEmailJoin.vue";
import TheEmailJoinForms from "../views/TheEmailJoinForms.vue";
import TheEmailJoinVerification from "../views/TheEmailJoinVerification.vue";

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
    path: "/login/email-join",
    name: "email-join",
    component: TheEmailJoin,
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/email-join/email-join-forms",
    name: "email-join-forms",
    component: TheEmailJoinForms,
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/email-join/email-join-forms/email-join-verification",
    name: "email-join-verification",
    component: TheEmailJoinVerification,
    meta: { hideHeader: true, hideFooter: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
