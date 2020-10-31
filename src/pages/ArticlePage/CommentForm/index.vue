<template>
  <div class="comment-form">
    <div class="comment-form__input">
      <BaseInput
        v-model="comment"
        class="small p-4 border-none"
        :isTextArea="true"
        :type="'textarea'"
        :rows="4"
        :placeholder="'Write a comment...'"
      />
    </div>
    <div class="comment-form__footer">
      <img
        :src="user.image || '@/assets/smiley-cyrus.jpg'"
        class="comment-form__image"
      />
      <button
        type="button"
        class="comment-form__submit-button"
        @click="handleAddComment"
      >
        Post comment
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { addComment } from "@/api";

export default {
  data() {
    return {
      comment: ""
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapGetters("auth", ["isAuth"])
  },
  methods: {
    async handleAddComment() {
      try {
        if (!this.isAuth) {
          return alert(`You need loggin to post a comment`);
        }

        this.$loading.show();
        const { slug } = this.$route.params;
        const data = { body: this.comment };
        await addComment(slug, data);
        this.comment = "";
        this.$emit("add-comment-success");
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
@import "./comment-form.scss";
</style>
