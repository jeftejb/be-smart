import AdminItem from "@/components/AdminItem"
import Cursos from "@/components/Cursos";
import Desafios from "@/components/Desafios";
import ModulosAulas from "@/components/ModulosAulas";
import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image"
import Link from "next/link"

const getData = async ()=>{
   try {
    const user = await currentUser();
    const email =  user?.emailAddresses[0].emailAddress || "";
    const dados = await fetchFuncionario(email)
      
    return{user:user, data:dados}
    
   } catch (error) {
    
   }
   
}

export default async function Page({params}:{params:{id:string}}){
  const id = params.id
     const dados:any = await getData()


 

    return(
        <section className="relative  w-full top-0 left-0 p-4">
            <div className="relative w-full h-full flex flex-col top-0 items-center p-8 justify-center">
                <div className="relative  flex  w-full h-full  items-center ">
                   <div className="relative flex flex-col bg-[#264653] w-full h-[40vh] mt-28 justify-center rounded-xl  ">
                  

                    <div className="absolute flex  -bottom-16 w-full  justify-center  " >
                <div className="relative rounded-full  w-40 h-40 shadow-xl shadow-neutral-950 ">
                  <Image
                  src={"/assets/img5.jpg"}
                  alt="perfil"
                  fill 
                  
                  className="rounded-full object-cover  "
                  />
               
                </div>
                
                </div>
              

              </div>
 
                  </div>

                </div>
                 
           <div className="relative flex flex-col bg-[#264653] w-full mt-[100px] gap-9 p-5 rounded-lg">

         

            <h1 className="text-light-1 text-center font-bold text-2xl">Bem vindo professor: <span>@{dados?.data.nomeCompleto}</span></h1>
              <section className="relative flex flex-col w-full h-full p-4 my-8">  
                <div className="relative flex mt-14 w-full h-full gap-2 p-2  justify-center items-center">
                            <div className="w-full flex justify-center p-2 gap-2 ">
                                <div className="w-full flex flex-row  border-2 border-gray-400  h-16 p-2 gap-2  items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Cursos</h1>
                                    <span className="text-xl text-green-600">{dados?.data.cursos.length}</span>
                                </div>
                                <Link href={`/professor/atividades/${dados?.user?.id}`} className="w-full h-16 ">
                                <div className="w-full flex flex-row h-16 p-2 gap-2  border-2 border-gray-400 items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Atividades</h1>
                                    <span className="text-xl text-green-600">{dados?.data.actividade.length}</span>
                                </div>
                                </Link>
                                <Link href={`/perfil/estudante/${dados?.user?.id}`} className="w-full h-16 ">
                                <div className="w-full flex flex-row h-16 p-2 gap-2  border-2 border-gray-400 items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Perfil academico</h1>
                                    <span className="text-xl text-green-600">15</span>
                                </div>
                                </Link>
                            </div>

                        </div>

            <section className=" relative flex mt-[50px] px-4 items-center justify-center flex-col">
                <div className="m-10 items-center justify-center flex ">
                    <h1 className="text-2xl">Minhas turmas</h1>
                </div>


                 <div className="relative grid grid-cols-3 w-[100%] bg-black rounded-lg p-8 gap-8 m-8">
                {
                dados?.data.cursos.length <=0 ? <span className="text-center font-semibold text-[12px] uppercase">Nem uma turma encontrada... </span> :
                dados?.data.cursos.map((items:any, key:any)=>(
                       <Cursos items={JSON.stringify(items)} id="" nivel=""   key={key} /> 
                ))
                
                }
                 </div>

            </section>


            <section className=" relative flex mt-[50px] p-8 items-center justify-center flex-col bg-black rounded-lg">
                <div className=" relative m-10 items-center justify-center flex ">
                    <h1 className="text-2xl" >Atividade </h1>
                </div>
                <div>
                  
                <div className="relative flex px-4 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                  <Link href={'/'} className="w-full h-full hover:scale-110 duration-100  ">
                    <h1 className=" relative overflow-visible">Adicionar desafio</h1>
                    </Link>
                    <div className="relative rounded-full w-[14px] h-[14px] bg-red-500 "/>
                 </div>
                </div>
                
                 <div className="relative grid grid-cols-3 w-full p-4 gap-8 m-8">
                 
                
                 {
                dados?.data.actividade.length <=0 ? <span className="text-center font-semibold text-[12px] uppercase">Nem uma atividade encontrada... </span> :
                dados?.data.actividade.map((items:any, key:any)=>(
                      <Desafios items={JSON.stringify(items)} key={key} />
                ))
                
                }

                
               

                 </div>

            </section>


                
              </section>
           </div>
        </section>
    )
}


/**
 * 
 * os itens tem que ser editaveis ou seja colocara as opcoes de editar criar e eliminar nos itens.
 * criar a collection dos desafios.
 * criar um modelo em pdf para as provas ou tarefas. 
 * formular bem a ideia dos dsafios porque eles podem ser de divercos formatos (audio video texto jogo )
 * criar jogos para ajudar na aprendisagem do ingles 
 * 
 * criar o aplicativo para funcoes offline. 
 */