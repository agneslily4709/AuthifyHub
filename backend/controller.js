import UserModel from "./model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const checkAPI = (req,res) => {
        res.send(`Hello world - API is working`)
}

export const signUpUser = async(req,res) => {
        try {
                const {fullName, email, password} = req.body
                const emailCheck = await UserModel.findOne({email:email})
                if(emailCheck) return res.status(403).json({message:"Email Id already exists"})
                const hashedPassword = await bcrypt.hash(password,10)
                const newUser = new UserModel({fullName:fullName,email:email,password:hashedPassword})
                await newUser.save()
                res.status(200).json(newUser)
        } catch (error) {
                res.status(400).json({message:"Error",error:error})
        }
}

export const signInUser = async(req,res) => {
        try {
                const {email,password} = req.body
                const user = await UserModel.findOne({email:email})
                if(!user) return res.status(403).json({message:"Email Id does not exist"})
                const passwordCheck = await bcrypt.compare(password,user.password)
                if(!passwordCheck) return res.status(403).json({message:"Wrong password"})
                const authToken = jwt.sign({id:user.id,fullName:user.fullName,email:user.email},process.env.AUTH_KEY,{expiresIn:"60s"})
                res.setHeader("X-Auth-Token", authToken);
                res.setHeader("name", "lilui");
                res.status(200).json({ message: "Login successful" });

        } catch (error) {
                res.status(400).json({message:"Error",error:error})
        }
}

export  const getProfile = async(req,res) => {
        const user = req.user
        try {
                res.status(200).json({fullName:user.fullName,email:user.email,id:user.id})
        } catch (error) {
                res.status(400).json({message:"Error",error:error})
        }
}

export const signOutUser = async(req,res) => {
        try {
                
        } catch (error) {
                res.status(400).json({message:"Error",error:error})
        }
}