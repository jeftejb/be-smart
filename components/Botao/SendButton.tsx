"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'


function SendButton() {
    const  {pending} =  useFormStatus()
  return (
   <button disabled={pending} className={`px-[.5rem] py-[.2rem]  ${pending? " bg-gray-300" : 'bg-green-700'}`} type="submit">
    <span className='text-[12px] font-bold'>Enviar</span>
    </button>

  )
}

export default SendButton