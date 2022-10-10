import { getCurrentUser } from 'requests'
import { queryCurrentNetwork } from '../../graphql/homepage.query'
import { graphQLQuery } from './graphQLQuery'

export const queryNetwork = async () => {
  const {
    data: { network: networkId }
  } = await getCurrentUser()
  const {
    data: { network }
  } = await graphQLQuery(queryCurrentNetwork, {
    variables: { networkId }
  })
  console.log({ network })
  return network
}
