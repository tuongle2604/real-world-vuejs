<template>
  <div class="profile-page">
    <ProfilePageBanner :profile="profile" @toggleFollow="handleToggleFollow" />

    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12">
          <FeedToggle
            :showingTabs="allTabs"
            :selectedTab="selectedTab"
            @select-tab="handleSelectTab"
          />

          <ArticleList :selectedTab="selectedTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePageBanner from "./ProfilePageBanner";
import FeedToggle from "@/components/FeedToggle";
import ArticleList from "@/components/ArticleList";
import { getProfile, followUser, unfollowUser, getArticles } from "@/api";
import { mapGetters } from "vuex";

export default {
  components: {
    ProfilePageBanner,
    FeedToggle,
    ArticleList
  },
  data() {
    return {
      profile: {},
      selectedTab: {},
      currentUser: ""
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuth"]),
    allTabs() {
      return [
        {
          name: "My Articles",
          fetchData: getArticles,
          isAuth: true,
          params: { author: this.currentUser }
        },
        {
          name: "Favorited Articles",
          fetchData: getArticles,
          isAuth: false,
          params: { favorited: this.currentUser }
        }
      ];
    }
  },
  watch: {
    "$route.params": {
      immediate: true,
      handler() {
        this.currentUser = this.$route.params.username;
        this.getUserProfile();
      }
    }
  },
  mounted() {
    this.handleSelectTab(this.allTabs[1]);
  },
  methods: {
    handleSelectTab(tab) {
      this.selectedTab = tab;
    },
    async getUserProfile() {
      try {
        const { username } = this.$route.params;
        const { profile } = await getProfile(username);
        this.profile = profile;
      } catch (e) {
        // handle error
      }
    },
    async handleToggleFollow({ username, following }) {
      try {
        if (!this.isAuth) {
          alert(`You need loggin to follow ${username}!`);
          return;
        }

        const toggleFollow = following
          ? unfollowUser(username)
          : followUser(username);
        const { profile } = await toggleFollow;
        this.profile = profile;
      } catch (e) {
        // handle error
      }
    }
  }
};
</script>
