import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

function Sobre() {
  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
         <div>
         <h1 className="flex-[0.6] cursor-pointer text-[20px] text-[#03A678] font-bold">
        <span className='text-white mr-1'>
            SOBRE O
            </span> 
             BE-
            <span className="text-[#80BF21]">
              SMART
            </span>
        </h1>
        <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white '>
             Ensinar, aprender e <span className='text-[#6BA614]'> crescer. </span> 
        </h2>
        <div className='mb-[3rem] flex items-center md:space-x-10'>
          <span className='w-[500px] hidden md:block h-[5px] bg-[#03A678] rounded-sm' ></span>
          <p className='text-[19px] max-sm:text-[14] text-slate-300 w-80%'>
          O Be-Smart é o seu destino definitivo para aprimorar suas habilidades linguísticas e alcançar o sucesso profissional em um mundo globalizado. Como um centro de formação profissional dedicado ao ensino de línguas, estamos comprometidos em oferecer uma experiência educacional enriquecedora e personalizada que atenda às necessidades únicas dos nossos estudantes.
          <a href="#" className='mx-[2rem] text-[#6BA614]'>saber mais</a>
          </p>
        </div>
        <button className='px-[2rem] rounded-xl  justify-center hover:bg-green-800 transition-all max-sm:flex max-sm:w-full text-center duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#038C73] text-black flex items-center space-x-2'>
         <p className='text-center max-sm:text-[14px]'>
           Saber mais 
          </p>
        </button>
         </div>
         <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
           
           <div className='absolute  w-[100%] h-[100%] rounded-full  bg-[#6BA614] top-[2rem] ' >
           <Image
           src={'/assets/chefAz.jpg'}
           alt='professor'
           layout='fill'
           objectFit='cover'
           className='relative  w-[100%] h-[100%] object-cover rounded-full'
           />
           </div>
         </div>
      </div>
    </div>
  )
}

export default Sobre
