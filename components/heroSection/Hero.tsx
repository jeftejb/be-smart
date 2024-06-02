import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='w-[100%]  flex-col lg:mt-[12px] md:mt-[5px] max-sm:mt-[2px]  relative  items-center justify-center shadow-2xl  h-[50vh] rounded-lg '>
    <div className='absolute overflow-hidden w-[100%] h-[100%]' >
    <div className='absolute inline-flex lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] -top-20 -left-20 bg-[#03A678]  rounded-full z-10 animate-ping'/>
     <div className='absolute inline-flex lg:w-[320px] lg:h-[320px] md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] -top-40 bg-[#80BF21] rounded-full z-10 animate-ping'/>
     <div className='absolute inline-flex lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] max-sm:w-[350px] max-sm:h-[350px] -top-80  bg-[#F2F2F2] rounded-full z-10 animate-ping'/>
     
     <div className='absolute inline-flex w-[350px] h-[350px] md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] -top-20 -left-20 bg-[#03A678]  rounded-full z-10 '/>
     <div className='absolute inline-flex w-[320px] h-[320px] md:w-[300px] md:h-[300px] max-sm:w-[220px] max-sm:h-[220px] -top-40 bg-[#80BF21] rounded-full z-10 '/>
     <div className='absolute inline-flex w-[400px] h-[400px] md:w-[300px] md:h-[300px] max-sm:w-[350px] max-sm:h-[350px] -top-80  bg-[#F2F2F2] rounded-full z-10 '/>
    <Image
    src={'/assets/banner3.png'}
    alt='banner3'
    layout='fill'
     fill
    className='w-[100%] h-[100%] object-cover flex rounded-xl'
    />
     <div className='absolute flex flex-col w-[500px] h-[500px] left-0 z-30'>
     <Image
    src={'/assets/imgPri.png'}
    alt='professor'
    layout='fill'
    objectFit='contain'
    className=' object-contain '
    />
     </div>

     <div className='absolute animate-bounce z-20 w-[200px] bottom-14 bg-[#00303C] left-4 h-[80px] p-2'>
      <span className=' lg:text-[14px] md:text-[14px] max-sm:[12px] uppercase font-serif'>
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