import User from "../models/user.model.js";

export const getUsers=async(req,res)=>{
    try {

        const senderId=req.user._id

        const users=await User.find({_id:{$ne:senderId}}).select("-password")
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}