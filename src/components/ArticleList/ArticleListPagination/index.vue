<template>
  <div class="pagination">
    <span
      v-for="index in totalPages"
      class="pagination__item"
      :class="{ active: currentPage === index }"
      @click="changePage(index)"
      >{{ index }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    pagination: Object
  },
  data() {
    return {
      queryPage: null
    };
  },
  computed: {
    totalPages() {
      const { total, itemPerpage } = this.pagination;
      return Math.ceil(total / itemPerpage);
    },
    currentPage(page) {
      return Number(this.$route.query.page || 1);
    }
  },
  watch: {
    "$route.query.page"(page) {
      this.queryPage = page;
    }
  },
  methods: {
    changePage(page) {
      if (this.$route.query.page === page) {
        return;
      }

      const path = this.$route.path;
      this.$router.push({ path, query: { page } });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./article-list-pagination";
</style>
