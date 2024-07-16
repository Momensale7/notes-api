import express from 'express'
import { signIn, signUp, verifyAccount } from './user.controller.js'
import checkEmail from './checkEmail.js'
let userRoutes=express.Router()

userRoutes.post("/signup",checkEmail,signUp)
userRoutes.post("/signin",signIn)
userRoutes.get("/verify/:email",verifyAccount)




export default userRoutes