import CarrocelSaidas from '@/components/carricel/CarrocelSaidas'
import { GetAllActividadesRecreativas } from '@/lib/actions/actividadesRecreativas.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const getActividades = async ()=>{
     const getActividades = await  GetAllActividadesRecreativas()
     return{actividade:getActividades}
}

async function page() {

  const actividades:any  = await getActividades()
  return (
    <div className='w-full h-full flex  flex-col pt-[8rem] items-center justify-center pb-[2rem] px-[2rem]'>
        <h1 className='text-center flex font-bold text-[28px] max-md:text-[18px]  uppercase'>Actividades recreativas do BE-SMART</h1>

        <div className='w-full h-full mt-2 flex flex-col'>
      <CarrocelSaidas/>


   {
    actividades?.actividade?.map((items:any, key:any)=>(
      <div key={key} className='w-full h-full flex flex-col  pt-[1rem] mt-[1rem] z-20 mb-[1rem] pb-[.7rem] rounded-xl px-[2rem] max-md:px-[.7rem] bg-[#2b2d42]'>
      <div className='w-full h-[45vh] gap-[1rem] max-md:gap-[.5rem] grid grid-cols-2 max-md:grid-cols-1'>
        <div className="grid grid-rows-6 max-md:grid-rows-10 grid-flow-col gap-[.3rem]">
          <div className="relative row-span-6 max-md:row-span-10 rounded-lg">
             <Image
             src={items.imagens[0]}
             alt='imagePublicação'
             fill
             className='object-cover flex brightness-[.9] rounded-lg'
             />
          </div>
          <div className="relative row-span-3 max-md:row-span-5 col-span-1  rounded-lg">
          <Image
             src={items.imagens[1]}
             alt='imagePublicação'
             fill
             className='object-cover flex brightness-[.9] rounded-lg'
             />
          </div>
          <div className="relative row-span-3 max-md:row-span-5 col-span-1  rounded-lg">
          <Image
             src={items.imagens[2]}
             alt='imagePublicação'
             fill
             className='object-cover flex brightness-[.9] rounded-lg'
             />
          </div>
       </div>

       <div className='relative w-full h-full p-[.2rem] flex flex-col'>
        <div className='absolute w-full flex flex-row bottom-0 px-4 justify-between z-20'>
          <span className='text-[10px] max-md:text-[8px] font-bold text-gray-400'>Data do evento 20/2/2024</span>
          <span className='text-[10px] max-md:text-[8px] font-bold text-gray-400'>{JSON.stringify(items.dataRegistro)}</span>
        </div>
        <h1 className='text-center text-[18px] max-md:text-[14px] font-bold mb-2 max-md:mb-1'>{items.titulo}</h1>
         <span className='w-full h-[40%] max-md:h-[30%]  p-[2rem] max-md:p-[1rem]  text-[12px] max-md:text-[10px] font-bold text-gray-200 text-justify'>
             {items.descricao}
      
         </span>
         <div className='w-full flex mt-[16px]'>
          <Link className='px-[1rem] max-md:px-[.5rem] max-md:text-[12px] py-[.5rem] max-md:py-[.5rem] w-full text-center text-[14px] uppercase bg-[#0b6e4f] rounded-lg' href={`/actividades/actividadesRecreativas/actividade/${items._id}`}>Ver actividades</Link>
         </div>
         <div className='absolute  flex items-center justify-between h-[4rem] p-[1.5rem] px-[.7rem] max-md:p-[.5rem] bottom-8 left-0 w-full bg-slate-950 rounded-2xl'>
                    <div className='flex flex-row items-center justify-center gap-2 max-md:gap-1'>
                    <span className='text-[10px] max-md:text-[8px] font-bold'>Gosto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 max-md:size-3 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <span className='text-[10px] max-md:text-[8px] font-bold'>: 0</span>
                    </div>
                    <div className='flex items-center justify-center flex-row gap-3'>
                    <span className='text-[10px] max-md:text-[8px] font-bold'>Views</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 max-md:size-3 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span className='text-[10px] max-md:text-[8px]  font-bold'>: 0</span>
                    </div>
                    <div className='flex items-center justify-center flex-row gap-3'>
                    <span className='text-[10px] max-md:text-[8px] font-bold'>Comentarios</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 max-md:size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <span className='text-[10px] max-md:text-[8px] font-bold'>: 0</span>
                    </div>
                </div>

      </div>

      
      </div>
  </div>
    ))
   }
     

      
        </div>

    </div>
  )
}

export default page