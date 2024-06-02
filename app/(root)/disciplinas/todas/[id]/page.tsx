import CursosAdmin from "@/components/CursosAdmin"
import ModulosAulas from "@/components/ModulosAulas"
import { Cursoss } from "@/lib/actions/cursos.actions"
import Link from "next/link"

const getData = async ()=>{
try {
    const cursos = await Cursoss()
    return{data:cursos}
} catch (error) {
    
}
}

const page = async ({params}:{params:{id:string}})=>{
    const cursos:any = await getData()
   const  id = params?.id

    return(
        <div className="relative w-full h-full flex flex-col p-4">

        
       
        <section className="relative flex w-full h-full mt-[150px] bg-slate-950 rounded-lg px-4 items-center justify-center flex-col">
        <div className="w-full items-center justify-center flex mt-[15px] ">
        <h1>Cursos disponiveis </h1>
        </div>
                <div className="m-10 items-center justify-center flex">
                      <Link className="px-8 py-4 bg-green-500 rounded-xl" href={`/disciplinas/nova/${id}`}>Adicionar cursos</Link>
                </div>
                 <div 
                 className="relative grid justify-center bg-black rounded-lg items-center lg:grid-cols-4 w-[100%] p-8 h-full px-10 gap-8 m-4 sm:grid-rows-1 md:grid-cols-2"
                 >
                    {cursos?.data.map((items:any, index:any)=>(
                        <CursosAdmin items={JSON.stringify(items)} nivel={""} id={id} key={index}/>
                        ))
                    }
                 </div>

            </section>
    </div>
    )

}


export default page