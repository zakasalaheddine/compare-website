import { pageSection } from './fragments/pageSection.fragment'

export const querySinglePage = `
${pageSection}
query getSinglePage($slug: String) {
	network {
		name
		url
		advertiserDisclosureTitle
		advertiserDisclosureContent
		logo {
			filename_download
		}
		pages {
			id
			page_id(filter: { slug: { _eq: $slug } }) {
				slug
				headline
				sections {
					...pageSection
				}
				content
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
