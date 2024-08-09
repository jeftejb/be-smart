"use client"
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CarrocelSaidas() {

  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
   
  };
  return (
    <div className='relative items-center w-full flex h-[20rem] max-md:h-[10rem] '>
       
       <Splide 
      options={ options }
      className="relative w-full h-full bg-black">
  <SplideSlide className="w-full h-[20rem] max-md:h-[10rem]">
    <div className='w-[100%] h-[100%]'>
  <Image
        src="/assets/imagemTodos.png"
        alt='Carrocel'
         fill
         sizes='100%'
        className='brightness-[.5] object-cover'
        />
    </div>
  </SplideSlide>
  <SplideSlide className="w-full h-[20rem] max-md:h-[10rem]">
    <div className='w-[100%] h-[100%]'>
  <Image
        src="/assets/imagemTodos.png"
        alt='Carrocel'
         fill
         sizes='100%'
        className='brightness-[.5] object-cover'
        />
    </div>
  </SplideSlide>
  <SplideSlide className="w-full h-[20rem] max-md:h-[10rem]">
    <div className='w-[100%] h-[100%]'>
  <Image
        src="/assets/imagemTodos.png"
        alt='Carrocel'
         fill
         sizes='100%'
        className='brightness-[.5] object-cover'
        />
    </div>
  </SplideSlide>
 
</Splide>
       

    </div>
  )
}

export default CarrocelSaidas