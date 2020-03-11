<template>
  <div class="profile-page">
    <ProfilePageBanner :profile="profile" @toggleFollow="handleToggleFollow" />

    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12">
          <FeedToggle
            :tabs="tabs"
            :currentTab="currentTab"
            @select-tab="handleSelectTab"
          />
          <div class="profile-page__article-list" v-if="articles.length">
            <ArticlePreview
              v-for="article in articles"
              :key="article.slug"
              :article="article"
            />
          </div>
          <div class="profile-page__message" v-else>
            <p v-if="isArticlesLoading">Loading articles...</p>
            <p v-else>No articles are here... yet.</p>
          </div>
          <Pagination
            :pagination="pagination"
            @page-change="handlePageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePageBanner from "./ProfilePageBanner";
import FeedToggle from "@/components/FeedToggle";
import ArticlePreview from "@/components/ArticlePreview";
import Pagination from "@/components/Pagination";
import { getProfile, followUser, unfollowUser, getArticles } from "@/api";
import { mapGetters } from "vuex";

export default {
  components: {
    ProfilePageBanner,
    FeedToggle,
    ArticlePreview,
    Pagination
  },
  data() {
    return {
      profile: {},
      tabs: ["My Articles", "Favorited Articles"],
      currentTab: "",
      articles: [],
      isArticlesLoading: false,
      pagination: {
        currentPage: 1,
        totalItems: 0,
        itemPerpage: 5
      }
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuth"]),
    articlesParams() {
      const param = this.currentTab === this.tabs[0] ? "author" : "favorited";

      return {
        [param]: this.$route.params.username,
        limit: this.pagination.itemPerpage,
        offset: this.pagination.itemPerpage * (this.pagination.currentPage - 1)
      };
    }
  },
  watch: {
    "$route.params"() {
      this.getUserProfile();
      this.getArticleList();
    }
  },
  created() {
    this.handleSelectTab(this.tabs[0]);
    this.getUserProfile();
  },
  methods: {
    handlePageChange(page) {
      this.pagination.currentPage = page;
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
    async getUserProfile() {
      try {
        const { username } = this.$route.params;
        const { profile } = await getProfile(username);
        this.profile = profile;
      } catch (e) {
        console.log(e);
      }
    },
    async handleToggleFollow({ username, following }) {
      try {
        if (!this.isAuth) {
          alert(`You need loggin to follow ${username}!`);
          return;
        }

        const toggleFollow = following
          ? followUser(username)
          : unfollowUser(username);
        const { profile } = await toggleFollow;
        this.profile = profile;
      } catch (e) {
        console.log(e);
      }
    },
    async getArticleList() {
      try {
        this.$loading.show();
        this.isArticlesLoading = true;

        const { articles, articlesCount } = await getArticles(
          this.articlesParams
        );
        this.articles = articles;
        this.pagination.totalItems = articlesCount;
      } catch (e) {
        console.log(e);
        // handle error
      } finally {
        this.$loading.hide();
        this.isArticlesLoading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./profile-page.scss";
</style>
