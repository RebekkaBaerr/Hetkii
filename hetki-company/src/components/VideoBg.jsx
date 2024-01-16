import React from 'react';
import fourth from '../assets/fourth.mov'

function VideoBg() {
  return (
    <div className='relative'>
      <video
        className='w-full h-full object-cover'
        autoPlay
        loop
        muted
        
      >
        <source src={fourth} type='video/mov' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBg;