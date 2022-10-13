export const headlineImageFragment = `
fragment headlineImage on headlineImage {
	id
	headline
	image {
		...directusFileFragment
	}
}
`