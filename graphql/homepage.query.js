export const queryHomePage = `
query networkData{
	network{
		name
		url
		logo{
			filename_download
		}
		homepage{
			name
			headline
			sections_func{
				count
			}
			sections{
				id
				collection
				item{
					... on bullsEye{
						id
						name
						items{
							bullsEyeItem_id{
								name
								icon{
									id
									filename_download
								}
								title
								ctaText
								ctaTarget
								description
								thumbnail{
									id
									filename_download
								}
							}
						}
					}
					... on headlineDescriptionVideo{
						headline
						description
						videoUrl
					}
					... on quizCallSection{
						headline
						description
						ctaUrl
						ctaText
						image{
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
		}
	}
}
`