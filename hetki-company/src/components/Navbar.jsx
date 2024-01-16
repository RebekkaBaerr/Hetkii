import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'




const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    };
    useEffect(() => {
      const body = document.body;
  
      if (!nav) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'visible';
      }
  
      return () => {
        // Clean up the effect by restoring the original overflow property when the component unmounts
        body.style.overflow = 'visible';
      };
    }, [nav]);
  

  return (
    <div className=' flex justify-center items-center max-w-4xl mx-auto px-12 text-white'>
      
       <ul className='hidden md:flex flex-grow justify-between font-extralight' >
        <li className='p-2 sm:p-4 text-xl font-extralight hover:underline'>
        <Link to='/'>hetki</Link>
        </li>
        <li className='p-2 sm:p-4 text-xl font-extralight hover:underline'>
          <Link to='/commercial'>creative company</Link>
        </li>
        <li className='p-2 sm:p-4 text-xl font-extralight hover:underline'>
        <Link to='/film'>film company</Link>
        </li>
        <li className='p-2 sm:p-4 text-xl font-extralight hover:underline'>
        <Link to='/creatives'>tekijät</Link>
        </li>
        <li className='p-2 sm:p-4 text-xl font-extralight truncate hover:underline'>
        <Link to='/contact'>yhteystiedot</Link></li> 
        </ul> 
        <div onClick={handleNav} className='block md:hidden fixed right-4 top-10 mr-4' >
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed object-cover justify-center items-center top-0 w-[100%] h-full bg-black ease-in-out duration-500 z-50': 'fixed left-[-100%]' } >
        <div onClick={handleNav} className='block md:hidden fixed max-w-screen-sm right-4 top-10 mr-4' >
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
            <ul className='pt-16 flex flex-col items-center' >
            <li className='p-7 sm:p-8 font-extralight text-4xl '>hetki company</li>  
            <li className='p-7 sm:p-8 hover:underline text-xl font-extralight'><Link to='/'>hetki</Link></li>
            <li className='p-7 sm:p-8 hover:underline text-xl font-extralight'><Link to='/commercial'>creative company</Link></li>
            <li className='p-7 sm:p-8 hover:underline text-xl font-extralight'><Link to='/film'>film company</Link> </li>
            <li className='p-7 sm:p-8 hover:underline text-xl font-extralight'><Link to='/creatives'>tekijät</Link></li>
            <li className='p-7 sm:p-8 hover:underline text-xl font-extralight truncate'><Link to='/contact'>yhteystiedot</Link></li> 
            </ul>
            <div className='flex mx-auto justify-center items-center mt-8'>
              <p className='text-2xl font-extralight' >follow us :</p>
            </div>
            <div>
            <ul className='flex flex-row mx-auto justify-center items-center' >
              <li className='md:p-4 p-2 text-xl font-extralight hover:underline'>in</li>
              <li className='md:p-4 p-2 text-xl font-extralight hover:underline'>vim</li>
              <li className='md:p-4 p-2 text-xl font-extralight hover:underline'>li</li>
              </ul>
            </div>
            <div className='flex mx-auto items-center justify-center mt-8 '>
          <button className='md:p-4 text-xl font-extralight p-2 hover:underline'>fi</button>
           <button className='md:p-4 text-xl font-extralight p-2 hover:underline'>en</button>
       </div>
        </div>
    </div> 
  ) 
}

export default Navbar;