import React from 'react'
import { SingleArticle } from "./SingleArticle"
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
			{ articles.map ( (item, index) => <SingleArticle key={index} image={item.multimedia[0].url} caption={item.multimedia[0].caption} /> ) }
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
			multimedia {
				url
				caption
			}
		}
	}
`

export default graphql(articlesListQuery)(Articles)