import noteModel from "../../../db/models/notes.model.js";
import jwt from "jsonwebtoken"

const addNote=  async (req,res)=>{
    req.body.createdBy=req.user.id
    const addedNote =await noteModel.insertMany(req.body)
    res.json({message:"added",addedNote})
}
const getAllNotes = async (req,res)=>{
            if (req.user.role=="user"){
                const allNotes=await noteModel.find({createdBy:req.user.id}).select("-_id title description createdBy").populate({
                    path:"createdBy",
                    select:"name email -_id"
                })
                res.json(allNotes)
            }
            else if (req.user.role=="admin"){
                const allNotes=await noteModel.find().select("-_id title description createdBy").populate({
                    path:"createdBy",
                    select:"name email -_id"
                })
                res.json(allNotes)
            }
}
const updateNote = async (req,res)=>{
    let updatedNote= await noteModel.findOneAndUpdate({_id:req.params.id,createdBy:req.user.id},req.body,{new:true})
    updatedNote && res.status(200).json({message:"updated",updatedNote})
    !updatedNote && res.status(402).json({message:"note not found"})
    
}
const deleteNote =async (req,res)=>{
    let deletedNote= await noteModel.findOneAndDelete({_id:req.params.id,createdBy:req.user.id})
    deletedNote && res.status(200).json({message:"deleted",deletedNote})
    !deletedNote && res.status(404).json({message:"note not found"})


}
export {addNote,getAllNotes,updateNote,deleteNote}