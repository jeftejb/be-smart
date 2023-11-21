

import ModulosAulas from "@/components/ModulosAulas"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link";
export default async function Page({params}:{params:{id:string}}){
const user = await currentUser()
const id = user?.id || "";


    return(
        <section className="w-full top-0 left-0">
           <div className="relative w-full mt-[200px] gap-9 p-5">
            <h1 className="text-light-1 text-center text-bold text-3xl mb-4">
                
                Estudante 
                <span className=" text-xl ml-3  text-gray-400">@Nome</span>
                </h1>
              

              <div className="relative  flex  w-full h-full  items-center ">
                   
                   <div className="relaive flex flex-col w-full h-[30vh] justify-center  ">
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

                      
                  <div className="relative flex mt-28 w-full h-full gap-2 p-2  justify-center items-center">
                            <div className="w-full flex justify-center p-2 gap-2 ">
                                <div className="w-full flex flex-row  border-2 border-gray-400  h-16 p-2 gap-2  items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Aulas</h1>
                                    <span className="text-xl text-green-600">15</span>
                                </div>
                                <Link href={`/perfil/atividades/${user?.id}`} className="w-full h-16 ">
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

           </div>
        </section>
    )
}