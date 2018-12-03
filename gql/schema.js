import { gql } from 'apollo-server-express'

export const typeDefs = gql`
	type Query {
		articles: [Article]
	}
	type Image {
		url: String
		caption: String
	}
	type Article {
		section: String
		subsection: String
		title: String
		url: String
		byline: String
		multimedia: [Image]
	}
`
export default typeDefs