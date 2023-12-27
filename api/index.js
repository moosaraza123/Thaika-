const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{console.log('success')}).catch(()=>{
    console.log('eoooooo')
})
const app=express();
app.listen(3000,()=>{
    console.log('server running on port 3000')
})