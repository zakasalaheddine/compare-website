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
		... on headlineImage {
			...headlineImage
		}
		... on features {
			...features
		}
		... on descriptionTagCloud {
			...descriptionTagCloud
		}
		... on prosCons {
			...prosAndCons
		}
	}
}
`
