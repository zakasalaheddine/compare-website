import { bullEyeFragment } from './fragments/bullEye'
import { descriptionTagCloudFragment } from './fragments/descriptionTagCloud'
import { directusFileFragment } from './fragments/directusFileFragment'
import { featuresFragment } from './fragments/features'
import { headlineDescriptionVideoFragment } from './fragments/headlineDescriptionVideo'
import { headlineImageFragment } from './fragments/headlineImage'
import { pageSection } from './fragments/pageSections'
import { prosConsFragment } from './fragments/prosCons'
import { quizCallFragement } from './fragments/quizCall'
import { toolsFragment } from './fragments/tools'

export const pageBySlugType = `
${directusFileFragment}
${bullEyeFragment}
${headlineDescriptionVideoFragment}
${quizCallFragement}
${toolsFragment}
${headlineImageFragment}
${featuresFragment}
${descriptionTagCloudFragment}
${prosConsFragment}
${pageSection}
query page($networkId: ID!, $pageType: String, $slug: String) {
	network: network_by_id(id: $networkId) {
		name
		url
		description
		logo {
			...directusFileFragment
		}
		favicon{
			...directusFileFragment
		}
		navbarItems: navbarLinks
		footerItems: footerLinks
		socialMediaItems: socialMediaLinks
		pages(filter: { page_id: { slug: { _eq: $slug } } }) {
			page: page_id(filter: { type: { _eq: $pageType } }) {
				id
				slug
				name
				headline
				description
				sections{
					...pageSection
				}
				content
			}
		}
	}
}
`
