import express from 'express';
import userRouter from './routes/user.route.js';
import AuthRouter from './routes/auth.route.js';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{console.log('success')}).catch(()=>{
    console.log('eoooooo')
})
const app=express();
app.use(express.json())
app.listen(3000,()=>{
    console.log('server running on port 3000')
})

app.use("/api/user",userRouter)
app.use("/api/auth",AuthRouter)
