import { fetchAluno, fetchAlunoOn } from "@/lib/actions/alunos.actions";
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
    return(
           
        
        <section className="relative flex flex-col w-[100%] h-[100%] top-0 left-0 overflow-x-hidden">

<div className="flex flex-col items-center p-[20px]  h-[100vh] w-[100%] bg-[url('/img/banner.jpg')] bg-cover bg-center">
<h1 className="mt-[180px] titulos uppercase">Perfil academico do estudante: <span className="max-sm:text-[12px] text-[18px] font-semibold text-green-500" >@{dados.alunoInfo?.nomeCompleto}</span></h1>
        <div className="flex flex-row w-full h-[50vh] gap-2 p-4 justify-center items-center">

            <div className="relative w-[50%] mr-4 h-full rounded-2xl">
                <Image
                src={dados.alunoInfo?.imagem ? dados.alunoInfo?.imagem:"/assets/img5.jpg"}
                alt="perfil-imagae"
                fill
                className="object-cover rounded-2xl"
                />
            </div>

            <div className=" justify-start h-full w-[10px] bg-green-500"/>

            <div className="relative w-full h-full gap-4 py-4   ">
                <div className="flex gap-2 py-4">
                 <div className="relative w-8 h-8 ">
                 <Image
                src={"/assets/img5.jpg"}
                alt="perfil-imagae"
                fill
                className="object-cover rounded-2xl"
                />
                 </div>
                <p className="text-[12px] font-bold" >Nivel: <span className="text-green-500" >{dados.alunoInfo?.nivel}</span></p>
                </div>

                <div className="flex gap-2 py-[.3rem]">
                 <div className="relative w-8 h-8 ">
                 <Image
                src={"/assets/img5.jpg"}
                alt="perfil-imagae"
                fill
                className="object-cover rounded-2xl"
                />
                 </div>
                <p className="text-[12px] font-bold" >Aulas disponiveis: <span className="text-green-500" >15</span></p>
                </div>

                
                <div className="flex gap-2 py-4">
                 <div className="relative w-8 h-8 ">
                 <Image
                src={"/assets/img5.jpg"}
                alt="perfil-imagae"
                fill
                className="object-cover rounded-2xl"
                />
                 </div>
                <p className="text-[12px] font-bold" >Atividades: <span className="text-green-500" >15</span></p>
                </div>
               
               
                <div className="flex gap-2 py-4">
                <Link href={`/perfil/atividades/${id}`} className="flex pag-2  hover:bg-green-400 " >
                 <div className="relative w-8 h-8 ">
                 <Image
                src={"/assets/img5.jpg"}
                alt="perfil-imagae"
                fill
                className="object-cover rounded-2xl"
                />
                 </div>
                <p className="text-[12px] font-bold" >Atividades feitas: <span className="text-green-500" >15</span></p>
                </Link>
                </div>


                
                <div className="flex gap-2 py-2">
               <div>
                <p className="text-[12px] font-bold" >Stato da matricula: </p>
               </div>

               <div className="relative flex px-4  items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative overflow-visible">Matriculado</h1>
                    <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                    
                 </div>
                </div>

                 
                <div className="flex gap-2    ">
                    <Link href={'#historico'} className="flex pag-2 py-2 hover:bg-green-400 " >
               <div className="mr-2">
                <p className="text-[12px] font-bold" >Stato da propina: </p>
               </div>

               <div className="relative flex px-4  items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative overflow-visible">Paga</h1>
                    <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                    
                 </div>
                    </Link>
                </div>


              <div className="lg:w-[30%]   absolute h-full right-0 top-0 bg-white rounded-tl-3xl rounded-bl-3xl overflow-hidden">
                <Image
                src={'/assets/iniciante1.jpg'}
                alt="tyleImage"
                fill
                className="object-cover "
                />

              </div>

            </div>

        </div>



</div>

        <div className="relative flex flex-col mt-[100px] w-[100%] h-[100%] items-center justify-center px-[1.5rem]">

         

        <div id="historico" className="relative mt-[12px]  lg:w-[100%] lg:h-[50%] bg-black rounded-lg lg:p-[20px] md:p-[10px] max-sm:p-[2px]">

            <div className=" w-[100%] h-[100%]  ">
                <h1 className="text-center text-2xl font-bold">Historico de pagamentos</h1>


                <div className="mt-[12px] p-[12px] m-[1rem] gap-2 w-[100%]   ">
                        <ul className=" relative items-center p-[12px] pag-4  justify-start flex flex-col w-[100%] h-[500px] overflow-y-scroll overflow-x-hidden ">
                            <Link href={"#"} className="w-full h-full">
                            <li className="relative flex flex-col w-[100%]  my-2 h-[150px] ">
                                <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-3xl rounded-l-xl overflow-hidden gap-2 ">
                                    <div className="absolute flex right-0 h-[30px] w-[100px] bg-white items-center justify-center">
                                       <h5 className="text-black text-[12px] font-bold">Kz:<span>6.000,00</span></h5>
                                    </div>
                                    <div className=" relative lg:w-[300px] lg:h-[300px] md:w-[180px] md:h-[180px] max-sm:w-[100px] max-sm:h-[100px]  rounded-tr-3xl rounded-r-3xl ">
                                        <Image
                                        src={'/assets/img5.jpg'}
                                        alt="icon"
                                         fill
                                         className=" object-cover rounded-tr-3xl rounded-r-3xl overflow-hidden"
                                        />
                                    </div>

                                    <div className="relative mt-[1.5rem] max-sm:mt-[1rem]">
                                        <h1>Titulo</h1>
                                        <p className="max-sm:text-[12px] text-[18px] font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita</p>
                                    </div>
                                    
                                     

                                </div>
                                <div className="relative flex justify-between mt-4  w-full h-8">
                                        <div>
                                       <p  className="max-sm:text-[12px] text-[18px] font-semibold"> Data: <span>2/10/2023</span></p>
                                        </div>

                                        <div className="relative flex px-4  items-center justify-center gap-2 ">
                                        <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                                            <h1 className=" relative overflow-visible">Pendente</h1>
                                            <div className="relative rounded-full w-[14px] h-[14px] bg-orange-500 "/>
                                            
                                        </div>

                                      </div>  

                            </li>
                            </Link>
                        </ul>

                    </div>
            </div>

        </div>

          <section className="relative flex flex-col  w-[100%] p-2 mt-[2rem] items-center justify-center rounded-lg bg-black">
            <h1 className="text-center text-3xl font-bold ">Servi<span className="text-green-500">ços</span>  </h1>
        <div className="grid flex-wrap lg:grid-cols-3 md:grid-cols-3 max-sm:grid-rows-3 w-[100%] h-[50%] lg:p-[2rem] md:p-[2rem]  max-sm:p-[.5rem] my-[12px] lg:gap-[8rem] mb:gap-[4rem] gap-4 max-sm:gap-[2rem]">
            
        <Link href={`/perfil/propina/${dados.alunoInfo?._id}`} className=" relative w-full h-[450px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl">
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
                 <h1 className="max-sm:text-[12px] text-[14px] font-bold " >Pagamento de Propina <span className="text-green-500">{}</span></h1>

                 <div className="relative flex px-3 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative text-[12px] overflow-visible font-bold">Disponivel</h1>
                    <div className="relative rounded-full w-[12px] h-[12px] bg-green-500 "/>
                    
                 </div>
                </div>

                 <p className="mt-8 px-4 mx-2">
                  Faca os seus pagamentos de uma maneira mais simples e facil sem se deslocar.
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
                 <h1 className="max-sm:text-[12px] text-[14px] font-bold " >Solicitar certificado <span className="text-green-500">{}</span></h1>

                 <div className="relative flex px-3 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative text-[12px] overflow-visible font-bold">Disponivel</h1>
                    <div className="relative rounded-full w-[12px] h-[12px] bg-green-500 "/>
                    
                 </div>
                </div>

                 <p className="mt-8 px-4 mx-2">
                  Faca os seus pagamentos de uma maneira mais simples e facil sem se deslocar.
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
                  Faca os seus pagamentos de uma maneira mais simples e facil sem se deslocar.
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