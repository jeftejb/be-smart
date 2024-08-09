import { Curso } from '@/lib/actions/cursos.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function page({params}:{params:{id:string}}) {
    const curso = await Curso(params.id)
   
  return (
    <div className='w-full pt-[4rem] h-full flex flex-col'>

        <div className='w-full h-full flex flex-col  p-[2rem]'>
          <h1 className='text-[28px] font-bold text-center'>{curso?.nome}</h1>

          <div className='w-full grid grid-cols-2 max-md:grid-cols-1 gap-4'>
            <div className='relative w-full h-[400px] p-[1rem]'>
                <Image
                src={curso?.imagem}
                alt="Imagem curso"
                fill
                className='object-cover'
                />

            </div>

            <div className='w-full bg-[#0b6e4f]/30 rounded-2xl flex flex-row max-md:flex-col p-[2rem]'>
                <div className='w-full flex flex-col gap-[1rem]'>
                    <h1 className='etxt-[18px] max-md:text-[14px] font-bold'>Detalhes do curso</h1>
                    <span className='text-[14px] max-md:text-[12px] flex font-bold text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                        Surso: <span>{curso?.nome}</span>
                    </span>
                    <span className='text-[14px] max-md:text-[12px] flex font-bold text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        Modulos: <span>{curso?.disciplina.length}</span>
                    </span>
                    <span className='text-[14px] max-md:text-[12px] flex  font-bold text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                        Duração: <span>{"3 anos"}</span>
                    </span>
                  
                </div>
                <div className='relative w-full flex flex-col'>
                    <span className='uppercase text-[18px] max-md:text-[14px] flex flex-col items-center text-center mt-[24px] mb-[24px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        Descrição
                    </span>
                    <span className='text-justify text-[14px] h-full max-md:text-[10px] text-white'>
                        {curso?.descricao}
                    </span>

                    <div className='relative mt-[2rem] flex w-full items-center bottom-0 left-0'>
                    <Link href={"/sign-up"} className='px-[2rem] max-md:px-[1rem] w-full text-[12px] text-center uppercase py-[.7rem] bg-green-600 rounded-xl'>Quero me inscrever</Link>
                    </div>
                </div>

            </div>
          </div>
        </div>

    </div>
  )
}

export default page