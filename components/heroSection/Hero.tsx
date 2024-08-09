import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='w-[100%] max-sm:overflow-hidden  flex-col lg:mt-[12px] md:mt-[5px] max-sm:mt-[2px]  relative  items-center justify-center shadow-2xl  h-[50vh] rounded-lg '>
    <div className='absolute  w-[100%] h-[100%]' >
    <div className='absolute inline-flex lg:w-[350px] lg:h-[350px] md:w-[150px] md:h-[150px] max-sm:w-[140px] max-sm:h-[140px] lg:top-20 max-sm:top-20 md:top-28 left-20 md:left-28 bg-[#03A678]  rounded-full z-10 animate-ping'/>
     <div className='absolute inline-flex lg:w-[220px] lg:h-[220px] md:w-[220px] md:h-[220px] max-sm:w-[200px] max-sm:h-[200px] lg:top-40  max-sm:top-20 md:top-28 md:left-28 bg-[#80BF21] rounded-full z-10 animate-ping'/>
     <div className='absolute inline-flex lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] max-sm:w-[80px] max-sm:h-[80px] lg:top-60 md:top-28 md:left-32 max-sm:top-28 left-20 max-sm:left-28  bg-[#F2F2F2] rounded-full z-10 animate-ping'/>
     
     
    <Image
    src={'/assets/banner3.png'}
    alt='banner3'
    layout='fill'
     fill
    className='w-[100%] h-[100%] object-cover flex rounded-xl'
    />
     <div className='absolute flex flex-col overflow-visible  lg:w-[600px]  lg:h-[550px] md:w-[500px]  md:h-[400px] max-sm:w-[280px]  max-sm:h-[250px] left-0 z-30'>
     <Image
    src={'/assets/imgPri.png'}
    alt='professor'
    layout='fill'
    objectFit='contain'
    className=' object-contain '
    />
     </div>

     <div className='absolute animate-bounce z-20 w-[200px]   bottom-14 max-sm:bottom-52 max-sm:left-40 backdrop-blur-md bg-black/20 left-3 h-[80px] p-2'>
      <span className=' absolute max-sm:right-8 lg:text-[14px] md:text-[14px] max-sm:[12px] uppercase font-serif'>
        Faça parte <br/> 
        <span className='text-[#80BF21] font-semibold'>
        da 
            </span>
            <br/> 
            <span className='font-bold lg:text-[16px] md:text-[14px] max-sm:text-[12px]'>
            família  <span className='lg:text-[18px] md:text-[16px] max-sm:text-[14px] text-[#03A678]'>smart</span> 
            </span>
      </span>
     </div>
   
    </div>
  </div>
  )
}

export default Hero