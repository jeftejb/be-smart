"use client"

import { CreateAlunoAdmin, pesquisaNumero, updateAlunoMatriculaEmail} from "@/lib/actions/alunos.actions";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Form } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Swal from "sweetalert2";

interface Props{
    id:string,
    nomeCompleto:string,
    idade:number,
    telefone:number,
    nivel:string,
    sexo:string,
    dataNascimento:string,
    email:string,
  
    
}

export default function FormMatricula({ id, nomeCompleto, idade, telefone, sexo, nivel, dataNascimento, email}:Props){
    const pathname = usePathname();
    const [dados , setDados] = useState({});
    const [dadosPesquisa, setDadosPesquisa] = useState({})
    const [souEstudante, setSouEstudante] = useState(false)
    const [estudante, setEstudante] = useState({})

    const handelChange = (e:any)=>{
              e.preventDefault();
           setDados((prev)=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }


    const handelChangePesquisa = (e:any)=>{
        e.preventDefault();
     setDadosPesquisa((prev)=>{
        return{...prev, [e.target.name]:e.target.value}
     })
    }

    const mesesActuais = new Date()
const dataActual = mesesActuais.getFullYear()
const anoInt = Number(mesesActuais.getFullYear())
const mesInt = Number(mesesActuais.getMonth()+1)
const mesarr = [mesInt]
const anoarr = [anoInt]

const handelSubmitPesquisa =  async (e:any)=>{
    e.preventDefault()
   
        const numero = Number(dadosPesquisa?.numeroDeEstudante || 0)
        const estudanteUni =  await pesquisaNumero({numeroDeEstudante:numero})
        
        estudanteUni.status !== 200 ?
        Swal.fire({
            title: "Confirmação de matricula",
            text: "Estudante não encontrado!",
            icon: "error", 
           heightAuto:false,
           width:"20rem"
          })
          :
          setEstudante(estudanteUni)
        
    
  
 }

  

    const handelSubmit = async (e:any)=>{
    try {
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
                email: email||""
            }
           )
        
    } catch (error) {
        
    }

       
    }
  
    const handelClickConfirmar = async (e:any)=>{
    try {
        const userId = estudante?.dados.id
    const confirmar = await updateAlunoMatriculaEmail({userId, email})

    Swal.fire({
        title: "Confirmação de matricula",
        text: confirmar?.res,
        icon: "success"
      });
       
    } catch (error) {
        Swal.fire({
            title: "Confirmação de matricula",
            text: "Erro ao confirmar, por favor tente novamente ou entre em contato com o suporte",
            icon: "error"
          });
           
    }
    }


    return(
        <>
        <div className="flex gap-8 max-sm:gap-2 w-[100%] justify-center p-2 items-center mt-2">
        <button type="button" className={`px-4 py-2 ${souEstudante?'bg-white/30':'bg-green-600/30' } backdrop-blur-sm rounded-xl text-[14px]`} onClick={()=>setSouEstudante(false)} >Novo estudante</button>
          <button type="button" className={`px-4 py-2 ${souEstudante?'bg-green-600/30':'bg-white/30' } backdrop-blur-sm rounded-xl text-[14px]`} onClick={()=>setSouEstudante(true)} >Já sou estudante</button>
        </div>

        {
            souEstudante ?   
            <div className="flex flex-col w-[100%] p-2 items-center justify-center">
            <div className="flex flex-col w-[100%] items-center justify-center">
                <h2 className="text-[12px] text-gray-200 font-bold" >Por favor coloque o seu numero de estudante, caso não tiver entre em contato</h2>
           <div className="flex w-[100%] flex-col items-center justify-center mt-2 p-2">
            <form onSubmit={(e)=>handelSubmitPesquisa(e)} data-aos='fade-down' className="flex gap-4 px-8" action="">
              <input className="rounded-xl p-2 border-[1px] bg-transparent text-white" type="search" placeholder="Coloque aqui Ex:123..." name="numeroDeEstudante" onChange={(e)=>handelChangePesquisa(e)} id="" />
              <button type="submit" className="px-[2rem] max-sm:px-[1rem] max-sm:py-[.5rem] py-[1rem] rounded-xl bg-green-600 backdrop-blur-sm text-[12px] font-semibold">Pesquisar</button>
            </form>
            </div>
            </div>
            <form   data-aos='fade-down' className="flex flex-col  text-[#000] p-[12px] max-sm:[2px] w-[100%]  justify-center items-center ">
                
                <div className="grid w-full  lg:grid-cols-1 gap-[2px] rounded-lg bg-green-200/25 backdrop-blur-md justify-center items-center md:grid-cols-1  max-sm:grid-cols-1 ">  
                
                <div className="flex flex-col  rounded-2xl  p-[10px]" >
                
                <div className="w-full flex  max-md:flex-col max-sm:flex-col max-md:mt-1 max-sm:mt-1 mt-8 gap-9">
                <input  className="p-2 mb-4 max-md:mb-1 max-sm:mb-1 rounded-xl  w-[100%]  border-[3px] border-green-600 " type="text" value={estudante? estudante?.dados?.nome:""} disabled/>
                
                </div>

                 
                 {
                   estudante?.dados?.email ? 
                   <button type="button" className="px-[2rem] py-[.5rem] border border-green-500 mt-[8px] hover:bg-gray-600 rounded-xl text-[14px] max-sm:text-[14px] font-bold uppercase" disabled>Estudante já confirmado</button>
                  :
                  <button type="button" className="px-[2rem] py-[1rem] border border-green-500 mt-[8px] hover:bg-green-300 rounded-xl text-[18px] max-sm:text-[14px] font-bold uppercase" onClick={(e)=>handelClickConfirmar(e)}>Confirmar</button>
                }
              
               
               </div>
             


                </div>
            </form>
              </div>
            :
            <form onSubmit={(e)=>handelSubmit(e)}  data-aos='fade-down' className="flex flex-col text-[#000] p-[8px] max-sm:[2px] w-full  justify-center items-center ">
                
                <div className="grid w-[80%] max-sm:w-[90%] lg:grid-cols-1 gap-[2px] justify-center items-center max-md:grid-cols-1  max-sm:grid-cols-1 ">  
                
                <div className="flex flex-col w-[100%] h-[100%] rounded-2xl bg-green-200/25 backdrop-blur-md p-[10px]" >
            
                
               
                
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
        }
            
            
    </>
      
    
    )
}