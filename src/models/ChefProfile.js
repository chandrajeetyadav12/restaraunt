import mongoose from "mongoose";


const chefProfileSchema = new mongoose.Schema(
    {
        email: {
            type:String,
            unique: true,
            trim: true,
            lowercase: true,
            sparse: true
        },
        chef: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chef",
            required: true,
            unique: true, 
        },
        address: String,
        highestQualification: String,
        experienceYears: Number,
        specialization: String,
    },
    { timestamps: true }
);


export default mongoose.models.ChefProfile ||
    mongoose.model("ChefProfile", chefProfileSchema);