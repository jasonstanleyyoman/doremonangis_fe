import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../pages/Index.vue";
import Store from "../pages/Store.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Index },
  { path: "/store/:id", component: Store },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

export default router;
