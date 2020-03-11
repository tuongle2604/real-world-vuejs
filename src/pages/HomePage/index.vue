<template>
  <div class="home-page">
    <HomePageBanner />
    <div class="container">
      <div class="row">
        <div class="col-md-9" ref="loading">
          <FeedToggle
            :tabs="tabs"
            :currentTab="currentTab"
            @select-tab="handleSelectTab"
          />
          <div class="home-page__article-list" v-if="articles.length">
            <ArticlePreview
              v-for="article in articles"
              :key="article.slug"
              :article="article"
            />
          </div>
          <div class="home-page__message" v-else>
            <p v-if="isArticlesLoading">Loading articles...</p>
            <p v-else>No articles are here... yet.</p>
          </div>
          <Pagination
            :pagination="pagination"
            @page-change="handlePageChange"
          />
        </div>
        <div class="col-md-3">
          <HomePageSidebar @select-tag="handleSelectTag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageBanner from "./HomePageBanner";
import HomePageSidebar from "./HomePageSidebar";
import FeedToggle from "@/components/FeedToggle";
import ArticlePreview from "@/components/ArticlePreview";
import Pagination from "@/components/Pagination";
import { getArticles, getFeeds } from "@/api";
import { mapGetters } from "vuex";

export default {
  components: {
    HomePageBanner,
    HomePageSidebar,
    FeedToggle,
    ArticlePreview,
    Pagination
  },
  data() {
    return {
      authTabs: ["Your feed", "Global Feed"],
      defaultTabs: ["Global Feed"],
      currentTab: "",
      articles: [],
      isArticlesLoading: false,
      pagination: {
        currentPage: 1,
        totalItems: 0,
        itemPerpage: 20
      }
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuth"]),
    tabs() {
      const tabs = this.isAuth ? this.authTabs : this.defaultTabs;
      if (tabs.includes(this.currentTab)) {
        return tabs;
      }

      return tabs.concat(this.currentTab);
    },
    isTagSelected() {
      return this.isAuth
        ? this.tabs.length !== this.authTabs.length
        : this.tabs.length !== this.defaultTabs.length;
    },
    isFeedSelected() {
      return this.currentTab === this.authTabs[0];
    },
    articlesParams() {
      return {
        tag: this.isTagSelected ? this.currentTab : null,
        limit: this.pagination.itemPerpage,
        offset: this.pagination.itemPerpage * (this.pagination.currentPage - 1)
      };
    }
  },
  mounted() {
    this.handleSelectTab(this.defaultTabs[0]);
  },
  methods: {
    handlePageChange(page) {
      this.pagination.currentPage = page;
      this.getArticleList();
    },
    handleSelectTag(tag) {
      this.selectTab(tag);
      this.resetPaging();
      this.getArticleList();
    },
    handleSelectTab(tab) {
      this.selectTab(tab);
      this.resetPaging();
      this.getArticleList();
    },
    selectTab(tab) {
      this.currentTab = tab;
    },
    resetPaging() {
      this.pagination.currentPage = 1;
    },
    async getArticleList() {
      try {
        this.$loading.show();
        this.isArticlesLoading = true;

        const fetchData = this.isFeedSelected
          ? getFeeds(this.articlesParams)
          : getArticles(this.articlesParams);

        const { articles, articlesCount } = await fetchData;

        this.articles = articles;
        this.pagination.totalItems = articlesCount;
      } catch (e) {
        // handle error
      } finally {
        this.isArticlesLoading = false;
        this.$loading.hide();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./home-page.scss";
</style>
