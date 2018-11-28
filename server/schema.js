import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from '../gql/schema'
import resolvers from './sampleResolver'

const schema = makeExecutableSchema({ typeDefs })
addMockFunctionsToSchema({ schema })

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		endpoint: `http://localhost:4000/graphql`,
		settings: {
			"editor.theme": "light"
		}
	}
})

export default server