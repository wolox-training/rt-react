import { create } from 'apisauce'

const api = create({
  baseURL: 'https://private-anon-2f62f7c95e-wbooksapi.apiary-mock.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default api
