import AdminItem from "@/components/AdminItem"
import ModulosAulas from "@/components/ModulosAulas";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image"
import Link from "next/link"
export default async function Page({params}:{params:{id:string}}){
  const user = await currentUser()
  const id = user?.id || "";
    return(
        <section className="relative  w-full top-0 left-0">
           <div className="relative w-full mt-[200px] gap-9 p-5">
            <h1 className="text-light-1 text-center font-bold text-2xl">Bem vindo professor: <span>@Nme</span></h1>
              
              <section className="relative flex flex-col w-full h-full p-4 my-8">
                <h2 className=" text-center text-xl font-bold my-4">
                   Perfil do Professor
                </h2>

                <div className="w-full h-full flex flex-col px-6 items-center justify-center">

                <div className="relative  flex  w-full h-full  items-center ">
                   
                   <div className="relative flex flex-col w-full h-[30vh] justify-center  ">
                    <Image
                        src={"/assets/img4.jpg"}
                        alt="back-graund"
                        fill 
                        
                        className=" rounded-2xl object-cover "
                    />

                    <div className="absolute flex  -bottom-16 w-full  justify-center  " >
                <div className="relative rounded-full  w-40 h-40 shadow-xl shadow-neutral-950 ">
                  <Image
                  src={"/assets/img5.jpg"}
                  alt="perfil"
                  fill 
                  
                  className="rounded-full object-cover z-10 "
                  />
               
                </div>
                
                </div>
              

              </div>
 
                  </div>

                </div>
                 
                <div className="relative flex mt-28 w-full h-full gap-2 p-2  justify-center items-center">
                            <div className="w-full flex justify-center p-2 gap-2 ">
                                <div className="w-full flex flex-row  border-2 border-gray-400  h-16 p-2 gap-2  items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Aulas</h1>
                                    <span className="text-xl text-green-600">15</span>
                                </div>
                                <Link href={`/professor/atividades/${user?.id}`} className="w-full h-16 ">
                                <div className="w-full flex flex-row h-16 p-2 gap-2  border-2 border-gray-400 items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Atividades</h1>
                                    <span className="text-xl text-green-600">5</span>
                                </div>
                                </Link>
                                <Link href={`/perfil/estudante/${user?.id}`} className="w-full h-16 ">
                                <div className="w-full flex flex-row h-16 p-2 gap-2  border-2 border-gray-400 items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Perfil academico</h1>
                                    <span className="text-xl text-green-600">15</span>
                                </div>
                                </Link>
                            </div>

                        </div>

            <section className=" relative flex mt-[50px] px-4 items-center justify-center flex-col">
                <div className="m-10 items-center justify-center flex ">
                    <h1 className="text-2xl" >Alulas disponiveis </h1>
                </div>


                 <div className="relative grid grid-cols-3 w-full p-4 gap-8 m-8">
                 <ModulosAulas id={id}/>
                 </div>

            </section>


            <section className=" relative flex mt-[50px] px-4 items-center justify-center flex-col">
                <div className="absolute w-full h-full brightness-[0.2]">
                 <Image
                 src={"/assets/fundo.jpg"}
                 alt="fundoImage"
                 fill
                 className="object-cover"
                 />
                </div>
                <div className=" relative m-10 items-center justify-center flex ">
                    <h1 className="text-2xl" >Desafios </h1>
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
                 
                 <Link href={`/perfil/desafio/${id}`} className="hover:scale-110 duration-100">
                 <div className="relative flex h-28 w-full   border-2 border-green-500 rounded-full overflow-hidden ">
                    <div className="relative rounded-full w-28 h-28 border-2 mr-4 border-green-300">
                    <Image
                        src={"/assets/fundo.jpg"}
                        alt="fundoImage"
                        fill
                        className="object-cover rounded-full "
                        />
                    </div>
                           
                           <div className="relative flex flex-col w-full h-full">
                            <div className="flex w-full justify-start mx-2 gap-4 items-center">
                            <h1 className="text-xl font-bold">Titulo</h1>
                             <span className="font-bold" >Data: 2/10/2024</span>
                            </div>
                            <p className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam modi ipsa optio similique omnis natus!</p>
                           </div>
                     <div className="absolute w-32  h-8 bg-gray-900 bottom-0 right-0 grid grid-cols-2">
                        <div> <span>Editar</span></div>
                          <div><span>Apagar</span></div>
                     </div>
                 </div>
                 </Link>

                 <Link href={`/perfil/desafio/${id}`} className="hover:scale-110 duration-100">
                 <div className="relative flex h-28 w-full   border-2 border-green-500 rounded-full overflow-hidden ">
                    <div className="relative rounded-full w-28 h-28 border-2 mr-4 border-green-300">
                    <Image
                        src={"/assets/fundo.jpg"}
                        alt="fundoImage"
                        fill
                        className="object-cover rounded-full "
                        />
                    </div>
                           
                           <div className="relative flex flex-col w-full h-full">
                            <div className="flex w-full justify-start mx-2 gap-4 items-center">
                            <h1 className="text-xl font-bold">Titulo</h1>
                             <span className="font-bold" >Data: 2/10/2024</span>
                            </div>
                            <p className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam modi ipsa optio similique omnis natus!</p>
                           </div>

                 </div>
                 </Link>

                 <Link href={`/perfil/desafio/${id}`} className="hover:scale-110 duration-100">
                 <div className="relative flex h-28 w-full   border-2 border-green-500 rounded-full overflow-hidden ">
                    <div className="relative rounded-full w-28 h-28 border-2 mr-4 border-green-300">
                    <Image
                        src={"/assets/fundo.jpg"}
                        alt="fundoImage"
                        fill
                        className="object-cover rounded-full "
                        />
                    </div>
                           
                           <div className="relative flex flex-col w-full h-full">
                            <div className="flex w-full justify-start mx-2 gap-4 items-center">
                            <h1 className="text-xl font-bold">Titulo</h1>
                             <span className="font-bold" >Data: 2/10/2024</span>
                            </div>
                            <p className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam modi ipsa optio similique omnis natus!</p>
                           </div>

                 </div>
                 </Link>

                 <Link href={`/perfil/desafio/${id}`} className="hover:scale-110 duration-100">
                 <div className="relative flex h-28 w-full   border-2 border-green-500 rounded-full overflow-hidden ">
                    <div className="relative rounded-full w-28 h-28 border-2 mr-4 border-green-300">
                    <Image
                        src={"/assets/fundo.jpg"}
                        alt="fundoImage"
                        fill
                        className="object-cover rounded-full "
                        />
                    </div>
                           
                           <div className="relative flex flex-col w-full h-full">
                            <div className="flex w-full justify-start mx-2 gap-4 items-center">
                            <h1 className="text-xl font-bold">Titulo</h1>
                             <span className="font-bold" >Data: 2/10/2024</span>
                            </div>
                            <p className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam modi ipsa optio similique omnis natus!</p>
                           </div>

                 </div>
                 </Link>

                 <Link href={`/perfil/desafio/${id}`} className="hover:scale-110 duration-100">
                 <div className="relative flex h-28 w-full   border-2 border-green-500 rounded-full overflow-hidden ">
                    <div className="relative rounded-full w-28 h-28 border-2 mr-4 border-green-300">
                    <Image
                        src={"/assets/fundo.jpg"}
                        alt="fundoImage"
                        fill
                        className="object-cover rounded-full "
                        />
                    </div>
                           
                           <div className="relative flex flex-col w-full h-full">
                            <div className="flex w-full justify-start mx-2 gap-4 items-center">
                            <h1 className="text-xl font-bold">Titulo</h1>
                             <span className="font-bold" >Data: 2/10/2024</span>
                            </div>
                            <p className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam modi ipsa optio similique omnis natus!</p>
                           </div>

                 </div>
                 </Link>

                 <Link href={`/perfil/desafio/${id}`} className="hover:scale-110 duration-100">
                 <div className="relative flex h-28 w-full   border-2 border-green-500 rounded-full overflow-hidden ">
                    <div className="relative rounded-full w-28 h-28 border-2 mr-4 border-green-300">
                    <Image
                        src={"/assets/fundo.jpg"}
                        alt="fundoImage"
                        fill
                        className="object-cover rounded-full "
                        />
                    </div>
                           
                           <div className="relative flex flex-col w-full h-full">
                            <div className="flex w-full justify-start mx-2 gap-4 items-center">
                            <h1 className="text-xl font-bold">Titulo</h1>
                             <span className="font-bold" >Data: 2/10/2024</span>
                            </div>
                            <p className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam modi ipsa optio similique omnis natus!</p>
                           </div>

                 </div>
                 </Link>
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