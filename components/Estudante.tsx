import Image from "next/image";
import Link from "next/link";

interface Props{
    id:string,
    nivel:string
}

export default function Estudante({id, nivel}:Props){


    return(

      nivel==="baixo"? 
                
        <div className="w-full h-[300px] flex flex-col gap-4 shadow-2xl shadow-rose-400 rounded-2xl  items-center justify-center max-sm:flex-col max-sm:h-[300px]">
        <div className="relative w-[80px] h-[90px] mt-2">
            <Image src="/assets/img5.jpg" alt= "item aluno" fill className="object-cover rounded-full absolute"/>
        </div>

        <div className=" w-full  h-full flex   flex-col max-sm:flex-col max-sm:gap-1 ml-5  gap-1  ">
          <span className="text-1xl">Nome: {'Joao jorge Agusto'}</span>
          <span>Nivel: {'Intermediario'}</span>
          <span>Professor: {"Jose Ajusto Fernando"}</span>
          <span className="" >Stato de matricula: <span className="text-green-500" >{'Activo'}</span></span>
          <span className="" >Stato de pagamento: <span className="text-green-500" >{'Rejular'}</span></span>
          <div className="flex  w-full items-center justify-center gap-4 p-1 left-0  max-sm:mt-3">
         <button className="px-3 mr-0 py-1 bg-rose-400 rounded-2xl " >Anular</button>
         <Link href={`/editar-matricula/${id}`}  className=" px-3 py-1 bg-rose-400 rounded-2xl" >Editar</Link>
        </div>
          </div>
    </div>
                
                
   
                :
                  <Link href={`/pagamento-aluno/${id}`}>
                <div className="w-full h-[300px] flex flex-col gap-4 shadow-2xl shadow-rose-400 rounded-2xl  items-center justify-center max-sm:flex-col max-sm:h-[300px]">
                <div className="relative w-[80px] h-[90px] mt-2">
                    <Image src="/assets/img5.jpg" alt= "item aluno" fill className="object-cover rounded-full absolute"/>
                </div>
        
                <div className=" w-full  h-full flex   flex-col max-sm:flex-col max-sm:gap-1 ml-5  gap-1  ">
                  <span className="text-1xl">Nome: {'Joao jorge Agusto'}</span>
                  <span>Nivel: {'Intermediario'}</span>
                  <span>Professor: {"Jose Ajusto Fernando"}</span>
                  <span className="" >Stato de matricula: <span className="text-green-500" >{'Activo'}</span></span>
                  <span className="" >Stato de pagamento: <span className="text-green-500" >{'Rejular'}</span></span>
                  <div className="flex  w-full items-center justify-center gap-4 p-1 left-0  max-sm:mt-3">
                
                </div>
                  </div>
            </div>
                  </Link>
    )

}