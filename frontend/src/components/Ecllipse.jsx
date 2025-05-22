// import React from 'react';
// import DiscoverBg from "../assets/discoverusBg.png";

// const Ellipse = () => {
//   const containerStyle = {
//     position: 'absolute',
//      width: "134vw",
//     height: "113vh",

//     top: '-104px',
//     left: '-178px',
// backgroundColor:" #0A0A0A",
// //  backgroundImage: `url(${DiscoverBg})`,
// backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat", 
//     overflow: 'hidden',
//   };

//   const ellipseStyle = {
//     width: "134vw",
//     height: "135vh",
//    background: 'linear-gradient(225.01deg, #FF9D0066 0%, #000E4D4D 55%, #000E4DFF 100%)',
//   WebkitBackdropFilter: 'blur(80px)',   // Safari support
//    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Needed for backdrop-filter to work
//   transform: 'rotate(0deg)',
//      borderRadius: '30%',
    
//   }

//   return (
//     <div style={containerStyle}>
//       <div style={ellipseStyle}></div>
//     </div>
//   );
// };

// export default Ellipse;


import React, { useState, useEffect, useRef } from 'react';
import "./styles/ecllips.css"
const Ecllipse = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const ellipseGradientRef = useRef(null);

  // Smooth cursor tracking using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;

    const updateCursor = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  useEffect(() => {
    if (!ellipseGradientRef.current) return;

    let angle = 0;
    const interval = setInterval(() => {
      angle = (angle + 0.2) % 360;
      ellipseGradientRef.current.style.background = 
        `linear-gradient(${angle}deg, #FF9D0066 0%, #000E4D4D 55%, #000E4DFF 100%)`;
    }, 30);

    return () => clearInterval(interval);
  }, []);

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
    background: 'linear-gradient(0deg, #FF9D0066 0%, #000E4D4D 55%, #000E4DFF 100%)'
  };

  // const cursorShadowStyle = {
  //   position: 'fixed',
  //   left: cursorPosition.x,
  //   top: cursorPosition.y,
  //   width: '50px',
  //   height: '50px',
  //   borderRadius: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   background: 'radial-gradient(circle, #FF9D0066 0%, rgba(255, 207, 158, 0.7) 50%, rgba(255, 225, 195, 0) 100%)',
  //   filter: 'blur(8px)',
  //   pointerEvents: 'none',
  //   opacity: isVisible ? 1 : 0,
  //   transition: 'opacity 0.3s ease',
  //   animation: isVisible ? 'pulse 2s infinite ease-in-out' : 'none',
  //   mixBlendMode: 'screen',
  //   zIndex: 999
  // };

  return (
    <div style={containerStyle}>
      <div ref={ellipseGradientRef} style={ellipseStyle}>
        {/* <div style={cursorShadowStyle} /> */}
      </div>
    </div>
  );
};

export default Ecllipse;
