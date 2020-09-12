import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import FirstPage from "@/views/FirstPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: Home
  },
  {
    path: "/questions/:question",
    exact: true,
    component: FirstPage
  },
  {
    path: "/lose",
    name: "game over",
    component: () => import("@/views/Lose")
  },
  {
    path: "/pre-final",
    name: "Pre final",
    component: () => import("@/views/PreFinal")
  },
  {
    path: "/final",
    name: "final",
    component: () => import("@/views/Final")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
