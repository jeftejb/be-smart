'use client'

import Link from "next/link"
import { redirect } from "next/navigation"

export default function Login(){

    const  handelEnvio = (e:any)=>{
      e.preventDefault()
   redirect('/perfil')     
    
   }

    return(
        <section className="relative w-full gap-4 p-4">
            <div className="flex flex-col mt-40 mb-6 justify-center item-center ">
                <h1 className="text-center text-white text-3xl">Login</h1>
                
                <div className="flex mt-9 w-full items-center justify-center ">
                    <form name="" action={'/'} className=" flex flex-col border-2 border-rose-400 rounded-2xl w-80 h-80 gap-4 p-4 items-center justify-center ">

                    <input type="text"  className="w-full bg-transparent text-white border-2 border-rose-300 p-2 rounded-2xl text-center mb-4" />
                    <input type="text"  className="w-full bg-transparent text-white border-2 border-rose-300 p-2 rounded-2xl text-center mb-4 " />

                      <Link href={'/perfil/id:123456789'} className="text-center bg-red-500 w-full p-4">Entrar</Link>
                    <p>
                 
                    </p>
                    </form>

                </div>
            </div>
        </section>
    )
}