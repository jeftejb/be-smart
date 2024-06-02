"use client"

import { CreateAlunoAdmin} from "@/lib/actions/alunos.actions";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Form } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface Props{
    id:string;
    nomeCompleto:string;
    idade:number;
    telefone:number;
    nivel:string;
    sexo:string;
    dataNascimento:string;
    email:string

    
}

export default function FormMatricula({ id, nomeCompleto, idade, telefone, sexo, nivel, dataNascimento, email}:Props){
    const pathname = usePathname();
    const [dados , setDados] = useState({});

    const handelChange = (e:any)=>{
              e.preventDefault();
           setDados((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }

    const mesesActuais = new Date()
const dataActual = mesesActuais.getFullYear()
const anoInt = Number(mesesActuais.getFullYear())
const mesInt = Number(mesesActuais.getMonth()+1)
const mesarr = [mesInt]
const anoarr = [anoInt]


  

    const handelSubmit = async (e:any)=>{
    

       await CreateAlunoAdmin(
        {
            userId: id,
            imagem:"",
            nomeCompleto: dados?.nomeCompleto? dados?.nomeCompleto : nomeCompleto, 
            telefone:dados?.telefone? dados.telefone : telefone,
            dataNascimento:dados?.dataNascimento? dados.dataNascimento : dataNascimento,
            idade:dados?.idade ? dados.idade : idade,
            sexo: dados?.sexo ? dados?.sexo : sexo,
            nivel: dados?.nivel ? dados?.nivel : nivel,
            anoInscricao:dataActual||0,
            anoConfirmacao: anoarr,
            mesDeConfirmacao: mesarr,
        }
       )
    }
  

    return(
        

            
            <form onSubmit={(e)=>handelSubmit(e)}  data-aos='fade-down' className="flex flex-col text-[#000] p-[12px] max-sm:[2px] w-full  justify-center items-center ">
                
                <div className="grid w-[80%] max-sm:w-[90%] lg:grid-cols-1 gap-[2px] justify-center items-center max-md:grid-cols-1  max-sm:grid-cols-1 ">  
                
                <div className="flex flex-col w-[100%] h-full rounded-2xl shadow-xl shadow-green-600 p-[10px]" >
               <div className="relative flex h-[1rem] w-[100%] justify-center">
                <h1 className="titulos font-bold text-[18px] uppercase">Matricula</h1>
                </div> 

                
               
                
                <div className="w-full flex  max-md:flex-col max-sm:flex-col max-md:mt-1 max-sm:mt-1 mt-8 gap-9">
                <input  className="p-2 mb-4 max-md:mb-1 max-sm:mb-1 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="text" name="nomeCompleto" onChange={(e)=>handelChange(e)}  placeholder="Nome Completo"/>
                
                </div>

                <div className="w-full flex max-md:flex-col max-sm:flex-col  gap-9">
                <input className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="date" name="dataNascimento" onChange={(e)=>handelChange(e)} placeholder="Data de nascimento"/>
                <select className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " name="sexo" onChange={(e)=>handelChange(e)} id="">
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " value=""  >Sexo</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " value="Masculino">Masculino</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " value="Femenino">Femenino</option>
                </select>
                </div>
                
                <div className="w-full flex max-md:flex-col max-sm:flex-col gap-9">
                <select className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " onChange={(e)=>handelChange(e)} name="nivel" id="">
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " >Nivel</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600  " value="Iniciante">Iniciante</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600   " value="Intermediario">Intermedio</option>
                <option className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600  " value="Avancado">Avancado</option>
                </select>
                 
               <input className="p-2 mb-4 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="number" name="telefone"  onChange={(e)=>handelChange(e)} placeholder="Telefone" id="" />
               </div>
               

               <button type="submit" className="px-[2rem] py-[1rem] border border-green-500 mt-[8px] hover:bg-green-300 rounded-xl text-[18px] max-sm:text-[14px] font-bold uppercase">Concluir matricula</button>
               </div>
             


                </div>
            </form>

      
    
    )
}