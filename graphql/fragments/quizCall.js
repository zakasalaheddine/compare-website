export const quizCallFragement = `
fragment quizCall on quizCall {
	id
	headline
	description
	ctaText
	ctaTarget
	image {
		...directusFileFragment
	}
}
`
