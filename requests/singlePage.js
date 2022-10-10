import { querySinglePage } from '../graphql/singlePage.query'
import { queryData } from '../utils/queryData'

export const getNetworkSinglePageBySlug = async (slug) => {
  const { data } = await queryData(querySinglePage, { variables: { slug } })
  if (data.network && data.network.length > 0) {
    return data.network[0]
  }
  return null
}
