import userModel from "../../../db/models/user.model.js";
import bcrypt from 'bcrypt'
import sendOurEmail from "../../utility/sendEmail.js";
import jwt from "jsonwebtoken";
const signUp=async (req,res)=>{
await userModel.insertMany(req.body)
sendOurEmail(req.body.email)
res.json({message:"added"})
}
const signIn=async (req,res)=>{
let foundedUser = await userModel.findOne({email:req.body.email})
if(!foundedUser||!bcrypt.compareSync(req.body.password,foundedUser.password)){
    return res.status(404).json({message:"invalid email or password"})
}
if(!foundedUser.isConfirmed){
    return res.status(400).json({message:"you should verify your account"})
}
jwt.sign({id:foundedUser.id,role:foundedUser.role}, 'mosfet', function(err, token) {
    console.log(token);
    res.status(200).json({message:"success",token})
  });
}
const verifyAccount=async (req,res)=>{
    const user = await userModel.findOne({email:req.params.email})
    const expiryDate = new Date(user.OTBCodeExpiry);
    if(user.OTBCode !=req.body.otb  || expiryDate< new Date()){
        return res.status(400).json({ message: "Invalid or expired OTB code." });
    }
    const updatedUser =await userModel.findOneAndUpdate({email:req.params.email},{isConfirmed:true},{new:true})
    res.json({message:"verified",updatedUser})
}
export {signUp,signIn,verifyAccount}