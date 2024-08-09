'use client'
import { updateAlunoEnc } from "@/lib/actions/encarregado.actions";
import { updateFuncionario } from "@/lib/actions/funcionarios.actions";
import { usePathname } from "next/navigation";
import { useState } from "react"
import Swal from "sweetalert2";

interface Props{
    id:string,
    est:string
}



export default function ForSelectEst({id, est}:Props){
    const pathname = usePathname();
    const estudantes = JSON.parse(est)
 
    const [dados, setDados] = useState<{}>({});

    const handelChange = (e:any)=>{
              e.preventDefault();
           setDados((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }

    const handelSubmit = async (e:any)=>{
        e.preventDefault();

      const cadastro = await  updateAlunoEnc(
        {
            idEnc:id||"", 
            idEst:dados?.idAluno

          
        }
       )

       if(cadastro?.status!== 200){
        Swal.fire({
            title: "Falha",
            text: cadastro?.mensagem,
            icon: "error"
          })

       }else{
        Swal.fire({
            title: "Parabens",
            text: cadastro?.mensagem,
            icon: "success"
          })
       }
    }

    return(
       

            
            <form onSubmit={(e)=>handelSubmit(e)}  data-aos='fade-down' className="relative flex flex-col  text-[#fff] bg-black rounded-lg p-4 w-full  justify-center items-center ">
              <span className="text-[12px] text-center uppercase">Estudantes do encarregado</span>
                 
               <select className="relative p-2 mb-4 rounded-3xl text-[10px]  w-[100%] bg-transparent border border-green-500 text-white" onChange={(e)=>handelChange(e)} name="idAluno" id="">
               <option  className="p-2 rounded-3xl hover:scale-110 w-[100%] bg-black border border-green-500 text-white text-[10px]" disabled >Selecionar estudante</option>
                {
                    estudantes.map((items:any, index:any)=>(
                        <option key={index} className="p-2 rounded-3xl hover:scale-110 w-[100%] bg-black border border-green-500 text-white text-[10px]"  value={items._id}>{items.nomeCompleto}</option>
                    ))
                }       
                </select>
                <button type="submit" className="px-4 py-[.5rem] border border-green-500 rounded-lg text-[10px] text-white mt-2 hover:bg-[#ef4444] ">Selecionar estudante</button>
            </form>

    )
}