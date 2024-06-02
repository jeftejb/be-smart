import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

interface Props{
    imagem:string;
    cargo:string;
    nome:string;
    mg:string
}

function AlunosSlideItem({imagem, cargo , nome, mg}:Props) {
  return (
    <div className='flex flex-col w-[400px] h-[400px] bg-slate-100 text-center justify-center'>
      <Image
      src={imagem}
      alt={nome}
      width={800}
      height={800}
      objectFit='contain'
      className='mx-auto mb-[1rem] '
      />

     
    </div>
  )
}

export default AlunosSlideItem
