import { BriefcaseIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

function PerfilItem({nome, email, cargo}:{nome:string, email:string, cargo:string}) {
  return (
    <div className='z-[10] md-[20px] w-[80%] h-[40vh] flex m-auto left-[30px] bg-[#038C73] border rounded-2xl border-gray-100 items-center justify-center'>
    
    <div className='relative w-[100%] h-[100%] flex lg:flex-row md:flex-row max-sm:flex-col items-center justify-center'>
            <div className='absolute lg:w-[160px] lg:h-[160px] md:w-[110px] md:h-[110px] max-sm:hidden sm:w-[100px] z-[10] bottom-0 border-[4px] border-green-800 rounded-full'>
                <Image
                src={"/assets/img5.jpg"}
                alt='profile'
                layout='fill'
                objectFit='cover'
                className='rounded-full relative z-[10]'
                />
            </div>

        <div className=' w-[50%] max-sm:w-[100%] flex  h-[100%] items-center justify-center'>
            <div className=" h-[50%] max-sm:h-[80%] w-[80%] flex flex-col justify-between bg-[#00303C]  rounded-xl border-[2px] p-[1rem]">
               <span className='flex items-center lg:text-[18px] md:text-[12px] text-gray-200 font-semibold'>
                <UserIcon
                 className='w-[2rem] h-[2rem] max-sm:w-[1rem] max-sm:h-[1rem] text-[#fffe]'
                />
                 <h1 className='text-[14px] font-bold'>@{nome}</h1>   
               </span>
               <span className='flex text-wrap items-center lg:text-[18px] md:text-[12px] text-[#fffe] font-semibold'>
                <EnvelopeIcon
                 className='w-[2rem] h-[2rem] max-sm:w-[1rem] max-sm:h-[1rem] text-[#fffe]'
                />
                  <h1 className='text-[14px] font-bold'>{email}</h1>
              
               </span>
               <span className='flex text-wrap items-center lg:text-[18px] md:text-[12px] text-[#fffe] font-semibold'>
                <BriefcaseIcon
                 className='w-[2rem] h-[2rem] max-sm:w-[1rem] max-sm:h-[1rem] text-[#fffe]'
                />
                 <h1 className='text-[14px] font-bold'> {cargo}</h1>
              
               </span>
            </div>
        </div>

       <div className=' w-[50%] max-sm:w-[100%] flex h-[100%] bg-gray-300 items-center justify-center'>
       <div className='w-[80%] max-sm:h-[80%] h-[50%] bg-slate-500 rounded-xl boder-[8px]' > 
       <span className='flex flex-col items-center text-[12px] text-gray-200 font-semibold p-[1rem]'>
                <UserIcon
                  className='w-[2rem] h-[2rem] mx-auto text-[#fffe]'
                />
                  Seja bem vindo a area administrativa do BE-SMART 
               </span>
       </div>
       </div>
    
    </div>
      
    
    </div>
  )
}

export default PerfilItem
