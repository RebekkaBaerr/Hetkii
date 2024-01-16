import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Paricles from '../components/Paricles';
import SR1 from '../assets/HFCB.mp4'



function Film() {

  const [nav, setNav] = useState(true);

  return (
    <div className='text-white w-full  mx-auto text-center flex flex-col flex-nowrap justify-center mb-0'> 
    <Navbar className='fixed top-0 w-full' nav={nav} setNav={setNav} />
    <div className='flex w-screen h-auto'>
        <Paricles className=' overflow-hidden'> </Paricles>
        </div>
    
      <div className='h-1/2 md:mt-20'>
        <h1 className='md:text-5xl text-3xl font-extralight mt-16 m-4'>hetki film company</h1>
        <div className='flex md:flex-row flex-col justify-between mt-20  md:mb-4'>
          <p className='md:text-xl md:text-left inset-y-0 left-0 md:m-12 m-8 md:w-3/6 font-extralight '>hetki film company tuottaa liikkuvan kuvan teoksia, jotka keskittyvät temaattisesti yhteiskunnallisiin aiheisiin. tuotettavia teoksiamme yhdistää katse yksilöiden maailmankatsomukseen ja elämänlaatuun vaikuttaviin tekijöihin. tämän tavoitteen kautta nostamme esiin viihdyttäviä ja koskettavia tarinoita, jotka eivät muuten tulisi nähdyksi.</p>
          <div className=' flex justify-center bg-white md:h-80 md:w-0.5 md:mb-2'></div>
           <p className='md:text-xl md:text-right inset-y-0 right-0 md:m-12 m-8 md:w-3/6 font-extralight'>tuotantoyhtiönä tuemme tekijöitämme havainnon kiteyttämisessä ja yleisön löytämisessä. uskomme tarinoiden voimaan yhteiskunnallisen ja henkilökohtaisen muutoksen lähteenä. haluatko tehdä kanssamme yhteistyötä tai onko sinulla idea, joka tulisi toteuttaa? Ole meihin rohkeasti yhteydessä sähköpostitse:
           <a href="mailto:Film@hetkicompany.com"><button className='hover:underline italic ml-2'> film@hetkicompany.com </button></a></p>
        </div>
          <p className=' md:text-2xl font-extralight flex items-center justify-center  inset-x-0 md:m-2  '>konseptien kehitys · elokuvat · tv-sarjat </p>
        </div>
        <div className='flex w-screen h-auto'>
        <Paricles className=' overflow-hidden'> </Paricles>
        </div>
      <div className='md:m-6 w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
       <div className='w-full h-3/4 flex items-center justify-center flex-col '>
         <video className=' flex w-3/4 h-3/4 ' autoPlay loop muted src={SR1}></video>
         <p className='flex font-extralight text-left'>made by our talened atrists</p>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Film;