<!-- <template>
  <div>
    <textarea
      v-trim-on-blur
      v-if="isTextArea"
      v-bind="$attrs"
      class="base-textarea"
      :class="className"
      @input="onChange"
    >
    </textarea>
    <input
      v-else
      v-trim-on-blur
      class="base-input"
      :class="className"
      v-bind="$attrs"
      @input="onChange"
      @keyup="onKeyup"
    />
  </div>
</template> -->

<script>
export default {
  inheritAttrs: false,
  props: {
    isTextArea: Boolean
    // className: String
  },
  render(createElement) {
    const tag = this.isTextArea ? "textarea" : "input";
    const classByTag = this.isTextArea ? "base-textarea" : "base-input";
    return createElement(tag, {
      class: classByTag,
      attrs: this.$attrs,
      on: {
        ...this.$listeners,
        input: this.onChange
      }
    });
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
