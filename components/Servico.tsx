import { PencilSquareIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Servico() {
  return (
    <div className='bg-[#00303C] rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
    p-[2rem]
   '
   >
     <PencilSquareIcon className='w-[6rem] h-[6rem] mx-auto'/>
     <h1 className='text-[20px] md:text-[30px] mt-[1,5rem] mb-[1.5rem]' >Actividades</h1>
     <p className='text-[15px] text-[#6BA614] font-normal'>
      Venha aprender de forma interativa, com actividades totalmente personalizadas para sua rapida aprendisagem.
     </p>
   </div>
  )
}

export default Servico
