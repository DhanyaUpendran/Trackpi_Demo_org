import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Assessment = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (e) => setSelectedOption(e.target.value);

  return (
    // <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-20  text-white font-inter">
     <div className='text-white font-inter w-screen h-auto'>
      <div className="absolute w-[88.6vw] h-[3.89vh] top-[39.87vh] left-[4vw] right-[4vw] flex justify-between ">
  {/* Left-aligned inner content */}
  <div className="w-[18.33vw] h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw]">
    Out of 4 / 30 Questions
  </div>
  {/* Right Side Text */}
  <div className="w-[16.41vw] h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw]  ">
    Time Remaining: 00 : 48 : 22
  </div>
</div>

        

        {/* Question Form */}
<div className="absolute w-[88.6vw] h-[42.78vh] top-[50.36vh] left-[4vw] right-[4vw] flex gap-[2.6vw]">
  <div className="w-full h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw]">
    4 What tool is used to identify strengths, weaknesses, opportunities, and threats?
     {/* Options Container */}
  <div className="w-full h-[31.94vh] px-[0.26vw] flex flex-wrap justify-between ">
    <div className="w-[33.85vw] h-[10.89vh] flex items-center gap-[1.56vw]  rounded-[0.5vw] px-[1vw] text-white text-[1.11vw] font-roboto font-medium">
 {/* Select Button */}
  <button className="w-[1.5vw] h-[3.1vh] rounded-[50%] border-[3px] border-white"></button>

  {/* Option Text */}
  <div className="w-[10.64vw] h-[3.61vh] text-white font-roboto font-semibold text-[1.15vw] leading-[100%] tracking-[0px] ">
   <p> A)&nbsp;&nbsp; SWOT Analysis </p>
  </div>
  
</div>
{/* second option */}
 <div className="w-[33.85vw] h-[10.89vh] flex items-center gap-[1.56vw]  rounded-[0.5vw] px-[1vw] text-white text-[1.11vw] font-roboto font-medium">
 {/* Select Button */}
  <button className="w-[1.5vw] h-[3.1vh] rounded-[50%] border-[3px] border-white"></button>

  {/* Option Text */}
  <div className="w-[10.64vw] h-[3.61vh] text-white font-roboto font-semibold text-[1.15vw] leading-[100%] tracking-[0px] ">
   <p> A)&nbsp;&nbsp; SWOT Analysis </p>
  </div>
  
</div>
 {/* 3rd and 4 th option  */}

    <div className="w-[33.85vw] h-[10.89vh] flex items-center gap-[1.56vw]  rounded-[0.5vw] px-[1vw] text-white text-[1.11vw] font-roboto font-medium">
 {/* Select Button */}
  <button className="w-[1.5vw] h-[3.1vh] rounded-[50%] border-[3px] border-white"></button>

  {/* Option Text */}
  <div className="w-[10.64vw] h-[3.61vh] text-white font-roboto font-semibold text-[1.15vw] leading-[100%] tracking-[0px] ">
   <p> A)&nbsp;&nbsp; SWOT Analysis </p>
  </div>
  
</div>
{/* second option */}
 <div className="w-[33.85vw] h-[10.89vh] flex items-center gap-[1.56vw]  rounded-[0.5vw] px-[1vw] text-white text-[1.11vw] font-roboto font-medium">
 {/* Select Button */}
  <button className="w-[1.5vw] h-[3.1vh] rounded-[50%] border-[3px] border-white"></button>

  {/* Option Text */}
  <div className="w-[10.64vw] h-[3.61vh] text-white font-roboto font-semibold text-[1.15vw] leading-[100%] tracking-[0px] ">
   <p> A)&nbsp;&nbsp; SWOT Analysis </p>
  </div>
  </div>
 
  
</div>
  </div>
</div>

{/* Button  */}

     <div className="w-[27.92vw] h-[6.25vh] absolute top-[83.51vh] left-[40.42vw] flex gap-[1.56vw] ">
  {/* previous button */}
   <button className="w-[13.18vw] h-[4.35vh] flex items-center justify-center gap-[0.52vw] rounded-[2.08vw] border border-white px-[1.56vw] py-[1.11vh] text-white font-roboto">
    {/* Button Text  */}
     <span className="w-[3.69vw] h-[2.92vh] mt-[0.8vh] text-white text-[0.94vw]  justify-center font-roboto font-medium leading-[100%] text-center">
      Previous
    </span>
  </button>

  {/* next button */}
   <button
   style={{ backgroundColor: "#FF9D00" }}
    className="w-[13.18vw] h-[4.35vh] flex items-center justify-center gap-[0.52vw] rounded-[2.08vw] border border-white px-[1.56vw] py-[1.11vh] text-white font-roboto">
    {/* Button Text  */}
     <span className="w-[3.69vw] h-[2.92vh] mt-[0.8vh] text-white text-[0.94vw] justify-center font-roboto font-medium leading-[100%] text-center">
      Next
    </span>
  </button>
</div>

     </div>
     
    
  );
};

export default Assessment;