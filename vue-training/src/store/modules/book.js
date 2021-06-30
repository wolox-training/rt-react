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
          // This fixes the string and allows parsing to json
          const data = response.data.replace('"returned_at": null,', '"returned_at": null')
          const parsedData = JSON.parse(data)
          commit('setBook', parsedData)
        }
      })
    }
  }
}

export default Books
