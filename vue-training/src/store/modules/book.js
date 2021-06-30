import { getBooks, getBook } from '@/services/BooksService'

const Books = {
  namespaced: true,
  state: () => ({
    bookList: [],
    book: {}
  }),
  mutations: {
    addBooks (state, books) {
      state.bookList = books
    },
    setBook (state, book) {
      state.book = book
    }
  },
  actions: {
    getBooksList ({ commit }) {
      getBooks().then(response => {
        if (response.ok) {
          commit('addBooks', response.data)
        }
      })
    },
    getBook ({ commit }, payload) {
      getBook(payload.id).then(response => {
        if (response.ok) {
          commit('setBook', response.data)
        }
      })
    }
  }
}

export default Books
