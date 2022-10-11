export const networkPages = `
query pages($networkId: ID!, $pageType: String) {
	network: network_by_id(id: $networkId) {
		pages(filter: {page_id: {type: {_eq: $pageType}}}) {
			page: page_id{
				id
				slug
			}
		}
	}
}
`
