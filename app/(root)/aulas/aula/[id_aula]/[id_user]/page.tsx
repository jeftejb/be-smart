import Aula from '@/components/Aula'
import { Atividade } from '@/lib/actions/atividades.actions'
import Image from 'next/image'
import React from 'react'

    async function page({params}:{params:{id_aula:string, id_user:string}}) {
    const aula = params?.id_aula
    const user  =  params?.id_user
    console.log(aula)
    const atividade = await Atividade(aula)
    

  return (
    <div className='relative flex  top-0 w-full h-full'>
        <Aula atividade={JSON.stringify(atividade)}/>
    </div>
  )
}

export default page
