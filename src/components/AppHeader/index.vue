<template>
  <div class="container header">
    <router-link class="header__brand" :to="{ path: '/' }">
      <img src="@/assets/logo.png" class="header__brand-image" />
      <p class="header__brand-name">Realworld</p>
    </router-link>
    <ul class="header__navbar">
      <li class="header__navbar-item">
        <router-link to="/home" class="header__navbar-item__link">
          Home
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/article" class="header__navbar-item__link">
          New Article
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/settings" class="header__navbar-item__link">
          <font-awesome-icon icon="cog" class="header__navbar-item__icon" />
          Settings
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/profile/tuongle" class="header__navbar-item__link">
          Tuong Le
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/login" class="header__navbar-item__link">
          Signin
        </router-link>
      </li>
      <li class="header__navbar-item">
        <router-link to="/register" class="header__navbar-item__link">
          Signup
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "header.scss";
</style>
