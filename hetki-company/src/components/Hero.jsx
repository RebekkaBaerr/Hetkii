import React from 'react'
import './Styles.scss'


const Hero = () => {
  return (
    <div className='text-white mb-0 '>
    
    <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col flex-nowrap justify-center mb-0'>
      <h1 className='mx-auto md:text-6xl sm:text-4xl font-extralight text-3xl'> h e t k i&nbsp;   c o m p a n y</h1>
      <p className='md:text-5xl sm:text-4xl font-extralight text-3xl mr-52 hidden'>together let's </p>
      <p className='md:text-5xl sm:text-4xl font-bold italic text-3xl p-2 mr-72 inline-block hidden'>CREATE</p>
      <ul className='content__container__list inline-block hidden'>
        <li className='content__container__list__item md:text-5xl sm:text-4xl font-bold italic text-3xl p-2 mb-8'>ELOKUVIA</li>
        <li className='content__container__list__item md:text-5xl sm:text-4xl font-bold italic text-3xl p-2 mb-8'>TUNTEITA</li>
        <li className='content__container__list__item md:text-5xl sm:text-4xl font-bold italic text-3xl p-2 mb-8'>KULTTUURIA</li>
        <li className='content__container__list__item md:text-5xl sm:text-4xl font-bold italic text-3xl p-2 mb-8'>MUUTOSTA</li>
        <li className='content__container__list__item md:text-5xl sm:text-4xl font-bold italic text-3xl p-2 mb-8'>ELÄMYKSIÄ</li>
        <li className='content__container__list__item md:text-5xl sm:text-4xl font-bold italic text-3xl p-2 mb-8'>HETKIÄ</li>
      </ul>
    
       <div className='md:flex flex-row justify-between items-end bottom-0 z-0 max-w-screen hidden'>
       <a className='text-left md:p-4 p-2 md:text-lg font-extralight  absolute inset-x-0 bottom-0' href="mailto:Creative@hetkicompany.com"> <button>info@hetkicompany.com</button>  </a>
         <div className='flex items-center justify-center absolute inset-x-0 bottom-0 z-0'>
          <button className='md:p-4 md:text-lg font-extralight italic  p-2 underline'>fi</button>
           <button className='md:p-4 md:text-lg font-extralight italic p-2 '>en</button>
       </div>
  
  <ul className='flex justify-end absolute inset-x-0 bottom-0 z-0'>
    <li className='md:p-4  text-lg font-extralight p-2 hover:underline'>in</li>
    <li className='md:p-4 text-lg  font-extralight p-2 hover:underline'>vim</li>
    <li className='md:p-4 text-lg  font-extralight p-2 hover:underline'>li</li>
  </ul>
</div>

</div>

    </div>



    
  );

  
};

export default Hero;