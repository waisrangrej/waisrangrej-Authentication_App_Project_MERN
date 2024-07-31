import bcrypt from 'bcrypt'
import { User } from "../Models/user.models.js";
import { errorHandler } from '../utils/error.js';

export const signup=async(req,res,next)=>{
 try {
    const {username, email, password}=req.body
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser=new User({username, email,password:hashedPassword})
  await newUser.save()
  res.status(200).json({message:"user created successfully"})
 } catch (error) {
    console.log("error in saving the new user");
   next(error)
 }
 
}