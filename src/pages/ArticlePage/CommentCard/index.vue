<template>
  <div class="comment-card mt-4">
    <p class="comment-card__content">{{ comment.body }}</p>
    <div class="comment-card__footer">
      <div class="comment-card__footer-info">
        <router-link
          :to="{
            name: 'ProfilePage',
            params: { username: comment.author.username }
          }"
        >
          <img :src="comment.author.image" alt="" class="comment-card__image" />
        </router-link>
        <router-link
          :to="{
            name: 'ProfilePage',
            params: { username: comment.author.username }
          }"
          class="comment-card__user-name"
        >
          {{ comment.author.username }}
        </router-link>
        <p class="comment-card__created-date">
          {{ comment.createdAt | moment("ddd MMM DD YYYY") }}
        </p>
      </div>
      <font-awesome-icon
        icon="trash"
        class="comment-card__delete-icon"
        @click="handleDeleteComment(comment.id)"
      />
    </div>
  </div>
</template>

<script>
import { deleteComment } from "@/api";

export default {
  props: {
    comment: Object
  },
  methods: {
    async handleDeleteComment(commentId) {
      try {
        this.$loading.show();
        const { slug } = this.$route.params;
        await deleteComment(slug, commentId);
        this.$emit("delete-comment-success");
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
@import "./comment-card.scss";
</style>
