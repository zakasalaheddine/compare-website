export const pageSection = `
fragment pageSection on page_sections {
	id
	collection
	item {
		... on compareScript {
			id
			name
		}
		... on bullsEye {
			id
			name
			items {
				bullsEyeItem_id {
					name
					icon {
						id
						filename_download
					}
					title
					ctaText
					ctaTarget
					description
					thumbnail {
						id
						filename_download
					}
				}
			}
		}
		... on headlineDescriptionVideo {
			headline
			description
			videoUrl
		}
		... on quizCallSection {
			headline
			description
			ctaUrl
			ctaText
			image {
				id
				filename_download
			}
		}
		... on tools {
			headline
			tools
		}
	}
}
`
