const GRAPHQL_API = process.env.NEXT_PUBLIC_BACKEND_GRAPHQL || ''
const AUTH_TOKEN = process.env.NEXT_PUBLIC_ACCESS_AUTH_TOKEN || undefined

export const queryData = async (query, { variables = {} }) => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : ''
  }

  const response = await fetch(GRAPHQL_API, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await response.json()

  if (json.errors) {
    throw new Error(json.errors)
  }

  return json
}
