import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

interface Props{
    imagem:string;
    cargo:string;
    nome:string;
    mg:string
}

function FuncionarioItem({imagem, cargo , nome, mg}:Props) {
  return (
    <div className='flex flex-col text-center w-[100%] justify-center '>
      <Image
      src={imagem}
      alt={nome}
      width={150}
      height={150}
      objectFit='contain'
      className='mx-auto mb-[1rem] rounded-lg'
      />

      <div className='flex items-center mx-auto'>
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-500' />
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-500' />
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-500' />
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-500' />
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-500' />
      </div>
      <h1 className='text-[20px] text-white mt-[0.5rem]'>{nome}</h1>
      <p className='text-[14px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>{cargo}</p>
      <p className='text-[12px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto truncate hover:text-wrap'>
          {mg}
      </p>
    </div>
  )
}

export default FuncionarioItem
