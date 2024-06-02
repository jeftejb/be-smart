"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"

interface Params{
  dados:any,
  id:string
}

function Dropwdown({dados, id}:Params) {
  const dado = JSON.parse(dados)
const id_user = id 
    const [isOpen , setIsOpen] = useState(false)
  return (
      <div className='relative flex flex-col w-full h-full rounded-2xl mb-4'>
        <button onClick={()=> setIsOpen((prev)=>!prev)} className='bg-blue-400 px-4 py-2 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white' >
            Modulos

            {!isOpen?(
                <AiOutlineCaretDown className='h-8'/>
            ):(
                <AiOutlineCaretUp className='h-8'/>
            )
        }
        </button>   
        {  
        isOpen &&(
         
       
                 <div className='absolute bg-blue-400 top-10 flex flex-col items-start rounded-xl p-2 w-full h-full'>
                        {
                          dado.disciplina.length !== 0 ?
                         dado?.disciplina.map((item:any, index:any)=>(
                           <Link href={`/modulos/modulo/${item?._id}/${id_user}`} key={index} className='flex w-full h-full p-4 justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4'>
                            <h3 className='font-bold'>{item?.nome}</h3>
                          </Link>
                         ))

                         :
                          <div className='flex w-full h-full p-4 justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4'>
                          <h3 className='font-bold'>Nem um modulo registrado</h3>
                        </div>
                    
                            }
                   
                 </div>
          
                    )}
    </div>
  )
}

export default Dropwdown
