import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='text-white md:mt-8 mt-36 h-80 w-screen mx-auto flex flex-col justify-center md:flex-row '>
      <div className='m-2 p-2 md:p-12  mx-auto'>
        <h1 className='md:text-left md:text-4xl text-2xl font-extralight text-center'>h e t k i</h1>
        <p className='md:text-left text-sm w-80 md:w-40 text-center font-extralight'>
        yhdistää tekemisessä intohimoiset tekijät, yhteiskunnallisen ajattelun ja luovan ongelmanratkaisun. Verkostostamme löytyy suomen intohimoisimmat audiovisuaalisen alan ammattilaiset.
        </p>
      </div>
      <div className='m-2 p-2 md:p-12 mx-auto w-80 flex flex-col md:ml-28  '> {/* Updated styles */}
    <h2 className='md:text-2xl md:text-left font-extralight text-center'>sivut</h2>
    <ul>
      <li className='md:text-left text-center text-sm font-extralight underline p-0.5'>
      <Link to='/'>hetki</Link>
      </li>
      <li className='md:text-left text-center text-sm font-extralight underline p-0.5'>
      <Link to='/commercial'>creative company</Link>
      </li>
      <li className='md:text-left text-center text-sm font-extralight underline p-0.5'>
      <Link to='/film'>film company</Link>
      </li>
      <li className='md:text-left text-center text-sm font-extralight underline p-0.5'>
      <Link to='/creatives'>tekijät</Link>
      </li>
      <li className='md:text-left text-center text-sm font-extralight underline p-0.5'>
      <Link to='/contact'>yhteystiedot</Link>
      </li>
    </ul>
  </div>



      <div className='m-2 p-2 md:p-12 mx-auto w-80 flex flex-col  '> 
      <div className='flex flex-col'>
         <h2 className='md:text-2xl md:text-left font-extralight text-center'>yhteystiedot</h2>
           <p className='md:text-left text-center text-sm font-extralight'>+358 40 1413605</p>
           <p className='md:text-left text-center text-sm font-extralight'>info@hetkicompany.com</p>
         </div>
      </div>
   

      
      <div className='m-2 p-2 md:p-12  mx-auto w-80'>
        <h2 className='md:text-2xl font-extralight text-center'>some</h2>
        <ul className='flex flex-row justify-center '>
          <li className='md:text-left text-sm font-extralight m-2'>in</li>
          <li className='md:text-left text-sm font-extralight m-2'>vim</li>
          <li className='md:text-left text-sm font-extralight m-2'>li</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;