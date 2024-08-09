import React from 'react'
import FuncionariosSlide from './FuncionariosSlide'

function Funcionarios() {
  return (
    <div>
           <div className='bg-[#02050a] pt-[4rem] px-4 md:pt-[8rem] pb-[0rem]'>
           <h1 className="titulos uppercase">
            <span className="text-[#80BF21]">
              Funcionarios - 
            </span>
            <span className='text-white ml-1'>
            Smart
            </span> 
        </h1>
        <h1 className='mt-[24px] mb-[15px] text-center text-[15px] text-gray-300 font-semibold uppercase'>
          No Be-smart, os professores não apenas ensinam, eles também capacitam mentes e alimentam sonhos.
          </h1>
        <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
         
          <FuncionariosSlide/>
        </div>
           </div>
    </div>
  )
}

export default Funcionarios
