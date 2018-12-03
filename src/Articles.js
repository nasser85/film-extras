import React from 'react'
import { graphql } from 'react-apollo'
import gql from "graphql-tag"

const Articles = ({ data: { loading, error, articles }}) => {
	if (loading || error) {
		return loading ? <p>Loading...</p>
		               : <p>Error</p>
	}
		console.log(loading, error, articles)
	return (
		<ul>
			{ articles.map ( (item, index) => 
				(<li key={index}>{item.title}</li>)
			) }
		</ul>
	)
}

export const articlesListQuery = gql`
	query ArticlesQuery {
		articles {
			section
			subsection
			title
			url
			byline
		}
	}
`

export default graphql(articlesListQuery)(Articles)