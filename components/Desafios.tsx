"use client"

import Image from "next/image"
import Link from "next/link"

export default function Desafios({items}:{items:any}){
    const item = JSON.parse(items)
    return(
        <div className="relative flex h-28 w-full p-4 hover:scale-110 duration-100 bg-gray-900 border-2 border-green-500 rounded-lg overflow-hidden ">
        <Link href={`/perfil/desafio/${items._id}`} >
           <div className="relative rounded-full w-[50px] h-[50px] border-2 mr-4 border-green-300 items-center justify-center">
           <Image
               src={"/assets/fundo.jpg"}
               alt="fundoImage"
               fill
               className="object-cover rounded-full "
               />
           </div>
           </Link>
                  <div className="relative flex flex-col w-full h-full">
                   <div className="flex w-full justify-start mx-2 gap-4 items-center">
                   <h1 className="text-[14px] font-bold uppercase">Titulo</h1>
                    <span className="font-bold text-[12px]" >Data: 2/10/2024</span>
                   </div>
                   <p className="font-bold text-[11px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam modi ipsa optio similique omnis natus!</p>
                  </div>

            <div className="absolute w-32  h-8 bg-gray-900 bottom-0 right-0 grid grid-cols-2">
               <div> <span>Editar</span></div>
                 <div><span>Apagar</span></div>
            </div>
        </div>
    )
}