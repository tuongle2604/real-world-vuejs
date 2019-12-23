<template>
  <div class="container-md header">
    <router-link class="header__brand" :to="{ path: '/' }">
      <img src="@/assets/logo.png" class="header__brand-image" />
      <span class="header__brand-name">Realworld</span>
    </router-link>

    <!-- dropdown menu icon in mobile -->
    <span class="header__dropdown-icon-wrapper" @click="isExpand = !isExpand">
      <font-awesome-icon icon="bars" class="header__dropdown-icon-bar"/>
    </span>

    <ul class="header__navbar" :class="{'expand': isExpand}">
      <li class="header__navbar-item">
        <router-link to="/home" class="header__navbar-item__link" @click.native="colapseMenu">
          Home
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/article" class="header__navbar-item__link" @click.native="colapseMenu">
          New Article
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/settings" class="header__navbar-item__link" @click.native="colapseMenu">
          <font-awesome-icon icon="cog" class="header__navbar-item__icon" />
          Settings
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/profile/tuongle" class="header__navbar-item__link" @click.native="colapseMenu">
          Tuong Le
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/login" class="header__navbar-item__link" @click.native="colapseMenu">
          Signin
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/register" class="header__navbar-item__link" @click.native="colapseMenu">
          Signup
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpand: false
    }
  },
  methods: {
    colapseMenu() {
      this.isExpand = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "header.scss";
</style>
