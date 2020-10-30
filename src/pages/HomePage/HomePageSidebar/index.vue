<template>
  <div class="home-sidebar">
    <p class="home-sidebar__title">Popular Tags</p>
    <div class="home-sidebar__tag-wrapper" v-if="tags.length">
      <ArticleTag
        v-for="tag in tags"
        :tagName="tag"
        :key="tag"
        @click.native="$emit('select-tag', tag)"
      />
    </div>
    <div v-else>
      <p v-if="isLoading">Loading tags...</p>
      <p v-else>No tags are here... yet</p>
    </div>
  </div>
</template>

<script>
import { getTags } from "@/api";
import ArticleTag from "@/components/ArticleTag";

export default {
  components: {
    ArticleTag
  },
  data() {
    return {
      tags: [],
      isLoading: false
    };
  },
  created() {
    this.getTagList();
  },
  methods: {
    async getTagList() {
      try {
        this.isLoading = true;
        const { tags } = await getTags();
        this.tags = tags;
      } catch (err) {
        // handle error
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./home-page-sidebar.scss";
</style>
