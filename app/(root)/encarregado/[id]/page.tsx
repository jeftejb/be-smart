import ImageCalud from "@/components/ui/ImageCalud";
import { fetchPedido, updatePedido } from "@/lib/actions/alunos.actions";
import Image from "next/image";
import { meses } from "@/constants";
import BotaoPedido from "@/components/Botao/BotaoPedido";
import { EncarregadoBusca } from "@/lib/actions/encarregado.actions";


const getData = async (id:string)=>{
    try {
        const encarregado  =   await EncarregadoBusca(id)
    return{data:encarregado}
    } catch (error) {
        
    }
    

    }

export default async function Page({params}:{params:{id:string}}){

    const id:string = params.id;
const dado:any = await getData(id)
     const dados=dado?.data
 
   
    return(
        <div className="w-[100%] pt-[4rem] pb-4 flex items-center justify-center">

            <div className="flex flex-col w-[80%] p-[2rem] max-sm:p-[.5rem] bg-[#00303C] items-center mt-[85px] rounded-xl ">
            <div className="mt-8 w-[100%] flex flex-col justify-center items-center">
              <h1 className="font-bold text-[18px] uppercase mb-4">Dados do encarregado</h1>
            </div>

                 <div className="w-[100%] h-[100%]  items-center justify-center flex max-sm:flex-col max-sm:p-[.5rem] p-[2rem]">

                       
                        <div className="w-[100%] flex-col items-center justify-center max-sm:mt-[2rem] flex border-2 border-gray-400 p-4 rounded-3xl">
                            <h1 className="text-center text-[18px] font-bold text-white uppercase">{dados?.nome}</h1>
                             <p className="text-[14px] font-bold text-white">{dados.email}</p>
                                  

                             <div className="w-full rounded-lg gap-2 p-4 mt-8 flex flex-col items-center justify-center">
                                <h3 className="text-[13px] uppercase text-center text-green-700">Encarregado dos estudantes </h3>
                                {
                                    dados.alunos.map((items:any , index:any)=>(
                                       <div className="w-full flex flex-row p-4 justify-between rounded-lg hover:scale-[1.03] bg-green-500/45 backdrop-blur-2xl">
                                       <span className="text-[12px] font-bold uppercase text-orange-500 mr-4">{items.numeroDeEstudante}</span>
                                       <span className="text-[12px] font-bold uppercase text-white">{items?.nomeCompleto}</span>
                                       <span className="text-[12px] font-bold uppercase text-green-500 ml-4">{items.propina.length}</span>
                                       </div>
                                    ))
                                }

                             </div>
                        </div>

                 </div>

            
                 



                

                 </div>

    

        </div>
    )

}