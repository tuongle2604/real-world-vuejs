import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import TokenService from "@/common/tokenService";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../pages/HomePage")
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../pages/LoginPage")
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: () => import("../pages/RegisterPage")
  },
  {
    path: "/article-create",
    name: "ArticleCreatePage",
    component: () => import("../pages/ArticleCreatePage"),
    meta: { requiresAuth: true }
  },
  {
    path: "/article/:slug",
    name: "ArticlePage",
    component: () => import("../pages/ArticlePage")
  },
  {
    path: "/settings",
    name: "SettingsPage",
    component: () => import("../pages/SettingsPage"),
    meta: { requiresAuth: true }
  },
  {
    path: "/profile/:username",
    name: "ProfilePage",
    component: () => import("../pages/ProfilePage")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const token = TokenService.getToken();
  const isAuth = store.getters["auth/isAuth"];
  const isInvalidRoute = ["/login", "/register"].includes(to.path);

  if (isAuth) {
    return isInvalidRoute ? next("/") : next();
  }

  if (token) {
    return store
      .dispatch("auth/checkAuth")
      .then(() => (isInvalidRoute ? next("/") : next()))
      .catch(() => next("/login"));
  }

  if (to.meta.requiresAuth) {
    return next("/login");
  }

  next();
});

export default router;
