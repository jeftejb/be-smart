
import ModulosAulas from "@/components/ModulosAulas"
import { fetchAluno } from "@/lib/actions/alunos.actions";
import { currentUser } from "@clerk/nextjs";
import { BriefcaseIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image"
import Link from "next/link";
import { redirect } from "next/navigation";


const getDados  = async (id:string)=>{
try {
    const currentuser = await currentUser()
     const user  = await fetchAluno(id)
  return{user:user, currentuser:currentuser}
} catch (error) {
    
}
}

export default async function Page({params}:{params:{id:string}}){
    const id  = params?.id
      const dados:any = await getDados(id)
      const user = dados?.user
      if(!dados?.currentuser) redirect(`/`);
      if(user?.onboarded !== true  && user?.email !== dados?.currentuser?.emailAddresses[0].emailAddress) redirect(`/onboarding`);
 
    return(
        
            <div className="max-sm:pt-[4rem] pt-[4rem] pb-[2rem] w-[100%] bg-[url('/img/banner.jpg')] bg-cover items-center justify-center flex flex-col bg-center">
   <div className="flex flex-col mt-[4rem] rounded-xl max-sm:mt-[4rem] bg-[#00303C] w-[90%]">
              <h1 className="titulos  uppercase  max-sm:text-[20px] ">Perfil</h1>
            
    <div className='relative w-[100%] h-[100%] flex lg:flex-row md:flex-row max-sm:flex-col   items-center justify-center'>
   
                        <div className="w-[100%] bg-[#038C73]/30 rounded-lg mt-[4rem] max-sm:[mt-8rem] max-sm:w-[100%] flex flex-col p-[20px]   items-center justify-center'">
                         
                        <div className="relative flex  mt-[2px] w-[100%] h-[200px] gap-2 p-[25px]  justify-center">
                        <div className='absolute lg:w-[160px] lg:h-[160px] md:w-[110px] md:h-[110px] max-sm:h-[150px]  max-sm:w-[150px] sm:w-[100px] z-[10] bottom-0 border-[4px] border-green-800 rounded-full'>
                                <Image
                                src={dados?.currentuser.imageUrl ? dados?.currentuser.imageUrl : '/assets/aluno.png'}
                                alt='profile'
                                layout='fill'
                                objectFit='contain'
                                className='rounded-full relative z-[10]'
                                />
                            </div>
                       </div>

                    <div className=' w-[100%] max-sm:w-[100%] flex h-[100%]  p-[20px] items-center justify-center'>
                    <div className='w-[100%] max-sm:h-[80%] h-[30%] bg-slate-500 rounded-xl boder-[8px]' > 
                    <span className='flex flex-col items-center text-[12px] text-gray-200 font-semibold p-[1rem]'>
                                <UserIcon
                                className='w-[1.5rem] h-[1.5rem] mx-auto text-[#fffe]'
                                />
                                <p> Bio:</p>
                                Estudante ...
                            </span>
                    </div>
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

       
                      <div className="relative flex  mt-[2px] w-[100%] h-[200px] gap-2 p-[8px]  justify-center items-center">
                            <div className="w-full flex flex-col justify-center p-2 gap-2 ">
                                <div className="w-full rounded-lg flex flex-row  border-2 border-gray-400  h-[35px] p-2 gap-2  items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Aulas</h1>
                                    <span className="text-xl text-green-600">0</span>
                                </div>
                                <Link href={`/perfil/atividades/${user?.id}`} className="w-full h-[35px] ">
                                <div className="w-full flex rounded-lg flex-row h-[35px] p-2 gap-2  border-2 border-gray-400 items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Actividades</h1>
                                    <span className="text-xl text-green-600">0</span>
                                </div>
                                </Link>
                                <Link href={`/perfil/estudante/${user?._id}`} className="w-full h-[35px] ">
                                <div className="w-full flex rounded-lg flex-row h-[35px] p-2 gap-2  border-2 border-gray-400 items-center justify-center bg-gray-900 hover:scale-105 duration-75 ">
                                    <h1>Perfil academico</h1>
                                    <span className="text-xl text-green-600">0</span>
                                </div>
                                </Link>
                            </div>

                       </div>
                     </div>
    </div>
</div>



            </div>



       
    )
}