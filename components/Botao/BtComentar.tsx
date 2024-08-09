"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'


function BtComentar() {
    const  {pending} =  useFormStatus()
  return (
   <button disabled={pending} className={`px-[1rem] py-[.7rem] text-[12px]  ${pending? " bg-gray-300" : 'bg-green-700'}`} type="submit">
    <span className='text-[12px] font-bold'>Comentar</span>
    </button>

  )
}

export default BtComentar