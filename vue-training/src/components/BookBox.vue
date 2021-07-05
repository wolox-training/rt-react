<template lang="pug">
  transition(appear name='book-tr')
    router-link(:to='detailUrl')
      .container
        .img-container
          img.book-img(:src='book.image.url' alt='Book cover')
        h3.book-title
          | {{ book.title }}
        label.book-author
          | {{ book.author }}
</template>

<script>
export default {
  name: 'BookBox',
  props: {
    book: {
      type: Object,
      default: () => ({
        id: '',
        title: '',
        author: '',
        image: {
          url: ''
        }
      })
    }
  },
  computed: {
    detailUrl () {
      return `/books/${this.book.id}`
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/variables';

  .container {
    box-shadow: 3px 5px 8px $light-grey;
    height: 305px;
    margin: 0 40px 40px 0;
    max-width: 200px;
    padding: 16px;
    width: 100%;
  }

  .img-container {
    height: 250px;
  }

  .book {
    &-img {
      height: 250px;
      width: 100%;
    }

    &-title {
      font-size: 16px;
      margin: 10px 0 2px;
    }

    &-author {
      font-size: 12px;
      margin-top: 0;
    }
  }

  .book-tr-enter-active {
    animation: bounce-in 1s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
