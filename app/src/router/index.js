import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/TheMain.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/TheLogin.vue"),
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/email-login",
    name: "email-login",
    component: () => import("../views/TheEmailLogin.vue"),
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/api-login",
    name: "api-login",
    component: () => import("../views/TheApiLogin.vue"),
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/email-join",
    name: "email-join",
    component: () => import("../views/TheEmailJoin.vue"),
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/email-join/email-join-forms",
    name: "email-join-forms",
    component: () => import("../views/TheEmailJoinForms.vue"),
    meta: { hideHeader: true, hideFooter: true },
  },
  {
    path: "/login/email-join/email-join-forms/email-join-verification",
    name: "email-join-verification",
    component: () => import("../views/TheEmailJoinVerification.vue"),
    meta: { hideHeader: true, hideFooter: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
