export const pageSection = `
fragment pageSection on page_sections {
	id
	collection
	item {
		... on bullEye {
			...bullEye
		}
		... on headlineDescriptionVideo{
			...headlineDescriptionVideo
		}
		... on quizCall {
			...quizCall
		}
		... on tools {
			...tools
		}
	}
}
`
