// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const AssessmentBubble = ({ currentPage = 4 }) => {
//   const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20,21,22,23,24,25,26,27,28,29, 30];

//   return (
        
// <div className='text-white font-inter w-screen h-auto'>
//     <div className="flex   ml-[3vw] mt-[3vh]">
//      <div className=" w-[10.0vw] h-[4.58vh] font-roboto font-medium text-[1.95vw] leading-[1] tracking-normal text-center">
//   Assessment
// </div>
// </div>
//       <div className="absolute flex justify-between w-[95.27vw] h-[7.5vh] left-[1.26vw] top-[20.4vh] ">
//       <nav aria-label="Pagination" className=" gap-[2vw] flex flex-wrap  w-full justify-center">
//       {pages.map((item, idx) => {
//         const isActive = item === currentPage;
//         return (
//          <button
//   key={idx}
//   aria-label={`Page ${item}`}
//   className={`flex items-center justify-center rounded-full w-[3.22vw] h-[6.44vh] text-[1.67vh] border
//    ${isActive ? 'border-yellow-500 text-yellow-500': 'border-white/40 text-white'}`}
// >
//   {/* {item === 'prev' ? (
//     <FontAwesomeIcon icon={faChevronLeft}
    
//      />
//   ) : item === 'next' ? (
//     <FontAwesomeIcon icon={faChevronRight} />
//   ) : (
//     item
//   )} */}
// </button>
//         );
//       })}
//     </nav>
//     </div>
//     </div>
    
//   );
// };


// export default AssessmentBubble;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AssessmentBubble = ({ currentPage = 4 }) => {
  const totalPages = 30;
  const visibleCount = 16;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Calculate visible range
  let start = Math.max(1, currentPage - Math.floor(visibleCount / 2));
  let end = start + visibleCount - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - visibleCount + 1);
  }

  const visiblePages = pages.slice(start - 1, end);

  // Handlers
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className='text-white font-inter w-screen h-auto'>
      <div className="flex ml-[3vw] mt-[3vh]">
        <div className="w-[10vw] h-[4.58vh] font-roboto font-medium text-[1.95vw] leading-[1] tracking-normal text-center">
          Assessment
        </div>
      </div>

    <div className="absolute flex items-center justify-center w-[95.27vw] h-[7.5vh] top-[20.4vh]  gap-[1vw]  ">

  {/* Page Bubbles */}
  <nav className="flex gap-[1vw] flex-nowrap justify-center">
    {visiblePages.map((item) => {
      const isActive = item === currentPage;
      return (
        <button
          key={item}
          onClick={() => setCurrentPage(item)}
          aria-label={`Page ${item}`}
          className={`flex items-center justify-center rounded-full w-[3.22vw] h-[6.44vh] text-[1.67vh] ml-[2.2vh] mr-[1vh]  border 
            ${isActive ? 'border-yellow-500 text-yellow-500' : 'border-white/40 text-white'}`}
        >
          {item}
        </button>
      );
    })}
  </nav>

  
    <button
    onClick={handlePrev}
    disabled={currentPage === 1}
    className="absolute left-[5vw] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full w-[3vw] h-[6vh] border border-white/40 "
  >
    <FontAwesomeIcon icon={faChevronLeft} className="text-white text-[1.5vw]" />
  </button>

  {/* Right Button */}
  <button
    onClick={handleNext}
    disabled={currentPage === totalPages}
    className="absolute right-[4.5vw] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full w-[3vw] h-[6vh] border border-white/40 "
  >
    <FontAwesomeIcon icon={faChevronRight} className="text-white text-[1.5vw]" />
  </button>
</div>

    </div>
  );
};

export default AssessmentBubble;
