import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

Vue.use(VueRouter);
const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/LoginPage")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../pages/RegisterPage")
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "HomePage",
    component: () => import("../pages/HomePage")
  },
  {
    path: "/article",
    name: "Article",
    component: () => import("../pages/ArticlePage")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../pages/SettingsPage")
  },
  {
    path: "/profile/:userName",
    name: "Profile",
    component: () => import("../pages/ProfilePage")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../pages/ProfilePage")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
