import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js';
import postRoute from './routes/postRoute.js'
import postCapRoute from './routes/postCapRoute.js'
import generateRoute from './routes/generateRoute.js'

dotenv.config();   //allows us to pull our environment variable from dotenv file

const app=express(); // initialize express application

// additional middleware 
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoute);
app.use('/api/v1/generate',generateRoute);
app.use('/api/v1/postCap',postCapRoute);

app.get('/',async(req,res)=>{
    res.send('Hello From SSD!')
})

const startServer=async ()=>{
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error); 
    }
    
}
startServer();