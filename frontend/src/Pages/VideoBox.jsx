import React, { useState } from 'react'
import playButtonIcon from "../assets/playbutton-icon.png"

const VideoBox=()=> {
    const [isWider, setIsWider] = useState(false);
  return (
    <div>
          <div className="absolute top-[17.73vh] left-[25.1vw] w-[51.04vw] h-[68.61vh] gap-[1.04vw] ml-[9.9vw]">
 <div className="w-[63.04vw] h-[66.19vh] px-[1.04vw] py-[1.39vh] rounded-[1.04vw] bg-[#3A3A3A] relative">
  <div className="w-[10.42vw] h-[16.83vh]  rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    {/* Play button image */}
          <div className="absolute w-full h-full flex items-center justify-center">
           <button 
  onClick={() => console.log('Play video clicked')} 
  className="bg-transparent border-0 cursor-pointer focus:outline-none hover:opacity-80 transition-opacity duration-300"
  aria-label="Play Video"
>
  <img 
    src={playButtonIcon} 
    alt="Play Video" 
    className="w-[4.86vw] h-[4.86vw] object-contain"
  />
</button>
 
</div>
  </div>

  {/* video tracking line session  */}
<div className="w-[61.04vw] h-[11.71vh] flex justify-between pt-[53.33vh] pb-[0.33vh]">

<div className="w-[65.27vw] h-[2.64vh] flex justify-between items-center mt-[1vh]">
  {/* Left: Current Time */}
  <span className="w-[2.77vw] h-[2.64vh] text-white text-[1.11vw] font-medium leading-[100%] font-['Urbanist']">
    00:40
  </span>

  {/* Right: Total Time */}
  <span className="w-[2.84vw] h-[2.64vh] text-white text-[1.11vw] font-medium leading-[100%] font-['Urbanist'] ">
    02:00
  </span>
</div>
</div>
 {/* video tracking line */}

<div className="w-[61.04vw] mt-[3.9vh]">
  <div
    className="relative h-[0.8vh] w-full bg-gray-400 rounded-full cursor-pointer"
    onClick={(e) => {
      const bar = e.currentTarget;
      const x = e.clientX - bar.getBoundingClientRect().left;
      const percentage = (x / bar.offsetWidth) * 100;
      document.getElementById("progress-fill").style.width = `${percentage}%`;
    }}
  >
    <div
      id="progress-fill"
      className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
      style={{ width: "30%" }} // initial progress
    ></div>
  </div>


</div>
{/* restart Button */}
<button
  onClick={() => console.log("Restart clicked")}
  className="w-[2.08vw] h-[3.33vh]  text-white rounded-full flex items-center justify-center mt-[1vh] ml-[-1vh]"
>
  ⟳
</button>
 {/* Wider / Lesser Toggle Button */}
       
  {/* Toggle Button */}
<div 
  className="absolute right-[2.3vh] flex items-center justify-center w-[0.9vw] h-[2vh] gap-[0.5vw]"
  style={{ marginTop: isWider ? "-2.57vh" : "-2.57vh" }}
>
  <button 
    onClick={() => setIsWider(!isWider)}
    className="w-full h-full flex items-center justify-center bg-transparent focus:outline-none"
    aria-label={isWider ? "Lesser" : "Fullscreen"}
  >
    <div className="relative w-full h-full">
      {/* Borders flip depending on state */}
      {isWider ? (
        <>
          {/* Lesser icon */}
          <div className="absolute top-0 left-0 w-1 h-1 border-b-2 border-r-2 border-white"></div>
          <div className="absolute top-0 right-0 w-1 h-1 border-b-2 border-l-2 border-white"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 border-t-2 border-r-2 border-white"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 border-t-2 border-l-2 border-white"></div>
        </>
      ) : (
        <>
          {/* Wider icon */}
          <div className="absolute top-0 left-0 w-1 h-1 border-t-2 border-l-2 border-white"></div>
          <div className="absolute top-0 right-0 w-1 h-1 border-t-2 border-r-2 border-white"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 border-b-2 border-l-2 border-white"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 border-b-2 border-r-2 border-white"></div>
        </>
      )}
    </div>
  </button>
</div>




</div>


{/* description part */}
<div className="w-[22.29vw] h-[6.57vh] gap-[0.52vw]  ">
 
  <div className="w-[22.29vw] h-[3.24vh] text-white font-['Roboto'] font-medium text-[1.56vw] leading-[100%] tracking-normal mt-[1.5vh] ml-[0.5vw]">
  <h5>Introduction Video</h5>
</div>
<div className="w-[22.29vw] h-[3.28vh] text-white font-['Roboto'] font-thin text-[1.15vw] leading-[100%] tracking-normal ml-[0.5vw]">
 <p> Introduction Video for the section of course</p>
</div>

</div>

</div>


      
    </div>
  )
}

export default VideoBox
