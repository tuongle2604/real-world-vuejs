<template>
  <div class="article-banner" ref="loading">
    <div class="container">
      <h1 class="article-banner__title">{{ article.title }}</h1>
      <div class="article-banner__meta" v-if="article.author">
        <div class="article-info">
          <router-link
            :to="{
              name: 'ProfilePage',
              params: { username: article.author.username }
            }"
            class="article-info__image-wrapper"
          >
            <img
              :src="user.image || '@/assets/smiley-cyrus.jpg'"
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
        <div class="" v-if="isMyArticle">
          <button
            type="button"
            class="article-banner__edit-article"
            @click="handleEditArticle"
          >
            <font-awesome-icon icon="edit" />
            Edit Article
          </button>
          <button
            type="button"
            class="article-banner__delete-article"
            @click="handleDeleteArticle"
          >
            <font-awesome-icon icon="trash" />
            Delete Article
          </button>
        </div>
        <div v-else class="">
          <button
            type="button"
            class="article-banner__follow"
            @click="handleToggleFollow(article.author)"
          >
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
            @click="toggleFavorite(article)"
          >
            <font-awesome-icon icon="heart" />
            {{ article.favorited ? "Unfavorite Article" : "Favorite Article" }}
            <span class="article-banner__favorite-counter">
              {{ `(${article.favoritesCount})` }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { deleteArticle } from "@/api";
import {
  favoriteArticle,
  unfavoriteArticle,
  followUser,
  unfollowUser
} from "@/api";

export default {
  props: {
    article: Object
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapGetters("auth", ["isAuth"]),
    isMyArticle() {
      return this.article.author.username === this.user.username;
    }
  },
  methods: {
    handleEditArticle() {
      this.$router.push({ name: "ArticleEditPage" });
    },
    async handleDeleteArticle() {
      const loading = this.$loading();
      try {
        loading.show();
        await deleteArticle(this.article.slug);
        this.$router.push({ name: "HomePage" });
      } catch (e) {
        this.$notifyError();
      } finally {
        loading.hide();
      }
    },
    async toggleFavorite(article) {
      if (!this.isAuth) {
        alert(`You need loggin to follow ${this.article.author.username}!`);
        return;
      }

      const loading = this.$loading();
      try {
        loading.show();
        const slug = article.slug;
        if (article.favorited) {
          await unfavoriteArticle(slug);
          article.favorited = false;
          article.favoritesCount--;
        } else {
          await favoriteArticle(slug);
          article.favorited = true;
          article.favoritesCount++;
        }
      } catch (e) {
        this.$notifyError();
      } finally {
        loading.hide();
      }
    },
    async handleToggleFollow({ username, following }) {
      if (!this.isAuth) {
        alert(`You need loggin to follow ${this.article.author.username}!`);
        return;
      }

      const loading = this.$loading();
      try {
        loading.show();
        const toggleFollow = following
          ? unfollowUser(username)
          : followUser(username);
        const { profile } = await toggleFollow;
        loading.hide();
        this.$emit("toggle-follow-success", profile);
      } catch (e) {
        this.$notifyError();
        loading.hide();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./article-page-banner.scss";
</style>
