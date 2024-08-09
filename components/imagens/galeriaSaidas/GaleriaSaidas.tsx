"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function GaleriaSaidas({imagens}:{imagens:string}) {
    const [ZoonImage , setZoonImage] = useState(false)
  const arrayImagens:any = imagens ? JSON.parse(imagens):[]
    const imageZon = (e:any)=>{
        e.preventDefault()
        if(ZoonImage){
            setZoonImage(false)
        }else{
            setZoonImage(true)
        }
    }

    const ItemBaixar = ()=>{
        return(
            <div className={` flex z-10 w-[100%]  justify-end bg-transparent`}>
              <div className='flex justify-items-end'>
                <button className='z-20 px-[.5rem] py-[.1rem] rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 font-bold backdrop-blur-xl text-[#08a045]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </button>
              </div>
            </div>
        )
    }

  return (
    <div className='w-full mt-[24px] flex flex-row flex-wrap gap-[1rem] max-md:justify-center'>
      {
        arrayImagens.map((items:any, key:any)=>(
          <div key={key}  className={`relative   lg:hover:scale-[2] max-md:hover:scale-[1] max-sm:scale-[.7] duration-[.5] hover:translate-x-10 max-md:hover:translate-x-0 hover:z-20  w-[200px] max-md:w-[400px] h-[200px] rounded-md`}>
          <Image
          src={items}
          alt='imagemGaleria'
          fill
          className={`object-cover rounded-md ${ZoonImage ? 'hidden' : 'flex'}`}
          />
         <ItemBaixar/>
        </div>
        ))
      }
  
  
</div>
  )
}

export default GaleriaSaidas