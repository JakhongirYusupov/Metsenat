import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Login from "../views/Login.vue";
import SponsorDetail from "../views/SponsorDetail.vue";
import AddStudent from "../views/AddStudent.vue";
import StudentDetail from "../views/StudentDetail.vue";

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
    {
      path: "/create-student",
      name: "create new student",
      component: AddStudent,
    },
    {
      path: "/student/:id",
      name: "student detail page",
      component: StudentDetail,
    },
  ],
});

export default router;
