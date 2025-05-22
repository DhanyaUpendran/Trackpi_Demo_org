import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Define image storage path
const imagePath = 'public/assets/bgImages';
fs.mkdirSync(imagePath, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagePath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext;
    cb(null, filename);
  },
}); 

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed for bgImage!'), false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
