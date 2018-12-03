import axios from 'axios'

const getArticles = async (parents, args) => {
	return await axios.get(`http://localhost:4000/api/users/sports?api-key=3bda2d9f53ff4c64895a6bc9738f7848`)
		.then(res => res.data.results)
		.catch(err => console.log(err))
}

const resolvers = {
	Query: {
		articles: getArticles
	}
}

export default resolvers