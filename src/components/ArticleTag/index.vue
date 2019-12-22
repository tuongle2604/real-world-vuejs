<template>
  <span class="article-tag">{{ tagName }}</span>
</template>

<script>
export default {
  props: {
    tagName: String
  }
};
</script>

<style lang="scss" scoped>
@import "./article-tag.scss";
</style>
