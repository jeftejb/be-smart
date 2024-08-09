
import FormMatriculaAdmin from "@/components/FormMatriculaAdmin";
import FormMatriculaEncarregado from "@/components/ui/FormMatriculaEncarregado";
import { fetchFuncionario } from "@/lib/actions/funcionarios.actions";
import { currentUser } from "@clerk/nextjs";
import { AcademicCapIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


const getDados = async ()=>{
try {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress||"";
  const funcionario = await fetchFuncionario(email);
  return{user:user, funcionario:funcionario, email:email}
} catch (error) {
  
}
}

export default async function Matricula({params}:{params:{id:string}}){
    const id = params.id
    const dados:any = await  getDados()
      const user = dados?.user;
      const funcionario = dados?.funcionario;
      const email = dados?.email
      
  
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


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 w-[80%] mx-auto items-center justify-center gap-[3rem] mt-[4rem] text-white'>
        
           <div className='bg-[#00303C] rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem]
           '
           >
             <AcademicCapIcon className='w-[4rem] h-[4rem] mx-auto'/>
             <h1 className='text-[15px]  mt-[1,5rem] mb-[1.5rem]' >Verificar matricula</h1>
             <p className='text-[12px] text-[#6BA614] mb-4 font-normal'>
              Verifique a matricula dos estudantes para efectuar possiveis alteracoes dos dados do alunos.
             </p>
             <Link  className="px-8 py-2 bg-green-400 text-[12px] mt-4 rounded-lg" href={`/verificar-matriculas/${id}`}>
             Entrar
             </Link>
           </div>
           
    
           
            <div className='bg-[#00303C] rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem]
           '
           >
             <PencilSquareIcon className='w-[4rem] h-[4rem] mx-auto'/>
             <h1 className='text-[15px]  mt-[1,5rem] mb-[1.5rem]' >Alunos suspensos</h1>
             <p className='text-[12px] mb-4 text-[#6BA614] font-normal'>
              Verifique os alunos suspensos para mudar o estatus para aceites.
             </p>
             <Link className="px-8 py-2 bg-green-400 text-[12px] mt-4 rounded-lg" href={`/verificar-alunos-suspensos/${id}`}>
             Entrar
             </Link>
           </div>
          

           
            <div className='bg-[#00303C] gap-4 rounded-xl hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center
            p-[2rem]
           '
           >
             <PencilSquareIcon className='w-[4rem] h-[4rem] mx-auto'/>
             <h1 className='text-[15px]  mt-[1,5rem] mb-[1.5rem]' >Encarregados</h1>
             <p className='text-[12px] text-[#6BA614] mb-4 font-normal'>
              Verifique os encarregados.
             </p>
             <Link className="px-8 py-2 bg-green-400 text-[12px] mt-4 rounded-lg" href={`/encarregados/${id}`}>
             Entrar
             </Link>
           </div>
           
        </div>
       
            <div className="w-[100%]">
            <FormMatriculaAdmin admin={funcionario?.admin} email={email} id={id}/>
            </div>
            <div className="w-[100%] mt-12">
            <FormMatriculaEncarregado id={id}/>
            </div>

            </div>
             </div>
    )
}