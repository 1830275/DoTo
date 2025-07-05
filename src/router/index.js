import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import FaqPage from "../pages/FaqPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/faq", name: "Faq", component: FaqPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
