import api from '@/config/api'

export const registerUser = (user = {}) => api.post('/users', user)

export const sessionUser = (user = {}) => api.post('/users/sessions', user)
