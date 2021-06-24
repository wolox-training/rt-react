import api from '@/config/api'

export const registerUser = (user = {}) => api.post('/users', user)
  .then(response => response)
