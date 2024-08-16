'use client'
import { updateFuncionario } from "@/lib/actions/funcionarios.actions";
import { usePathname } from "next/navigation";
import { useState } from "react"


interface Props {
    id:String
}
export default function FormCadFun({id}:Props){
    const pathname = usePathname();
    const [dados, setDados] = useState<{}>({});

    const handelChange = (e:any)=>{
              e.preventDefault();
           setDados((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }

    const handelSubmit = async (e:any)=>{
      e.preventDefault()

       await updateFuncionario(
        {
            nomeCompleto:dados?.nomeCompleto||"", 
            email:dados?.email||"",
            telefone:dados?.telefone||0,
            dataNascimento:dados?.dataNascimento||"",
            funcoes:dados?.funcoes||0,
            sexo:dados?.sexo||"",
            path: pathname,
            turmas:dados?.turmas
        }
       )
    }

    return(
        <div className="relative w-[100%] flex p-9">

            
            <form onSubmit={(e)=>handelSubmit(e)}  data-aos='fade-down' className="relative flex flex-col  text-[#fff] bg-black rounded-lg p-20 w-full  justify-center items-center ">
                <div className="w-full flex px- gap-9">
                <input  className="p-2 mb-4 rounded-3xl hover:scale-110 transi w-[100%] bg-transparent border border-green-500 text-white" type="text" name="nomeCompleto" onChange={(e)=>handelChange(e)}  placeholder="Nome Completo"/>
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-green-500 text-white" type="email" name="email"  placeholder="Email" onChange={(e)=>handelChange(e)} id="" />
                </div>

                <div className="w-full flex px- gap-9">
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-green-500 text-white" type="date" name="dataNascimento" onChange={(e)=>handelChange(e)} placeholder="Data de nascimento"/>
                <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-black border border-green-500 text-white" name="sexo" onChange={(e)=>handelChange(e)} id="">
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-black border border-green-500 text-white" value="" >Sexo</option>
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-black border border-green-500 text-white" value="Masculino">Masculino</option>
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-black border border-green-500 text-white" value="Femenino">Femenino</option>
                </select>
                </div>
                
                <div className="w-full flex px- gap-9">
                <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-green-500 text-white" onChange={(e)=>handelChange(e)} name="turmas" id="">
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-black border border-green-500 text-white">Turmas</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-500 text-white bg-black" value="Iniciante">Iniciante</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-500 text-white bg-black " value="Intermediario">Intermedio</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-500 text-white bg-black" value="Avancado">Avancado</option>
                </select>
                 
               <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-green-500 text-white" type="number" name="telefone"  onChange={(e)=>handelChange(e)} placeholder="Telefone" id="" />
               </div>
               
             

               <div className="flex">
                    <div className="50% p-2">
                    <label className="p-2 mb-4 w-[100%] bg-transparent  text-white" htmlFor="frente">BI ou sedula Frontal</label>
                    <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-green-500 text-white" onChange={(e)=>handelChange(e)} type="file" name="bi1" id="frente" />
                    </div>
                <div className="50% p-2">
                <label className="p-2 mb-4  w-[100%] text-white" htmlFor="frente">BI ou sedula Verso</label>
                    <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-green-500 text-white" onChange={(e)=>handelChange(e)} type="file" name="bi2" id="frente" />
                </div>
               </div>

               <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-green-500 text-white" onChange={(e)=>handelChange(e)} name="funcoes" id="">
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-black border border-green-500 text-white">Funcoes</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-500 text-white bg-black" value="Professor">Professor</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-500 text-white bg-black " value="Administrativo">Administrativo</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-green-500 text-white bg-black" value="Limpeza">Limpeza</option>
                </select>

              

                 {/* Mostrar o valor de pagamento incluindo o  valor da matricula */}

                <button type="submit" className="px-5 py-2 border border-green-500 rounded-lg  text-white mt-2 hover:bg-[#ef4444] ">Efectuar matricula</button>
            </form>
        </div>
    )
}