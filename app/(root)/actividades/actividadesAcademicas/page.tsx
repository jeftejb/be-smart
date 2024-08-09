import { GetAllActividadesAcademicas } from '@/lib/actions/actividadesAcademicas.actions'
import Image from 'next/image'
import React from 'react'

const getActividades = async()=>{
    const actividades = await GetAllActividadesAcademicas()
    return{actividades:actividades}
}

async function page(){
  const actividades:any = await getActividades()

  return (
    <div className='w-full h-full pt-[4rem] flex flex-col'>

      <div className='w-full h-full p-[2rem] max-md:p-[.2rem]'>
        <h1 className='text-[18px] max-md:text-[14px] font-bold text-center mt-[24px]'>Actividades academicas</h1>
         
         <div className='w-full h-full mt-[2rem] px-[4rem] max-md:px-[.7rem]'>

          {
            actividades.actividades.map((items:any, key:any)=>(
              <div key={key} className='w-full flex bg-[#2b2d42] rounded-xl gap-[.5rem]'>
                <div className='relative w-[60%] h-[200px] max-md:w-[50%] rounded-lg'>
                  <Image
                  src={items.imagens[0]}
                  alt="imagem Academica"
                  fill
                  className='object-cover rounded-lg'
                  />
                </div>

                <div className='relative w-full flex flex-col items-center'>
              
                      <h1 className='text-[18px] text-white font-bold'>{items?.titulo}</h1>
                      <span className='mt-[20px] text-[12px] font-medium'>{items?.descricao}</span>
                     
                     
                      <div className='absolute  flex items-center justify-between h-[4rem] max-md:h-[2rem] p-[1.5rem] px-[.7rem] max-md:p-[.5rem] bottom-0 left-0 w-full bg-slate-950'>
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
                    
                </div>
                </div>
                
              </div>
            ))
          }

         </div>
      </div>

    </div>
  )
}

export default page