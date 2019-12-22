<template>
  <div class="article">
    <ArticleListTabs :tabs="tabs" />
    <div class="articles__list">
      <ArticleListCard />
      <ArticleListCard />
      <ArticleListCard />
      <ArticleListCard />
      <ArticleListCard />
      <ArticleListCard />
    </div>
    <ArticleListPagination :pagination="pagination" />
  </div>
</template>

<script>
import ArticleListCard from "./ArticleListCard";
import ArticleListTabs from "./ArticleListTabs";
import ArticleListPagination from "./ArticleListPagination";
export default {
  components: {
    ArticleListCard,
    ArticleListTabs,
    ArticleListPagination
  },
  data() {
    return {
      tabs: ["Global feed", "Your feed"],
      pagination: {
        total: 100,
        itemPerpage: 10
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./article-list.scss";
</style>
