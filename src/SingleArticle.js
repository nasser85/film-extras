import React from "react"

export const SingleArticle = (props) => {
	return (
		<div>
			<img src={props.image} />
			<p>{props.caption}</p>
		</div>
	)
}