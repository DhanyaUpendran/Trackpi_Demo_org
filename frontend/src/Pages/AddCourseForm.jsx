import React, { useState } from 'react';
import axios from 'axios';

const AddCourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [bgImage, setBgImage] = useState(null);

  const [videoDetails, setVideoDetails] = useState([]);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDesc, setVideoDesc] = useState('');
  const [videoId, setVideoId] = useState('');

  const [assessments, setAssessments] = useState([]);
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswers, setWrongAnswers] = useState(['', '', '']);

  // Add video detail
  const handleAddVideo = () => {
    if (videoTitle && videoDesc && videoId) {
      setVideoDetails([
        ...videoDetails,
        { title: videoTitle, description: videoDesc, videoId },
      ]);
      setVideoTitle('');
      setVideoDesc('');
      setVideoId('');
    } else {
      alert('Please fill in all video fields.');
    }
  };

  // Add assessment
const handleAddAssessment = () => {
  if (question && correctAnswer && wrongAnswers.every(ans => ans.trim() !== '')) {
    setAssessments([
      ...assessments,
      {
        question,
        correctAnswer,
        wrongAnswers,
      },
    ]);
    setQuestion('');
    setCorrectAnswer('');
    setWrongAnswers(['', '', '']);
  } else {
    alert('Please fill in all assessment fields.');
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('courseName', courseName);
    formData.append('bgImage', bgImage);
    formData.append('videoDetails', JSON.stringify(videoDetails));
    formData.append('assessments', JSON.stringify(assessments));

    try {
      const res = await axios.post('http://localhost:5000/admin/add-course', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Course added!');
      // Reset form
      setCourseName('');
      setBgImage(null);
      setVideoDetails([]);
      setAssessments([]);
    } catch (err) {
      console.error(err);
      alert('Error adding course.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-amber-100 p-6 rounded-lg max-w-2xl mx-auto shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>

      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        required
        className="w-full p-2 rounded border"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setBgImage(e.target.files[0])}
        required
        className="w-full p-2"
      />

      <hr className="my-4" />
      <h3 className="text-xl font-semibold">Add Vimeo Video</h3>

      <input
        type="text"
        placeholder="Video Title"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
        className="w-full p-2 rounded border"
      />

      <input
        type="text"
        placeholder="Video Description"
        value={videoDesc}
        onChange={(e) => setVideoDesc(e.target.value)}
        className="w-full p-2 rounded border"
      />

      <input
        type="text"
        placeholder="Vimeo Video ID (e.g., 1014697717)"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
        className="w-full p-2 rounded border"
      />

      <button
        type="button"
        onClick={handleAddVideo}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Video
      </button>

      <ul className="list-disc pl-5 mt-2">
        {videoDetails.map((v, i) => (
          <li key={i}>
            {v.title} - Vimeo ID: {v.videoId}
          </li>
        ))}
      </ul>

      <hr className="my-4" />
      <h3 className="text-xl font-semibold">Add Assessment</h3>

<input
  type="text"
  placeholder="Question"
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  className="w-full p-2 rounded border mb-2"
/>

<input
  type="text"
  placeholder="Correct Answer"
  value={correctAnswer}
  onChange={(e) => setCorrectAnswer(e.target.value)}
  className="w-full p-2 rounded border mb-2"
/>

{wrongAnswers.map((answer, idx) => (
  <input
    key={idx}
    type="text"
    placeholder={`Wrong Answer ${idx + 1}`}
    value={answer}
    onChange={(e) => {
      const updated = [...wrongAnswers];
      updated[idx] = e.target.value;
      setWrongAnswers(updated);
    }}
    className="w-full p-2 rounded border mb-2"
  />
))}

<button
  type="button"
  onClick={handleAddAssessment}
  className="bg-purple-500 text-white px-4 py-2 rounded"
>
  Add Assessment
</button>


      <ul className="list-disc pl-5 mt-2">
        {assessments.map((a, i) => (
          <li key={i}>
            {a.question} - Correct: {a.correctAnswer}
          </li>
        ))}
      </ul>

      <hr className="my-4" />
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded text-lg"
      >
        Save Course
      </button>
    </form>
  );
};

export default AddCourseForm;
