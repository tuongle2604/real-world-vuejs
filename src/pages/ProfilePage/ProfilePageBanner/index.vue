<template>
  <div class="profile-banner">
    <div class="container">
      <div class="col-lg-10 offset-lg-1 col-md-12">
        <div class="profile-banner__avatar-wrapper">
          <img
            :src="profile.image || require('@/assets/smiley-cyrus.jpg')"
            class="profile-banner__avatar"
          />
        </div>
        <h2 class="profile-banner__user-name">{{ profile.username }}</h2>
        <p class="profile-banner__bio">{{ profile.bio }}</p>
        <div class="d-flex justify-content-end">
          <router-link
            v-if="profile.username === user.username"
            :to="{ name: 'SettingsPage' }"
            class="profile-banner__edit-profile"
          >
            <font-awesome-icon
              icon="cog"
              class="profile-banner__edit-profile__icon"
            />
            Edit profile setting
          </router-link>
          <a
            v-else
            class="profile-banner__edit-profile"
            href="javascript:;"
            @click="$emit('toggleFollow', profile)"
          >
            <font-awesome-icon
              icon="plus"
              class="profile-banner__edit-profile__icon"
            />
            {{ profile.following ? "Unfollow" : "Follow" }}
            {{ profile.username }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    profile: Object
  },
  computed: {
    ...mapState("auth", ["user"])
  }
};
</script>

<style lang="scss" scoped>
@import "./profile-page-banner.scss";
</style>
