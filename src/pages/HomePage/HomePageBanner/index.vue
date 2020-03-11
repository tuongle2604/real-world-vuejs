<template>
  <div class="home-banner" @click="test">
    <h1 class="home-banner__title">Realworld Vuejs</h1>
    <p class="home-banner__description">A place to share your knowledge.</p>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log(this);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./home-page-banner.scss";
</style>
