<template>
  <div class="article-preview">
    <div class="article-preview__heading">
      <div class="article-preview__image-wrapper">
        <img
          :src="article.author.image || '/images/smiley-cyrus.jpg'"
          class="article-preview__image"
        />
      </div>
      <div class="article-preview__info">
        <router-link
          :to="{
            name: 'ProfilePage',
            params: { username: article.author.username }
          }"
          class="article-preview__user-name"
        >
          {{ article.author.username }}
        </router-link>
        <p class="article-preview__created-at">{{ article.createdAt }}</p>
      </div>
      <button
        class="article-preview__counter-wrapper"
        :class="{ favorited: article.favorited }"
        @click="toggleFavorite(article)"
      >
        <font-awesome-icon icon="heart" class="article-preview__counter-icon" />
        <span class="article-preview__counter">{{
          article.favoritesCount
        }}</span>
      </button>
    </div>
    <h3 class="article-preview__title" @click="goToArticlePage">
      {{ article.title }}
    </h3>
    <p class="article-preview__description" @click="goToArticlePage">
      {{ article.description }}
    </p>
    <p class="article-preview__read-more" @click="goToArticlePage">
      Read more...
    </p>
  </div>
</template>

<script>
import { favoriteArticle, unfavoriteArticle } from "@/api";
import { mapGetters } from "vuex";

export default {
  props: {
    article: Object
  },
  computed: {
    ...mapGetters("auth", ["isAuth"])
  },
  methods: {
    goToArticlePage() {
      this.$router.push({
        name: "ArticlePage",
        params: { slug: this.article.slug }
      });
    },
    async toggleFavorite(article) {
      try {
        if (!this.isAuth) {
          alert("You need loggin to favorite article");
          return;
        }

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
        // handle error
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./article-preview.scss";
</style>
