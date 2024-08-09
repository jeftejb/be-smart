
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EspacoEncarregado
() {
  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
      <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
           
           <div className='absolute  w-[100%] h-[100%] rounded-full  bg-[#6BA614] top-[2rem] ' >
           <Image
           src={'/assets/teacherthi.png'}
           alt='professor'
           layout='fill'
           objectFit='contain'
           className='relative  w-[100%] h-[100%] object-contain'
           />
           </div>
         </div>
         <div className='items-center justify-center flex flex-col'>
         <h1 className="flex-[0.6] cursor-pointer text-[20px] text-[#03A678] font-bold">
        <span className='text-white mr-1'>
            Espaço do Encarregado 
            </span> 
            <span className="text-[#80BF21]">
              SMART
            </span>
        </h1>
        <h2 className='text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white '>
             Produtividade, Assiduidade e <span className='text-[#6BA614]'>Crescimento.</span> 
        </h2>
        <div className='mb-[3rem] flex  items-center md:space-x-10'>
          <span className='w-[500px] hidden md:block h-[5px] bg-[#03A678] rounded-sm' ></span>
          
          <p className='text-[15px] max-sm:text-[14] font-semibold text-slate-300 w-80%'>
           Nós, do Be-Smart, acreditamos que a educação de qualidade é um esforço conjunto entre a instituição e os encarregados de educação. Por isso, criamos um espaço especial dedicado aos pais e responsáveis, que desempenham um papel fundamental na jornada educacional dos nossos estudantes.<br/><br/>
       
          Nossa área reservada para os encarregados de educação é projetada para oferecer um ambiente acolhedor e informativo, onde os encarregados podem acompanhar de perto o progresso e o desenvolvimento dos seus filhos.
          </p>
        
        </div>
        <Link
        href={"/espacoEncarregados/encarregadosInfo"}
         className='px-[2rem] rounded-xl  justify-center hover:bg-green-800 transition-all max-sm:flex max-sm:w-full text-center duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#038C73] text-black flex items-center space-x-2'>
         <p className='text-center max-sm:text-[14px] uppercase'>
           Saber mais
          </p>
        </Link>
         </div>
      </div>
    </div>
  )
}

export default EspacoEncarregado

