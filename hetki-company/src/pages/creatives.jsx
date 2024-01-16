import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import anton from '../assets/anton.png'
import arman from '../assets/arman.png'
import ari from '../assets/ari.png'
import ilari from '../assets/Ilari.png'
import Paricles from '../components/Paricles';

function Creatives() {
  return (
    <div className='text-white w-full  mx-auto text-center flex flex-col flex-nowrap justify-center mb-0'>
      <Navbar />
      <Paricles className='flex mx-auto max-w-screen overflow-hidden'> </Paricles>
      <div className='md:mt-20'>
      <h1 className='md:text-5xl text-3xl font-extralight mt-16 m-4'>meidän tekijät</h1>
      </div>
      <div className='flex justify-center mx-auto'>
      <p className=' md:text-xl text-center inset-y-0  md:m-12 m-8 md:mb-12 md:w-3/6 w-3/6 font-extralight'>Hetki taiteilijoilleen inspiroiva ja mahdollistava kumppani joka tuottaa monipuolista audiovisuaalista sisältöä ja tekee unelmista totta. Räätälöimme projektien työntekijät laajasta verkostottamme, josta löytyy Suomen intohimoisimmat audiovisuaalisen alan ammattilaiset.</p>
      </div>
      <div className='flex flex-col justify-center md:flex-row '>
      <div className='mx-auto'>
        <div className='max-w-sm  overflow-hidden p-6  md:m-2 m-2 md:ml-40 mx-auto'>
                      <img className='' src={arman} alt="kuva armanista" srcset="" />
                      <h2 className='md:text-2xl font-extralight italic underline'>arman zafari</h2>
                      <ul className='list-inside md:text-lg md:text-center font-extralight'>
                        <li className='p-0.5 pt-1'> elokuvaohjaaja</li>
                        
                      </ul>
                    </div>
     
      </div>
   
      <div className='mx-auto'>
        <div className='max-w-sm  overflow-hidden p-6 md:mr-40 md:m-2 m-2 mx-auto'>
                      <img className='' src={ari} alt="kuva armanista" srcset="" />
                      <h2 className='md:text-2xl font-extralight italic underline'>ari virem</h2>
                      <ul className='list-inside md:text-lg md:text-center font-extralight'>
                        <li className='p-0.5 pt-1'> elokuvaaja</li>
                      </ul>
                    </div>
     
      </div>
      </div>
      <div className='flex w-screen h-auto'>
        <Paricles className=' overflow-hidden'> </Paricles>
        </div>
      <div className='flex flex-col justify-center md:flex-row'>
      <div className='mx-auto'>
        <div className='max-w-sm  overflow-hidden p-6 md:ml-40 md:m-2 m-2 mx-auto'>
                      <img className='' src={anton} alt="kuva armanista" srcset="" />
                      <h2 className='md:text-2xl font-extralight italic underline'>anton baer</h2>
                      <ul className='list-inside md:text-lg md:text-center font-extralight'>
                        <li className='p-0.5 pt-1'> elokuvaohjaaja</li>
                        <li className='p-0.5'> toimitusjohtaja</li>
                        <a href="mailto:anton.baer@hetkicompany.com">
                        <li className='italic'>antonbaer@hetkicompany.com </li>
                        </a>
                      </ul>
                    </div>
     
      </div>
         <div className='mx-auto'>
        <div className='max-w-sm  overflow-hidden p-6 md:mr-40 md:m-2 m-2 mx-auto'>
                      <img className='' src={ilari} alt="kuva armanista" srcset="" />
                      <h2 className='md:text-2xl font-extralight italic underline'>ilari halko</h2>
                      <ul className='list-inside md:text-lg md:text-center font-extralight'>
                        <li className='p-0.5 pt-1'> asiakasvastaava</li>
                        <a href="mailto:ilari.halko@hetkicompany.com">
                        <li className='italic'>ilarihalko@hetkicompany.com </li>
                        </a>
                      </ul>
                    </div>
     
      </div>
      </div>
  
      <Footer />
    </div>
  )
}

export default Creatives;