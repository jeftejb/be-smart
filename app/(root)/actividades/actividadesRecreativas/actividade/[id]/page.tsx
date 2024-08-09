import FormComentario from '@/components/actividades/formComentario/FormComentario'
import Comentarios from '@/components/comentarios/Comentarios'
import GaleriaSaidas from '@/components/imagens/galeriaSaidas/GaleriaSaidas'
import { AddComentario, GetOneActividadeRecreativa } from '@/lib/actions/actividadesRecreativas.actions'
import { getIDs } from '@/lib/actions/getID.actions'
import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const getActividade = async  (id:string)=>{
  const dados:any={id:id}
  const currentuser = await currentUser()
  const email:any = currentuser?.emailAddresses[0].emailAddress
  const idUser = await getIDs(email)
  const actividade = await GetOneActividadeRecreativa({dados})
  return{atividade: actividade, user:idUser}
}

async function page({params}:{params:{id:string}}) {
  
  const actividade:any = await getActividade(params.id)
  const dados = actividade?.atividade
  const user = actividade?.user.id

  


 
  return (
    <div className='w-full h-full flex  flex-col pt-[8rem] items-center justify-center pb-[4rem] px-[2rem] max-md:px-[.7rem]'>
        <h1 className='text-center flex font-bold text-[28px] max-md:text-[18px]  uppercase'>{dados.titulo}</h1>

        <div className='w-full h-full flex flex-col items-center justify-center mt-[15px]'>
              <div className='w-full grid grid-cols-2 max-md:grid-cols-1 gap-4 p-[2rem] bg-slate-950 rounded-lg items-center justify-center'>
                 <div className='relative  w-full h-[450px] p-[.2rem] rounded-lg'>
                 <Image
                 src={dados.imagens[0]}
                 alt='imagePublicação'
                 fill
                 className='object-cover flex brightness-[.9] rounded-lg'
                 />
                 </div>
                 <div className='relative  w-full flex flex-col h-[450px] bg-black p-[.2rem] rounded-lg border border-white'>
                    
                    <div className='absolute  flex items-center justify-between h-[4rem] p-[1.5rem] px-[.7rem] max-md:p-[.5rem] top-1 left-0 w-full bg-slate-950 rounded-2xl'>
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
                        <span className='text-[10px] max-md:text-[8px] font-bold'>: {dados.comentario.length}</span>
                        </div>
                    </div>

                    <div className='w-full flex p-[.2rem] mt-[80px]'>

                    <FormComentario idPublicacao={params.id} idUser={JSON.stringify(user)} nome={dados.nome} />
                    </div>

                    <div className='w-full h-[400px] bg-white/30 pb-3 overflow-y-scroll'>
                       <ul className='w-full h-full flex flex-col px-[1rem] py-[.5rem] gap-[1rem]'>
                        {
                          dados.comentario.map((item:any, key:any)=>(
                            <Comentarios key={key} 
                            comentarios={JSON.stringify(item.comentario)} 
                            descricao={item.descricao} 
                            idComentario={JSON.stringify(item._id)} 
                            idComentarioOriginal={params.id}
                            idUser={JSON.stringify(user)} 
                            idAutor={JSON.stringify(item.autor)}
                            nome={dados.nome}/>
                          ))
                        }
                        
                       </ul>
                    </div>
                </div>
              </div>
        </div>

        <div className='w-full mt-[12px] p-[2rem] max-md:p-[.7rem] flex flex-col bg-slate-950 rounded-lg'>
            <h1 className='text-center text-[18px] font-bold text-white'>Galeria</h1>

             <GaleriaSaidas imagens={JSON.stringify(dados.imagens)}/>
            
        </div>

    </div>    
  )
}

export default page