import express from "express";
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js'

dotenv.config();

const router = express.Router();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
//Create a post
router.route('/').post(async (req, res) => {
    try {
            const { name, prompt, photo ,pic} = req.body;
            const photoUrl = await cloudinary.uploader.upload(pic);

            const newPost=await Post.create({
                name,
                prompt,
                photo:photoUrl.url,
            }) 
            res.status(201).json({success:true, data:newPost});
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }
    });
export default router