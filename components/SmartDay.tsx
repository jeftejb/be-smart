import { BanknotesIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

function SmartDay() {
  return (
    <div className="relative bg-[url('/assets/smartdey.jpg')] bg-cover bg-center w-[100%] h-[40vw]  flex flex-col pt-[4rem] md:pt-[8rem] pb-[5rem] overflow-hidden">
     <div className='absolute  z-20 lg:bottom-40 right-40 md:bottom-20 max-sm:right-4 max-sm:bottom-4 '>
     <button type="button" className='px-[2rem] py-[1.5rem] max-sm:px-[1rem] max-sm:py-[.3rem] rounded-xl bg-white/80 text-black hover:text-white hover:bg-gray-800 bg- backdrop-blur-sm text-[14px] font-bold uppercase '>Saber mais</button>
     </div>
</div>
  )
}

export default SmartDay