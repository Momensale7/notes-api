import mongoose from "mongoose";

// * create schema
const userSchema =new mongoose.Schema({
    name:"string",
    email:"string",
    password:"string",
    age:"number",
    isConfirmed:{
        type:"Boolean",
        default:false
    },
    OTBCode:{
        type:"string",
        default:Math.floor(100000 + Math.random() * 900000)
    },
    OTBCodeExpiry: {
        type: Date,
        default: () => new Date(Date.now() + 15 * 60 * 1000) // 15 minutes in milliseconds
    }
},{
    timestamps:true,
    versionKey:false
})
//* create model
const userModel= mongoose.model("User",userSchema)
export default userModel