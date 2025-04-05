// api.js
import axios from 'axios'

export const fetchUsers = async (page) => {
  const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`)
  return data
}
