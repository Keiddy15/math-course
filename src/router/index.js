import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layouts/AppLayout";
import Courses from "@/views/Courses";
import Home from "@/views/Home";
import Lessons from "@/views/Lessons";
import Contact from "@/views/Contact";
import Lesson from "@/views/Lesson";
import Games from "@/views/Games";
import Calculator from "@/views/games/Calculator";
import Dinosaur from "@/views/games/Dinosaur";
import FlappyBird from "@/views/games/FlappyBird";
import Operations from "@/views/games/Operations";
import Sum from "@/views/games/Sum";
import Memory from "@/views/games/Memory";
import BasicMath from "@/views/games/BasicMath";
import Crucigrama from "@/views/games/Crucigrama";
import NaturalNumbers from "@/views/games/NaturalNumbers";
import MathOperations from "@/views/games/MathOperations";
import Fracciones from "@/views/games/Fracciones";
import DivisionMultiplicacion from "@/views/games/DivisionMultiplicacion"

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
      {
        name: "Games",
        path: "/games",
        component: Games,
      },
      {
        name: "Calculator",
        path: "/game/calculator",
        component: Calculator,
      },
      {
        name: "Dinosaur",
        path: "/game/dinosaur",
        component: Dinosaur,
      },
      {
        name: "FlappyBird",
        path: "/game/flappybird",
        component: FlappyBird,
      },
      {
        name: "Operations",
        path: "/game/operations",
        component: Operations,
      },
      {
        name: "Sum",
        path: "/game/sum",
        component: Sum,
      },
      {
        name: "Memory",
        path: "/game/memory",
        component: Memory,
      },
      {
        name: "BasicMath",
        path: "/game/basicmath",
        component: BasicMath,
      },
      {
        name: "Crucigrama",
        path: "/game/crucigrama",
        component: Crucigrama,
      },
      {
        name: "NaturalNumbers",
        path: "/game/naturalnumbers",
        component: NaturalNumbers,
      },
      {
        name: "MathOperations",
        path: "/game/mathoperations",
        component: MathOperations,
      },
      {
        name: "Fracciones",
        path: "/game/fracciones",
        component: Fracciones,
      },
      {
        name: "DivisionMultiplicacion",
        path: "/game/divisionmultiplicacion",
        component: DivisionMultiplicacion,
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
