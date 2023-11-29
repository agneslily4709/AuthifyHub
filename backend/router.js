import express from "express"
import { checkAPI, getProfile, signInUser, signOutUser, signUpUser } from "./controller.js"
import authentication from "./authMiddleware.js"

const router = express.Router()

router.get("/",checkAPI)
router.post("/signup",signUpUser)
router.post("/signin",signInUser)
router.get("/profile",authentication,getProfile)
router.get("/signout",authentication,signOutUser)

export default router