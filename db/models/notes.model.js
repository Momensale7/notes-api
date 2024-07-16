import mongoose, { model, Schema } from "mongoose";

// *create schema
const noteSchema = new Schema({
    title: "string",
    description: "string",
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
    versionKey: false
})

const noteModel = model("note", noteSchema)
export default noteModel