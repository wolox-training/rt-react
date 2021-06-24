import api from 'src/config/api';

export const registerUser = (user) => api.post('/users', user)
  .then(response => console.log('[response]', response));
