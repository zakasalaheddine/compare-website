import { queryHomePage } from '../graphql/homepage.query'
import { queryData } from '../utils/queryData'

export const getNetworkData = async () => {
  const { data } = await queryData(queryHomePage, { variables: {} })
  if (data.network && data.network.length > 0) {
    return data.network
  }
  return null
}
