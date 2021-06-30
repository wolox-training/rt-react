import { getBooks } from '@/services/BooksService'

const Books = {
  namespaced: true,
  state: () => ({
    bookList: []
  }),
  mutations: {
    addBooks (state, books) {
      state.bookList = books
    }
  },
  actions: {
    getBooksList ({ commit }) {
      getBooks().then(response => {
        if (response.ok) {
          commit('addBooks', response.data)
        }
      })
    }
  }
}

export default Books
