<template lang="pug">
  .main-container
    nav-bar
    .books-container
      book-box(
        v-for='book in books'
        :key='book.id'
        :book='book'
      )
</template>

<script>
import { mapState } from 'vuex'
import BookBox from '@/components/BookBox'
import NavBar from '@/components/NavBar'

export default {
  name: 'Books',
  components: {
    BookBox,
    NavBar
  },
  mounted () {
    this.$store.dispatch('getBooksList')
  },
  computed: mapState({
    books: 'bookList'
  })
}
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';

  .main-container {
    font-family: $sans-serif;
  }

  .books-container {
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    max-width: 1100px;
    padding: 0 50px;
    width: 100%;
  }
</style>
