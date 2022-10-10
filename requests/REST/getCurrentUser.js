import axios from 'axios'

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URL || ''
const AUTH_TOKEN = process.env.NEXT_PUBLIC_ACCESS_AUTH_TOKEN || undefined

export const getCurrentUser = async () => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : ''
  }
  const { data } = await axios.get(`${BACKEND_API}/users/me`, {
    headers
  })
  return data
}
