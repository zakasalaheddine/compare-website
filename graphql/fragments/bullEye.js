export const bullEyeFragment = `
fragment bullEye on bullEye {
	id
	name
	items {
		bullEyeItem_id {
			id
			name
			title
			description
			ctaText
			ctaTarget
			icon {
				...directusFileFragment
			}
			thumbnail {
				...directusFileFragment
			}
		}
	}
}`
