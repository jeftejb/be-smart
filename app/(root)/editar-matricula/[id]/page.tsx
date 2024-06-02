import FormMatricula from "@/components/formMatricula";
import { fetchAluno } from "@/lib/actions/alunos.actions";
import { AcademicCapIcon, CheckCircleIcon, CreditCardIcon, PhoneIcon, TrophyIcon, UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";




export default async function EditarMatricula({params}:{params:{id:string}}){
      const id = params.id;
      const dados = await fetchAluno(id)

    return(
        <section className="relative flex w-full h-full items-center justify-center p-[2rem] top-0 left-0">

            <section className="w-[80%] rounded-xl h-full mt-24 px-28 max-sm:px-4 py-28 bg-[#00303C]">
                <h1 className="text-center mt-8 text-[18px] uppercase font-bold">Editar dados do aluno</h1>
               
                  <div className="grid grid-cols-2 w-full h-full max-md:grid-cols-1   gap-4 py-4   ">
                     <div className="flex flex-col w-full h-full  max-sm:px-3 dados-center justify-center px-7 shadow-2xl shadow-black rounded-2xl ">
                        <div className="relative h-24 w-24 my-3">
                            <Image
                            src={"/assets/img5.jpg"}
                            alt="imagem alunoi"
                            fill
                            className="rounded-full absolute "
                            />

                        </div>

                        <div className="flex flex-col w-full gap-2">
                        <span className="flex w-[100%] px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold uppercase"><UserIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"/> {dados?.nomeCompleto}</span>
                        <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><TrophyIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"/> {dados?.nivel}</span>
                        <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><AcademicCapIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]" /> {"Jose Ajusto Fernando"}</span>
                        <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><PhoneIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]" /> {dados?.telefone}</span>
                        <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"> <CheckCircleIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]" /> {dados?.actived ? <span className="text-green-800" >{'Activo'}</span>: <span className="text-red-800" >{'Não activo'}</span>  }</span>
                        <span className="flex w-full px-[1rem] md:text-[12px] max-sm:text-[12px] lg:text-[12px] font-bold flex-row uppercase"><CreditCardIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] max-sm:w-[18px] max-sm:h-[18px] mr-[0.4rem]"  /> {dados?.propina.length <= 0  ? <span className="text-red-800" >{'Não regularizada'}</span>: <span className="text-green-800" >{'Regularizada'}</span>  }</span>
                    
                           
                        </div>

                     </div>

                     <div className="flex flex-col w-full h-full max-md:mt-7 shadow-2xl shadow-black px-[4px] rounded-2xl">
                       <FormMatricula  
                     id={dados?._id} 
                     nomeCompleto={dados?.nomeCompleto} 
                     idade={dados?.idade} 
                     telefone={dados?.telefone} 
                     sexo={dados?.sexo} 
                     nivel={dados?.nivel} 
                     dataNascimento={dados?.dataNascimento}
                     email={dados?.email}
                       />
                     </div>                    

                  </div>
            </section>

        </section>

    )
}