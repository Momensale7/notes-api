import noteModel from "../../../db/models/notes.model.js";


const addNote=  async (req,res)=>{
    const addedNote =await noteModel.insertMany(req.body)
    res.json({message:"added",addedNote})
}
const getAllNotes = async (req,res)=>{
    const allNotes=await noteModel.find().select("-_id title description createdBy").populate({
        path:"createdBy",
        select:"name email -_id"
    })
    res.json(allNotes)
}
export {addNote,getAllNotes}