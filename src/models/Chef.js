import mongoose from "mongoose";


const chefSchema = new mongoose.Schema(
{
name: { type: String, required: true, trim: true },
designation:{
    type:String
},
age: { type: Number, required: true },
isActive: { type: Boolean, default: true },
},
{ timestamps: true }
);


export default mongoose.models.Chef || mongoose.model("Chef", chefSchema);