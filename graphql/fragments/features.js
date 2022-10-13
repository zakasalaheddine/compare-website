export const featuresFragment = `
fragment features on features {
	id
	items {
		feature: featuresItem_id {
			id
			title
			description
			icon {
				...directusFileFragment
			}
		}
	}
}
`
