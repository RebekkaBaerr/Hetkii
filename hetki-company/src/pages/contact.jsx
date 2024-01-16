import React from 'react';
import { ChevronRight } from "react-feather";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarouselSec from '../components/CarouselSec';
import Paricles from '../components/Paricles';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';



const slides = [
  img1,
  img2
];

function Contact() {
  return (
    <div className='text-white w-full mx-auto text-center flex flex-col flex-nowrap justify-center mb-0'>
      <Navbar />
      <div className='flex w-screen h-auto'>
        <Paricles className=' overflow-hidden'> </Paricles>
        </div>
      <div className='flex flex-col md:mt-20 mt-0'>
        <h1 className='md:text-5xl text-3xl font-extralight mt-16 m-4'> yhteystiedot</h1>
      </div>

      <div className='flex flex-col items-center'>
      
        <div className='mx-auto flex flex-col items-center sm:items-start md:mr-54'>
          <div className='mx-auto flex flex-col md:flex-row '>
            <a href="mailto:info@hetkicompany.com">
            <button className='border border-white h-12 w-52 p-2 m-2 rounded-full font-extralight md:m-4 md:p-2 md:mb-8 mt-12 md:mt-8' >
            
            info@hetkicompany.com
            </button>
            </a>
          
          <button className='border border-white h-12 w-52 p-2 m-2 rounded-full font-extralight md:m-4 md:p-2 md:mb-8 md:mt-8'>
            +358 40 1413605
          </button>
          </div>
          
          <div className='flex items-center justify-center'>
          <p className='md:text-xl text-center inset-y-0  md:m-12 m-8 md:mb-12 md:w-3/6 w-3/6 font-extralight'>
          studiomme sijaitsee historiallinen Helsingin, Lapinlahden entisen mielisairaalan ylilääkärin asunnossa. ollaan yhteyksissä ja sovitaan treffit!
            <p className=' md:text-xl font-extralight flex items-center justify-center  inset-x-0 md:m-2  mt-10 md:mt-12 '>
            osoite: lapinlahdenpolku 8, 00180 helsinki, finland
          </p>
          <p className='md:mt-12'>
            kuvia meidän studiosta
          <div className='flex items-center justify-center md:mt-2 '>
          <ChevronRight className='transform rotate-90 '>
            
          </ChevronRight>
          </div>
          </p>
          </p>
          </div>
          
        </div>
        <div className='flex-row-reverse w-screen h-auto '>
        <Paricles className=' overflow-hidden'> </Paricles>
        </div>
      
        <div className=' flex items-center justify-center p-8 '>
          <div className='max-w-lg'>
            <CarouselSec slides={slides}>
              {slides.map((slide, index) => (
                <img key={index} src={slide} alt={`slides ${index}`} />
              ))}
            </CarouselSec>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
