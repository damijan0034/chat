import User from "../models/user.model.js"

export const setUser=async(req,res)=>{
    try {
        const{fullName,username,password,gender}=req.body

        const user=await User.create({
            fullName,
            username,
            password,
            gender
        })

        res.status(201).json(user)


    } catch (error) {
        res.status(500).json({ error: error.message })  
    }
}