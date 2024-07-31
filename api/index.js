import { log } from 'console'
import express from 'express'
import { DB_NAME } from './dbname.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
});

const app =express()
const port=process.env.PORT || 3000

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