import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import TokenService from "@/helper/tokenService";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ArticleCreatePage from "@/pages/ArticleCreatePage";
import ArticleEditPage from "@/pages/ArticleCreatePage";
import ArticlePage from "@/pages/ArticlePage";
import SettingsPage from "@/pages/SettingsPage";
import ProfilePage from "@/pages/ProfilePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage
  },
  {
    path: "/article-create",
    name: "ArticleCreatePage",
    component: ArticleCreatePage,
    meta: { requiresAuth: true }
  },
  {
    path: "/article-edit/:slug",
    name: "ArticleEditPage",
    component: ArticleEditPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: "/article/:slug",
    name: "ArticlePage",
    component: ArticlePage
  },
  {
    path: "/settings",
    name: "SettingsPage",
    component: SettingsPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/profile/:username",
    name: "ProfilePage",
    component: ProfilePage
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
