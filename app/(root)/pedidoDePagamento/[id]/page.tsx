import ImageCalud from "@/components/ui/ImageCalud";
import { fetchPedido, updatePedido } from "@/lib/actions/alunos.actions";
import Image from "next/image";
import { meses } from "@/constants";
import BotaoPedido from "@/components/Botao/BotaoPedido";


const getData = async (id:string)=>{
    try {
        const funcionario  =   await fetchPedido(id)
    return{data:funcionario}
    } catch (error) {
        
    }
    

    }

export default async function Page({params}:{params:{id:string}}){

    const id:string = params.id;
const dado:any = await getData(id)
     const dados=dado?.data
 

     const getMeses = ()=>{
        let mesesExibir =[]
       for(let i=0 ; i < dados?.meses.length ; i++ ){
        const item = dados?.meses[i]
        const mesess = meses.filter((elemento:any) => elemento.valor == Number(item))
        mesess ? mesesExibir.push(mesess[0].mes): ''
       }
       const exibir = JSON.stringify(mesesExibir)
        return exibir
     }

    
   
    return(
        <div className="w-[100%] pt-[4rem] pb-4 flex items-center justify-center">

            <div className="flex flex-col w-[80%] p-[2rem] max-sm:p-[.5rem] bg-[#00303C] items-center mt-[85px] rounded-xl ">
            <div className="mt-8 w-[100%] flex gap-4 justify-center items-center">
              <h1 className="font-bold text-[18px] uppercase mb-4">dados do pedido </h1>
               <span className="font-bold text-[18px] mb-4">{dados?.createDate.toDateString()}</span>
            </div>

                 <div className="w-[100%] h-[100%]  items-center justify-center flex max-sm:flex-col max-sm:p-[.5rem] p-[2rem]">

                        <div className="w-[40%] flex  max-sm:w-[300px] items-center justify-center  p-4 rounded-3xl">
                        <ImageCalud
                        imagem={dados?.imagem}
                        />
                        </div>

                        <div className="w-[100%] max-sm:mt-[2rem] flex border-2 border-gray-400 p-4 rounded-3xl">
                            <div className="w-full flex flex-col gap-4">
                                <h1 className="text-center text-[14px] text-white  font-bold">Encarregado: {dados?.nomeEncarregado}</h1>
                                <div  className="flex flex-row justify-between gap-4">
                                    <span className="font-bold text-[12px] text-orange-500">
                                    Nome estudante
                                    </span >
                                    <span className="font-bold text-[12px] flex flex-row text-orange-500">
                                    Total Meses 
                                    </span>
                                    <span className="font-bold text-[12px] text-orange-500">
                                     Meses
                                    </span>
                                    
                                    <span className="font-bold text-[12px] text-orange-500">
                                    Valor Pago
                                    </span>

                                    </div>
                                {dados.morStudant.map((items:any, key:any)=>(
                                    <div key={key}  className="flex justify-between  flex-row gap-4">
                                        <span className="font-bold text-[12px] text-yellow-500">
                                    {items.nomeAluno}
                                    </span>
                                    <span className="font-bold text-[12px] text-blue-500">
                                     {items.meses.length}
                                    </span >
                                    <span className="font-bold text-[12px] flex gap-[2px] flex-row text-blue-500">
                                     {items?.mesesValor.map((item:any, key:any)=>(
                                        <span key={key}>{item}</span>
                                    ))}
                                    </span>
                                    
                                    
                                    <span className="font-bold text-[12px] text-green-500">
                                       {items.valorTotalPago}
                                    </span>

                                    </div>
                                ))}
                               
                               <div className="w-full flex justify-between items-center p-4 h-[1rem] rounded-xl bg-slate-950">
                                <span className="text-[14px] text-white font-bold uppercase">Total</span>
                                <span className="text-[14px] font-bold text-green-900">{dados.total}</span>
                               </div>
                              
                            </div>
                        </div>

                     
                        
                 </div>

                <BotaoPedido id={id}/>
                 



                

                 </div>

    

        </div>
    )

}