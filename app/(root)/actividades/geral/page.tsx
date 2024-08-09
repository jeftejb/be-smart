import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-full h-full flex  flex-col pt-[8rem] items-center justify-center pb-[2rem] px-[2rem]'>
        <h1 className='text-center flex font-bold text-[28px] max-md:text-[18px] uppercase'>Actividades geral do BE-SMART</h1>
        <span className = "w-full text-center max-md:text-justify text-[18px] max-md:text-[14px] text-wrap text-gray-300">A Academia Be-smart realiza actividades recreativas dentro e fora da instituição, com o intuito de aprimorar o nivel de aprendisagem dos estudantes</span>
        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-[2rem] w-full h-full p-[2rem] max-md:p-[.7rem]'>
           
           <div className='relative w-full  flex flex-col p-[1rem] gap-[1rem] rounded-xl bg-black'>
             <div className='relative w-full h-[300px]'>
                <Image
                src={"/assets/smartdey.jpg"}
                alt='actividades'
                fill
                className='object-cover brightness-[1]'
                />
             </div>
             <div className='w-full items-center justify-center flex flex-col  px-[2rem] max-md:px-[.5rem]'>
                <h1 className='text-[18px] font-bold text-center '>Actividades recreativas</h1>
                <p className='w-full flex justify-between px-[2prem]'>
                    <span className='text-[12px] text-gray-300 flex flex-row'>Realizadas : 
                    <span className='text-[14px] items-center justify-center text-gray-300 flex flex-row gap-[.4rem]'>
                        2 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1rem] text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>
                    </span>
                    <span className='text-[12px] text-gray-400'>Por realizar : 
                    <span>2</span>
                    </span>
                </p>

                <div className='w-full h-full flex px-[2rem] max-md:px-[.5rem] pt-[.5rem]'>
                  <span className='text-[14px] max-md:text-[12px] text-justify text-gray-400'>
                    A Academia Be-smart se preocupa com a aprendisagem continua dos seus estudantes, por esta razão  
                     realiza periodicamente actividades com a participação de estudantes e professores, para praticar os ensinamentos em pratica quer seja em um ambiente aberto ou fechado.
                  </span>
                </div>
             </div>
             <div className='w-full flex'>
              <Link className='px-[2rem] max-md:px-[1rem] max-md:text-[12px] py-[1rem] max-md:py-[.5rem] w-full text-center text-[14px] uppercase bg-[#0b6e4f] rounded-lg' href={"/actividades/actividadesRecreativas"}>Ver actividades</Link>
             </div>
           </div>
           <div className='relative w-full  flex flex-col p-[1rem] gap-[1rem] rounded-xl bg-black'>
             <div className='relative w-full h-[300px]'>
                <Image
                src={"/assets/smartdey.jpg"}
                alt='actividades'
                fill
                className='object-cover brightness-[1]'
                />
             </div>
             <div className='w-full items-center justify-center flex flex-col  px-[2rem] max-md:px-[.5rem]'>
                <h1 className='text-[18px] font-bold text-center '>Actividades Academicas</h1>
                <p className='w-full flex justify-end px-[2prem]'>
                    <span className='text-[12px] text-gray-300 flex justify-end flex-row'>Publicadas : 
                    <span className='text-[14px] items-center justify-end text-gray-300 flex flex-row gap-[.4rem]'>
                        2 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1rem] text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>
                    </span>
                    
                </p>

                <div className='w-full h-full flex px-[2rem] max-md:px-[.5rem] pt-[.5rem]'>
                  <span className='text-[14px] max-md:text-[12px] text-justify text-gray-400'>
                    A Academia Be-smart, tem realizado exames com frequencia de modos a avaliar o nivel de aprendisagem dos estudantes.<br/> 
                   As actividades academicas, são publicadas no site  de modos a deixar todos envolvidos nos eventos academicos que ocorrem na instituição.

                  </span>
                </div>
             </div>
             <div className='w-full flex'>
              <Link className='px-[2rem] max-md:px-[1rem]  py-[1rem] max-md:py-[.5rem] w-full text-center text-[14px] max-md:text-[12px] uppercase bg-[#0b6e4f] rounded-lg' href={"/actividades/actividadesAcademicas"}>Ver actividades</Link>
             </div>
           </div>
        </div>
    </div>
  )
}

export default page