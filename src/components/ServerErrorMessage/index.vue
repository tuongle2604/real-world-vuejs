<template>
  <div class="server-errors">
    <p
      class="server-errors__message"
      v-for="message in displayMessage"
      :key="message"
    >
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    displayMessage() {
      const messages = [];
      Object.keys(this.errors).forEach(key => {
        if (key === "server") {
          messages.push(this.errors[key]);
        } else {
          messages.push(key + " " + this.errors[key]);
        }
      });
      return messages;
    }
  }
};
</script>

<style lang="scss" scoped>
.server-errors {
  text-align: left;
  font-weight: bold;
  color: #ca8686;
  margin-bottom: 1.5rem;
  &__message {
    margin-top: 1rem;
    text-transform: capitalize;
  }
}
</style>
