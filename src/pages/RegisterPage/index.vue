<template>
  <div class="register-page container">
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
      <h1 class="register-page__title">Sign up</h1>
      <router-link class="register-page__link" :to="{ path: '/login' }">
        Have an account ?
      </router-link>
      <div class="register-page__form">
        <BaseInput class="register-page__input" :placeholder="'Username'" />
        <BaseInput class="register-page__input" :placeholder="'Email'" />
        <BaseInput class="register-page__input" :placeholder="'Password'" />

        <BaseButton class="register-page__button">
          Sign up
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
@import "./register-page.scss";
</style>
