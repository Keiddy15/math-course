import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layouts/AppLayout";
import HomeView from "@/views/HomeView";
import Lessons from "@/views/Lessons";
import Contact from "@/views/Contact";

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        name: "HomeView",
        path: "",
        component: HomeView,
      },
      {
        name: "Lessons",
        path: "/lessons/:course",
        component: Lessons,
      },
      {
        name: "Contact",
        path: "/contact",
        component: Contact,
      },
    ],
  },
  {
    path: "/",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
