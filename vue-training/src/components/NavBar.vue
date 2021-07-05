<template lang="pug">
  .main
    .header-container
      header-image(image-class='nav-image')
      router-link.logout-link(to='/login' @click.native='removeToken')
        | Logout
</template>

<script>
import HeaderImage from './HeaderImage'

export default {
  name: 'NavBar',
  components: {
    HeaderImage
  },
  methods: {
    removeToken () {
      if (localStorage.token) {
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';

  .main {
    background-color: $white-smoke;
    border-top: solid 4px $deep-sky-blue;
    box-shadow: 0px 2px 8px 1px $light-grey;
    height: 55px;
    width: 100%;
  }

  .header-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2px 150px 0;
  }

  .logout-link {
    color: black;
    font-weight: 600;
    text-decoration: none;
  }
</style>
