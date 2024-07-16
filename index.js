import express from "express"
import { dbConnection } from "./db/dbConnection.js"
import userRoutes from "./src/modules/users/user.routes.js"
import noteRoutes from "./src/modules/notes/notes,routes.js"
import sendOurEmail from "./src/utility/sendEmail.js"
const app=express()
const port =3000
app.use(express.json())
app.use(userRoutes)
app.use(noteRoutes)
dbConnection
app.listen(port)