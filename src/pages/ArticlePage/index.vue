<template>
  <div class="article-page">
    <ArticlePageBanner
      :article="article"
      @toggle-follow-success="handleGetArticle"
    />

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="article-page__content">
            {{ article.body }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <CommentForm @add-comment-success="handleGetComments" />
        </div>
        <div class="col-md-8 offset-md-2">
          <CommentCard
            v-for="comment in comments"
            :key="comment.id"
            :comment="comment"
            @delete-comment-success="handleGetComments"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePageBanner from "./ArticlePageBanner";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

import { getArticle, getComments } from "@/api";

export default {
  components: {
    ArticlePageBanner,
    CommentForm,
    CommentCard
  },
  data() {
    return {
      article: {},
      comments: [],
      test: "article"
    };
  },
  created() {
    this.handleGetArticle();
    this.handleGetComments();
  },
  methods: {
    async handleGetArticle() {
      try {
        this.$loading.show();
        const { slug } = this.$route.params;
        const { article } = await getArticle(slug);
        this.article = article;
      } catch (e) {
        // handle error
      } finally {
        this.$loading.hide();
      }
    },
    async handleGetComments() {
      try {
        const { slug } = this.$route.params;
        const { comments } = await getComments(slug);
        this.comments = comments;
      } catch (e) {
        // handle error
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./article-page.scss";
</style>
