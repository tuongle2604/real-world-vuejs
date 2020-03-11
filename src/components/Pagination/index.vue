<template>
  <div class="pagination">
    <span
      v-for="index in totalPages"
      :key="index"
      class="pagination__item"
      :class="{ active: pagination.currentPage === index }"
      @click="onPageChange(index)"
      >{{ index }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    pagination: Object
  },
  computed: {
    totalPages() {
      const { totalItems, itemPerpage } = this.pagination;
      return Math.ceil(totalItems / itemPerpage);
    }
  },
  methods: {
    onPageChange(page) {
      this.$emit("page-change", page);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./pagination.scss";
</style>
