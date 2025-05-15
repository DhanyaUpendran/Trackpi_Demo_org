import React from 'react';
import VideoList from './VideoList';
import Searchbox from './Searchbox';
import VideoBox from './VideoBox';

const WatchvideoSection = () => {
  return (
    // need some chanes here resposive width and height setting
     <div>    
  
<VideoList />
 {/* Search Box Outer Container (right side) */}
<Searchbox />
{/* video Box session  */}
<VideoBox />

    
</div>
  );
};

export default WatchvideoSection;
