import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import About from "../components/AboutPage.vue";

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Hello World",
    component: HelloWorld
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: routerHistory,
  routes
});

export default router;
