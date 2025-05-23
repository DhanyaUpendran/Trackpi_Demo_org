
import React from 'react';
import logo from "../assets/trackpiLogo.png";
import Background from './Background';

const Header = () => {
  return (
    
    <header
    
      className="w-full h-10 flex items-center justify-between  border-b border-[#5C5C5C] py-2 px-12 relative overflow-hidden"
      style={{
        bottom:"1px"
     
      }}
    >
      {/* Logo */}
      <div className="flex items-center z-10 relative">
        <img 
          src={logo}
          alt="Trackpi Logo" 
          className="w-20 h-12"
        />
      </div>

      {/* Logout */}
      <div className="flex items-center gap-[40px] z-10 relative">
        <span className="text-white text-[12px] leading-none">Logout</span>
      </div>
    </header>
  );
};

export default Header;
