<template lang="pug">
  .main-container
    nav-bar
    .books-container
      book-box(
        v-for='book in bookList'
        :key='book.id'
        :book='book'
      )
</template>

<script>
import BookBox from '@/components/BookBox'
import NavBar from '@/components/NavBar'
import { getBooks } from '@/services/BooksService'

export default {
  name: 'Books',
  components: {
    BookBox,
    NavBar
  },
  mounted () {
    getBooks().then(response => {
      if (response.ok) {
        this.bookList = response.data
      }
    })
  },
  data () {
    return {
      bookList: []
    }
  }
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
