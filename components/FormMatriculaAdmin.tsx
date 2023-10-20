'use client'
import { updateAluno } from "@/lib/actions/alunos.actions";
import { Date } from "mongoose"
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react"

/*

interface Props{
    dadosAluno : {
    id: string;
    objectId:string;
    username: string;
    nome: string; 
    email:string;
    image: string;
    telefone:string;
    isAdmin: string;
    dataNascimento:Date;
    idade:string;
    }

}

*/

export default function FormMatriculaAdmin(){
    const pathname = usePathname();
    const [dados , setDados] = useState({});

    const handelChange = (e:any)=>{
              e.preventDefault();
           setDados((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }

    const handelSubmit = async (e:any)=>{
        e.preventDefault();

       await updateAluno(
        {
            userId: dadosAluno?.id,
            nomeCompleto:dados?.nome||"", 
            email:dados?.email||"",
            imagem: dados?.imagem||"",
            telefone:dados?.telefone||0,
            dataNascimento:dados?.dataNascimento||"",
            idade:dados?.idade||0,
            sexo:dados?.sexo||"",
            path: pathname,
            nivel:dados?.nivel
        }
       )
    }

    return(
        <div className="relative w-[100%] flex p-9">

            
            <form onSubmit={(e)=>handelSubmit(e)}  data-aos='fade-down' className="flex flex-col  text-[#000] p-20 w-full  justify-center items-center ">
                <div className="w-full flex px- gap-9">
                <input  className="p-2 mb-4 rounded-3xl hover:scale-110 transi w-[100%] bg-transparent border border-fuchsia-300 text-white" type="text" name="nomeCompleto" onChange={(e)=>handelChange(e)}  placeholder="Nome Completo"/>
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="email" name="email"  placeholder="Email" onChange={(e)=>handelChange(e)} id="" />
                </div>

                <div className="w-full flex px- gap-9">
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="date" name="dataNascimento" onChange={(e)=>handelChange(e)} placeholder="Data de nascimento"/>
                <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" name="sexo" onChange={(e)=>handelChange(e)} id="">
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" value="" disabled >Sexo</option>
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" value="Masculino">Masculino</option>
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" value="Femenino">Femenino</option>
                </select>
                </div>
                
                <div className="w-full flex px- gap-9">
                <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" onChange={(e)=>handelChange(e)} name="nivel" id="">
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" disabled >Nivel</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" value="Iniciante">Iniciante</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black " value="Intermediario">Intermedio</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" value="Avancado">Avancado</option>
                </select>
                 
               <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="number" name="telefone"  onChange={(e)=>handelChange(e)} placeholder="Telefone" id="" />
               </div>
               

               <div className="flex">
                    <div className="50% p-2">
                    <label className="p-2 mb-4 w-[100%] bg-transparent  text-white" htmlFor="frente">BI ou sedula Frontal</label>
                    <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" onChange={(e)=>handelChange(e)} type="file" name="bi1" id="frente" />
                    </div>
                <div className="50% p-2">
                <label className="p-2 mb-4  w-[100%] text-white" htmlFor="frente">BI ou sedula Verso</label>
                    <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" onChange={(e)=>handelChange(e)} type="file" name="bi2" id="frente" />
                </div>
               </div>

               <h1 className="text-center text-white font-medium my-8">Pagamento</h1>


               <div className="w-full flex px- gap-9">
                 
               <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" onChange={(e)=>handelChange(e)} name="modeloPagamento" id="">
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" disabled >Modelo de pagamento</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" value="Adulto">Adulto</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" value="Crianca">Criansa</option>
               </select>

                
               <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" onChange={(e)=>handelChange(e)} name="messesPagamento" id="">
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" disabled >Messes a pagar</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" value={0}> Pendente </option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black" value={1}>  1 - Mês</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={2}> 2 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={3}> 3 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={4}> 4 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={5}> 5 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={6}> 6 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={7}> 7 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={8}> 8 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={9}> 9 - Mêses</option>
                    <option className="p-2 mb-4 rounded-3xl  w-[100%]  border border-fuchsia-300 text-white bg-black " value={10}> 10 - Mêses</option>
               </select>

             

                </div>
              

                 {/* Mostrar o valor de pagamento incluindo o  valor da matricula */}

                <button type="submit" className="px-5 py-2 border border-pink-300  text-white mt-2 hover:bg-[#ef4444] ">Efectuar matricula</button>
            </form>
        </div>
    )
}