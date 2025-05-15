
import React from 'react'

const VideoList= ()=> {
  return (
    <div>
        <div className="w-[29.5vw] h-[87vh] absolute top-[12.18vh] left-[2.8vw] gap-[2vw]">
       <div className="w-[29.5vw] h-[3.05vh] flex items-center justify-between">
  <div className="w-[9.22vw] h-[3.06vh] font-bold text-[1.46vw] leading-[100%] text-center text-white font-['Roboto']">
  Section Name
</div>
   <div className="w-[2.71vw] h-[2.13vh] font-semibold text-[1.04vw] leading-[100%] text-center text-white font-['Roboto'] pt-[0.5vh] pl-[0.7vh]">
    2 / 10
     </div>
</div>
<div className="w-[29.5vw] h-[82.83vh]  gap-[0.48vw] flex flex-col   p-4 ">
<div className="w-[29.5vw] h-[11.11vh] gap-[0.73vw] rounded-[15px] border border-white p-[0.78vw] -ml-[1.5vw] -mt-[2vh] flex">
  {/* Left: Thumbnail */}
  <div className="w-[8.62vw] h-[8.33vh] rounded-[8px] bg-[#AEAEAE]">
    {/* Thumbnail or image can go here */}
  </div>

  {/* Right: Text content */}
  <div className="w-[9.38vw] h-[6.57vh] gap-[0.52vw] flex flex-col justify-center ml-[0.5vw]">
    <div className="w-[9.38vw] h-[2.13vh] font-medium text-[1.04vw] leading-[100%] text-white text-center font-['Roboto'] pl-[0.5vh]">
     <h4>Introduction Video</h4> 
    </div>
    <div className="w-[19.38vw] h-[3.52vh] font-normal text-[0.83vw] leading-[100%] text-white font-['Roboto'] pl-[1.4vh]">
      <p>Introduction Video for the section of course</p>
    </div>
  </div>
</div>


</div>
    </div>
    </div>
  )
}

export default VideoList
