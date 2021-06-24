<template lang="pug">
  .buttons-container
    button.form-button(
      :class='button.class'
      @click='handleSubmit')
        | {{ button.text }}
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    button: {
      type: Object,
      default: () => ({
        text: '',
        class: ''
      })
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('handle-click')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/scss/variables.scss";

  .form-button {
    border-radius: 10px;
    height: 45px;
    width: 100%;

    &.sign-up {
      border: none;
      color: #fff;
      background-color: $light-green;
      margin-bottom: 20px;
    }

    &.login {
      border: solid 2px $light-green;
      color: $light-green;
    }
  }
</style>
