const VideoList = ({ course, onVideoSelect, activeIndex, setActiveIndex }) => {
  return (
    <div className="w-[29.5vw] h-[87vh] absolute top-[12.18vh] left-[2.8vw] gap-[2vw]">
      <div className="w-[28vw] h-[3.05vh] flex items-center justify-between ">
        <div className="w-[9.22vw] h-[3.06vh] font-bold text-[1.46vw] text-center text-white font-['Roboto']">
          {course.courseName}
        </div>
        <div className="w-[2.71vw] h-[2.13vh] font-semibold text-[1.04vw] text-center text-white font-['Roboto'] pt-[0.5vh] pl-[0.7vh]">
          {activeIndex + 1} / {course.videoDetails.length}
        </div>
      </div>

      <div className="w-[29.5vw] h-[82.83vh] gap-[0.48vw] flex flex-col">
        <div className="h-[82.83vh] flex flex-col p-4 overflow-y-auto">
          {course.videoDetails.map((video, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveIndex(index);
               onVideoSelect(course.videoDetails[index]);
              }}
              className={`cursor-pointer w-full h-[13.11vh] border rounded-[15px] flex p-[0.78vw] mb-3 ${
                activeIndex === index ? "border-yellow-400" : "border-white"
              }`}
            >
              <div className="w-[7.62vw] h-[10.53vh] bg-[url('./assets/thumbnailBackground.png')] bg-cover bg-no-repeat rounded-[8px]" />
              <div className="flex flex-col justify-center ml-3">
                <h4 className="text-white text-[1.04vw] font-medium">{video.title}</h4>
                <p className="text-white text-[0.83vw]">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
