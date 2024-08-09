"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import BtComentar from '../Botao/BtComentar'
import { AddComentario, deleteComentarioBd } from '@/lib/actions/actividadesRecreativas.actions'

function Comentarios({descricao, idComentario, idUser, comentarios, nome, idComentarioOriginal, idAutor}:
    {
        descricao:string, 
        idComentarioOriginal:string,
        idComentario:string,
        idUser:string, 
        comentarios:string, 
        nome:string
        idAutor:string
    }) {
const [respostaItem, setRespostaItem ] = useState(false)
const comentariosArr = JSON.parse(comentarios)
    const resposta = (e:any)=>{
        e.preventDefault()
        if(respostaItem){
            setRespostaItem(false)
        }else{
            setRespostaItem(true)
        }
        
    }

    const deleteComentarioFilho = async (idFilho:string)=>{
        const idPublicacao = JSON.parse(idFilho) 
          await deleteComentarioBd(idPublicacao, idUser)
     } 



    const ItemResposta = ({text, autor, idFilho, autorComentario}:{text:string, autor:string, idFilho:string, autorComentario:string})=>{
        return(
            <div className='relative w-full flex  flex-row items-center rounded-lg bg-white/20 p-[.2rem]'>
                <div className={`absolute ${autorComentario === idUser ? 'flex':'hidden'} right-4 top-2`}>
        <button onClick={()=>deleteComentarioFilho(idFilho)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </button>
        </div>
            <div className='relative w-[38px]  h-[38px] rounded-full'>
               <Image
                src={"/assets/al2.png"}
                alt='imagemComentario'
                fill
                className='object-cover rounded-full'
               />
            </div>
                <div className='w-full px-[1rem] gap-[.2rem]  flex flex-col'>
                    <h1 className='text-start text-[13px] max-md:text-[10px] text-white uppercase'>{autor}</h1>
                   <span className='text-[11px] max-md:text-[9px] text-white'>
                     {text}
                   </span>
                 
                </div>
           </div>
        )
    }

    const comentar = async  (formData:FormData)=>{
        const idUserUni = JSON.parse(idUser)
        const idPublicacao = JSON.parse(idComentario) 
        const text:any = formData.get("comentario") 
        await AddComentario(text, idPublicacao ,idUserUni, nome )  
     }

     const deleteComentario = async (idComentario:string)=>{
        const idPublicacao = JSON.parse(idComentario) 
          await deleteComentarioBd(idPublicacao, idUser)
     } 

  return (
    <li className='w-full p-[.2rem] flex flex-col bg-[#0582ca]/30 rounded-xl'>
    <div className='relative w-full flex flex-col'>
    <div className={`absolute ${idAutor === idUser ? 'flex':'hidden'} right-4 top-2`}>
        <button onClick={()=>deleteComentario(idComentario)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </button>
        </div>
        <div className='w-full flex  flex-row'>
         <div className='relative w-[48px] max-md:w-[40px]  h-[48px] max-md:h-[40px] rounded-full'>
            <Image
             src={"/assets/al2.png"}
             alt='imagemComentario'
             fill
             className='object-cover rounded-full'
            />
         </div>
             <div className='w-full px-[1rem] max-md:px-[.2rem] gap-[.2rem]  flex flex-col'>
                 <h1 className='text-start text-[14px] max-md:text-[12px] text-white uppercase'>{nome}</h1>
                <span className=' text-[12px] max-md:text-[10px] text-white'>
                       {descricao}
                </span>
                <div className='w-full flex flex-col'>
                
                
                 <div className='w-full justify-start gap-4 py-[.2rem] items-center'>
                 <form action={comentar} className='w-full flex gap-[.5rem] justify-center p-[.03rem]  bg-slate-900' >
                     <input className='px-[.5rem]   flex w-full py-[.1rem] bg-black text-white text-[12px]' placeholder='responder' type="text" name="comentario" id="" />
                  <BtComentar/>
                 </form>
                    <button onClick={(e)=>resposta(e)} className='px-[.5rem] py-[.1] mt-[4px] bg-[#08a045] flex rounded-lg justify-center items-center gap-2'>
                     <span className='text-[10px] text-white'>Respostas:{comentariosArr.length}</span>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                     </svg>
                    </button>
                 </div>

                 <div className={`relative  ${respostaItem ? 'flex':' hidden'} w-full py-[.2rem] pl-[.7rem] flex-col gap-[.4rem]`}>
                  {
                    comentariosArr.map((items:any, key:any)=>(
                        <ItemResposta key={key} idFilho={JSON.stringify(items._id)} autorComentario={JSON.stringify(items.autor)} text={items.descricao} autor={items.nome}/>
                    ))
                  }
                    
                  
                 </div>
               
                </div>
             </div>
        </div>
    </div>
</li>
  )
}

export default Comentarios