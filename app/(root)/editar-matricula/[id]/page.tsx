import Image from "next/image";


export default function EditarMatricula({params}:{params:{id:string}}){
    return(
        <section className="relative w-full h-full top-0 left-0">

            <section className="w-full h-full mt-24 px-28 max-sm:px-4 py-28 ">
                <h1 className="text-center my-10">Editar dados do aluno</h1>
               
                  <div className="grid grid-cols-2 w-full h-full max-md:grid-cols-1   gap-4 py-4   ">
                     <div className="flex flex-col w-full h-full  max-sm:px-3 items-center justify-center px-7 shadow-2xl shadow-rose-400 rounded-2xl ">
                        <div className="relative h-24 w-24 my-3">
                            <Image
                            src={"/assets/img5.jpg"}
                            alt="imagem alunoi"
                            fill
                            className="rounded-full absolute "
                            />

                        </div>

                        <div className="flex flex-col w-full gap-2">
                             <h3>Nome: <span>{"Joao paulo Ferando"}</span></h3>
                             <p>Nivel: {'Intermediario'}</p>
                             <p>Professor: {"Jose Ajusto Fernando"}</p>
                             <p>Telefone-aluno: {"9392738702"}</p>
                             <p>Telefone-2: {"9392738702"}</p>
                             <p>Email: {"jao@gmail.com"}</p>  
                             <p>Email-2: {"jao@gmail.com"}</p> 
                            <span className="" >Stato: <span className="text-green-500" >{'Activo'}</span></span>
                        </div>

                     </div>

                     <div className="flex flex-col w-full h-full max-md:mt-7 shadow-2xl shadow-rose-400 px-7 rounded-2xl">

                     <form action="" data-aos='fade-down' className="flex flex-col  text-[#000] py-7 w-full  justify-center items-center ">
                <div className="w-full flex px- gap-9">
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 transi w-[100%] bg-transparent border border-fuchsia-300 text-white" type="text" placeholder="Nome"/>
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="email" name=""  placeholder="Email" id="" />
                </div>

                <div className="w-full flex px- gap-9">
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="date" placeholder="Data de nascimento"/>
                <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" name="" id="">
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" value="" disabled >Sexo</option>
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" value="">Masculino</option>
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" value="">Femenino</option>
                </select>
                </div>
                
                <div className="w-full flex px- gap-9">
                <select className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" name="" id="">
                <option className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" disabled >Nivel</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" value="">Iniciante</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black " value="">Intermedio</option>
                <option className="p-2 mb-4 rounded-3xl  w-[100%] bg-transparent border border-fuchsia-300 text-white bg-black" value="">Avancado</option>
                </select>
                 
               <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="number" name=""  placeholder="Telefone" id="" />
               </div>
               <div className="w-full flex px- gap-9">
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 transi w-[100%] bg-transparent border border-fuchsia-300 text-white" type="email" placeholder="Email-2"/>
                <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="number" name=""  placeholder="Telefone-2" id="" />
                </div>

               <div className="flex">
                    <div className="w-full p-2">
                    <label className="p-2 mb-4 w-[100%] bg-transparent  text-white" htmlFor="frente">BI ou sedula Frontal</label>
                    <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="file" name="" id="frente" />
                    </div>
                <div className="w-full p-2">
                <label className="p-2 mb-4  w-[100%] text-white" htmlFor="frente">BI ou sedula Verso</label>
                    <input className="p-2 mb-4 rounded-3xl hover:scale-110 w-[100%] bg-transparent border border-fuchsia-300 text-white" type="file" name="" id="frente" />
                </div>
               </div>

            

                <button className="px-5 py-2 border border-pink-300  text-white mt-2 hover:bg-[#ef4444] ">Mudar dados</button>
            </form>
                     </div>                    

                  </div>
            </section>

        </section>

    )
}