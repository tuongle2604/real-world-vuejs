<template>
  <div class="container-md header">
    <router-link class="header__brand" :to="{ name: 'HomePage' }">
      <img src="@/assets/logo.png" class="header__brand-image" />
      <span class="header__brand-name">Realworld</span>
    </router-link>

    <!-- dropdown menu icon in mobile -->
    <span class="header__dropdown-icon-wrapper" @click="isExpand = !isExpand">
      <font-awesome-icon icon="bars" class="header__dropdown-icon-bar" />
    </span>

    <ul class="header__navbar" :class="{ expand: isExpand }">
      <li
        class="header__navbar-item"
        v-for="item in displayNavBar"
        :key="item.name"
      >
        <router-link
          :to="{ name: item.name, params: item.params }"
          class="header__navbar-item__link"
          :class="{ active: checkRouteIsActive(item.name) }"
          @click.native="colapseMenu"
        >
          <font-awesome-icon
            v-if="item.icon"
            :icon="item.icon"
            class="header__navbar-item__icon"
          />
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      isExpand: false
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapGetters("auth", ["isAuth"]),
    displayNavBar() {
      const navbar = [
        {
          name: "HomePage",
          label: "Home"
        },
        {
          name: "LoginPage",
          label: "Sign in",
          icon: "user-edit"
        },
        {
          name: "RegisterPage",
          label: "Sign up",
          icon: "user-edit"
        }
      ];

      const authNavbar = [
        {
          name: "HomePage",
          label: "Home"
        },
        {
          name: "ArticleCreatePage",
          label: "New Post",
          icon: "pencil-alt"
        },
        {
          name: "SettingsPage",
          label: "Settings",
          icon: "cog"
        },
        {
          name: "ProfilePage",
          icon: "user",
          label: this.user.username,
          params: {
            username: this.user.username
          }
        }
      ];

      return this.isAuth ? authNavbar : navbar;
    }
  },
  methods: {
    colapseMenu() {
      this.isExpand = false;
    },
    checkRouteIsActive(routeName) {
      return routeName === this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "header.scss";
</style>
