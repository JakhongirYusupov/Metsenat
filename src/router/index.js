import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Login from "@/views/Login.vue";
import SponsorDetail from "@/views/SponsorDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login page",
      component: Login,
    },
    {
      path: "/sponsor/:id",
      name: "sponsor detail page",
      component: SponsorDetail,
    },
  ],
});

export default router;
