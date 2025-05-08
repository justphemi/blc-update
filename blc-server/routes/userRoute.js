import express from 'express'

import { signinControl, signupControl, adminControl } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post(`${process.env.AUTH_SIGNUP}`, signupControl)
userRouter.post(`${process.env.AUTH_SIGNIN}`, signinControl)
userRouter.post(`${process.env.AUTH_ADMIN}`, adminControl)


export default userRouter