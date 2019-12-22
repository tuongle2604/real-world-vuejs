<template>
  <div class="login-page container">
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
      <h1 class="login-page__title">Sign in</h1>
      <router-link class="login-page__link" :to="{ path: '/register' }">
        Need an account ?
      </router-link>
      <div class="login-form">
        <BaseInput class="login-page__input" :placeholder="'Email'" />
        <BaseInput class="login-page__input" :placeholder="'Password'" />

        <BaseButton class="login-page__button">
          Sign In
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/common/BaseInput";
import BaseButton from "@/components/common/BaseButton";

export default {
  components: {
    BaseInput,
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
@import "./login-page.scss";
</style>
