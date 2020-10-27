<template>
  <div class="container settings-page">
    <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
      <ServerErrorMessage
        :errors="errors"
        v-if="errors && Object.keys(errors).length"
      />

      <h1 class="settings-page__title">Your Settings</h1>
      {{ user.bio }}
      <div class="settings-page__form">
        <BaseInput
          class="settings-page__input small"
          v-model="user.image"
          :placeholder="'URL of profile picture'"
        />
        <BaseInput
          v-model="user.username"
          class="settings-page__input"
          :placeholder="'username'"
        />
        <BaseInput
          v-model="user.bio"
          class="settings-page__input "
          :isTextArea="true"
          :type="'textarea'"
          :rows="8"
          :placeholder="'Short bio about you'"
        />
        <BaseInput
          v-model="user.email"
          class="settings-page__input"
          :placeholder="'Email'"
        />
        <BaseInput
          v-model="password"
          class="settings-page__input"
          :placeholder="'New Password'"
        />

        <BaseButton class="settings-page__update-btn" @click="handleUpdateUser">
          Update Settings
        </BaseButton>
      </div>

      <BaseButton class="settings-page__logout-btn" @click="handleLogOut">
        Or click here to log out
      </BaseButton>
    </div>
  </div>
</template>

<script>
import ServerErrorMessage from "@/components/Common/ServerErrorMessage";
import { getUser, updateUser } from "@/api";
import { mapActions } from "vuex";

export default {
  components: {
    ServerErrorMessage
  },
  data() {
    return {
      errors: {},
      user: {},
      password: ""
    };
  },
  created() {
    this.handleGetUser();
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async handleGetUser() {
      try {
        const { user } = await getUser();
        const { email, username, bio, image } = user;
        this.user = { email, username, bio, image };
      } catch (res) {
        this.errors = res.errors;
        this.user = {};
      }
    },
    async handleUpdateUser() {
      try {
        const data = this.getUpdateUserData();
        await updateUser(data);

        this.$router.push({ name: "HomePage" });
      } catch (res) {
        this.errors = res.errors;
      }
    },
    getUpdateUserData() {
      const userInfo = this.password
        ? { ...this.user, password: this.password }
        : this.user;

      return { user: userInfo };
    },
    async handleLogOut() {
      await this.logout();
      this.$router.push({ name: "HomePage" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./settings-page.scss";
</style>
