import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='w-full flex flex-col pt-[4rem] pb-[4rem] items-center px-[2rem] max-md:px-3 h-full'>

        <h1 className='text-center text-[38px] mt-[2rem] font-bold'>Equipe Smart</h1>
        <span className='mt-[24px] text-justify text-[14px] '>
            Conheça quem faz parte da grende equipe smart que tem o dever de formar e ajudar os estudantes a atingiremos seus objectivos profissionais
        </span>

        <div className='w-full h-full flex flex-col relative items-center justify-center mt-[100px] '>

            <div className='overflow-visible max-md:overflow-hidden w-[80%]  max-md:w-[100%] bg-white rounded-r-full h-[28vh] max-md:h-full  flex flex-row gap-[2rem] max-md:gap-2 max-md:p-[1rem] p-4'>
            <div className='relative w-[300px] max-md:w-[150px] z-10 -left-16 max-md:-left-12 -top-14 max-md:-top-7  h-[300px] max-md:h-[200px] rounded-full'>
              <Image
              src={"/assets/chefAz.jpg"}
              alt="Imagem Equipe"
              fill 
              className='object-cover rounded-full'
              />
            </div>

            <div className='h-full w-[50%] max-md:w-[100%]  flex flex-col  items-center'>
                <h1 className='text-black text-[28px] max-md:text-[11px] font-bold text-center'>Azenate Quintion</h1>
                <span className='text-black text-[14px] max-md:text-[10px] font-bold'>Diretora</span>

                <span className='text-black font-bold  mt-[14px] max-md:mt-[6px] text-[12px] max-md:text-[8px] text-justify'>
                    Fomrada pela Universidade Mandume ya Ndemufayo no curso de Inglês, com aptidões bastante firmadas na lingua inglesa, esta preparada para contribuir de forma significativa no processo de ensino e aprendisagem 
                    dos estudantes do Be-Smart, conta com uma experiência de mais de 7 anos de carreira como professora para ajudar os estudantes a estarem preparados para o mercado de trabalho, e desafios que lhes serão apresentados. 

                </span>

            </div>
            </div>

        </div>

    </div>
  )
}

export default page