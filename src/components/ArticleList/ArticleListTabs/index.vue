<template>
  <div class="articles-tabs">
    <ul class="articles-tabs__inner">
      <li
        class="articles-tabs__item"
        v-for="(tab, index) in tabs"
        :class="{ active: currentTab === tab }"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array
  },
  data() {
    return {
      currentTab: ""
    };
  },
  created() {
    this.selectTab(this.tabs[0]);
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./article-list-tabs.scss";
</style>
