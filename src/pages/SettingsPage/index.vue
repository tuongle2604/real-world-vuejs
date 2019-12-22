<template>
  <div class="container settings-page">
    <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
      <h1 class="settings-page__title">Your Settings</h1>
      <div class="settings-page__form">
        <BaseInput
          class="settings-page__input"
          :className="'base-input--small'"
          :placeholder="'URL of profile picture'"
        />
        <BaseInput
          class="settings-page__input"
          :placeholder="'Username'"
        />
        <BaseInput
          class="settings-page__input "
          :type="'textarea'"
          :rows="8"
          :placeholder="'Short bio about you'"
        />
        <BaseInput class="settings-page__input" :placeholder="'Email'" />
        <BaseInput class="settings-page__input" :placeholder="'New Password'" />

        <BaseButton class="register-page__button">
          Update Settings
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
@import "./settings-page.scss";
</style>
