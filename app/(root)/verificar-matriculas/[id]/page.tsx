import Estudante from "@/components/Estudante";
import {fetchAlunosActived, getFullNumberStudentActived } from "@/lib/actions/alunos.actions";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

async function getData(perPage:number, page:number){

    try {
        const alunos = await fetchAlunosActived(perPage, page);
        const countAll = await getFullNumberStudentActived();
        const response = {alunos, countAll}
        return response
    } catch (error:any) {
        throw new Error(`Nao foi possivel buscar dados dos estudantes: ${error.message}`)
    }
    
   }

export default async function VerificarMatriculas({params, searchParams}:{params:{id:string}, searchParams:{page:string}}){
    const id = params.id;
    const perPage = 10
    let page = parseInt(searchParams.page, 10);
    page=!page|| page < 1 ? 1 :page;
    const data:any = await getData(perPage, page);
    const totalPages = Math.ceil(data.countAll / perPage);
    const prevPage = page - 1 > 0 ? page - 1 : 1;
    const nextPage = page + 1;
   
      const pageNumbers =[];
      const offsetNumber = 2;
      
      for( let i = page - offsetNumber; i <= page + offsetNumber ; i++){
        if(i>=1 && i<= totalPages){
            pageNumbers.push(i);
        }
      }

      console.log(data?.alunos)

    return(
        <div className="relative flex w-[100%] h-[100%] top-0 left-0 items-center justify-center">

            <div className="w-[80%] bg-[#00303C] mt-[200px] p-[12px] flex flex-col  gap-3 items-center  rounded-xl">
                <h1 className="w-full text-center text-[18px] text-[#6BA614] font-bold p-[20px]">Alunos </h1>
                <div className=" flex w-full  items-center h-[20px] justify-center ">
                <form action="" method="post" className="flex w-full max-sm:flex-col items-center justify-center ">
                    <input type="search" className="px-[30px] py-[4px] bg-transparent rounded-2xl border-2 border-green-500"  name="" id="" />
                    <button type="submit"  className="px-[14px] max-sm:px-[8px] max-sm:py-[1px] max-sm:mt-4 max-sm:w-[50%]  py-[4px] ml-3 border-2 border-green-600 rounded-3xl ">Pesquisar</button>
                </form>
                </div>

                <div className=" grid grid-cols-3 lg:gap-[4rem] md:gap-[1.5rem] max-sm:gap-[1rem] max-md:grid-cols-2 max-sm:grid-cols-1 w-full mt-[25px] px-8  items-center justify-center">
                    
                    {data.alunos.map((items:any, key:any)=>(
                        <Estudante items={JSON.stringify(items)} nivel={"baixo"} key={key}/>
                    ))}
                    
                </div>
                <div className=" flex  w-[100%] mt-[25px] items-center justify-center">
                    <div className="flex  border-[1px] gap-4 rounded-xl border-gray-300 p-4">

                 
                  {page ===1 ?(
                    <div className="opacity-60" aria-disabled="true">
                       <ChevronLeftIcon className="w-[24px] h-[24px]" />
                    </div>
                  ):(
                    <Link href={`?page=${prevPage}`}  aria-label="Previos Page">
                    <ChevronLeftIcon className="w-[24px] h-[24px]" />
                    </Link>
                  )}

                    {pageNumbers.map((item:any, key:any)=>(
                     <Link key={key} className={page == item?"bg-green-500 fw-bold px-2 rounded-md text-white":"hover:bg-green-600"} href={`?page=${item}`}>
                        {item}
                     </Link>
                    ))}


                     {page === totalPages?(
                    <div className="opacity-60" aria-disabled="true">
                    <ChevronRightIcon className="w-[24px] h-[24px]"/>
                    </div>
                  ):(
                    <Link href={`?page=${nextPage}`}  aria-label="Previos Page">
                  <ChevronRightIcon className="w-[24px] h-[24px]"/> 
                    </Link>
                  )}

                   </div>
                
                </div>
            </div>
           </div>
    )
}