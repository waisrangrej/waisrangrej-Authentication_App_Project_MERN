import userRoute from '../api/routes/user.route.js'
import express from 'express'
import { DB_NAME } from './dbname.js'
import authRoute from "../api/routes/auth.route.js"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
});

const app =express()
const port=process.env.PORT || 3000

app.use(express.json())

;(async()=>{
try {
   const connect=  await mongoose.connect(`${process.env.DATABASSE_URI}/${DB_NAME}`)
   console.log(`\n MongoDB connected !! DB HOST ${connect.connection.host}`)

} catch (error) {
    console.log(`error while connecting to database ${error} `)
}
})
()

app.listen(port,(req,res)=>{
    console.log(`server listening on port ${port}`);
})

app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500;
    const message=err.message || "Internal server error";
    return res.status(statuscode).json({
        success:false,
        message,
        statuscode
    })
})
