'use client'

import Link from "next/link";
import { AcademicCapIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
 

export default function Cursos({items ,id,nivel }:{id:string, items:any, nivel:string }){
      const item:any = JSON.parse(items)
      const [open, setOpne] = useState(false)
        
      const moveItem =()=>{
            setOpne(false)
      }
      const moveItemOpem = ()=>{
       setOpne(true)
      }

            return(
           <div className='relative flex flex-col items-center  bg-[#00303C] rounded-xl  hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem] max-sm:p-[1rem]
           '
           >
            <Link href={`/perfil/aulas/${id}/${nivel}`}>
             <AcademicCapIcon className='lg:w-[6rem]  lg:h-[6rem] md:h-[4rem] md:w-[4rem] max-sm:h-[2rem] max-sm:w-[2rem] mx-auto'/>
             <h1 className='lg:text-[20px] md:text-[25px] max-sm:text-[12px] mt-[1,5rem] mb-[1.5rem]' >{item?.nome}</h1>
             <p className='lg:text-[15px] md:text-[12px] max-sm:text-[9px] text-[#6BA614] font-normal'>
              {item?.descricao}
             </p>
             </Link>

             <div onClick={()=>moveItemOpem()} className="lg:w-[12rem] md:w-[10rem] max-sm:w-[7rem] cursor-pointer h-[2rem]  justify-center items-center bg-[#6BA614] flex rounded-2xl mt-[24px]">
                <span className="text-white lg:text-[12px] md:text-[10px] max-sm:text-[8px] font-semibold">Ver Modulos</span>
                <ChevronDownIcon
                />
             </div>
             {open &&(
                  <div className="absolute w-[100%]  flex-col h-[100%] bg-white top-0 mx-auto flex left-0 rounded-xl items-center ">
                
                  <div className="w-full h-full p-[2rem] max-sm:p-[1rem] mt-[2rem] flex items-center flex-col gap-[1rem]">
                  { 
                  item.disciplina.map((items:any, key:any)=>(
                    <div key={key} className="w-[80%] max-sm:w-[100%] lg:h-[2rem] md:h-[2rem] max-sm:h-[1.5rem]  flex flex-col  border border-[#00303C] rounded-full hover:scale-100 transition-all duration-100 hover:bg-[#00303C]">  
                    <Link href={`/perfil/aulas/${id}/${nivel}/${items._id}`}>
                    <span className="text-black lg:text-[18px] md:text-[18px] max-sm:text-[14px] font-semibold ">
                        {items?.nome}
                    </span>
                    </Link>
                   </div>
                  ))
                }
                  </div>
                 
                   <div className="absolute cursor-pointer top-[0.5rem] right-[1rem] w-[2rem] h-[2rem] text-[#80BF21] hover:text-red-800">
                        <XMarkIcon
                        onClick={()=>moveItem()}
                        />
                        </div>
                        
             </div>
             )}
           </div>
            )
}