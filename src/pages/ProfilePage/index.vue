<template>
  <div class="profile-page">
    <ProfileBanner />

    <div class="container">
      <div class="col-lg-10 offset-lg-1 col-md-12">
        <ArticleList />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileBanner from "./ProfileBanner";
import ArticleList from "@/components/ArticleList";

export default {
  components: {
    ProfileBanner,
    ArticleList
  }
};
</script>

<style lang="css" scoped></style>
