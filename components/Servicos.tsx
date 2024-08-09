'use client'
import { AcademicCapIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { BanknoteIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

function Servicos() {
  const router = useRouter();

  
  return (
    <div className='bg-[#121212] flex flex-col pt-[4rem] md:pt-[8rem] pb-[5rem]'>
              <h1 className="titulos">
             BE-
            <span className="text-[#80BF21]">
              SMART
            </span>
            <span className='text-white ml-1'>
            SERVICOS
            </span> 
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div className=''>
           <div className='bg-[#00303C] flex flex-col items-center justify-center rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem]
           '
           >
             <AcademicCapIcon className='w-[6rem] h-[6rem] mx-auto'/>
             <h1 className='text-[20px] md:text-[30px] mt-[1,5rem] mb-[1.5rem]' >Matricula</h1>
             <p className='text-[15px] text-[#6BA614] font-normal'>
              Faca sua matricula e comesse sua jornada!.
             </p>
             <button onClick={(()=> router.push('/sign-up'))} className='px-[1.8rem] rounded-xl mt-4 justify-center hover:bg-green-800 transition-all max-sm:flex max-sm:w-full text-center duration-200 py-[.5rem] text-[14px] font-semibold uppercase bg-[#038C73] text-black flex items-center space-x-2'>
         <p className='text-center max-sm:text-[14px]'>
           EFECTUAR MATRICULA
          </p>
        </button>
           </div>
        </div>
         
        <div className='bg-[#00303C] flex flex-col items-center justify-center rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem]
           '
           >
             <PencilSquareIcon className='w-[6rem] h-[6rem] mx-auto'/>
             <h1 className='text-[20px] md:text-[30px] mt-[1,5rem] mb-[1.5rem]'>Actividades</h1>
             <p className='text-[15px] text-[#6BA614] font-normal'>
              Venha aprender de forma interativa, com actividades totalmente personalizadas para sua rapida aprendisagem.
             </p>

             <button onClick={(()=> router.push('/actividades/geral'))} className='px-[1.8rem] rounded-xl mt-4 justify-center hover:bg-green-800 transition-all max-sm:flex max-sm:w-full text-center duration-200 py-[.5rem] text-[14px] font-semibold uppercase bg-[#038C73] text-black flex items-center space-x-2'>
         <p className='text-center max-sm:text-[14px]'>
           Saber mais
          </p>
        </button>
           </div>

           <div className='bg-[#00303C] flex flex-col items-center justify-center rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem]
           '
           >
             <BanknoteIcon className='w-[6rem] h-[6rem] mx-auto'/>
             <h1 className='text-[20px] md:text-[30px] mt-[1,5rem] mb-[1.5rem]' >Pagamento</h1>
             <p className='text-[15px] text-[#6BA614] font-normal'>
              Efectue os pagamentos de forma rapida e segura.
             </p>
             <button onClick={(()=> router.push('/sobre?#pagamentos'))} className='px-[1.8rem] rounded-xl mt-4 justify-center hover:bg-green-800 transition-all max-sm:flex max-sm:w-full text-center duration-200 py-[.5rem] text-[14px] font-semibold uppercase bg-[#038C73] text-black flex items-center space-x-2'>
         <p className='text-center max-sm:text-[14px]'>
          Saber mais
          </p>
        </button>
           </div>
        </div>

    </div>
  )
}

export default Servicos
