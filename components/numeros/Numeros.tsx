import { fetchAlunosAllS } from '@/lib/actions/alunos.actions'
import React from 'react'

async function Numeros() {
    const alunos:any = await fetchAlunosAllS()
  return (
    <div className='w-full h-full flex flex-col items-center p-[2rem] bg-[#0b6e4f]'>
     <h1 className='text-[30px] max-md:text-[18px] font-bold text-white'>Nossa estatistica</h1>
     <div className='w-full mt-[18px] flex flex-row flex-wrap justify-center gap-[4rem]'>
     <div className='rounded-full flex flex-col shadow-black shadow-2xl items-center justify-center relative  w-[200px] max-md:h-[150px] max-md:w-[150px] h-[200px]'>
       <h1 className='text-[28px] max-md:text-[18px] text-white font-bold'>
        +{alunos.length}
       </h1>
       <span className='text-[14px] max-md:text-[11px] font-bold uppercase'>Matriculados</span>
     </div>
     <div className='rounded-full flex flex-col shadow-black shadow-2xl items-center justify-center relative  w-[200px] h-[200px] max-md:h-[150px] max-md:w-[150px]'>
       <h1 className='text-[28px] max-md:text-[18px] text-white font-bold'>
        +20
       </h1>
       <span className='text-[14px] max-md:text-[11px] font-bold uppercase'>Formados</span>
     </div>
     </div>
    </div>
  )
}

export default Numeros