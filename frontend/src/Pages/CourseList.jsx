// src/components/CourseList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/admin/view-course')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-amber-50 ">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      {courses.map((course) => (
        <div key={course._id} className="border mb-4 p-4 rounded">
          <h3 className="text-xl font-semibold">{course.courseName}</h3>
  <img
  src={`http://localhost:5000${course.bgImage}`}
  alt="bg"
  className="w-[150px] h-[100px] object-cover mt-2 mb-3"
/>



          <ul className="list-disc ml-6">
            {course.videoDetails.map((vid, idx) => (
              <li key={idx} className="mb-2">
                <strong>{vid.title}</strong>: {vid.description}
                <br />
                <iframe
  src={vid.videoUrl}
  width="100%"
  height="300"
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
></iframe>

              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
