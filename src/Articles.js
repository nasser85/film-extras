import React from 'react'
import { gql, graphql } from 'react-apollo'

const Articles = ({ data: { loading, error, articles }}) => {
	if (loading || error) {
		return loading ? <p>Loading...</p>
		               : <p>Error</p>
	}
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

export default graphql(articlesListQuery)Articles