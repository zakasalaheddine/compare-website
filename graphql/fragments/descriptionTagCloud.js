export const descriptionTagCloudFragment = `
fragment descriptionTagCloud on descriptionTagCloud {
	id
	logo {
		...directusFileFragment
	}
	headline
	description
	tags
}
`
