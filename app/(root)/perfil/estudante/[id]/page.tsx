import Image from "next/image"
import Link from "next/link"

const page = ({params}:{params:{id:string}})=>{
    const id = params?.id
    return(
           
        
        <section className="relative flex w-full h-full top-0 left-0 ">

        <div className="relative flex flex-col mt-[200px] w-full items-center justify-center px-20">

            <h1 className="my-10">Perfil do estudante: <span className="text-xl text-green-500" >{'nome do estuadnte'}</span></h1>
        <div className="flex flex-row w-full h-[50vh] gap-2 p-4 justify-center items-center">

            <div className="relative w-[50%] mr-4 h-full rounded-2xl">
                <Image
                src={"/assets/img5.jpg"}
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
                <p className="text-xl font-bold" >Nivel: <span className="text-green-500" >intermedio</span></p>
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
                <p className="text-xl font-bold" >Aulas disponiveis: <span className="text-green-500" >15</span></p>
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
                <p className="text-xl font-bold" >Atividades: <span className="text-green-500" >15</span></p>
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
                <p className="text-xl font-bold" >Atividades feitas: <span className="text-green-500" >15</span></p>
                </Link>
                </div>


                
                <div className="flex gap-2 py-2">
               <div>
                <p className="text-xl font-bold" >Stato da matricula: </p>
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
                <p className="text-xl font-bold" >Stato da propina: </p>
               </div>

               <div className="relative flex px-4  items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative overflow-visible">Paga</h1>
                    <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                    
                 </div>
                    </Link>
                </div>


              <div className="absolute w-[30%] h-full right-0 top-0 bg-white rounded-tl-3xl rounded-bl-3xl overflow-hidden">
                <Image
                src={'/assets/iniciante1.jpg'}
                alt="tyleImage"
                fill
                className="object-cover "
                />

              </div>

            </div>

        </div>



        <div id="historico" className="relative mt-20 w-full h-full px-20">

            <div className=" w-full h-full  ">
                <h1 className="text-center text-2xl font-bold">Historico de pagamentos</h1>


                <div className="mt-4 p-4 m-4 gap-2  ">
                        <ul className=" relative items-center p-9 pag-4  justify-start flex flex-col w-full h-[500px] overflow-y-scroll overflow-x-hidden ">
                            <Link href={"#"} className="w-full h-full">
                            <li className="relative flex flex-col w-full  my-2 h-[150px] ">
                                <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-3xl rounded-l-xl overflow-x-hidden gap-2 ">
                                    <div className="absolute flex right-0 h-10 w-40 bg-white items-center justify-center">
                                       <h5 className="text-black text-xl font-bold">Kz:<span>6.000,00</span></h5>
                                    </div>
                                    <div className=" relative w-60  h-30  rounded-tr-3xl rounded-r-3xl ">
                                        <Image
                                        src={'/assets/img5.jpg'}
                                        alt="icon"
                                         fill
                                         className=" object-cover rounded-tr-3xl rounded-r-3xl overflow-hidden"
                                        />
                                    </div>

                                    <div className="relative">
                                        <h1>Titulo</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita</p>
                                    </div>
                                    
                                     

                                </div>
                                <div className="relative flex justify-between mt-4  w-full h-8">
                                        <div>
                                        Data: <span>2/10/2023</span>
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

          <section className="relative flex flex-col w-full h-full p-2 items-center justify-center ">
            <h1 className="text-center text-3xl font-bold ">Servi<span className="text-green-500">cos</span>  </h1>
        <div className="grid grid-cols-3 w-full h-full p-10 my-20 gap-8">
            
        <Link href={`/perfil/propina/${id}}`} className=" relative w-full h-[500px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl">
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
                 <h1 className="text-xl font-bold " >Pagamento online <span className="text-green-500">{}</span></h1>

                 <div className="relative flex px-4 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative overflow-visible">Disponivel</h1>
                    <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                    
                 </div>
                </div>

                 <p className="mt-8 px-4 mx-2">
                  Faca os seus pagamentos de uma maneira mais simples e facil sem se deslocar.
                 </p>

            </div>
            
          
      </div>
     
        </Link>


        <Link href={`/perfil/propina/${id}}`} className=" relative w-full h-[500px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl">
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
                 <h1 className="text-xl font-bold " >Solicitar sertificado <span className="text-green-500">{}</span></h1>

                 <div className="relative flex px-4 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative overflow-visible">Disponivel</h1>
                    <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                    
                 </div>
                </div>

                 <p className="mt-8 px-4 mx-2">
                  Faca os seus pagamentos de uma maneira mais simples e facil sem se deslocar.
                 </p>

            </div>
            
          
      </div>
     
            </Link>

            <Link href={`/perfil/propina/${id}}`} className=" relative w-full h-[500px] hover:scale-110 duration-100 rounded-tl-3xl rounded-tr-3xl">
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
                 <h1 className="text-xl font-bold " >Pedido de aulas ao domicilio <span className="text-green-500">{}</span></h1>

                 <div className="relative flex px-4 py-2 items-center justify-center gap-2 ">
                  <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                    <h1 className=" relative overflow-visible">Disponivel</h1>
                    <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                    
                 </div>
                </div>

                 <p className="mt-8 px-4 mx-2">
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