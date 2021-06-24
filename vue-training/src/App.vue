<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-link" to="/">Home</router-link> |
      <router-link class="nav-link" to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./scss/_colors.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $pickled-bluewood;
}

#nav {
  padding: 30px;

  .nav-link {
    font-weight: bold;
    color: $pickled-bluewood;

    &.router-link-exact-active {
      color: $ocean-green;
    }
  }
}
</style>
