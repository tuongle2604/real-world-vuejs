<template>
  <div class="container article-page">
    <div class="col-md-10 offset-md-1 col-sm-12">
      <ServerErrorMessage :errors="errors" v-if="Object.keys(errors).length" />

      <BaseInput
        placeholder="Artcile Title"
        class="article-page__input"
        v-model="article.title"
      />
      <BaseInput
        placeholder="What's this artcile about?"
        class="article-page__input base-input--small small"
        v-model="article.description"
      />
      <BaseInput
        placeholder="Write your article"
        class="article-page__input small"
        :rows="8"
        :isTextArea="true"
        v-model="article.body"
      />
      <BaseInput
        placeholder="Enter tags"
        class="article-page__input small"
        v-model="article.tagList"
      />
      <BaseButton
        v-if="isEditPage"
        class="article-page__button float-right"
        @click="handleUpdateArticle"
      >
        Edit Article
      </BaseButton>
      <BaseButton
        v-else
        class="article-page__button float-right"
        @click="handleCreateArticle"
      >
        Publish Article
      </BaseButton>
    </div>
  </div>
</template>

<script>
import ServerErrorMessage from "@/components/ServerErrorMessage";
import { createArticle, getArticle, updateArticle } from "@/api";

export default {
  components: {
    ServerErrorMessage
  },
  props: {
    slug: String
  },
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: ""
      },
      errors: {}
    };
  },
  computed: {
    isEditPage() {
      return this.slug;
    }
  },
  created() {
    if (this.isEditPage) {
      this.handleGetArticle();
    }
  },
  methods: {
    async handleGetArticle() {
      try {
        this.$loading.show();
        const { slug } = this.$route.params;
        const { article } = await getArticle(slug);
        this.article = {
          ...article,
          tagList: article.tagList.join("")
        };
      } catch (e) {
        // handle error
      } finally {
        this.$loading.hide();
      }
    },
    async handleUpdateArticle() {
      try {
        const articleData = this.getArticleData();
        const { article } = await updateArticle(this.slug, articleData);
        this.$router.push({
          name: "ArticlePage",
          params: { slug: article.slug }
        });
      } catch (res) {
        if (res && res.errors) {
          this.errors = res.errors;
        }
      }
    },
    async handleCreateArticle() {
      try {
        const articleData = this.getArticleData();
        const { article } = await createArticle(articleData);
        this.$router.push({
          name: "ArticlePage",
          params: { slug: article.slug }
        });
      } catch (res) {
        if (res && res.errors) {
          this.errors = res.errors;
        }
      }
    },
    getArticleData() {
      return {
        ...this.article,
        tagList: this.article.tagList ? this.article.tagList.split(" ") : []
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./article-page.scss";
</style>
