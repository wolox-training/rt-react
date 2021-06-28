import { create } from 'apisauce'

const api = create({
  baseURL: 'https://private-anon-f4a338b001-wbooksapi.apiary-mock.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default api
