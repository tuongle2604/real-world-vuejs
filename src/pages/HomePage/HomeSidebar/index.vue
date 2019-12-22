<template>
  <div class="home-sidebar">
    <p class="home-sidebar__title">Popular Tags</p>
    <div class="home-sidebar__tag-wrapper">
      <ArticleTag :tagName="'javascript'" />
      <ArticleTag :tagName="'nodejs'" />
      <ArticleTag :tagName="'vuejs'" />
    </div>
  </div>
</template>

<script>
import ArticleTag from "@/components/ArticleTag";
export default {
  components: {
    ArticleTag
  }
};
</script>

<style lang="scss" scoped>
@import "./home-sidebar.scss";
</style>
