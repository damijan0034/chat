import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie=async(userId,res)=>{
    try {
        const token=jwt.sign({userId},process.env.JWT_SECRET,{
            expiresIn:"30d"
        })

        res.cookie("jwt",token,{
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000 ,// 30 days
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",

        })

    } catch (error) {
        throw new Error("Error generating token")
    }
}


