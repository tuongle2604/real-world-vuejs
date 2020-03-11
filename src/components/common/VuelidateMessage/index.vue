<template>
  <div class="vuelidate-errors">
    <p
      class="vuelidate-errors__message"
      v-for="message in displayMessages"
      :key="message"
    >
      {{ message }}
    </p>
  </div>
</template>

<script>
const messages = {
  usernameRequired: "User name cannot empty",
  required: "{field} cannot empty",
  minLength: "{field} is too short (minimum is {minLength} character)",
  email: "Email is invalid"
};

export default {
  props: {
    v: Object
  },
  computed: {
    displayMessages() {
      if (!this.v || !this.v.$dirty) {
        return [];
      }

      return this.getDisplayMessages();
    }
  },
  methods: {
    getDisplayMessages() {
      // get messages base on vuelidate
      const displayMessage = [];
      const validations = this.v.$flattenParams();

      for (const validation of validations) {
        const field = validation.path[0];
        const validationName = validation.name;
        const validationValue = validation.params
          ? Object.values(validation.params)[1]
          : null;

        if (this.v[field][validationName]) {
          continue;
        }

        let message = messages[validationName] || "";
        message = message.replace("{field}", field);

        if (validationValue) {
          message = message.replace(`{${validationName}}`, validationValue);
        }
        displayMessage.push(message);
      }

      return displayMessage;
    }
  }
};
</script>

<style lang="scss" scoped>
.vuelidate-errors {
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
