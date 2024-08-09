'use client'

import React, { useState } from 'react'
import { usePathname, useRouter  } from 'next/navigation';
import { updateEncarregado } from "@/lib/actions/encarregado.actions";


interface Props{
    id:string
}


export default function FormMatriculaEncarregado({id}:Props){
    const pathname = usePathname();
    const [dados , setDados] = useState<{}>({});
 
    const router = useRouter()
   

    const handelChange = (e:any)=>{
      e.preventDefault();
   setDados((prev)=>{
    return{...prev, [e.target.name]:e.target.value}
})
}




  const onSubmit = async (e:any) => {
    
        
        await updateEncarregado(
            {
                nome:dados?.nome,
                email:dados?.email,
                telefone:dados?.telefone,
               
            }
           )

        if (pathname === "/profile/edit") {
          router.back();
        } else {
          router.push(`/matricula/${id}`);
        }

    }

    

   

   

    return(
        <div className="w-[100%] flex pt-[4rem] max-ms:p-[2px] items-center justify-center text-[18px]  font-normal">

            
            <form onSubmit={(e)=>onSubmit(e)}  data-aos='fade-down' className="flex flex-col p-[12px] w-[100%] text-[#6BA614] justify-center items-center ">
              

                <div className="grid w-[80%] max-sm:w-[90%] lg:grid-cols-1 gap-[2px] justify-center items-center max-md:grid-cols-1  max-sm:grid-cols-1 ">  
                
                <div className="flex flex-col w-[100%] h-full rounded-2xl shadow-xl shadow-green-600 p-[10px]" >
               <div className="relative flex h-[1rem] w-[100%] justify-center">
                <h1 className="titulos font-bold text-[18px] uppercase">Cdastro do encarregado</h1>
                </div> 

              
                
                <div className="w-full flex flex-col  max-md:flex-col max-sm:flex-col max-md:mt-1 max-sm:mt-1 mt-8 gap-9">
                <input  className="p-2 mb-4 max-md:mb-1 max-sm:mb-1 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="text" name="nome" onChange={(e)=>handelChange(e)}  placeholder="Nome Completo"/>
                <input className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="email" name="email" placeholder="Email" id="" onChange={(e)=>handelChange(e)} />
                <input className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="text" name="telefone"  onChange={(e)=>handelChange(e)} placeholder="Telefone" id="" />
                </div>

               </div>
               

               <button type="submit" className="px-[2rem] py-[1rem] border border-green-500 mt-[8px] hover:bg-green-300 rounded-xl text-[18px] max-sm:text-[14px] font-bold uppercase">Cadastrar encarregado</button>
               </div>
                
            </form>

        </div>
    )
}