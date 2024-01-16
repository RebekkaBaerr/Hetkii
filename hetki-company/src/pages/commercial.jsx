import React from 'react';
import SR2 from '../assets/HCCB.mp4'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Paricles from '../components/Paricles';


function Commercial() {
  return (
    <div className='text-white  w-full  mx-auto text-center flex flex-col flex-nowrap justify-center mb-0'> 
      <Navbar className='fixed top-0 w-full' />
      <div className='flex w-screen h-auto'>
        <Paricles className=' overflow-hidden'> </Paricles>
        </div>
        <div className='h-1/2 md:mt-20'>
          <h1 className='md:text-5xl text-3xl font-extralight mt-16 m-4'>hetki creative company</h1>
          <div className='flex md:flex-row flex-col justify-between mt-20  md:mb-4'>
            <p className='md:text-xl md:text-left inset-y-0 left-0 md:m-12 m-8 md:w-3/6 font-extralight'>hetki creative company toteuttaa rohkeaa viestintää, markkinointia ja ongelmanratkaisua. tärkeät asiat ansaitsevat tulla nähtyä. hetki creative company antaa viestille muodon, joka erottuu. me näemme markkinoinnin ja viestinnän osana yhteiskunnallista kulttuuria, jolla on mahdollista vaikuttaa ympäröivään todellisuuteemme positiivisesti. </p>
            <div className=' flex justify-center bg-white md:h-80 md:w-0.5 md:mb-2'></div>
             <p className='md:text-xl md:text-right inset-y-0 right-0 md:m-12 m-8 md:w-3/6 font-extralight'>kumppanina räätälöimme tiimimme kumppanuuteen sopivaksi ja varmistamme, että projektit ovat kaikille osapuolille inspiroivia kokemuksia. onko sinulla viesti, joka pitäisi saada näkyväksi maailmalle? ole meihin rohkeasti yhteydessä sähköpostitse:
              <a href="mailto:Creative@hetkicompany.com"><button className='hover:underline italic ml-2'> creative@hetkicompany.com </button></a></p>
          </div>
            <p className=' md:text-2xl font-extralight flex items-center justify-center  inset-x-0 md:m-2  '>luova konseptointi · markkinointi ja ilmiöittäminen · videotuotanto · valokuvatuotannot </p>
          </div>
          <div className='flex w-screen h-auto'>
        <Paricles className=' overflow-hidden'> </Paricles>
        </div>
        <div className='md:m-1 w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
         <div className='w-full h-3/4 flex items-center justify-center flex-col '>
           <video className=' flex w-3/4 h-3/4 ' autoPlay loop muted src={SR2}></video>
           <p className='flex font-extralight text-left'>made by our talened atrists</p>
        </div>
      </div>
      <Footer />
      </div>
  );
}

export default Commercial;