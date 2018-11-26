import { Router } from "express"

const router = Router()

router.get("/", (req, res, next) => {
	res.send([{"hello": "world"}])

	//next()
})

router.get("/1", (req, res, next) => {
	res.send("part 1")

	//next()
})

export default router