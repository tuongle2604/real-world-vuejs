<template>
  <button v-bind="$attrs" class="base-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./base-button.scss";
</style>
