import express from "express"
import { addUser, deleteUser, getAllUser, searchUser, sortUsers, updateUser } from "./user.controller.js";
const userRoutes =express.Router()

userRoutes.route("/user").get(getAllUser).post(addUser)
userRoutes.route("/user/:id").put(updateUser).delete(deleteUser)
userRoutes.get("/user/sort",sortUsers)
userRoutes.get("/user/search/:id",searchUser)

  export default userRoutes  