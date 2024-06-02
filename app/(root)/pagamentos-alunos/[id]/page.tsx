import Estudante from "@/components/Estudante";
import { fetchAlunosAll } from "@/lib/actions/alunos.actions";
export default async function PagamentoAlunos({params}:{params:{id:string}}){
    const id = params.id;
       const alunos = await fetchAlunosAll();
    
    return(
        <div className="relative flex w-[100%] h-[100%] top-0 left-0 items-center justify-center">

            <div className="w-[80%] bg-[#00303C] mt-[200px] h-[100vh] flex flex-col  gap-3 items-center rounded-xl">
                 <h1 className="w-full text-center text-[18px] text-[#6BA614] font-bold p-[20px]">Alunos</h1>
                <div className=" flex w-full  items-center h-[20px] justify-center ">
                <form action="" method="post" className="flex w-full max-sm:flex-col items-center justify-center ">
                    <input type="search" className="px-[30px] py-[4px] bg-transparent rounded-2xl border-2 border-green-500"  name="" id="" />
                    <button type="submit"  className="px-[14px] max-sm:px-[8px] max-sm:py-[1px] max-sm:mt-4 max-sm:w-[50%]  py-[4px] ml-3 border-2 border-green-600 rounded-3xl ">Pesquisar</button>
                </form>
                </div>

                <div className=" grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 w-full mt-[25px] px-8  items-center justify-center">
                    
                    {alunos.map((items:any, key:any)=>(
                        <Estudante items={JSON.stringify(items)} nivel={"älto"} key={key}/>
                    ))}
                    
                </div>
            </div>
           </div>
    )
}