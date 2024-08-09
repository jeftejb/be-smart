"use client"

import React from 'react'
import { CldImage } from 'next-cloudinary';
function ImageCalud(imagem:any) {
  return (
  
    <CldImage
        width="965"
        height="600"
        src={imagem.imagem}
        sizes="100vw"
        alt="pedido de pagamento de propina"
        className='object-cover rounded-lg hover:scale-125 duration-[.5s] hover:z-10'
        />
  )
}

export default ImageCalud