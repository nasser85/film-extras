import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'

import schema from './schema'
import routes from './routes'

const app = express()
const indexFile = path.resolve(`${__dirname}/../public/index.html`)

schema.applyMiddleware({ app })
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }))
// app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql' }))
//configure public folder to serve static assets
app.use("*", cors({ origin: "http://locahost:4000" }))
app.use(express.static("public"));

//configure routes
app.use("/api", routes)

app.get('/*', (req,res) => res.sendFile(indexFile) )

app.listen(4000, () => {
	console.log("App running on port 4000!")
})