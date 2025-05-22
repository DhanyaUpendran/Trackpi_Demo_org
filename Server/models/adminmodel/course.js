import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean,
});

const assessmentSchema = new mongoose.Schema({
  question: String,
  answers: [answerSchema], // 1 correct + 3 wrong
});

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
 duration: Number
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
  assessments: [assessmentSchema], 
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
