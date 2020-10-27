<template>
  <div class="home-page">
    <HomePageBanner />
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <FeedToggle
            :showingTabs="showingTabs"
            :selectedTab="selectedTab"
            @select-tab="handleSelectTab"
          />

          <ArticleList :selectedTab="selectedTab" />
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
import ArticleList from "@/components/ArticleList";
import { getArticles, getFeeds } from "@/api";
import { mapGetters } from "vuex";

export default {
  components: {
    HomePageBanner,
    HomePageSidebar,
    FeedToggle,
    ArticleList
  },
  data() {
    return {
      selectedTag: "",
      selectedTab: {}
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuth"]),
    allTabs() {
      return [
        {
          name: "Your feed",
          fetchData: getFeeds,
          isAuth: true,
          params: {}
        },
        {
          name: "Global Feed",
          fetchData: getArticles,
          isAuth: false,
          params: {}
        },
        {
          name: this.selectedTag,
          fetchData: getArticles,
          isAuth: false,
          params: { tag: this.selectedTag }
        }
      ];
    },
    showingTabs() {
      return this.allTabs
        .filter(tab => (this.isAuth ? true : !tab.isAuth))
        .filter(tab => tab.name !== "");
    }
  },
  mounted() {
    this.handleSelectTab(this.showingTabs[0]);
  },
  methods: {
    handleSelectTag(tag) {
      this.selectedTag = tag;
      this.selectedTab = this.allTabs.find(o => o.name === tag);
    },
    handleSelectTab(tab) {
      this.selectedTab = tab;
      this.selectedTag = "";
    }
  }
};
</script>
