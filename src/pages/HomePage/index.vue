<template>
  <div class="home-page">
    <HomeBanner />

    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <ArticleList />
        </div>
        <div class="col-md-3">
          <HomeSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from "./HomeBanner";
import HomeSidebar from "./HomeSidebar";
import ArticleList from "@/components/ArticleList";

export default {
  components: {
    HomeBanner,
    HomeSidebar,
    ArticleList
  }
};
</script>

<style lang="scss" scoped></style>
