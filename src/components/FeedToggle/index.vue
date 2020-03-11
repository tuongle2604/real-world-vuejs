<template>
  <div class="feed-toggle">
    <ul class="feed-toggle__inner">
      <li
        class="feed-toggle__item"
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: currentTab === tab }"
        @click="onSelectTab(tab)"
      >
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    currentTab: String
  },
  methods: {
    onSelectTab(tab) {
      if (tab === this.currentTab) {
        return;
      }
      this.$emit("select-tab", tab);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./feed-toggle.scss";
</style>
