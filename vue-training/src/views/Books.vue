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
import { mapState, mapActions } from 'vuex'
import BookBox from '@/components/BookBox'
import NavBar from '@/components/NavBar'

export default {
  name: 'Books',
  components: {
    BookBox,
    NavBar
  },
  mounted () {
    this.getBooks()
  },
  computed: {
    ...mapState({
      books: state => state.books.bookList
    })
  },
  methods: {
    ...mapActions({
      getBooks: 'books/getBooksList'
    })
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';

  .main-container {
    font-family: var(--font-family);
  }

  .books-container {
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    max-width: 1100px;
    padding: 0 50px;
    width: var(--full-width);
  }
</style>
