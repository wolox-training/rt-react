<template lang="pug">
  .buttons-container
    button.form-button(
      :class="button.class"
      @click="$emit('handleClick')") {{ button.text }}
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    button: {
      text: String,
      class: String
    }
  }
}
</script>

<style scoped lang="scss">
  .form-button {
    border-radius: 10px;
    height: 45px;
    width: 100%;

    &.sign-up {
      border: none;
      color: #fff;
      background-color: #a6cb46;
      margin-bottom: 20px;
    }

    &.login {
      border: solid 2px #a6cb46;
      color: #a6cb46;
    }
  }
</style>
