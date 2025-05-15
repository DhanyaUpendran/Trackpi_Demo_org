import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => ({
    folder: file.mimetype.startsWith('video') ? 'course_videos' : 'course_images',
    resource_type: file.mimetype.startsWith('video') ? 'video' : 'image',
  }),
});

const upload = multer({ storage });

export default upload;
