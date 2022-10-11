import { networkPages } from 'graphql/networkContentPages.query'
import { pageBySlugType } from 'graphql/pageBySlugType.query'
import { getCurrentUser } from 'requests/REST/getCurrentUser'
import { graphQLQuery } from './graphQLQuery'

export const queryPage = async (slug, type = 'content') => {
  const {
    data: { network: networkId }
  } = await getCurrentUser()
  const {
    data: { network }
  } = await graphQLQuery(pageBySlugType, {
    variables: { networkId, slug, pageType: type }
  })
  return network
}
