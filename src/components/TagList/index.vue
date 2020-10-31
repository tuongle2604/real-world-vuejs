<template>
  <div class="tag-list">
    <span class="tag-list__tag" v-for="tag in tagList" :key="tag"
      >{{ tag }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tagList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./tag-list.scss";
</style>
