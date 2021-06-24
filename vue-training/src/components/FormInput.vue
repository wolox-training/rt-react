<template lang="pug">
  .form-input-container
    label.form-label
      | {{ input.label }}
    input.form-input(
      :type='input.type'
      :value='input.value'
      @input='inputChange($event)'
    )
    label.error(v-if="showRequiredError")
      | This field is required
    label.error(v-if="showEmailError")
      | The email must be a genuine email address.
    label.error(v-if="showStrongPassError")
      | The password must have at least one capital letter and numbers
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    input: {
      type: Object,
      default: () => ({
        label: '',
        type: '',
        value: ''
      })
    },
    validator: Object
  },
  computed: {
    getIfHasError: function () {
      return this.validator && this.validator.$error
    },
    showRequiredError: function () {
      return (this.getIfHasError && this.validator.value.required === false)
    },
    showEmailError: function () {
      return (this.getIfHasError && this.validator.value.email === false)
    },
    showStrongPassError: function () {
      return (this.getIfHasError && this.validator.value.strongPass === false)
    }
  },
  methods: {
    inputChange (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  .form {
    &-container {
      width: 100%;
    }

    &-input-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      &:nth-child(4) {
        margin-bottom: 30px;
      }
    }

    &-label {
      font-size: 14px;
      margin-bottom: 5px;
    }

    &-input {
      border: none;
      border-radius: 10px;
      height: 35px;
      margin-bottom: 5px;
    }
  }

  .error {
    color: #ff0000;
    font-size: 12px;
  }
</style>
