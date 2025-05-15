import React from 'react'
import searchIcon from "../assets/searchicon.png"
const Searchbox=()=> {
  return (
    <div>
       <div className="search-box-container absolute top-[12vh] right-[2vw] w-[17.9vw] h-[4.4vh] px-[1vw] py-[0.6vh] gap-[1.5vw] rounded-[0.6vw] border border-[#676464] bg-[#8D8B8B1A] flex items-center">
      <img 
          src={searchIcon} 
          alt="Search" 
          className="w-[1.25vw] h-[3.24vh]"
        />
              {/* Search Box Input */}
              <input
                type="text"
                placeholder="Search..."
               className="w-full h-full bg-transparent border-none outline-none text-white 
           placeholder:text-[#B3B6B6] placeholder:font-medium 
           placeholder:text-[0.83vw] placeholder:leading-[100%] 
           font-['Roboto']"
              />
            </div>
    </div>
  )
}

export default Searchbox
