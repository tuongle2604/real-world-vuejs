<template>
  <div class="article-banner container">
    <h1 class="article-banner__title">{{ article.title }}</h1>
    <div class="article-banner__meta">
      <div class="article-info">
        <router-link
          :to="{
            name: 'ProfilePage',
            params: { username: article.author.username }
          }"
          class="article-info__image-wrapper"
        >
          <img
            :src="user.image || './images/smiley-cyrus.jpg'"
            class="article-info__image"
          />
        </router-link>
        <div>
          <router-link
            :to="{
              name: 'ProfilePage',
              params: { username: article.author.username }
            }"
            class=" article-info__author-name"
          >
            {{ article.author.username }}
          </router-link>
          <p class=" article-info__created-date">
            {{ article.createdAt | moment("ddd MMM DD YYYY") }}
          </p>
        </div>
      </div>
      <button type="button" class="article-banner__follow">
        <font-awesome-icon icon="cog" />
        {{ article.author.following ? "Unfollow" : "Follow" }}
        {{ article.author.username }}
      </button>
      <button
        v-if="isMyArticle"
        type="button"
        class="article-banner__delete-article"
        @click="handleDeleteArticle"
      >
        <font-awesome-icon icon="trash" />
        Delete Article
      </button>
      <button
        v-else
        type="button"
        class="article-banner__favorite"
        :class="{ favorited: article.favorited }"
      >
        <font-awesome-icon icon="heart" />
        {{ article.favorited ? "Unfavorite Article" : "Favorite Article" }}
        <span class="article-banner__favorite-counter">
          {{ `(${article.favoritesCount})` }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { deleteArticle } from "@/api";

export default {
  props: {
    article: Object
  },
  computed: {
    ...mapState("auth", ["user"]),
    isMyArticle() {
      return this.article.author.username === this.user.username;
    }
  },
  methods: {
    async handleDeleteArticle() {
      try {
        this.$loading.show();
        await deleteArticle(this.article.slug);
        this.$router.push({ name: "HomePage" });
      } catch (e) {
        this.$notifyError();
      } finally {
        this.$loading.hide();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./article-page-banner.scss";
</style>
