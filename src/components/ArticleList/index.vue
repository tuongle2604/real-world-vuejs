<template>
  <div class="article-list">
    <div class="" v-if="articles.length">
      <ArticlePreview
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </div>
    <div class="" v-else>
      <p class="mt-4">No articles are here... yet.</p>
    </div>
    <Pagination :pagination="pagination" @page-change="handlePageChange" />
  </div>
</template>

<script>
import ArticlePreview from "@/components/ArticlePreview";
import Pagination from "@/components/Pagination";

export default {
  components: {
    ArticlePreview,
    Pagination
  },
  props: {
    selectedTab: Object
  },
  data() {
    return {
      articles: [],
      pagination: {
        currentPage: 1,
        totalItems: 0,
        itemPerpage: 20
      }
    };
  },
  computed: {
    articlesParams() {
      return {
        ...this.selectedTab.params,
        limit: this.pagination.itemPerpage,
        offset: this.pagination.itemPerpage * (this.pagination.currentPage - 1)
      };
    }
  },
  watch: {
    selectedTab: {
      // immediate: true,
      handler() {
        this.resetPaging();
        this.getArticleList();
      }
    }
  },
  methods: {
    handlePageChange(page) {
      this.pagination.currentPage = page;
      this.getArticleList();
    },
    resetPaging() {
      this.pagination.currentPage = 1;
    },
    async getArticleList() {
      try {
        this.$loading.show();
        const { fetchData } = this.selectedTab;
        const { articles, articlesCount } = await fetchData(
          this.articlesParams
        );

        this.articles = articles;
        this.pagination.totalItems = articlesCount;
      } catch (e) {
        // handle error
      } finally {
        this.$loading.hide();
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
