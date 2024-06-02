import Aulas from '@/components/Aulas';
import { Disciplina } from '@/lib/actions/disciplinas.actions'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function page({params}:{params:{id:string, id_user:string}}) {
  const id_user  =  params?.id_user 
  const id_modulo = params?.id

  const dados:any = await Disciplina(id_modulo);
 




  return (
    <div className="mt-36 w-full h-full flex flex-col relative p-4 items-center justify-center">
        <h1>Modulo / Disciplina : {dados?.nome}</h1> 


        <div className='relative flex p-8 w-full h-full flex-row items-center justify-between gap-8'>

          <div className="relative flex w-full h-full border rounded-xl p-4 items-center justify-center">
            <div className="relative w-[400px] h-[400px] items-center justify-center">
              <Image
              alt='perfilImage'
              src={dados?.imagem}
              fill
              className='absolute object-cover'
              />
              </div>
          </div>

          <div className="relative flex w-full h-full border rounded-xl p-4">
            <div className='relative flex flex-row gap-10 w-full h-full p-4 justify-center items-center'>
                
                <div className='w-full h-full border rounded-3xl p-4 items-center justify-center bg-green-500'>
                  <h3>{dados?.descricao}</h3>
                </div>

                <div className='w-full h-full border rounded-3xl p-4 items-center justify-center bg-green-500'>
                  <h3>aulas:{dados?.auldas.length}</h3>
                </div>

                <div className='w-full h-full border rounded-3xl p-4 items-center justify-center bg-green-500'>
                  <h3>professores:{dados?.professores.length}</h3>
                </div>


            </div>
          </div>

        </div>
        <div className='relative flex-1 mt-10 w-full h-full p-8 items-center justify-center'>
                 <h1 className="text-center">Aulas</h1>
                  <div className='relative flex w-full h-full p-8 m-4 items-center justify-center'>
                       <Link href={`/professor/criar/atividade/${id_user}/${id_modulo}`} className="px-8 py-4 bg-green-500 uppercase font-bold text-xs rounded-xl hover:bg-green-900 hover:text-gray-200 transition:.5s">
                        Adicionar aula
                       </Link>
                  </div>

        <div className='relative grid grid-cols-4 mt-10 gap-8 p-8 w-full h-full border-r border-l items-center justify-center'>
         { dados?.atividades.map((item:any , key:any)=>(
           <Aulas id_aula={item?._id} imagem={item?.imagem} nome={item?.titulo} id_user={id_user}  key={key} />
           ))  }
        </div>
           </div>

    </div>
  )
}

export default page  