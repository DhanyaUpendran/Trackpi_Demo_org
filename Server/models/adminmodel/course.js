import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
});

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  bgImage: {
    type: String, // Cloudinary URL
    required: true,
  },
  videoDetails:[videoSchema],
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
