<template>
  <div class="feed-toggle">
    <ul class="feed-toggle__inner">
      <li
        class="feed-toggle__item"
        v-for="tab in showingTabs"
        :key="tab.name"
        :class="{ active: selectedTab.name === tab.name }"
        @click="onSelectTab(tab)"
      >
        {{ tab.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    showingTabs: Array,
    selectedTab: Object
  },
  methods: {
    onSelectTab(tab) {
      if (tab.name === this.selectedTab.name) {
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
