<template>
  <div class="article-preview">
    <div class="article-preview__heading">
      <div class="article-preview__image-wrapper">
        <img
          src="https://static.productionready.io/images/smiley-cyrus.jpg"
          class="article-preview__image"
        />
      </div>
      <div class="article-preview__info">
        <router-link
          :to="{ name: '', params: {} }"
          class="article-preview__user-name"
        >
          Tuong Le
        </router-link>
        <p class="article-preview__created-at">December 10, 2019</p>
      </div>
      <button class="article-preview__counter-wrapper">
        <font-awesome-icon icon="heart" class="article-preview__counter-icon" />
        <span class="article-preview__counter">5</span>
      </button>
    </div>
    <h3 class="article-preview__title">Article title</h3>
    <p class="article-preview__description">Article description</p>
    <router-link to="/article/id" class="article-preview__read-more">
      Read more...
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./article-list-card.scss";
</style>
