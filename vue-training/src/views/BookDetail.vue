<template lang="pug">
  div
    nav-bar
    transition(appear name='detail')
      .container
        .img-container
          img(:src='book.img_url' alt='Book cover')
        .data-container
          h3.title
            | {{ book.title }}
            label.gender
              | ({{ book.genre }})
          hr.title-underline
          p.data-title
            | {{ $t('author') }}:
            label.data-desc
              | {{ book.author }}
          p.data-title
            | {{ $t('publisher') }}:
            label.data-desc
              | {{ book.publisher }}
          p.data-title
            | {{ $t('year') }}:
            label.data-desc
              | {{ book.year }}
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NavBar from '@/components/NavBar'

export default {
  name: 'BookDetail',
  components: {
    NavBar
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.getBook({ id: this.id })
  },
  computed: {
    ...mapState({
      book: state => state.books.book
    })
  },
  methods: {
    ...mapActions({
      getBook: 'books/getBook'
    })
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/variables';

  .container {
    box-shadow: 0px 2px 8px 1px $light-grey;
    display: flex;
    margin: 50px auto;
    padding: 30px 50px 30px 15px;
    width: 70%;
  }

  .img-container {
    background-color: $white-smoke;
    height: 250px;
    margin-right: 30px;
    width: 250px;
  }

  .data-container {
    width: 80%;
  }

  .title {
    align-items: center;
    display: flex;
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 15px 0;
  }

  .gender {
    color: $grey;
    font-size: 14px;
    margin-left: 10px;
  }

  .title-underline {
    border: 2px solid $light-green;
    margin-bottom: 30px;
  }

  .data-title {
    font-size: 14px;
    font-weight: 600;

    .data-desc {
      color: $grey;
      font-weight: 500;
      margin-left: 5px;
    }
  }

  .detail-enter-active {
    transition: all 1s ease;
  }

  .detail-enter, .detail-leave-to {
    transform: translateX(1000px);
    opacity: 0;
  }
</style>
