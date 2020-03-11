<template>
  <div>
    <textarea
      v-trim-on-blur
      v-if="isTextArea"
      v-bind="$attrs"
      class="base-textarea"
      :class="className"
      @change="onChange"
    >
    </textarea>
    <input
      v-else
      v-trim-on-blur
      class="base-input"
      :class="className"
      v-bind="$attrs"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    isTextArea: Boolean,
    className: String
  },
  methods: {
    onChange(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./base-input.scss";
</style>
