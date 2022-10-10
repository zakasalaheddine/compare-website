import axios from 'axios'

const GRAPHQL_API = process.env.NEXT_PUBLIC_BACKEND_GRAPHQL || ''
const AUTH_TOKEN = process.env.NEXT_PUBLIC_ACCESS_AUTH_TOKEN || undefined

export const graphQLQuery = async (query, { variables = {} }) => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : ''
  }

  const { data } = await axios.post(
    GRAPHQL_API,
    {
      query,
      variables
    },
    // { headers }
  )

  if (data.errors) {
    throw new Error(json.errors)
  }

  return data
}
