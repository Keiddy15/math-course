import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layouts/AppLayout";
import Courses from "@/views/Courses";
import Home from "@/views/Home";
import Lessons from "@/views/Lessons";
import Contact from "@/views/Contact";
import Lesson from "@/views/Lesson";

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        name: "Home",
        path: "",
        component: Home,
      },
      {
        name: "Courses",
        path: "/courses",
        component: Courses,
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
      {
        name: "Lesson",
        path: "/lessons/:course/:lesson",
        component: Lesson,
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
