'use client'

import TextEffect from './ui/textEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import ReactPlayer from 'react-player'
import Videos from './Videos'
import { SignInButton, SignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import AlunosSlide from './AlunosSlide'
import { motion } from 'framer-motion'
import Hero from './heroSection/Hero'

function HeroSection() {

  const router = useRouter();

  return (
  <div className="lg:h-[100vh] md:h-[150vh] max-sm:h-[1000px] bg-[url('/img/banner.jpg')] bg-cover bg-center lg:p-10 md:p-8 max-sm:p-2">
   
    <div className='w-[100%] lg:p-[24px] md:p-[20px] max-sm:px-[1px] grid-cols-1 mx-auto grid lg:grid-cols-2 lg:gap-[1rem] md:gap-[0.7rem] max-sm:gap-[0.5rem] h-[100%] items-center  justify-center'>
        <div className='lg:mt-14 md:mt-20 max-sm:mt-28  p-4'>
        <div className='w-[200px] max-sm:w[400px]  bg-[#03A678] relative lg:flex items-center rounded-full  h-[200px]'>
            <Image
            src={'/assets/prfs.png'}
            alt='Aluno'
            layout='fill'
            className='object-cover rounded-full'
            />
        </div>
        <h1 className='text-[18px] md:text-[28px] text-white font-bold'>
            Ola,&shy;  
            <span className='text-[#038C73]'>
                 Seja bem vindo ao Be-Smart.
            </span>
        </h1>
        <p className='mt-[1rem] text-[15px] text-[#F2F2F2]'>
        <span className="flex-[0.6] cursor-pointer text-[20px] text-[#03A678] font-bold mr-1">
          BE-
            <span className="text-[#80BF21]">
              SMART
            </span>
        </span>
      Comprometa-se com a prática diária para construir uma base sólida. Explore a cultura associada à língua, mergulhando em filmes, música e livros. Envolva-se em interações regulares, seja conversando com nativos ou participando de grupos de estudo, para ganhar confiança na aplicação prática do idioma.
        </p>
        <TextEffect/>
        <div className='mt-[2rem]  z-30 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 '>
        <button className='px-[2rem] rounded-xl max-sm:w-full max-sm:justify-center max-sm:text-[14px] max-sm:rounded-xl hover:bg-green-800 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#038C73] text-black flex items-center space-x-2'>
         <p className='text-[12px]'>
           Baixar Aplicativo
          </p>
          <ArrowDownTrayIcon
          className='w-[1.6rem] h-[1.7rem] max-sm:w-[1rem] max-sm:h-[1rem] text-black '
          />
        </button>
           
        <button 
       onClick={()=>{ router.push('/sign-up')}}
       className='px-[2rem] rounded-xl  max-sm:w-full max-sm:justify-center max-sm:text-[14px] max-sm:rounded-xl hover:bg-green-800 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#038C73] text-black flex items-center space-x-2'
        >
         <p className='text-[12px]'>
           Criar Conta
          </p>
          <UserCircleIcon
           className='w-[1.6rem] h-[1.7rem] max-sm:w-[1rem] max-sm:h-[1rem] text-black '
          />
        </button>
        </div>
        </div>
        
        <div className='flex flex-col w-[100%] h-[100%]  items-center justify-center'>
<motion.div
   initial={{ opacity: 0, scale: 0.5 }}
   animate={{ opacity: 1, scale: 1 }}
   transition={{
     duration: 0.5,
     delay: 0.2,
     ease: [0, 0.71, 0.2, 1.01]
   }}
   className='relative flex flex-col items-center justify-center  w-[100%] h-[100%] rounded-lg'
>
        <Hero/>

       
     
      </motion.div>
       </div>
       
    </div>
  </div>
  )
}

export default HeroSection
