import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/mis",
    name: "Mis",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        name: "Student",
        path: "/student",
        component: () => import("../views/studentList.vue"),
      },
      {
        name: "Class",
        path: "/class",
        component: () => import("../views/classList.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
