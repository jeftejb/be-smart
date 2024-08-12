import Image from 'next/image'
import React from 'react'

function Propinas() {
  return (
    <div className='w-full h-full flex items-center flex-col p-[2rem]'>
        <h1 className='text-[28px] font-bold text-white'>Propinas</h1>

        <div className='w-full mt-[24px] grid md:grid-cols-2 max-sm:grid-cols-1 h-full lg:grid-cols-4 grid-cols-1 gap-4'>
            <div className='relative w-full bg-[url(/assets/propina1.jpg)]  h-full  hover:scale-[1.03] duration-100 rounded-3xl border border-white'>
            <div className='w-full h-full bg-black/70 rounded-3xl brightness-90 flex flex-col'>
            <div className='w-full h-[150px] flex items-center overflow-visible bg-cover justify-center rounded-t-3xl bg-[url(/assets/img5.jpg)]'>
                <div className='relative mt-[100px] z-20  w-[100px] h-[100px] rounded-t-3xl'>
                <Image
               src={"/assets/al3.png"}
               alt='imagemPropina'
               fill 
               className='object-cover'
               />
                </div>
             
            </div>
              
              <div className='w-full flex flex-col mt-[60px] px-[2rem]'>
                <span className='text-[14px] max-md:text-[12px] font-bold flex gap-2 '>Idades: <span className='text-blue-500 flex gap-2'>5 - 9 anos de idades
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                    </span></span>
                <span className='text-[14px] max-md:text-[12px] font-bold flex gap-2'>Propina/mês: 
                    <span className='text-green-400 flex gap-2'>7.000,00kz
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>

                    </span></span>

                    <ul className="mt-[24px]">
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Acesso ao material de apoio
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas presenciais
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas online
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas de reforço para outras disciplinas
                    </li>
                    </ul>
              </div>
    
            </div>
            </div>
           
            <div className='relative w-full bg-[url(/assets/propina2.jpg)]  h-full  hover:scale-[1.03] duration-100 rounded-3xl border border-white'>
            <div className='w-full h-full bg-black/70 rounded-3xl brightness-90 flex flex-col'>
            <div className='w-full h-[150px] flex items-center overflow-visible bg-cover justify-center rounded-t-3xl bg-[url(/assets/img5.jpg)]'>
                <div className='relative mt-[100px] z-20  w-[100px] h-[100px] rounded-t-3xl'>
                <Image
               src={"/assets/al2.png"}
               alt='imagemPropina'
               fill 
               className='object-cover'
               />
                </div>
             
            </div>
              
              <div className='w-full flex flex-col mt-[60px] px-[2rem]'>
                <span className='text-[14px] max-md:text-[12px] font-bold flex gap-2 '>Idades: <span className='text-blue-500 flex gap-2'>10 - 13 anos de idades
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                    </span></span>
                <span className='text-[14px] max-md:text-[12px] font-bold   flex gap-2'>Propina/mês: 
                    <span className='text-green-400 text-[14px] max-md:text-[12px]   flex gap-2'>8.000,00kz
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>

                    </span></span>

                    <ul className="mt-[24px]">
                    <li className='flex text-[12px] max-md:text-[10px]  items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Acesso ao material de apoio
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas presenciais
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas online
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas de reforço para outras disciplinas
                    </li>
                    </ul>
              </div>
    
            </div>
            </div>

            <div className='relative w-full bg-[url(/assets/propina3.jpg)]  h-full  hover:scale-[1.03] duration-100 rounded-3xl border border-white'>
            <div className='w-full h-full bg-black/70 rounded-3xl brightness-90 flex flex-col'>
            <div className='w-full h-[150px] flex items-center overflow-visible bg-cover justify-center rounded-t-3xl bg-[url(/assets/img5.jpg)]'>
                <div className='relative mt-[100px] z-20  w-[100px] h-[100px] rounded-t-3xl'>
                <Image
               src={"/assets/al4.png"}
               alt='imagemPropina'
               fill 
               className='object-cover'
               />
                </div>
             
            </div>
              
              <div className='w-full flex flex-col mt-[60px] px-[2rem]'>
                <span className='text-[14px] max-md:text-[12px] font-bold flex gap-2 '>Idades: <span className='text-blue-500 flex gap-2'>14 - 17 anos de idades
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                    </span></span>
                <span className='text-[14px] max-md:text-[12px] font-bold flex gap-2'>Propina/mês: 
                    <span className='text-green-400 flex gap-2'>10.000,00kz
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>

                    </span></span>

                    <ul className="mt-[24px]">
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Acesso ao material de apoio
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas presenciais
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas online
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas de reforço para outras disciplinas
                    </li>
                    </ul>
              </div>
    
            </div>
            </div>
           
            <div className='relative w-full bg-[url(/assets/propina4.jpg)]  h-full  hover:scale-[1.03] duration-100 rounded-3xl border border-white'>
            <div className='w-full h-full bg-black/70 rounded-3xl brightness-90 flex flex-col'>
            <div className='w-full h-[150px] flex items-center overflow-visible bg-cover justify-center rounded-t-3xl bg-[url(/assets/img5.jpg)]'>
                <div className='relative mt-[100px] z-20  w-[100px] h-[100px] rounded-t-3xl rounded-full'>
                <Image
               src={"/assets/negocio1.jpg"}
               alt='imagemPropina'
               fill 
               className='object-cover rounded-full'
               />
                </div>
             
            </div>
              
              <div className='w-full flex flex-col mt-[60px] px-[2rem]'>
                <span className='text-[14px] max-md:text-[12px] font-bold flex gap-2 '>Idades: <span className='text-blue-500 flex gap-2'>18 anos em diante  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                    </span></span>
                <span className='text-[14px] max-md:text-[12px] font-bold flex gap-2'>Propina/mês: 
                    <span className='text-green-400 flex gap-2'>12.000,00kz
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>

                    </span></span>

                    <ul className="mt-[14px] max-md:text-[12px]">
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Acesso ao material de poio
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas presenciais
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas online
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas de reforço para outras disciplinas
                    </li>
                    <li className='flex text-[12px] max-md:text-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                        Aulas personalizadas para uma área de actuação especifica
                    </li>
                    </ul>
              </div>
    
            </div>
            </div>
        </div>

    </div>
  )
}

export default Propinas