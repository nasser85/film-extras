import express from 'express'
import path from 'path'
import nodemon from 'nodemon'

import routes from './routes'

const app = express()
const indexFile = path.resolve(`${__dirname}/../public/index.html`)

//configure public folder to serve static assets
app.use(express.static("public"));

//configure routes
app.use("/api", routes)

app.get('/*', (req,res) => res.sendFile(indexFile) )

app.listen(4000, () => {
	console.log("App running on port 4000!")
})