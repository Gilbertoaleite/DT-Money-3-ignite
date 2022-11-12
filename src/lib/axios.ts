import axios from 'axios'

export const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/Gilbertoaleite/DT-Money-3-ignite/main/db.json" ?? 'http://localhost:3000',
})
