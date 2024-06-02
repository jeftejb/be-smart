
import Image from "next/image";
import QRCodeGenerator from "../../../../../components/QRCodeGenerator";
import { fetchFuncionarioID } from "@/lib/actions/funcionarios.actions";

const getData = async (id:string)=>{
     const funcionario  =   await fetchFuncionarioID(id)
     return{data:funcionario}
}

export default async function page({params}:{params:{id:string}}){
  const id = params.id;
  console.log(id)
const dados:any = await getData(id)

    return(
        <div>

      <div className=" relative mt-10 w-full h-full flex flex-col justify-center items-center ">
    
            <div className="flex w-[80%] p-[2rem] bg-[#00303C] items-center mt-[85px] rounded-xl flex-col">
            <div className="mt-8 w-full flex flex-col justify-center items-center">
              <h1 className="font-bold text-[18px] uppercase mb-4">dados do funcionario</h1>
            </div>

                 <div className=" grid grid-cols-2 gap-2 p-2 m-4 h-96 w-[100%]  ">


         <div className=" relative h-full flex  p-4 rounded-3xl">
            <div className=" absolute w-[300px] h-[300px] flex">
                <Image
                src={dados?.data.sexo == "Masculino" ? "/assets/professor1.png" : "/assets/professora1.png" }
                alt="Professor"
                fill 
                className=" object-fill rounded-full "
                />
            </div>
         </div>



         <div className=" relative h-full flex border-2 border-gray-400 p-4 rounded-3xl">
                <div className="w-full flex flex-col gap-4">
                    <h1 className="text-center text-[14px] font-bold text-lenght-1">{dados?.data.nomeCompleto}</h1>
                      
                      <p className="font-bold text-[12px]">
                       {dados?.data.funcoes[0]}
                      </p>
                      <p className="font-bold text-[12px]">
                       {dados?.data.telefone}
                      </p>
                      <p className="font-bold text-[12px]">
                       {dados?.data.email}
                      </p>

                      <p className="font-bold text-[12px]">
                      Pagamentos Feitos : {"100.000,00kz"}
                      </p>
                     
                </div>
            </div>
                 </div>


                 <div className=" relative w-full h-full flex flex-row p-4 justify-between mx-20 ">

                    <div className="m-20 flex flex-col">
                        <h5>Gerar Qr</h5>
                        <div>
                        <QRCodeGenerator id={id}/>
                             </div>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>

                    <div className="m-20 flex flex-col ">
                        <h5>Verificar pagamento</h5>
                        <button className="p-2 rounded-lg bg-green-500">Botao</button>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>


                   
                 </div>



                 <div>
                    <div>
                        <h3>Actividades relacionadas ao professor</h3>
                    </div>
                 </div>


                 </div>

      </div>

        </div>
    )

}