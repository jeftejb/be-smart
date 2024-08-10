import BFuncionario from "@/components/Botao/BFuncionario";
import { fetchFuncionarios } from "@/lib/actions/funcionarios.actions";
import Image from "next/image";
import Link from "next/link";

const getData = async ()=>{
    try{
    const funcionarios = await fetchFuncionarios()

    return{data:funcionarios}
    }catch(error){

    }
}

export default async function PagamentosFuncionarios({params}:{params:{id:string}}){
   
    const dados:any = await getData()
    const salario = 1500

  

    return(
        <section className="flex flex-col w-[100%] justify-center items-center h-[100%]">

            <div className="relative flex flex-col p-20 max-sm:p-8 w-[90%] mt-28 rounded-lg bg-[#00303C] items-center">
               <div className="w-[100%] flex flex-col items-start bg-black rounded-lg p-8">
               <h1 className=" text-[18px] mt-[14px] font-bold uppercase">Pagamento de funcionariuos</h1> 

               <div className="flex flex-row mt-2 gap-8">
                <p className="text-[12px] font-medium uppercase">Valor total a ser pago: <span className="text-yellow-600 font-bold">120.000,00Kz</span></p>
                <p  className="text-[12px] font-medium uppercase">Mês de pagamento : <span className="text-green-600 font-bold">Abril/2024</span></p>
                <p  className="text-[12px] font-medium uppercase ">Valor total já pago: <span className="text-yellow-300 font-bold">1.000.000,00Kz</span> </p>
               </div>
                </div> 

                <div className="w-full p-[2rem] flex flex-row items-center gap-4 justify-center">
               <button className=" bg-[#0582ca] text-[12px] uppercase p-[1rem] rounded-lg hover:bg-[#2b2d42] duration-75">
                Pagamento actual 
               </button>
               <button className=" bg-[#0582ca] text-[12px] uppercase p-[1rem] rounded-lg hover:bg-[#2b2d42] duration-75">
                Pagamento mês anterio
               </button>
               <button className=" bg-[#0582ca] text-[12px] uppercase p-[1rem] rounded-lg hover:bg-[#2b2d42] duration-75">
                Historico de pagamento
               </button>
               <Link href={`/calendarioSalarial/${params.id}`} className=" bg-[#0582ca] text-[12px] uppercase p-[1rem] rounded-lg hover:bg-[#2b2d42] duration-75">
                Calendario salarial 
               </Link>
                </div>

            <div className="relative w-[90%] max-sm:w-[100%] h-full flex flex-col p-8 items-center mt-7 bg-[#09090b] rounded-2xl gap-[8px] ">
                    
            <div className="w-[100%] flex justify-center items-center p-2">
                <span className=" font-extralight text-2xl text-gray-300 mt-2">Funcionarios </span>
              </div>

                {dados?.data.map((items:any, key:any)=>(
                        <div key={key} className="relative w-[90%] gap-4 h-[15vh] flex bg-black items-center p-4  pr-0 mr-0 rounded-2xl hover:scale-110 duration-100 ">
                        <Link href={`/funcionarios/dados/${items?._id}`} className="p-4" >
                            <div className="relative rounded-full w-[50px] h-[50px] flex flex-row mr-2">
                            <Image
                            src={"/assets/chi.jpg"}
                            alt="interprete"
                            fill
                            className="object-cover rounded-full"
                            />
                            </div>
                            <div className="flex flex-col">
                            
                            <h1 className=" font-bold text-[14px]">{items?.nomeCompleto}</h1>
                                <span className="flex ">
                                <p className="font-normal text-[12px] ">{items?.funcoes[0]}</p>
                                <div className="relative rounded-full w-[8px] h-[8px] bg-green-500 ml-2 mt-2 "/>
                                </span>
                            </div>
                            </Link> 

                            <div  className="flex flex-row gap-4">
                                <p className="text-[12px] font-normal uppercase" >Salario:<span className="font-bold text-yellow-600">{items?.presencas.length * salario}</span></p>
                                <p className="text-[12px] font-normal uppercase">Mês: <span className="font-bold text-yellow-600" >Maio</span></p>
                                <p className="text-[12px] font-normal uppercase">Desenho:<span className="font-bold text-yellow-600" >15%</span></p>
                                <p className="text-[12px] font-normal uppercase">Desconto:<span className="font-bold text-yellow-600" >500,00kz</span></p>
                            </div>

                            <div  className="flex flex-row gap-4">
                            <BFuncionario
                            id={JSON.stringify(items._id)}
                            nome={items.nomeCompleto}
                            mes="jknkcjsn"
                            valor="12.000,00"
                            />
                            </div>
                        </div>
                ))}
             
           </div>

            </div>
       
        </section>
    )
}