import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookie } from "../utils/generateToken.js"

export const setUser=async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10)
        const{fullName,username,password,gender}=req.body
        const hashedPassword=await bcrypt.hash(password,salt)

        const user=await User.create({
            fullName,
            username,
            password: hashedPassword,
            gender
        })

        await generateTokenAndSetCookie(user._id, res)

        res.status(201).json({
            fullName:user.fullName,
            username:user.username,
            gender:user.gender,
            createdAt:user.createdAt
        })


    } catch (error) {
        res.status(500).json({ error: error.message })  
    }
}

export const loginUser=async(req,res)=>{
    try {
        const {username,password}=req.body
        const user=await User.findOne({username})

        await generateTokenAndSetCookie(user._id, res)

        if(!user){
            return res.status(400).json({ error: "Invalid credentials" })
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({ error: "Invalid credentials" })
        }
        res.status(200).json({
            fullName:user.fullName,
            username:user.username,
            gender:user.gender,
            createdAt:user.createdAt
        })
    } catch (error) {
        res.status(500).json({ error: error.message })  
    }
}

export const logoutUser=async(req,res)=>{
    try {
        res.clearCookie("token",{
            httpOnly: true,
            maxAge: 0
        })
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
         res.status(500).json({ error: error.message }) 
    }
}