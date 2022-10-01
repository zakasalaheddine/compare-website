import { pageSection } from './fragments/pageSection.fragment'

export const queryHomePage = `
${pageSection}
query networkData {
	network {
		name
		url
		logo {
			filename_download
		}
		pages {
			id
			page_id {
				headline
				sections {
					...pageSection
				}
				content
			}
		}
		homepage {
			name
			headline
			sections {
				...pageSection
			}
		}
		footer {
			id
			Pages_Title
			pages
			Socials_Title
			socials
		}
	}
}
`
