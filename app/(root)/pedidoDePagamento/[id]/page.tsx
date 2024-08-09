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
            <div className="mt-8 w-[100%] flex flex-col justify-center items-center">
              <h1 className="font-bold text-[18px] uppercase mb-4">dados do pedido </h1>
            </div>

                 <div className="w-[100%] h-[100%]  items-center justify-center flex max-sm:flex-col max-sm:p-[.5rem] p-[2rem]">

                        <div className="w-[100%] flex  max-sm:w-[300px] items-center justify-center  p-4 rounded-3xl">
                        <ImageCalud
                        imagem={dados?.imagem}
                        />
                        </div>

                        <div className="w-[100%] max-sm:mt-[2rem] flex border-2 border-gray-400 p-4 rounded-3xl">
                            <div className="w-full flex flex-col gap-4">
                                <h1 className="text-center text-[14px] font-bold text-lenght-1">{dados?.idAluno?.nomeCompleto}</h1>
                                
                                <p className="font-bold text-[12px]">
                                Meses : {getMeses()}
                                </p>
                                <p className="font-bold text-[12px]">
                                Numero de estudante : {dados?.numeroEstudante}
                                </p>
                                <p className="font-bold text-[12px]">
                                Meses devendo : {dados?.mesesDivida}
                                </p>
                                  
                                <p className="font-bold text-[12px]">
                                Pagamentos Feitos : {dados?.meses.length * dados?.valor}
                                </p>
                                <p className="font-bold text-[12px]">
                                  {dados?.createDate.toDateString()}
                                </p>
                            </div>
                        </div>

                        {
                            dados?.morStudant?
                            <div className="w-[100%] max-sm:mt-[2rem] flex border-2 border-gray-400 p-4 rounded-3xl">
                            <div className="w-full flex flex-col gap-4">
                                <h1 className="text-center text-[14px] font-bold text-lenght-1">Mais estundates</h1>
                                
                                <p className="font-bold text-[12px]">
                                Meses : {getMeses()}
                                </p>
                                <p className="font-bold text-[12px]">
                                Numero de estudante : {dados?.numeroEstudante}
                                </p>
                                <p className="font-bold text-[12px]">
                                Meses devendo : {dados?.mesesDivida}
                                </p>
                                  
                                <p className="font-bold text-[12px]">
                                Pagamentos Feitos : {dados?.meses.length * dados?.valor}
                                </p>
                                <p className="font-bold text-[12px]">
                                  {dados?.createDate.toDateString()}
                                </p>
                            </div>
                        </div>
                        :
                        ''
                        }
                 </div>

                <BotaoPedido id={id}/>
                 



                

                 </div>

    

        </div>
    )

}