import React from 'react';
import ReplayIcon from "../assets/replay.png"
import playnextIcon  from "../assets/vector.png"


const VideoEndPopUp =({ onReplay, onNext })=>{
return(
      <div className="absolute -top-[0vh]  w-[51.04vw] h-[68.61vh] gap-[1.04vw] ">
         <div className="w-[63.04vw] h-[66.19vh] px-[1.04vw] py-[1.39vh] rounded-[1.04vw] bg-[#3A3A3A] relative">
           < div className="w-[10.42vw] h-[16.83vh]  rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <div className="w-[29.8vw] h-[20vh] -ml-[18vh] gap-[2.1vw]  rounded-md">
 <div className="w-[26.4vw] h-[7.8vh] ml-[3vh] font-roboto font-semibold text-[1.15vw] leading-[3.9vh] tracking-[0] text-center text-white">
  Would you like to continue to the next video<br />
  or watch this one once more?
</div>
<div className="w-[22.4vw] h-[5.9vh] flex gap-[12px] ml-[6.8vh] mt-[3vh]">
 <div className="w-[10.9vw] h-[5.9vh] flex items-center gap-[10px] px-[30px] py-[12px] rounded-[40px] border border-white">
  {/* <!-- restart button--> */}
  <button 
  className="flex items-center gap-[0.52vw] text-white font-roboto font-medium text-[0.94vw] leading-[100%]"
  onClick={onReplay}
  >
  <img src={ReplayIcon} alt="Play Icon" className="w-[1.04vw] h-[1.85vh]" />
  <span className="w-[7.48vw] h-[1.95vh] text-center">Play Again</span>
</button>

</div>
<div className="w-[10.9vw] h-[5.9vh] flex items-center gap-[10px] px-[30px] py-[12px] rounded-[40px] border bg-[#FF9D00] border-[#FF9D00]">
  {/* <!-- play next button --> */}
<button 
className="flex items-center gap-[0.52vw] text-white font-roboto font-medium text-[0.94vw] leading-[100%]"
onClick={onNext}
>
    <img src={playnextIcon} alt="Icon 1" className="w-[1.04vw] h-[1.85vh]" />
    <span className="text-white text-[1vw] h-[1.85vh] -ml-[0.95vh] -mt-[0.5vh]">|</span>
  <span className="w-[7.48vw] h-[1.95vh] text-center"> Play Next</span>
</button>
</div>
</div>
</div>
      </div>
    </div>
     </div>

)}
export default  VideoEndPopUp;