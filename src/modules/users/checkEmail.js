import userModel from "../../../db/models/user.model.js"
import bcrybt from "bcrypt"
const checkEmail=async (req,res,next)=>{
    let foundedUser= await userModel.findOne({email:req.body.email})
    if (foundedUser) return res.status(409).json({message:"Already registerd"})
    req.body.password = bcrybt.hashSync(req.body.password,8)
    next()
}
export default checkEmail