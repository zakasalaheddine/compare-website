import { bullEyeFragment } from './fragments/bullEye'
import { directusFileFragment } from './fragments/directusFileFragment'
import { headlineDescriptionVideoFragment } from './fragments/headlineDescriptionVideo'
import { pageSection } from './fragments/pageSections'
import { quizCallFragement } from './fragments/quizCall'
import { toolsFragment } from './fragments/tools'

export const queryCurrentNetwork = `
${directusFileFragment}
${bullEyeFragment}
${headlineDescriptionVideoFragment}
${quizCallFragement}
${toolsFragment}
${pageSection}

query networkData($networkId: ID!) {
	network: network_by_id(id: $networkId){
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
		homepage{
			name
			headline
			description
			sections{
				...pageSection
			}
		}
	}
}
`
