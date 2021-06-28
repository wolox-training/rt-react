import api from '@/config/api'

export const getBooks = () => {
  if (!localStorage.token) {
    return
  }

  api.setHeader('Authorization', localStorage.token)

  return api.get('/bookslist')
}
