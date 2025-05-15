import express from 'express';
import upload from '../utils/multer.js';
import {addCourse} from '../controllers/admin.controller.js';

const router = express.Router();


// Handle one image + multiple videos
router.post('/add-course',upload.fields([ { name: 'bgImage', maxCount: 1 },{ name: 'videos', maxCount: 20 },]),addCourse);


export default router;
