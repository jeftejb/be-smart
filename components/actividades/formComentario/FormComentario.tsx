"use client"

import BtComentar from '@/components/Botao/BtComentar'
import { AddComentario } from '@/lib/actions/actividadesRecreativas.actions'
import React from 'react'

function FormComentario({idPublicacao, idUser, nome}:{idPublicacao:string, idUser:string, nome:string}) {

    const comentar = async  (formData:FormData)=>{
          const idUserUni = JSON.parse(idUser)
          const text:any = formData.get("comentario") 
          await AddComentario(text, idPublicacao, idUserUni, nome)  
       }

  return (
    <form  className='w-full flex gap-[.5rem] justify-center p-[.5rem] rounded-xl bg-slate-900' action={comentar}>
    <input autoComplete='true' autoCorrect='true' className='px-[1rem] w-full py-[.7rem] bg-black text-white text-[12px]' placeholder='comentario' type="text" name="comentario" id="" />
     <BtComentar/>
  </form>
  )
}

export default FormComentario