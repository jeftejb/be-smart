
import FormMatriculaAdmin from "@/components/FormMatriculaAdmin";
import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";
import { AcademicCapIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";



export default async function Matricula({params}:{params:{id:string}}){
    const id = params.id
      const user = await currentUser();
      const email = user?.emailAddresses[0].emailAddress||"";
      const funcionario = await fetchFuncionario(email);
  
    return(
    
        <div className='flex flex-col pt-[8rem] md:pt-[8rem] pb-[5rem] items-center justify-center'>
            
        <div className="relative flex flex-col w-[80%] max-sm:w-[95%] h-[full] bg-[#121212] p-[12px] gap-[1rem] items-center justify-center">

        <h1 className="titulos mt-[24px]">
             BE-
            <span className="text-[#80BF21]">
              SMART
            </span>
            <span className='text-white ml-1'>
            MATRICULAS
            </span> 
        </h1>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto items-center justify-center gap-[3rem] mt-[4rem] text-white'>
        <Link href={`/verificar-matriculas/${id}`}>
           <div className='bg-[#00303C] rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem]
           '
           >
             <AcademicCapIcon className='w-[6rem] h-[6rem] mx-auto'/>
             <h1 className='text-[20px] md:text-[30px] mt-[1,5rem] mb-[1.5rem]' >Verificar matricula</h1>
             <p className='text-[15px] text-[#6BA614] font-normal'>
              Verifique a matricula dos estudantes para efectuar possiveis alteracoes dos dados do alunos.
             </p>
           </div>
           </Link>
    
           <Link href={`/verificar-alunos-suspensos/${id}`}>
        <div className='bg-[#00303C] rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem]
           '
           >
             <PencilSquareIcon className='w-[6rem] h-[6rem] mx-auto'/>
             <h1 className='text-[20px] md:text-[30px] mt-[1,5rem] mb-[1.5rem]' >Alunos suspencos</h1>
             <p className='text-[15px] text-[#6BA614] font-normal'>
              Verifique os alunos suspencos para mudar o estatus para aceites.
             </p>
           </div>
           </Link>
        </div>
       
            <div className="w-[100%] ">
            <FormMatriculaAdmin admin={funcionario.admin} email={email} id={id}  />
            </div>

            </div>
             </div>
    )
}