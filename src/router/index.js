import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("../views/Project.vue"),
  },
  {
    path: "/order_form",
    name: "order_form",
    component: () => import("../views/OrderForm.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
