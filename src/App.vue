<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />

    <notifications group="notify" />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
<style lang="scss">
@import "@/scss/global.scss";
</style>
