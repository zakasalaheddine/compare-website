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

export const queryCurrentNetwork = `
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
