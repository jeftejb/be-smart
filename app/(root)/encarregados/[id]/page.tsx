import Cursos from "@/components/Cursos"
import ForSelectEst from "@/components/ForSelectEst"
import { fetchAlunosAllS } from "@/lib/actions/alunos.actions"
import { Cursoss } from "@/lib/actions/cursos.actions"
import { encarregados } from "@/lib/actions/encarregado.actions"
import { currentUser } from "@clerk/nextjs"
import Link from "next/link"

const getEncarregados = async ()=>{
  try {
    const enc = await encarregados()
    const estudantes = await fetchAlunosAllS()
    return {enc:enc , est:estudantes}
  } catch (error) {
    
  }
}

const page = async ()=>{
    const dados:any = await getEncarregados()
    const estudantes = dados?.est
    const enc = dados?.enc


    return(
       <div className='bg-[#121212] flex flex-col pt-[4rem] md:pt-[8rem] pb-[5rem] items-center justify-center'>
            <div className="relative flex flex-col rounded-xl max-sm:mt-[2rem] bg-[#00303C] w-[90%]">
              <h1 className="titulos  uppercase  max-sm:text-[20px] ">Encarregados</h1>
            


            <div className='relative bg-[#038C73]  rounded-xl lg:p-[3rem] md:p-[2rem]  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[100%] mx-auto  lg:gap-[3rem] md:gap-[1.5rem] max-sm:gap-[1rem] mt-[4rem] text-white max-sm:p-[1.5rem]'>
            {enc.map((items:any, index:any)=>(
              <div className="w-full shadow-2xl shadow-black h-full p-8 bg-slate-700 rounded-lg items-center justify-center flex flex-col" key={index}>
                 <h1 className="text-[14px] font-semibold uppercase">{items.nome}</h1>
                 <div className="w-full p-2 flex flex-col items-center justify-center">
                   <p className="text-[12px] text-gray-300 uppercase">{items.email}</p>
                   <p className="text-[12px] text-gray-300 uppercase" >{items.telefone}</p>
                 </div>

                 <div className="w-full p-2">
                   <ForSelectEst id={items?._id} est={JSON.stringify(estudantes)}/>
                 </div>

                 <div className="mt-8 w-[100%] flex items-center justify-center px-8">
                  <Link href={`/encarregado/${items?._id}`} className="px-4 rounded-lg py-[.5rem] bg-green-500 text-[12px] font-bold text-white" >Ver detalhes</Link>
                 </div>
              </div>
            )) }
            </div>
            </div>
        </div>
       
    )

}

export default page