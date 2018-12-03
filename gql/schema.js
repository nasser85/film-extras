import { gql } from 'apollo-server-express'

export const typeDefs = gql`
	type Query {
		articles: [Article]
	}

	type Article {
		section: String
		subsection: String
		title: String
		url: String
		byline: String
	}
`
export default typeDefs