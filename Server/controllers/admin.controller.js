import Course from '../models/adminmodel/course.js';
// import ffmpeg from 'fluent-ffmpeg';


export const addCourse = async (req, res) => {
  try {
    const { courseName, videos } = req.body;
    const bgImage = req.files['bgImage'][0].path;
    const uploadedVideos = req.files['videos'] || [];

    // Parse stringified videos (with titles and descriptions)
    const videoMetadata = JSON.parse(videos);

    const finalVideoList = videoMetadata.map((meta, index) => ({
      title: meta.title,
      description: meta.description,
      videoUrl: uploadedVideos[index]?.path || '', // cloudinary video URL
    }));

    const newCourse = new Course({
      courseName,
      bgImage,
      videos: finalVideoList,
    });

    await newCourse.save();
    res.status(201).json({ success: true, course: newCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to add course', error });
  }
};
