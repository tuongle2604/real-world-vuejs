<template>
  <div class="login-page container">
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
      <h1 class="login-page__title">Sign in</h1>
      <router-link class="login-page__link" :to="{ path: '/register' }">
        Need an account ?
      </router-link>

      <div>
        <ServerErrorMessage
          :errors="errors"
          v-if="Object.keys(errors).length"
        />
        <VuelidateMessage :v="$v" v-else />
      </div>

      <div class="login-form">
        <BaseInput
          class="login-page__input"
          :placeholder="'Email'"
          v-model="email"
        />
        <BaseInput
          class="login-page__input"
          :placeholder="'Password'"
          :type="'password'"
          v-model="password"
        />

        <BaseButton class="login-page__button" @click="onSubmit">
          Sign In
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import VuelidateMessage from "@/components/Common/VuelidateMessage";
import ServerErrorMessage from "@/components/Common/ServerErrorMessage";
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
  components: {
    VuelidateMessage,
    ServerErrorMessage
  },
  data() {
    return {
      email: "",
      password: "",
      errors: {}
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required }
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    onSubmit() {
      this.errors = {};
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.handleLogin();
      }
    },
    async handleLogin() {
      try {
        const data = this.getLoginData();
        await this.login(data);
        this.$router.push({ name: "HomePage" });
      } catch (res) {
        this.errors = res.errors;
        this.$v.$reset();
      }
    },
    getLoginData() {
      return {
        user: {
          email: this.email,
          password: this.password
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./login-page.scss";
</style>
