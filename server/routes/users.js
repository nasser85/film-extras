import { Router } from "express"
import fs from 'fs'
import request from 'request-promise'

const router = Router()

router.get("/", (req, res, next) => {
	res.send([{"hello": "world"}])

	//next()
})

router.get("/:section", (req, res, next) => {
	request({ uri: `https://api.nytimes.com/svc/topstories/v2/${req.params.section}.json?api-key=3bda2d9f53ff4c64895a6bc9738f7848`, json: true })
		.then(data => {
			res.send(data)
		})
	.catch(next)

	

	//next()
})

export default router