
import FormularioCriacaoActividade from '@/components/actividades/forrmularioCriacaoActividade/FormularioCriacaoActividade'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

async function page({params}:{params:{id:string}}) {
  const user = await currentUser()
  const nome = user?.username

  return (
    <div className='w-full h-full pt-[4rem] max-md:pt-[5rem] flex pb-[1rem] overflow-hidden'>
        <div className='w-full h-full flex flex-col p-[2rem] max-md:p-[1rem]'>
            <h1 className='text-center mt-[20px] text-white text-[18px] font-bold uppercase'>Criar actividade</h1>
             <FormularioCriacaoActividade id={params.id} nome={nome}/>
        </div>
    </div>
  )
}

export default page