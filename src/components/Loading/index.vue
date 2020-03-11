<template>
  <div
    v-show="loading"
    v-bind:class="loadingClass"
    v-bind:style="{ backgroundColor: bc }"
  >
    <div class="loading-circle"></div>
    <!-- <p class="loading-text">{{ text }}</p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "Loading",
      dark: true,
      loading: false,
      isFullScreent: true
    };
  },
  computed: {
    bc() {
      return (
        this.background ||
        (this.dark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)")
      );
    },
    loadingClass() {
      const loadingType = this.isFullScreent
        ? "loading-fullscreen"
        : "loading-component";

      return loadingType;
    }
  }
};
</script>
<style scoped lang="scss">
@import "./loading.scss";
</style>
