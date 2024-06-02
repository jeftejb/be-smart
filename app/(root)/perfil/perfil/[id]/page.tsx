
import ModulosAulas from "@/components/ModulosAulas"
import { fetchAluno } from "@/lib/actions/alunos.actions";
import { BriefcaseIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image"
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({params}:{params:{id:string}}){
    const id  = params?.id
      const user = await fetchAluno(id)
      if(!user?.onboarded)  redirect(`/onboarding`)

    return(
        <section className="w-[100%] top-0 left-0">
            <div className="relative h-[100vh] w-[100%] bg-[url('/img/banner.jpg')] bg-cover bg-center">

             

    <div className='relative w-[100%] h-[100%] flex lg:flex-row md:flex-row max-sm:flex-col max-sm:mt-[8rem] p-[20px] items-center justify-center'>
   
            <div className='absolute lg:w-[160px] lg:h-[160px] md:w-[110px] md:h-[110px] max-sm:hidden sm:w-[100px] z-[10] bottom-0 border-[4px] border-green-800 rounded-full'>
                <Image
                src={"/assets/aluno.png"}
                alt='profile'
                layout='fill'
                objectFit='contain'
                className='rounded-full relative z-[10]'
                />
            </div>

        <div className=' w-[100%] max-sm:[mt-8rem] max-sm:w-[100%] flex p-[20px]  h-[80%] items-center justify-center'>
            <div className=" h-[30%] max-sm:h-[100%] w-[700%] flex flex-col  bg-[#00303C]  rounded-xl border-[2px] p-[.5rem]">
               <span className='flex items-center lg:text-[12px] md:text-[10px] max-sm:text-[8px] ml-[12px]  text-gray-200 font-semibold'>
                <UserIcon
                 className='w-[1.5rem] h-[1.5rem] max-sm:w-[1rem] max-sm:h-[1rem] text-[#fffe]'
                />
                     - {user?.nomeCompleto}
               </span>
               <span className='flex items-center lg:text-[12px] md:text-[10px] max-sm:text-[8px] ml-[12px]  text-[#fffe] font-semibold'>
                <EnvelopeIcon
                 className='w-[1.5rem] h-[1.5rem] max-sm:w-[1rem] max-sm:h-[1rem] text-[#fffe]'
                />
                - {user.email}
               </span>
               <span className='flex items-center lg:text-[12px] md:text-[10px] max-sm:text-[8px] ml-[12px]  text-[#fffe] font-semibold'>
                <BriefcaseIcon
                 className='w-[1.5rem] h-[1.5rem] max-sm:w-[1rem] max-sm:h-[1rem] text-[#fffe]'
                />
               - {user.nivel}
               </span>
            </div>
        </div>

       <div className=' w-[100%] max-sm:w-[100%] flex h-[80%]  p-[20px] items-center justify-center'>
       <div className='w-[100%] max-sm:h-[80%] h-[30%] bg-slate-500 rounded-xl boder-[8px]' > 
       <span className='flex flex-col items-center text-[12px] text-gray-200 font-semibold p-[1rem]'>
                <UserIcon
                  className='w-[1.5rem] h-[1.5rem] mx-auto text-[#fffe]'
                />
                <p> Bio:</p>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae iure et numquam velit.
               </span>
       </div>
       </div>

       
    <div className="relative flex  mt-[2px] w-[100%] h-[200px] gap-2 p-[8px]  justify-center items-center">
                            <div className="w-full flex flex-col justify-center p-2 gap-2 ">
                                <div className="w-full flex flex-row  border-2 border-gray-400  h-[35px] p-2 gap-2  items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Aulas</h1>
                                    <span className="text-xl text-green-600">0</span>
                                </div>
                                <Link href={`/perfil/atividades/${user?.id}`} className="w-full h-[35px] ">
                                <div className="w-full flex flex-row h-[35px] p-2 gap-2  border-2 border-gray-400 items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Atividades</h1>
                                    <span className="text-xl text-green-600">0</span>
                                </div>
                                </Link>
                                <Link href={`/perfil/estudante/${user?._id}`} className="w-full h-[35px] ">
                                <div className="w-full flex flex-row h-[35px] p-2 gap-2  border-2 border-gray-400 items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Perfil academico</h1>
                                    <span className="text-xl text-green-600">0</span>
                                </div>
                                </Link>
                            </div>

    </div>
    
    </div>




            </div>

{/** 
           <div className="relative w-full mt-[200px] gap-9 p-5">
            

                      
                
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
           */}

        </section>
    )
}