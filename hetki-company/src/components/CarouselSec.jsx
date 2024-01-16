import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const CarouselSec = ({ children, slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className='overflow-hidden justify-center items-center h-full w-80 z-0'>
      <div className='  flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
        {children}
      </div>
      <div className='inset-0 flex items-center justify-center p-4'>
        <button onClick={prev} className=''>
          <ChevronLeft />
        </button>

        <button onClick={next} className=''>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselSec;