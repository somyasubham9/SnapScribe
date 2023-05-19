import mongoose from 'mongoose'

const connectDB=(url)=>{
    mongoose.set('strictQuery',true); //This option will be useful while working on search functionality

    mongoose.connect(url).then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.log(err);
    });
}

export default connectDB