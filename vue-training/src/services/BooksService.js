import api from '@/config/api'

export const getBooks = () => api.get('/bookslist')

export const getBook = id => api.get(`/books/${id}`)
