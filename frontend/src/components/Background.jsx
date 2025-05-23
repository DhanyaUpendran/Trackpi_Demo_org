import React from 'react';
import DiscoverBg from "../assets/discoverusBg.png";

const Background = () => {
  const containerStyle = {
    position: 'fixed',
    width: "100vw",
    height: "100vh",
    // top: '-104px',
    // left: '-178px',
     backgroundColor: "#0A0A0A",
    overflow: 'hidden',
     zIndex: -1
  };

  const ellipseStyle = {
    top: '-20%',
  left: '-30%', // More left overflow
  width: '140vw',  // Extend beyond viewport
  height: '136vh',
  borderRadius: '30%', 
    WebkitBackdropFilter: 'blur(80px)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
   
    position: 'relative',
    backgroundSize: '200% 200%',
    background:  'linear-gradient(225.01deg, #FF9D0066 0%, #000E4D4D 55%, #000E4DFF 100%)',
  };


  return (
    <div style={containerStyle}>
      <div style={ellipseStyle}></div>
    </div>
  );
};

export default Background;