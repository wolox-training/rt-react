<template lang="pug">
  img.header-image(
    :class='imageClass'
    alt='Wolox logo'
    src='@/assets/header-image.png'
  )
</template>

<script>
export default {
  name: 'HeaderImage',
  props: {
    imageClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .header-image {
    height: 100%;
    margin-bottom: 40px;
    width: 100%
  }

  .nav-image {
    margin-bottom: 0;
    width: 200px;
  }
</style>
