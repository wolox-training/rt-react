<template lang="pug">
  .form-input-container
    label.form-label
      | {{ input.label }}
    input.form-input(
      :type='input.type'
      :value='input.value'
      @input='inputChange($event)'
    )
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
    }
  }
</style>
