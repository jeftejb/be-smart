
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

        <div className='bg-[#121212] flex flex-col pt-[4rem] md:pt-[8rem] pb-[5rem] items-center justify-center'>
        <div className="relative flex flex-col rounded-xl  max-sm:mt-[2rem] bg-[#00303C] w-[90%]">
     

            <h1 className="my-10 max-sm:my-4 text-center uppercase lg:text-[18px] md:text-[18px] max-sm:text-[24px] font-bold">Aulas de nivel: <span className="text-xl text-green-500" >{params.nivel}</span></h1>

        

        <div className="grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-2 gap-[2rem] max-sm:gap-[1.5rem] max-sm:mx-[0px] w-[100%] mx-auto p-[2rem] max-sm:p-[1.5rem] rounded-xl bg-[#038C73]">
            
           {
            aulas.map((items:any, key:any)=>(
                <Aulas key={key} id_aula={items._id} imagem={items.imagem} nome={items.titulo} id_user={params.id}/>
            )

            )
           }
            


        </div>
         </div>
      
        </div>
    )

}

 