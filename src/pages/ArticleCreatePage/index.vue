<template>
  <div class="container article-page">
    <div class="col-md-10 offset-md-1 col-sm-12">
      <ServerErrorMessage :errors="errors" v-if="Object.keys(errors).length" />

      <BaseInput
        placeholder="Artcile Title"
        class="article-page__input"
        v-model="title"
      />
      <BaseInput
        placeholder="What's this artcile about?"
        class="article-page__input base-input--small small"
        v-model="description"
      />
      <BaseInput
        placeholder="Write your article"
        class="article-page__input small"
        :rows="8"
        :isTextArea="true"
        v-model="body"
      />
      <BaseInput
        placeholder="Enter tags"
        class="article-page__input small"
        v-model="tagList"
      />
      <BaseButton
        class="article-page__button float-right"
        @click="createArticle"
      >
        Publish Article
      </BaseButton>
    </div>
  </div>
</template>

<script>
import ServerErrorMessage from "@/components/Common/ServerErrorMessage";
import { createArticle } from "@/api";

export default {
  components: {
    ServerErrorMessage
  },
  data() {
    return {
      title: "",
      description: "",
      body: "",
      tagList: "",
      errors: {}
    };
  },
  computed: {
    article() {
      return {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList ? this.tagList.split(" ") : []
      };
    }
  },
  methods: {
    async createArticle() {
      try {
        const { article } = await createArticle(this.article);
        this.$router.push({
          name: "ArticlePage",
          params: { slug: article.slug }
        });
      } catch (res) {
        this.errors = res.errors;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./article-page.scss";
</style>
