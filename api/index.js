import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(5000, ()=>{
    console.log('Server listening on port 5000');
});


app.use("/api/user", userRouter);