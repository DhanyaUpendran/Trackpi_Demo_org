import Course from '../models/adminmodel/course.js';
// import ffmpeg from 'fluent-ffmpeg';


export const addCourse = async (req, res) => {
  try {
    const { courseName, videoDetails } = req.body;
    const bgImage = req.files?.['bgImage']?.[0]?.path;

    if (!bgImage) {
      return res.status(400).json({ success: false, message: 'Background image is required' });
    }

    // Normalize video upload format
    const uploadedVideosRaw = req.files?.['videos'];
    const uploadedVideos = Array.isArray(uploadedVideosRaw)
      ? uploadedVideosRaw
      : uploadedVideosRaw ? [uploadedVideosRaw] : [];

    let videoMetadata = [];
    try {
      videoMetadata = JSON.parse(videoDetails);
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Invalid video metadata format',
        error: err.message,
      });
    }

    if (videoMetadata.length !== uploadedVideos.length) {
      return res.status(400).json({
        success: false,
        message: `Mismatch: ${videoMetadata.length} metadata items but ${uploadedVideos.length} videos uploaded`,
      });
    }

    const finalVideoList = videoMetadata.map((meta, index) => ({
      title: meta.title,
      description: meta.description,
      videoUrl: uploadedVideos[index]?.path || '',
    }));

    const newCourse = new Course({
      courseName,
      bgImage,
      videoDetails: finalVideoList,
    });

    await newCourse.save();
    res.status(201).json({ success: true, course: newCourse });

  } catch (error) {
    console.error('Error while saving course:', {
      body: req.body,
      files: req.files,
      error,
    });
    res.status(500).json({ success: false, message: 'Failed to add course', error: error.message });
  }
};
// GET /api/courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching courses', error });
  }
};