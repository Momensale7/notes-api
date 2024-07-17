import express from "express"
import { addNote, deleteNote, getAllNotes ,updateNote} from "./notes,controller.js"
import verifyTokken from "../../middleWare/verifyToken.js"
import allowTo from "../../middleWare/allowTo.js"
const noteRoutes =express.Router()

noteRoutes.use("/note",verifyTokken)
noteRoutes.post("/note",allowTo('user'),addNote)
noteRoutes.get("/note",allowTo('user','admin'),getAllNotes)
noteRoutes.put("/note/:id",updateNote)
noteRoutes.delete("/note/:id",deleteNote)


export default noteRoutes