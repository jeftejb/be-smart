"use client"

import { updateAlunoMatricula } from "@/lib/actions/alunos.actions";
import { AcademicCapIcon, CheckCircleIcon, CreditCardIcon, TrophyIcon, UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import Swal from 'sweetalert2';

interface Props{
    items:any,
    nivel:string,


}

export default function Estudante({items, nivel}:Props){
items = JSON.parse(items)

  const Anular = (e:any, id:any)=>{
    Swal.fire({
      title: "Anular matricula",
      text: "Pretendes anular a matricula do estudante?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim , anular !"
    }).then( async (result) => {
      if (result.isConfirmed) {
     await updateAlunoMatricula({
        userId:id,
        actived:false

       })
      }
    });
    
    
  }


  const Activar = async (e:any, id:any)=>{
  

    Swal.fire({
      title: "Activar matricula de estudante",
      text: "Pretendes activar a matricula do estudante?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim , Ativar !"
    }).then( async (result) => {
      if (result.isConfirmed) {
       await updateAlunoMatricula({
        userId:id,
        actived:true

       })
      }
    });
    
    
  }


    return(

      nivel==="baixo"? 
                
       
                <div className="relative w-[100%] h-[22rem] flex flex-col gap-4 bg-[rgb(3,166,120)] rounded-xl z-[100] text-[#00303C] shadow-2xl shadow-black items-center max-sm:flex-col max-sm:h-[300px] hover:scale-105 transition-all duration-200">
                <div className="relative flex w-[100%] items-center ">
                  <div className="flex w-[120px] h-[120px] max-sm:w-[80px] max-sm:h-[80px] top-0 left-0">
                   <Image 
                   src={items?.sexo == "Femenino" ? items?.imagem || "/assets/aluna.png" :  items?.imagem || "/assets/aluno.png"} 
                   alt= "item aluno" 
                   layout="fill" 
                   fill 
                   className="object-cover rounded-xl"/>
                </div>
                </div>
        
                <div className="relative w-[80%]  h-[100%] flex items-center flex-col max-sm:flex-col max-sm:gap-1  gap-1">
                <span className="flex w-[100%] px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold uppercase"><UserIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"/> {items?.nomeCompleto}</span>
                <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><TrophyIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"/> {items?.nivel}</span>
                <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><AcademicCapIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]" /> {"Be-smart"}</span>
                <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"> <CheckCircleIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]" /> <span className={`${items?.actived ? 'text-green-800':'text-red-800' } `} >{items?.actived? "Activo":"Não activo"}</span></span>
                <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><CreditCardIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"  /> <span className="text-yellow-500" >{'Em analise'}</span></span>
                <div className="relative flex w-full h-auto items-center justify-center gap-[12px] p-[12px] mb-[14px] left-0  max-sm:mt-[2px]">
                {
                  items?.actived ?  <button className="px-3 mr-0 py-1 bg-green-400 rounded-2xl text-[12px] uppercase font-bold" onClick={(e)=>Anular(e, items?._id)}>Anular</button> :
                  <button className="px-3 mr-0 py-1 bg-green-400 rounded-2xl text-[12px] uppercase font-bold" onClick={(e)=>Activar(e, items?._id)}  >Activar</button>
                }
                <Link href={`/editar-matricula/${items?._id}`}  className="px-3 py-1 bg-green-400 rounded-2xl text-[12px] uppercase font-bold" >Editar</Link>
                </div>
                  </div>
            </div>
                 
                
   
                :
                  <Link href={`/pagamento-aluno/${items?._id}`}>
                <div className="relative w-[100%] h-[300px] flex flex-col gap-4 bg-[#03A678] rounded-xl z-[100] text-[#00303C] shadow-2xl shadow-black  items-center justify-center max-sm:flex-col max-sm:h-[300px] hover:scale-110 transition-all duration-200">
                <div className="relative flex w-[80%] h-[200px] mt-2 justify-center">
                   <Image src="/assets/img5.jpg" alt= "item aluno" layout="fill" fill className=" object-cover rounded-full w-[5px] h-[5px] absolute"/>
                  <span className="text-center text-[14px] font-bold text-[#fff] relative z-[11]" > Estudante</span>
                </div>
        
                <div className=" w-full  h-full flex   flex-col max-sm:flex-col max-sm:gap-1 ml-5  gap-1  ">
                <span className="flex w-[100%] px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold uppercase"><UserIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"/> {items?.nomeCompleto}</span>
                <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><TrophyIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"/> {items?.nivel}</span>
                <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><AcademicCapIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]" /> {"Jose Ajusto Fernando"}</span>
                <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"> <CheckCircleIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]" /> <span className={`${items?.actived? 'text-green-800':'text-red-500'}`} >{items?.actived?"Activo" : "Não activo"}</span></span>
                <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><CreditCardIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"  /> <span className={`${items?.propina.length > 0? 'text-green-800':'text-red-500'}`} >{items?.propina.length > 0?"Regularizado" : "Não regularizado"}</span></span>
               
                  </div>
            </div>
                  </Link>
    )

}