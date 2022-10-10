export const headlineDescriptionVideoFragment = `
fragment headlineDescriptionVideo on headlineDescriptionVideo {
	id
	headline
	description
	videoURL
	videoThumbnail {
		...directusFileFragment
	}
}
`