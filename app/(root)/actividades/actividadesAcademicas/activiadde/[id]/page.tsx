import { deleteActividade, GetAllActividadesAcademicas } from '@/lib/actions/actividadesAcademicas.actions'
import Image from 'next/image'
import React from 'react'

const getActividades = async()=>{
    const actividades = await GetAllActividadesAcademicas()
    return{actividades:actividades}
}

async function page({params}:{params:{id:string}}){
  const actividades:any = await getActividades()

  const deletePublicacao = async (idComentario:string)=>{
    const idPublicacao = JSON.parse(idComentario) 
      await deleteActividade(idPublicacao, params.id)
 } 


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
                <div className={`absolute ${items.idAutor === params.id ? 'flex':'hidden'} right-4 top-2`}>
                  <button onClick={()=>deletePublicacao(items._id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                  </button>
                  </div>
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