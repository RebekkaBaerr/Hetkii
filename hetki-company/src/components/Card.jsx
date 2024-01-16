import React from 'react';
import HFC from '../assets/HFC.mp4'
import HCC from '../assets/HCC.mp4'
import { Link } from 'react-router-dom';



function Card() {
  return (
    <div className='text-white'>
      <div className='flex justify-center items-center mx-auto mt-0 mb-0 m-4'>
        <div className='flex w-full h-screen'>
          <div className='relative w-1/2 h-screen'>
            <video autoPlay muted loop className='w-full h-full object-cover m-2' src={HCC}></video>
            <ul>
            <li className='p-2 sm:p-4 hover:underline'>
              <Link className='text-2xl font-extralight hover:underline absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' to='/commercial'>c r e a t i v e</Link>
            </li>
            </ul>
          </div>
          <div className='relative w-1/2 h-screen'>
            <video autoPlay muted loop className='w-full h-full object-cover m-2' src={HFC}></video>
            <ul>
            <li className='p-2 sm:p-4 hover:underline'>
              <Link className='text-2xl font-extralight hover:underline absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' to='/film'>f i l m</Link>
            </li>
            </ul>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Card;