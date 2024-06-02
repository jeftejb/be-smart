
import Aulas from "@/components/Aulas"
import Videos from "@/components/Videos"
import { Atividadess } from "@/lib/actions/atividades.actions"

const getAulas = async  ()=>{
try {
  const  atividade = await Atividadess() 
  return {actividades:atividade}
} catch (error) {
    
}
}

export default async function Page({params}:{params:{id:string,nivel:string, id_modulo:string}}){
     const atividades:any = await getAulas()
    const aulas = atividades?.actividades 
   
 
    return(

        <section className="relative flex w-full h-full top-0 left-0 ">

        <div className="relative flex flex-col mt-[200px] max-sm:mt-[150px] w-full items-center justify-center ">

            <h1 className="my-10 max-sm:my-4 uppercase lg:text-[18px] md:text-[18px] max-sm:text-[24px] font-bold">Aulas de nivel: <span className="text-xl text-green-500" >{params.nivel}</span></h1>

        

        <div className="grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-2 gap-[2rem] max-sm:gap-[1.5rem] max-sm:mx-[0px] w-[90%] mx-auto p-[2rem] max-sm:p-[1.5rem] rounded-xl bg-[#038C73]">
            
           {
            aulas.map((items:any, key:any)=>(
                <Aulas key={key} id_aula={items._id} imagem={items.imagem} nome={items.titulo} id_user={params.id}/>
            )

            )
           }
            


        </div>
         </div>
        </section>
    )

}

 