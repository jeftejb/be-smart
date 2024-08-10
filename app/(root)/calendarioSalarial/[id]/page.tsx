import CalendarioSalarial from '@/components/calendarioSalarial/CalendarioSalarial'
import React from 'react'

function page() {
  return (
    <div className='w-full h-full pt-[4rem] p-[2rem] flex flex-col '>
        <div className='w-full mt-[20px] p-[4rem]'>
        <CalendarioSalarial/>
        </div>
       
    </div>
  )
}

export default page