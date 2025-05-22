

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Searchbox from './Searchbox';
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000';

const MainCourseList = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const fetchCoursesWithDurations = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/admin/view-course`);
        const courseList = res.data;

        const updatedCourses = await Promise.all(courseList.map(async (course) => {
          const updatedVideos = await Promise.all(course.videoDetails.map(async (video) => {
            if (!video.duration || video.duration === 0) {
              const match = video.videoUrl?.match(/vimeo\.com\/video\/(\d+)/);
              if (match) {
                const videoId = match[1];
                try {
                  const res = await axios.get(`${SERVER_URL}/admin/get-duration/${videoId}`);
                  return { ...video, duration: res.data.duration || 0 };
                } catch (err) {
                  console.error(`Failed duration for ${videoId}`, err);
                }
              }
            }
            return video;
          }));
          return { ...course, videoDetails: updatedVideos };
        }));

        setCourses(updatedCourses);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      }
    };

    fetchCoursesWithDurations();
  }, []);

  const getTotalDuration = (videoDetails) => {
    if (!videoDetails || videoDetails.length === 0) return '0s';
    const total = Math.floor(videoDetails.reduce((sum, v) => sum + (v.duration || 0), 0));
    const h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
    return `${h ? h + 'h ' : ''}${m ? m + 'm ' : ''}${s || (!h && !m) ? s + 's' : ''}`.trim();
  };

  const startScroll = (direction) => {
    stopScroll(); // stop any existing scroll
    scrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction === 'right' ? 10 : -10;
      }
    }, 5); // smooth slow scroll
  };
  

  const stopScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };

  return (
    <div className="w-screen h-auto top-[11.2vh] px-[3.3vw]">
      <div className="flex flex-col items-start">
        <h3 className="text-white font-['Roboto'] text-[1.85vw] mt-[2.9vh]">Courses</h3>
        <Searchbox />

        <div className="relative w-full mt-[4vh]">
          {/* Left Hover Zone */}
          <div
            onMouseEnter={() => startScroll('left')}
            onMouseLeave={stopScroll}
            className="absolute left-0 top-0 h-full w-[4vw] z-20"
          />

          {/* Right Hover Zone */}
          <div
            onMouseEnter={() => startScroll('right')}
            onMouseLeave={stopScroll}
            className="absolute right-0 top-0 h-full w-[4vw] z-20"
          />

          <div
            ref={scrollRef}
            className="flex gap-[1.5vw] overflow-x-hidden overflow-y-hidden scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: 'smooth', width: '100%' }}
          >
            {courses.map((course, i) => {
              const bg = course.bgImage.startsWith('http') ? course.bgImage : `${SERVER_URL}${course.bgImage.startsWith('/') ? '' : '/'}${course.bgImage}`;
              return (
                <div
                  key={course._id || i}
                  onClick={() => navigate(`/Watchvideo/${course._id}`, { state: { course } })}
                  className="cursor-pointer min-w-[17.2vw] h-[20.3vh] rounded-[0.79vw] border-2 border-[#D9D9D9] hover:border-[#FF9D00] bg-cover bg-center relative transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(10, 10, 10, 0) 60%, rgba(10, 10, 10, 0.94) 85%), url(${bg})`
                  }}
                >
                  <div className="absolute bottom-[1.5vh] left-[2vh] flex justify-between items-center w-[13.2vw] h-[2.6vh]">
                    <span className="text-white text-[1vw]">{course.courseName}</span>
                    <span className="text-white text-[0.7vw]">
                      {getTotalDuration(course.videoDetails)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCourseList;
