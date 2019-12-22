<template>
  <div>
    <textarea
      v-if="type === 'textarea'"
      class="base-textarea"
      :class="className"
      v-bind="$attrs"
      v-bind:value="value"
      v-on="inputListeners"
    >
    </textarea>
    <input
      v-else
      class="base-input"
      :class="className"
      v-bind="$attrs"
      v-bind:value="value"
      v-on="inputListeners"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: String,
    type: String,
    className: String
  },
  computed: {
    inputListeners: function() {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
                {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function(event) {
            vm.$emit("input", event.target.value);
          }
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./base-input.scss";
</style>
