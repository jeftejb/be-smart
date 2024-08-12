import { fetchAluno, fetchAlunoOn } from "@/lib/actions/alunos.actions";
import { BookOpenIcon, BookmarkIcon, ClipboardDocumentCheckIcon, CurrencyDollarIcon, ScaleIcon } from "@heroicons/react/20/solid";

import Image from "next/image"
import Link from "next/link"



const getDados = async(id:string)=>{

    try {
        const alunoInfo = await fetchAluno(id);
        const dados = {alunoInfo}
        return dados
    } catch (error) {
        
    }
}


const page = async ({params}:{params:{id:string}})=>{
    const id = params?.id
    const dados:any = await getDados(id)
    const lista = [1,2,3,4,5]
    return(
           
        
        <section className="bg-[url('/img/banner.jpg')] items-center justify-center pt-[8rem] pb-[4rem] flex flex-col w-[100%] h-[100%] top-0 left-0 overflow-x-hidden">

            <div className=" flex flex-col   bg-[#00303C] rounded-lg  w-[90%]  bg-cover bg-center">
           
            <h1 className="mt-[10px] titulos uppercase">Perfil academico do estudante: <span className="max-sm:text-[12px] text-[18px] font-semibold text-green-500" >@{dados.alunoInfo?.nomeCompleto}</span></h1>
                    <div className="relative flex flex-row w-[100%] h-[100%] mt-[4rem]  gap-2 p-4 justify-center items-center bg-[#038C73] rounded-lg ">

                        <div className="relative flex w-[20rem] mr-4 h-[20rem] z-40 rounded-2xl">
                            <Image
                            src={"/assets/img5.jpg"}
                            alt="perfil-imagae"
                            fill
                            className="object-cover rounded-2xl"
                            />
                        </div>

                        <div className="justify-start h-[10rem] w-[10px] bg-green-500"/>

                        <div className="relative w-full h-full gap-4 py-4  items-center  ">
                            <div className="flex gap-2 py-4">
                            <div className="relative w-8 h-8 ">
                            <ScaleIcon className="max-sm:w-[22px]"/>
                            </div>
                            <p className="text-[16px] max-sm:text-[12px] font-bold" >Nivel: <span className="text-green-500" >{dados.alunoInfo?.nivel}</span></p>
                            </div>

                            <div className="flex gap-2 py-[.3rem]">
                            <div className="relative w-8 h-8 ">
                            <BookOpenIcon className="max-sm:w-[22px]"/>
                            </div>
                            <p className="text-[16px] max-sm:text-[12px] font-bold" >Aulas disponiveis: <span className="text-green-500" >0</span></p>
                            </div>

                            
                            <div className="flex gap-2 py-4">
                            <div className="relative w-8 h-8 ">
                            <ClipboardDocumentCheckIcon className="max-sm:w-[22px]"/>
                            </div>
                            <p className="text-[16px] max-sm:text-[12px] font-bold" >Atividades: <span className="text-green-500" >0</span></p>
                            </div>
                        
                        
                            <div className="flex gap-2 py-4">
                            <Link href={`/perfil/atividades/${id}`} className="flex pag-2  hover:bg-green-400 " >
                            <div className="relative w-8 h-8 ">
                            <BookmarkIcon className="max-sm:w-[22px]"/>
                            </div>
                            <p className="text-[16px] max-sm:text-[12px] font-bold" >Atividades feitas: <span className="text-green-500" >0</span></p>
                            </Link>
                            </div>


                            
                            <div className="flex gap-2 py-2">
                        <div>
                            <p className="text-[16px] max-sm:text-[12px] font-bold" >Stato da matricula: </p>
                        </div>

                        {dados?.alunoInfo.actived?  
                            <div className="relative flex px-4 max-sm:px-8 items-center justify-center gap-2 ">
                            <div className="absolute flex  w-full h-full rounded-xl p-2  bg-green-500 brightness-50"/>
                            <h1 className=" relative overflow-visible text-[12px] max-sm:text-[10px] font-semibold">Ativo</h1>
                            <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                            
                        </div>
                        : 
                        <div className="relative flex px-4 max-sm:px-8  items-center justify-center gap-2 ">
                        <div className="absolute flex  w-full h-full rounded-xl p-2 bg-gray-500 brightness-50"/>
                            <h1 className=" relative overflow-visible text-[12px] max-sm:text-[10px] font-semibold">Não activo</h1>
                            <div className="relative rounded-full w-[14px] h-[14px] bg-red-500 "/>
                            
                        </div>
                        }
                        
                            </div>

                            
                            <div className="flex gap-2    ">
                   
                        <div className="mr-2">
                            <p className="text-[16px] max-sm:text-[12px] font-bold" >Stato da propina: </p>
                        </div>

                        <div className="relative flex px-4 max-sm:px-8  items-center justify-center gap-2 ">
                            <div className="absolute flex  w-full h-full  bg-orange-500  rounded-xl p-2"/>
                                <h1 className=" relative overflow-visible text-[12px] max-sm:text-[10px] font-semibold">{dados?.alunoInfo.statoPropina ? dados.alunoInfo.statoPropina : "Em analise"}</h1>         
                            </div>
                             
                            </div>


                        <div className="lg:w-[60%] z-30  absolute h-full right-0 top-0 bg-white rounded-tl-3xl rounded-bl-3xl overflow-hidden">
                            <Image
                            src={'/assets/imagemtodos.png'}
                            alt="tyleImage"
                            fill
                            className="object-cover  "
                            />

                        </div>

                        </div>

                    </div>

              </div>

         

            <div className="relative flex flex-col mt-[100px] w-[100%] h-[100%] items-center justify-center px-[1.5rem]">

            

            <div id="historico" className="relative mt-[12px]  w-[100%] h-[50%] bg-black rounded-lg lg:p-[20px] md:p-[10px] max-sm:p-[2px]">

                <div className=" w-[100%] h-[100%]  ">
                    <h1 className="text-center text-2xl font-bold">Historico de pagamentos</h1>


                    <div className="mt-[12px] p-[24px]  max-sm:p-[8px] m-[1rem] gap-2 w-[100%]   ">
                            <ul className="relative items-center p-[42px] max-sm:p-[18px] pag-4  justify-start flex flex-col w-[100%] h-[500px] overflow-y-scroll overflow-x-hidden ">
                              
                               { lista.map((item)=>(
                                <li key={item} className="relative flex flex-col w-[100%]  my-2 h-[150px] ">
                                    <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-xl rounded-l-xl overflow-hidden gap-2 ">
                                        <div className="absolute flex right-0 h-[30px] w-[120px] bg-white items-center justify-center">
                                        <h5 className="text-black text-[12px] font-bold">Kz:<span>36.000,00</span></h5>
                                        </div>
                                        <div className=" relative lg:w-[300px] lg:h-[300px] md:w-[180px] md:h-[180px] max-sm:w-[100px] max-sm:h-[80px]  rounded-tr-3xl rounded-r-3xl ">
                                            <Image
                                            src={'/assets/img5.jpg'}
                                            alt="icon"
                                            fill
                                            className=" object-cover rounded-tr-3xl rounded-r-3xl overflow-hidden"
                                            />
                                        </div>

                                        <div className="relative mt-[1.5rem] max-sm:mt-[1rem]">
                                            <h1 className="text-[18px] max-sm:text-[14px] font-bold">Titulo</h1>
                                            <p className="max-sm:text-[10px] text-[12px] font-semibold ">Pagamento de propina</p>
                                        
                                        </div>
                                        
                                        <div className="absolute bottom-0 right-0">
                                         <Link href={"#"} className="w-full h-full px-[2rem] py-[.5rem] bg-green-800 rounded-xl text-[14px]">Ver</Link>
                                         </div>
                                    </div>
                                    <div className="relative flex justify-between mt-4  w-full h-8">
                                            <div>
                                        <p  className="max-sm:text-[10px] text-[12px] font-semibold"> Data: <span>2/10/2023</span></p>
                                            </div>

                                            <div className="relative flex px-4  items-center justify-center gap-2 ">
                                            <div className="absolute flex  w-full h-full rounded-xl  bg-green-500 brightness-50"/>
                                                <h1 className=" relative overflow-visible text-[12px] font-semibold">Pendente</h1>
                                                <div className="relative rounded-full w-[12px] h-[12px] bg-orange-500 "/>
                                                
                                            </div>

                                        </div>  

                                </li>
                               ))
                                
                                }
                            </ul>

                        </div>
                </div>

            </div>

            <section className="relative flex flex-col  w-[100%] p-2 mt-[2rem] items-center justify-center rounded-lg bg-black">
                <h1 className="text-center text-3xl font-bold ">Servi<span className="text-green-500">ços</span>  </h1>
            <div className="grid flex-wrap lg:grid-cols-3 md:grid-cols-3 max-sm:grid-rows-3 w-[100%] h-[50%] lg:p-[2rem] md:p-[2rem]  max-sm:p-[.5rem] my-[12px] lg:gap-[8rem] mb:gap-[4rem] gap-4 max-sm:gap-[2rem]">
                
            <div  className=" relative w-full h-[450px]  rounded-tl-3xl rounded-tr-3xl">

          
                    <div className="absolute w-full h-full rounded-tr-3xl rounded-tl-3xl brightness-[0.2] ">
                        <Image
                        src={'/assets/img5.jpg'}
                        alt="image fundo"
                        fill
                        className="object-cover rounded-tr-3xl rounded-tl-3xl"
                        />

                    </div>
                    <div className="absolute w-full h-full "/>
                    <div className="relative flex flex-col w-full h-[300px]  rounded-3xl  rounded-tr-3xl rounded-tl-3xl "  >
                    <div className="relative flex bg-[#00303C]/30 backdrop-blur-2xl rounded-3xl h-[300px] justify-center items-center">
                    <CurrencyDollarIcon
                    className="text-green-600 w-[8rem] h-[8rem]"
                    />
                    </div>
                        
                        <div className="w-full mt-4">
                        
                            <div className="relative flex justify-between mx-4">
                            <h1 className="max-sm:text-[14px] text-[18px] font-bold " >Pagamento de Propina <span className="text-green-500">{}</span></h1>

                            <div className="relative flex px-3 py-2  items-center justify-center gap-2 ">
                            <div className="absolute flex  w-full h-full rounded-xl  bg-green-500 brightness-50"/>
                                <h1 className=" relative text-[10px] overflow-visible font-bold">Disponivel</h1>
                                <div className="relative rounded-full w-[10px] h-[10px] bg-green-500 "/>
                                
                            </div>
                            </div>

                            <p className="mt-8 px-4 mx-2 text-[14px] font-semibold text-gray-300">
                        Envie o comprovativo de pagamento.
                            </p>
                            
                            

                        </div>
                        
                    
                    </div>

                    <div className="absolute bottom-0 w-[100%] h-[100px] bg-white/30 backdrop-blur-2xl hover:bg-green-800 p-4 flex items-center justify-center text-center ">
                   <Link href={`/perfil/propina/${dados.alunoInfo?._id} `} className="w-[100%] h-[100%]">
                   <span>Enviar </span> 
                    </Link>
                    </div>
        
            </div>


            <Link href={`/perfil/propina/${id}}`} className=" relative w-full h-[450px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl">
                    <div className="absolute w-full h-full rounded-tr-3xl rounded-tl-3xl items-center justify-center uppercase brightness-[0.2] ">
                        <Image
                        src={'/assets/fundo.jpg'}
                        alt="image fundo"
                        fill
                        className="object-cover rounded-tr-3xl rounded-tl-3xl"
                        />

                    </div>
                    <div className="absolute w-full h-full "/>
            <div className="relative flex flex-col w-full h-[400px]  rounded-3xl  rounded-tr-3xl rounded-tl-3xl "  >
            <div className="relative flex  rounded-3xl h-[400px] justify-center   m-8 ">
            <Image
            src={'/assets/img5.jpg'}
            alt="Itens"
            fill
            className="object-cover rounded-3xl"
            />
            </div>
                
                <div className="relative w-full mt-4">
                    <div className=" relative flex justify-between mx-4">
                    <h1 className="max-sm:text-[12px] text-[14px] font-bold " >Solicitar certificado <span className="text-green-500">{}</span></h1>

                    <div className="relative flex px-3 py-2 items-center justify-center gap-2 ">
                    <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                        <h1 className=" relative text-[12px] overflow-visible font-bold">Disponivel</h1>
                        <div className="relative rounded-full w-[12px] h-[12px] bg-green-500 "/>
                        
                    </div>
                    </div>

                    <p className="mt-8 px-4 mx-2">
                   Faça a solicitação do seu sertificado 
                    </p>

                </div>
                
            
        </div>
        
                </Link>

                <Link href={`/perfil/propina/${id}}`} className=" relative w-full h-[450px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl">
                    <div className="absolute w-full h-full rounded-tr-3xl rounded-tl-3xl brightness-[0.2] ">
                        <Image
                        src={'/assets/fundo.jpg'}
                        alt="image fundo"
                        fill
                        className="object-cover rounded-tr-3xl rounded-tl-3xl"
                        />

                    </div>
                    <div className="absolute w-full h-full "/>
            <div className="relative flex flex-col w-full h-[400px]  rounded-3xl  rounded-tr-3xl rounded-tl-3xl "  >
            <div className="relative flex  rounded-3xl h-[400px] justify-center   m-8 ">
            <Image
            src={'/assets/img5.jpg'}
            alt="Itens"
            fill
            className="object-cover rounded-3xl"
            />
            </div>
                
                <div className="relative w-full mt-4">
                    <div className=" relative flex justify-between mx-4">
                    <h1 className="max-sm:text-[12px] text-[14px] font-bold " >Pedido de aulas ao domicilio <span className="text-green-500">{}</span></h1>

                    <div className="relative flex px-3 py-2 items-center justify-center gap-2 ">
                    <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                        <h1 className=" relative text-[12px] overflow-visible font-bold">Disponivel</h1>
                        <div className="relative rounded-full w-[12px] h-[12px] bg-green-500 "/>
                        
                    </div>
                    </div>

                    <p className="mt-4 px-4 mx-2">
                   Faça aqui o seu pedido para teres acesso a aulas particulares.
                    </p>

                </div>
                
            
        </div>
        
                </Link>



            </div>
            </section>


            </div>

        </section>
    )
}


export default page