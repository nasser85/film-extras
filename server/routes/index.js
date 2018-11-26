import { Router } from "express"
import Users from './users'

const router = Router()

router.use("/users", Users)

router.use( (req, res) => res.sendStatus(404).end() )

export default router