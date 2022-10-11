import { networkPages } from 'graphql/networkContentPages.query'
import { getCurrentUser } from 'requests/REST/getCurrentUser'
import { graphQLQuery } from './graphQLQuery'

export const queryNetworkPages = async (type = 'content') => {
  const {
    data: { network: networkId }
  } = await getCurrentUser()
  const {
    data: {
      network: { pages }
    }
  } = await graphQLQuery(networkPages, {
    variables: { networkId, pageType: type }
  })
  return pages
}
