<template>
  <div class="profile-banner">
    <div class="container">
      <div class="col-lg-10 offset-lg-1 col-md-12">
        <div class="profile-banner__avatar-wrapper">
          <img src="https://static.productionready.io/images/smiley-cyrus.jpg" class="profile-banner__avatar">
        </div>
        <h2 class="profile-banner__user-name">Tuong Le</h2>
        <div class="d-flex justify-content-end">
          <router-link :to="{ name: 'Settings' }" class="profile-banner__edit-profile">
            <font-awesome-icon icon="cog" class="profile-banner__edit-profile__icon" />
            Edit profile setting
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "./profile-banner.scss";
</style>
