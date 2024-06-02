import { fetchFuncionarios } from "@/lib/actions/funcionarios.actions";
import Image from "next/image";
import Link from "next/link";

const getData = async ()=>{
  const funcionarios = await fetchFuncionarios()

  return{data:funcionarios}
}

export default async function page({params}:{params:{id:string}}){
        
  const dados:any = await getData()

    return(

        <div className="w-full h-full relative items-center justify-center flex  flex-col mt-28 p-20 " >
          

             <div className="relative w-full h-full grid lg:grid-cols-1 md:grid-cols-1 max-sm:grid-cols-1 gap-2 m-4 p-10 bg-[#00303C] rounded-xl">

             <div className="relative w-full h-full justify-center items-center bg-[#002] rounded-lg ">
             <div className="w-full flex justify-center items-center p-2">
                <span className=" font-extralight text-2xl text-gray-300 mt-2">Funcionarios : {dados?.data.length} </span>
              </div>
            <div className="relative w-full h-[70vh] gap-4 flex flex-col p-20 bg-[#09090b] rounded-2xl overflow-y-scroll bg-scroll ">
                    
           

              {
                dados?.data.map((items:any, key:any)=>(

                  <div key={key} className="relative w-full h-[10vh] flex bg-black items-center  pr-0 mr-0 rounded-2xl hover:scale-110 duration-100 ">
                  <Link href={`/funcionarios/dados/${items._id}`} className="flex flex-row p-4" > 
                    <div className="relative rounded-full w-[40px] h-[40px] flex flex-row mr-2">
                      <Image
                      src={"/assets/professor.png"}
                      alt="interprete"
                      fill
                      className="object-cover rounded-full"
                      />
                    </div>
                      
    
                    <div className="flex flex-col">
                      <h1 className=" font-bold  text-[14px] uppercase">{items?.nomeCompleto}</h1>
                        <span className="flex ">
                        <p className="text-[12px] font-normal uppercase">{items?.funcoes[0]}</p>
                        <div className="relative rounded-full w-[10px] h-[10px] bg-green-500 ml-2 mt-2 "/>
                          </span>
                      </div>
                      </Link> 
                </div>
                ))
              }
             
             

             
             
           </div>
            </div>



             </div>
            


        </div>

    )

}