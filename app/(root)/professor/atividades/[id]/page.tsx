import Image from "next/image"
import Link from "next/link"

 

 const page = ({params}:{params:{id:string}})=>{

    const id = params?.id 

    return(
        <section className="relative flex w-full h-full top-0 left-0 ">

        <div className="relative flex flex-col mt-[200px] w-full items-center justify-center  ">

            <h1 className="my-10">Atividades do professor: <span className="text-xl text-green-500" > </span></h1>

            <div>
                   <Link href={`/professor/criar/atividade/${id}`} >
                <div className="relative flex px-4 py-2  mb-4 items-center justify-center gap-2 ">
                    <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                        <h1 className=" relative overflow-visible">Adicionar atividade</h1>
                        <div className="relative rounded-full w-[14px] h-[14px] bg-red-500 "/>
                        
                    </div>
                    </Link>
                </div>
        <div className=" relative grid grid-cols-2 gap-4 p-6 w-full h-full ">
            
            <div className="relative flex  w-full h-[600px]  ">
                <div className="absolute w-full h-full brightness-[.2]">
                    <Image
                    src={'/assets/smart1.jpg'}
                    alt="fundo"
                    fill
                    className="object-fill"
                    />
                </div>

                <div className="relative w-full h-full bg-transparent ">

                    <h1 className=" text-center mt-4">Atividades por fazer: <span className="ml-2">3</span> </h1>


                    <div className="mt-4 p-4 m-4 gap-2  ">
                        <ul className=" relative items-center p-9 pag-4  justify-start flex flex-col w-full h-[500px] overflow-y-scroll overflow-x-hidden ">
                            <Link href={`/perfil/atividade/${params?.id}/${params?.id}`} className="w-full h-full">
                            <li className="relative flex flex-col w-full  my-2 h-[150px] ">
                                <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-3xl rounded-l-xl overflow-x-hidden gap-2 ">
                                    <div className="absolute flex right-0 h-8 w-16 bg-white items-center justify-center">
                                       <h5 className="text-black">P:<span>10/10</span></h5>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, tenetur magni iusto eum alias praesentium hic neque! Nobis, assumenda ad?</p>
                                    </div>
                                    
                                     

                                </div>
                                <div className="relative flex justify-between mt-4  w-full h-8">
                                        <div>
                                        Data: <span>2/10/2023</span>
                                        </div>

                                        <div className="relative flex px-4  items-center justify-center gap-2 ">
                                        <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                                            <h1 className=" relative overflow-visible">Feichada</h1>
                                            <div className="relative rounded-full w-[14px] h-[14px] bg-orange-500 "/>
                                            
                                        </div>

                                      </div>  

                            </li>
                            </Link>
                            <li className="relative flex flex-col w-full  my-2 h-[150px] ">
                                <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-3xl rounded-l-xl overflow-x-hidden gap-2 ">
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, tenetur magni iusto eum alias praesentium hic neque! Nobis, assumenda ad?</p>
                                    </div>
                                    
                                     

                                </div>
                                <div className="relative flex justify-between mt-4  w-full h-8">
                                        <div>
                                        Data: <span>2/10/2023</span>
                                        </div>

                                        <div className="relative flex px-4  items-center justify-center gap-2 ">
                                        <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                                            <h1 className=" relative overflow-visible">Feichada</h1>
                                            <div className="relative rounded-full w-[14px] h-[14px] bg-orange-500 "/>
                                            
                                        </div>

                                      </div>  

                            </li>


                            <li className="relative flex flex-col w-full  my-2 h-[150px] ">
                                <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-3xl rounded-l-xl overflow-x-hidden gap-2 ">
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, tenetur magni iusto eum alias praesentium hic neque! Nobis, assumenda ad?</p>
                                    </div>
                                    
                                     

                                </div>
                                <div className="relative flex justify-between mt-4  w-full h-8">
                                        <div>
                                        Data: <span>2/10/2023</span>
                                        </div>

                                        <div className="relative flex px-4  items-center justify-center gap-2 ">
                                        <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                                            <h1 className=" relative overflow-visible">Feichada</h1>
                                            <div className="relative rounded-full w-[14px] h-[14px] bg-orange-500 "/>
                                            
                                        </div>

                                      </div>  

                            </li>


                       
                        </ul>

                    </div>

                </div>

            </div>

            <div className="relative flex  w-full h-[600px]">
                <div className="absolute w-full h-full brightness-[.2]">
                <Image
                    src={'/assets/smart1.jpg'}
                    alt="fundo"
                    fill
                    className="object-fill"
                    />
                </div>

                <div className="relative w-full h-full bg-transparent ">

<h1 className=" text-center mt-4">Atividades feitas: <span className="ml-2">3</span> </h1>


<div className="mt-4 p-4 m-4 gap-2  ">
    <ul className=" relative items-center p-9 pag-4  justify-start flex flex-col w-full h-[500px] overflow-y-scroll overflow-x-hidden ">
        <li className="relative flex flex-col w-full  my-2 h-[150px] ">
            <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-3xl rounded-l-xl overflow-x-hidden gap-2 ">
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, tenetur magni iusto eum alias praesentium hic neque! Nobis, assumenda ad?</p>
                </div>
                
                 

            </div>
            <div className="relative flex justify-between mt-4  w-full h-8">
                    <div>
                    Data: <span>2/10/2023</span>
                    </div>

                    <div className="relative flex px-4  items-center justify-center gap-2 ">
                    <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                        <h1 className=" relative overflow-visible">Feita</h1>
                        <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                        
                    </div>

                  </div>  

        </li>

        <li className="relative flex flex-col w-full  my-2 h-[150px] ">
            <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-3xl rounded-l-xl overflow-x-hidden gap-2 ">
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, tenetur magni iusto eum alias praesentium hic neque! Nobis, assumenda ad?</p>
                </div>
                
                 

            </div>
            <div className="relative flex justify-between mt-4  w-full h-8">
                    <div>
                    Data: <span>2/10/2023</span>
                    </div>

                    <div className="relative flex px-4  items-center justify-center gap-2 ">
                    <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                        <h1 className=" relative overflow-visible">Feita</h1>
                        <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                        
                    </div>

                  </div>  

        </li>


        <li className="relative flex flex-col w-full  my-2 h-[150px] ">
            <div className="relative flex w-full h-full bg-gray-900 rounded-tr-3xl rounded-r-3xl rounded-l-xl overflow-x-hidden gap-2 ">
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, tenetur magni iusto eum alias praesentium hic neque! Nobis, assumenda ad?</p>
                </div>
                
                 

            </div>
            <div className="relative flex justify-between mt-4  w-full h-8">
                    <div>
                    Data: <span>2/10/2023</span>
                    </div>

                    <div className="relative flex px-4  items-center justify-center gap-2 ">
                    <div className="absolute flex  w-full h-full  bg-green-500 brightness-50"/>
                        <h1 className=" relative overflow-visible">Feita</h1>
                        <div className="relative rounded-full w-[14px] h-[14px] bg-green-500 "/>
                        
                    </div>

                  </div>  

        </li>


   
    </ul>

</div>

</div>
                

            </div>
           

        </div>
         </div>
        </section>
    )

 }

 export default page