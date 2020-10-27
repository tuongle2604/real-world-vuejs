<template>
  <div class="register-page container">
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
      <h1 class="register-page__title">Sign up</h1>
      <router-link class="register-page__link" :to="{ path: '/login' }">
        Have an account ?
      </router-link>

      <div>
        <ServerErrorMessage
          :errors="errors"
          v-if="Object.keys(errors).length"
        />
        <VuelidateMessage :v="$v" v-else />
      </div>

      <div class="register-page__form">
        <BaseInput
          class="register-page__input"
          :placeholder="'username'"
          v-trim-on-blur
          v-model="username"
        />
        <BaseInput
          class="register-page__input"
          :placeholder="'Email'"
          v-trim-on-blur
          v-model="email"
        />
        <BaseInput
          class="register-page__input"
          type="password"
          :placeholder="'Password'"
          v-model="password"
        />

        <BaseButton class="register-page__button" @click="onSubmit">
          Sign up
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import VuelidateMessage from "@/components/Common/VuelidateMessage";
import ServerErrorMessage from "@/components/Common/ServerErrorMessage";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  components: {
    VuelidateMessage,
    ServerErrorMessage
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: {}
    };
  },
  validations() {
    return {
      username: { usernameRequired: required },
      email: { required, email },
      password: { required, minLength: minLength(8) }
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    onSubmit() {
      this.errors = {};
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.handleRegister();
      }
    },
    async handleRegister() {
      try {
        const data = this.getSignUpData();
        await this.register(data);
        this.$router.push({ name: "HomePage" });
      } catch (res) {
        this.errors = res.errors;
        this.$v.$reset();
      }
    },
    getSignUpData() {
      return {
        user: {
          username: this.username,
          email: this.email,
          password: this.password
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./register-page.scss";
</style>
