import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks, getBook } from '@/services/BooksService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookList: [],
    book: {}
  },
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
  },
  modules: {
  }
})
