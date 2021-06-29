import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks } from '@/services/BooksService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookList: []
  },
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
  },
  modules: {
  }
})
