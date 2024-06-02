import { EyeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
  id_aula:string, 
  imagem:string, 
  nome:string, 
  id_user:string
}

export default function Aulas({id_aula, imagem , nome, id_user}:Props) {
  return (
   
    <div className='relative shadow-2xl shadow-black  bg-[#00303C] flex flex-col items-center justify-center gap-2 rounded-lg w-[15rem] max-sm:w-[9rem] max-sm:h-[15rem] h-[18rem]  p-[1rem] border-[1px] mx-auto'>
                
          <div className='absolute brightness-50 flex flex-col w-[100%] h-[100%] rounded-lg p-2'>
             <Image
             src={imagem}
             alt='Aula image'
             fill
             className='rounded-lg object-cover'
             />
          </div>
         

          <div className='absolute w-full flex flex-col bottom-2 px-[1rem]'>
          <h1 className='text-[14px] font-bold uppercase'>{nome}</h1>
          <div className='w-full flex gap-2 '>
            <span className='text-[10px] font-semibold text-gray-300'>visualizações</span>
            <span className='text-[12px] font-bold text-black'>12</span>
            <EyeIcon className='text-green-500 w-[14px] h-[14px]'/>
          </div>
          </div>

          <Link href={`/aulas/aula/${id_aula}/${id_user}`} 
         className='w-full h-full flex flex-col'
         >
          <div className=' flex flex-col items-center justify-center backdrop-blur-sm  bg-white/30 w-[100%] shadow-black shadow-2xl h-[3rem] rounded-xl z-10 hover:bg-green-400'> 
          <span className='lg:text-[18px] md:text-[14px] max-sm:text-[11px] font-bold uppercase'>
          Praticar agora!
          </span>
          </div>
          </Link>

      </div>  

   
  )
}
