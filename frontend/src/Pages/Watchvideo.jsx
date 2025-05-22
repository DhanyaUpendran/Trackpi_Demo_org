import React, {  useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoList from './VideoList';
import Searchbox from './Searchbox';
import VideoBox from './VideoBox';


const WatchvideoSection = () => {


  const location = useLocation();
  const course = location.state?.course;
  const [activeIndex, setActiveIndex] = useState(0);
 const [selectedVideo, setSelectedVideo] = useState(course?.videoDetails[0] || null);

//debug session
 useEffect(() => {
  console.log("Selected Video:", selectedVideo);
}, [selectedVideo]);


  useEffect(() => {
    if (course?.videoDetails?.length > 0) {
      setSelectedVideo(course.videoDetails[0]);
      setActiveIndex(0);
    }
  }, [course]);
const handleNextVideo = () => {
  const nextIndex = activeIndex + 1;
  if (nextIndex < course.videoDetails.length) {
    setActiveIndex(nextIndex);
    setSelectedVideo(course.videoDetails[nextIndex]);
  }
};


  return (
    <div >
      {/* <VideoList course={course} onVideoSelect={setSelectedVideo} /> */}
      <VideoList
  course={course}
  activeIndex={activeIndex}
  setActiveIndex={setActiveIndex}
  onVideoSelect={(video) => {
    setSelectedVideo(video);
  }}
/>

      <Searchbox />
      {selectedVideo && (
        <VideoBox
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
          description={selectedVideo.description}
          activeIndex={activeIndex}
          onNextVideo={handleNextVideo} 
          isLastVideo={activeIndex === course.videoDetails.length - 1}
        />
      )}
    </div>
  );
};


export default WatchvideoSection;
