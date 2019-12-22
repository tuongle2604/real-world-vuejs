<template>
  <div class="container article-page">
    <div class="col-md-10 offset-md-1 col-sm-12">
      <BaseInput placeholder="Artcile Title" class="article-page__input" />
      <BaseInput
        placeholder="What's this artcile about?"
        :className="'base-input--small'"
        class="article-page__input"
      />
      <BaseInput
        :type="'textarea'"
        :rows="8"
        placeholder="Write your article"
        :className="'base-input--small'"
        class="article-page__input"
      />
      <BaseInput
        placeholder="Enter tags"
        :className="'base-input--small'"
        class="article-page__input"
      />
      <BaseButton class="article-page__button">
        Publish Article
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/common/BaseInput";
import BaseButton from "@/components/common/BaseButton";

export default {
  components: {
    BaseInput,
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
@import "./article-page.scss";
</style>
