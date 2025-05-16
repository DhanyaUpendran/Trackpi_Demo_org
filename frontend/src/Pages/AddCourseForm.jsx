import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddCourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [bgImage, setBgImage] = useState(null);
  const [videoDetails, setVideoDetails] = useState([]);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDesc, setVideoDesc] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const videoInputRef = useRef();

  const handleAddVideo = () => {
    if (videoTitle && videoDesc && videoFile) {
      setVideoDetails([...videoDetails, { title: videoTitle, description: videoDesc, file: videoFile }]);
      setVideoTitle('');
      setVideoDesc('');
      setVideoFile(null);
      videoInputRef.current.value = null; // Clear file input
    } else {
      alert('Please fill video title, description and choose a file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('courseName', courseName);
    formData.append('bgImage', bgImage);

    const metadata = videoDetails.map(({ title, description }) => ({ title, description }));
    formData.append('videoDetails', JSON.stringify(metadata));

    videoDetails.forEach((v) => {
      formData.append('videos', v.file);
    });

    try {
      const res = await axios.post('http://localhost:5000/admin/add-course', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Course added!');
      setCourseName('');
      setBgImage(null);
      setVideoDetails([]);
    } catch (error) {
      console.error(error);
      alert('Failed to add course');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-amber-300 p-4 rounded-lg max-w-xl mx-auto shadow">
      <h2 className="text-lg font-bold">Add New Course</h2>
      <input type="text" placeholder="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} required className="w-full p-2 rounded" />
      <input type="file" accept="image/*" onChange={(e) => setBgImage(e.target.files[0])} required className="w-full p-2" />

      <hr />
      <h3 className="text-md font-semibold">Add Video</h3>
      <input type="text" placeholder="Video Title" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} className="w-full p-2 rounded" />
      <input type="text" placeholder="Video Description" value={videoDesc} onChange={(e) => setVideoDesc(e.target.value)} className="w-full p-2 rounded" />
      <input ref={videoInputRef} type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files[0])} className="w-full p-2" />

      <button type="button" onClick={handleAddVideo} className="bg-blue-500 text-white px-4 py-2 rounded">Save & Add More</button>

      <ul>
        {videoDetails.map((v, index) => (
          <li key={index}>{v.title} - {v.description}</li>
        ))}
      </ul>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save Course</button>
    </form>
  );
};

export default AddCourseForm;
