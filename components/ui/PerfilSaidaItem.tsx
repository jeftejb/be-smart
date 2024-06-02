import React from 'react'

interface Props{
    titulo: string;
    texto:string
}
function PerfilSaidaItem({titulo, texto}:Props) {
  return (
    <div className='mb-[4rem] md:md-[8rem]'>
      <span className='px-[2rem] text-[#F2F2F2] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#03A678]'>
       
      </span>
      <h1 className='mt-[2rem] capitalize font-semibold mb-[1rem] text-[15px] sm:text-[20px] md:text-[27px] text-white'>
        {titulo}
        </h1>
        <p className=' text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
          {texto}
        </p>
    </div>
  )
}

export default PerfilSaidaItem
